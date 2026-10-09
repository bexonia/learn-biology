// WebAssembly Orbit Dynamics & Biological Landmark Projection Engine
// Compiled with rustc --target wasm32-unknown-unknown

static mut CAM_THETA: f32 = 0.52;
static mut CAM_PHI: f32 = 1.08;
static mut CAM_RADIUS: f32 = 14.5;

static mut VEL_THETA: f32 = 0.0;
static mut VEL_PHI: f32 = 0.0;
static mut VEL_RADIUS: f32 = 0.0;

static mut TARGET_X: f32 = -0.5;
static mut TARGET_Y: f32 = 0.0;
static mut TARGET_Z: f32 = 0.0;

static mut OUT_CAM_X: f32 = 0.0;
static mut OUT_CAM_Y: f32 = 0.0;
static mut OUT_CAM_Z: f32 = 0.0;

static mut OUT_PROJ_X: f32 = 0.0;
static mut OUT_PROJ_Y: f32 = 0.0;
static mut OUT_PROJ_VISIBLE: i32 = 1;

#[no_mangle]
pub extern "C" fn init_engine(theta: f32, phi: f32, radius: f32, tx: f32, ty: f32, tz: f32) {
    unsafe {
        CAM_THETA = theta;
        CAM_PHI = phi.clamp(0.15, 3.0);
        CAM_RADIUS = radius.clamp(4.0, 30.0);
        TARGET_X = tx;
        TARGET_Y = ty;
        TARGET_Z = tz;
        compute_camera_cartesian();
    }
}

#[no_mangle]
pub extern "C" fn add_orbit_impulse(d_theta: f32, d_phi: f32) {
    unsafe {
        VEL_THETA += d_theta;
        VEL_PHI += d_phi;
    }
}

#[no_mangle]
pub extern "C" fn add_zoom_impulse(d_radius: f32) {
    unsafe {
        VEL_RADIUS += d_radius;
    }
}

#[no_mangle]
pub extern "C" fn step_physics(damping: f32, auto_rotate: i32) {
    unsafe {
        if auto_rotate != 0 {
            CAM_THETA += 0.0035;
        }

        CAM_THETA += VEL_THETA;
        CAM_PHI += VEL_PHI;
        CAM_RADIUS += VEL_RADIUS;

        // Clamping
        CAM_PHI = CAM_PHI.clamp(0.15, 3.0);
        CAM_RADIUS = CAM_RADIUS.clamp(4.0, 18.0);

        // Damping
        VEL_THETA *= damping;
        VEL_PHI *= damping;
        VEL_RADIUS *= damping;

        compute_camera_cartesian();
    }
}

unsafe fn compute_camera_cartesian() {
    let sin_phi = CAM_PHI.sin();
    let cos_phi = CAM_PHI.cos();
    let sin_theta = CAM_THETA.sin();
    let cos_theta = CAM_THETA.cos();

    OUT_CAM_X = TARGET_X + CAM_RADIUS * sin_phi * sin_theta;
    OUT_CAM_Y = TARGET_Y + CAM_RADIUS * cos_phi;
    OUT_CAM_Z = TARGET_Z + CAM_RADIUS * sin_phi * cos_theta;
}

#[no_mangle]
pub extern "C" fn get_cam_x() -> f32 { unsafe { OUT_CAM_X } }
#[no_mangle]
pub extern "C" fn get_cam_y() -> f32 { unsafe { OUT_CAM_Y } }
#[no_mangle]
pub extern "C" fn get_cam_z() -> f32 { unsafe { OUT_CAM_Z } }

#[no_mangle]
pub extern "C" fn get_target_x() -> f32 { unsafe { TARGET_X } }
#[no_mangle]
pub extern "C" fn get_target_y() -> f32 { unsafe { TARGET_Y } }
#[no_mangle]
pub extern "C" fn get_target_z() -> f32 { unsafe { TARGET_Z } }

#[no_mangle]
pub extern "C" fn compute_flagellum_sine(s: f32, time: f32, freq: f32, amp: f32, phase: f32) -> f32 {
    let growth = 0.35 + 0.65 * s;
    amp * growth * ((s * freq * 3.14159265 - time * 6.2831853 + phase).sin())
}

#[no_mangle]
pub extern "C" fn project_landmark(
    world_x: f32, world_y: f32, world_z: f32,
    screen_w: f32, screen_h: f32,
    cam_x: f32, cam_y: f32, cam_z: f32,
    tx: f32, ty: f32, tz: f32,
    fov_rad: f32
) -> i32 {
    // Forward vector (target - cam)
    let mut f_x = tx - cam_x;
    let mut f_y = ty - cam_y;
    let mut f_z = tz - cam_z;
    let f_len = (f_x * f_x + f_y * f_y + f_z * f_z).sqrt();
    if f_len < 0.0001 { return 0; }
    f_x /= f_len; f_y /= f_len; f_z /= f_len;

    // Up vector (0, 1, 0)
    let up_x = 0.0; let up_y = 1.0; let up_z = 0.0;
    
    // Right vector (forward x up)
    let mut r_x = f_y * up_z - f_z * up_y;
    let mut r_y = f_z * up_x - f_x * up_z;
    let mut r_z = f_x * up_y - f_y * up_x;
    let r_len = (r_x * r_x + r_y * r_y + r_z * r_z).sqrt();
    if r_len < 0.0001 { return 0; }
    r_x /= r_len; r_y /= r_len; r_z /= r_len;

    // True up (right x forward)
    let u_x = r_y * f_z - r_z * f_y;
    let u_y = r_z * f_x - r_x * f_z;
    let u_z = r_x * f_y - r_y * f_x;

    // Vector from cam to point
    let d_x = world_x - cam_x;
    let d_y = world_y - cam_y;
    let d_z = world_z - cam_z;

    // View coordinates
    let view_z = d_x * f_x + d_y * f_y + d_z * f_z;
    if view_z <= 0.1 {
        unsafe { OUT_PROJ_VISIBLE = 0; }
        return 0; // Behind camera
    }

    let view_x = d_x * r_x + d_y * r_y + d_z * r_z;
    let view_y = d_x * u_x + d_y * u_y + d_z * u_z;

    let tan_half_fov = (fov_rad * 0.5).tan();
    let aspect = screen_w / screen_h;

    let ndc_x = view_x / (view_z * tan_half_fov * aspect);
    let ndc_y = view_y / (view_z * tan_half_fov);

    let screen_x = (ndc_x * 0.5 + 0.5) * screen_w;
    let screen_y = (-ndc_y * 0.5 + 0.5) * screen_h;

    unsafe {
        OUT_PROJ_X = screen_x;
        OUT_PROJ_Y = screen_y;
        OUT_PROJ_VISIBLE = 1;
    }
    1
}

#[no_mangle]
pub extern "C" fn get_proj_x() -> f32 { unsafe { OUT_PROJ_X } }
#[no_mangle]
pub extern "C" fn get_proj_y() -> f32 { unsafe { OUT_PROJ_Y } }
#[no_mangle]
pub extern "C" fn get_proj_visible() -> i32 { unsafe { OUT_PROJ_VISIBLE } }
