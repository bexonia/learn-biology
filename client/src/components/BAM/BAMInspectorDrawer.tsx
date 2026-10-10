import React from 'react';
import type { BAMComponentData } from '../../types/biology';

interface BAMInspectorDrawerProps {
  data: BAMComponentData | null;
  isNarrating: boolean;
  onNarrate: () => void;
  onFocus: () => void;
  activeKey?: string;
  onSelectPart?: (key: string) => void;
  storyStep?: number;
  onSelectStoryStep?: (step: number) => void;
  onStartStoryTrace?: () => void;
  onStopStoryTrace?: () => void;
}

export const BAMInspectorDrawer: React.FC<BAMInspectorDrawerProps> = ({
  data,
  isNarrating,
  onNarrate,
  onFocus,
  activeKey,
  onSelectPart,
  storyStep = 0,
  onSelectStoryStep,
  onStartStoryTrace,
  onStopStoryTrace
}) => {
  if (!data) return null;

  const pdbBadges = data.pdb
    ? data.pdb.replace(/PDB:\s*/i, '').replace(/PDB\s*/i, '').split(',').map((p) => p.trim())
    : [];

  return (
    <aside id="bam-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
      <div className="motor-insp-header">
        <span className="motor-insp-badge" id="bam-comp-badge">
          {data.badge || (data.name ? data.name.toUpperCase() : 'BAM COMPONENT')}
        </span>
        <h2 className="motor-insp-title" id="bam-comp-title">{data.name}</h2>
        <div className="motor-insp-dims" id="bam-comp-dims">{data.dims || ''}</div>
      </div>

      <div className="motor-tts-row">
        <button
          className={`motor-tts-btn ${isNarrating ? 'playing' : ''}`}
          onClick={onNarrate}
          title="Narrate component information using Kokoro-82M Neural TTS"
        >
          {isNarrating ? '⏹ Stop' : '🔊 Read Aloud'}
        </button>
        <span className="motor-pronounce">
          🗣️ [BAM-kohm-plehks oh-tər mehm-brayn ihn-ser-tays]
        </span>
      </div>

      <div className="motor-insp-body">
        {/* 1. 5-Stage Explanatory Trace Card */}
        <div className="motor-insp-block" style={{ borderLeft: '3px solid #0077B6', background: 'rgba(0, 119, 182, 0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#0077B6', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              🎬 5-Stage Explanatory Trace
            </span>
            <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: storyStep > 0 ? '#0077B6' : '#E2DACD', color: storyStep > 0 ? '#FFFFFF' : '#4A5568' }}>
              {storyStep > 0 ? `STAGE ${storyStep} OF 5` : 'READY'}
            </span>
          </div>
          <p style={{ fontSize: '10.5px', color: '#4A5568', margin: '0 0 8px 0', lineHeight: 1.35 }}>
            Follow the biophysical sequence of outer membrane protein biogenesis: chaperone handover → POTRA gating → lateral seam unzipping → beta-hairpin insertion → barrel circularization:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { num: 1, title: '1. Chaperone Client Handover', desc: 'SurA chaperone delivers unfolded OMP to POTRA 1–2', col: '#F77F00' },
              { num: 2, title: '2. POTRA Conformational Gating', desc: 'POTRA 1–5 rearrange, coordinated by BamD clamp', col: '#E76F51' },
              { num: 3, title: '3. Lateral Seam Destabilization', desc: 'Strand β16 unzips from β1, opening 1.6 nm gap into bilayer', col: '#00F5D4' },
              { num: 4, title: '4. Beta-Hairpin Membrane Insertion', desc: 'Nascent β-hairpin enters seam, pairing with β16 template', col: '#FFE066' },
              { num: 5, title: '5. Barrel Budding & OM Integration', desc: '16-stranded barrel circularizes and releases without ATP', col: '#0077B6' }
            ].map((step) => {
              const isActive = storyStep === step.num;
              return (
                <div
                  key={step.num}
                  onClick={() => onSelectStoryStep && onSelectStoryStep(step.num)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '5px 8px',
                    borderRadius: '6px',
                    background: isActive ? 'rgba(0, 119, 182, 0.16)' : 'rgba(255, 255, 255, 0.55)',
                    border: isActive ? `1.5px solid ${step.col}` : '1px solid rgba(226, 218, 205, 0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: isActive ? step.col : '#E2DACD',
                    color: isActive ? '#FFFFFF' : '#4A5568',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: 800,
                    flexShrink: 0
                  }}>
                    {step.num}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '11px', fontWeight: isActive ? 700 : 600, color: isActive ? step.col : '#2D3748', lineHeight: 1.2 }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: '9.5px', color: '#718096', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '8px', display: 'flex', gap: '6px' }}>
            {storyStep === 0 ? (
              <button
                onClick={onStartStoryTrace}
                style={{
                  flex: 1,
                  padding: '6px 10px',
                  background: '#0077B6',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                ▶ Walkthrough (5-Stage Trace)
              </button>
            ) : (
              <>
                <button
                  onClick={onStopStoryTrace}
                  style={{
                    flex: 1,
                    padding: '6px 8px',
                    background: '#EF4444',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  ⏹ Reset Trace
                </button>
                <button
                  onClick={() => onSelectStoryStep && onSelectStoryStep(Math.min(5, storyStep + 1))}
                  style={{
                    flex: 1,
                    padding: '6px 8px',
                    background: '#0077B6',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Next ❯
                </button>
              </>
            )}
          </div>
        </div>

        {/* 2. Biochemical Circuit & Flux I/O Card */}
        <div className="motor-insp-block" style={{ borderLeft: '3px solid #10B981', background: 'rgba(16, 185, 129, 0.04)' }}>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#047857', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            ⚡ Biochemical Circuit &amp; Flux I/O
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '10.5px' }}>
            <div>
              <span style={{ fontWeight: 700, color: '#374151' }}>UPSTREAM SOURCE</span>
              <div style={{ color: '#4B5563', lineHeight: 1.3 }}>
                Periplasmic Chaperones <strong>SurA (1M5Y)</strong>, <strong>Skp (1SG2)</strong>, and <strong>DegP (1KY9)</strong> delivering nascent unfolded OMPs from SecYEG.
              </div>
            </div>
            <div>
              <span style={{ fontWeight: 700, color: '#374151' }}>MOLECULAR INPUTS</span>
              <div style={{ color: '#4B5563', lineHeight: 1.3 }}>
                Unfolded Outer Membrane Precursor (pro-OmpF, pro-OmpA, pro-LptD) + Outer Membrane Lipids (LPS + Phospholipids).
              </div>
            </div>
            <div>
              <span style={{ fontWeight: 700, color: '#374151' }}>MOLECULAR OUTPUTS</span>
              <div style={{ color: '#4B5563', lineHeight: 1.3 }}>
                Folded, functional transmembrane β-barrel Porin integrated in Outer Membrane + Released Chaperone.
              </div>
            </div>
            <div>
              <span style={{ fontWeight: 700, color: '#374151' }}>DOWNSTREAM TARGETS</span>
              <div style={{ color: '#4B5563', lineHeight: 1.3 }}>
                Outer membrane permeability porins (<strong>OmpF 2OMF</strong>, <strong>TolC 1EK9</strong>) and trans-envelope LPS bridge (<strong>LptD 4Q35</strong>).
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '2px', paddingTop: '4px', borderTop: '1px solid rgba(226, 218, 205, 0.5)' }}>
              <div>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#6B7280' }}>ENERGY CURRENCY</span>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#10B981' }}>ATP-Independent (ΔG &lt; 0)</div>
              </div>
              <div>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#6B7280' }}>TURNOVER RATE</span>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#0077B6' }}>~0.5–2.0 min⁻¹</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Subunit Color Taxonomy */}
        <div className="motor-insp-block">
          <span className="motor-block-label">SUBUNIT ROLES &amp; COLOR TAXONOMY</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '10.5px' }}>
            {[
              { id: 'bama_barrel', name: 'BamA Transmembrane Barrel', desc: '16-stranded transmembrane β-barrel (strands 1–15)', col: '#0077B6' },
              { id: 'lateral_seam', name: 'Dynamic Lateral Seam', desc: 'Strand β16 unzipping from β1 directly into lipid bilayer', col: '#00F5D4' },
              { id: 'bama_potra', name: 'BamA POTRA Domains (1–5)', desc: 'Periplasmic chaperone receptor and gating hinge', col: '#F77F00' },
              { id: 'bamb_scaffold', name: 'BamB Propeller Scaffold', desc: '8-bladed β-propeller lipoprotein stabilizing POTRA 2–3', col: '#2EC4B6' },
              { id: 'bamc_lipoprotein', name: 'BamC Lipoprotein', desc: 'Periplasmic lipoprotein with helix-grip motifs', col: '#9D4EDD' },
              { id: 'bamd_clamp', name: 'BamD Essential Clamp', desc: '5 TPR-motif bridge linking POTRA domains to barrel base', col: '#E76F51' },
              { id: 'bame_clip', name: 'BamE Membrane Clip', desc: 'Smallest lipoprotein latching BamD to inner leaflet', col: '#06D6A0' },
              { id: 'client_omp', name: 'Client β-Hairpin Substrate', desc: 'Nascent polypeptide inserting into the open seam', col: '#FFE066' }
            ].map((sub) => (
              <div
                key={sub.id}
                onClick={() => onSelectPart && onSelectPart(sub.id)}
                style={{
                  borderLeft: `3px solid ${sub.col}`,
                  paddingLeft: '6px',
                  background: activeKey === sub.id ? 'rgba(0, 119, 182, 0.15)' : 'rgba(255, 255, 255, 0.45)',
                  padding: '3px 6px',
                  borderRadius: '0 4px 4px 0',
                  cursor: onSelectPart ? 'pointer' : 'default',
                  transition: 'background 0.2s ease'
                }}
              >
                <div style={{ fontWeight: 700, color: sub.col === '#00F5D4' ? '#0F766E' : sub.col === '#FFE066' ? '#B45309' : sub.col, fontSize: '11px' }}>
                  {sub.name}
                </div>
                <div style={{ color: '#6B7280', fontSize: '9.5px' }}>{sub.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Biological Role Description */}
        <div className="motor-insp-block">
          <span className="motor-block-label">PHYSIOLOGICAL MECHANISM</span>
          <p className="motor-insp-desc" id="bam-comp-desc">
            {data.desc || ''}
          </p>
          {data.role && (
            <p className="motor-insp-role" id="bam-comp-role" style={{ marginTop: '6px', fontSize: '11px', color: '#2B4A3E' }}>
              <strong>Role:</strong> {data.role}
            </p>
          )}
        </div>

        {/* 5. Structural Biology Citations */}
        {pdbBadges.length > 0 && (
          <div className="motor-insp-block">
            <span className="motor-block-label">RCSB PDB EXPERIMENTAL REPOSITORY</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
              {pdbBadges.map((pdb) => (
                <a
                  key={pdb}
                  href={`https://www.rcsb.org/structure/${pdb}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="motor-pdb-badge"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: '#EDF2F7',
                    color: '#2B6CB0',
                    fontSize: '11px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    border: '1px solid #CBD5E0'
                  }}
                >
                  🔗 PDB: {pdb}
                </a>
              ))}
            </div>
          </div>
        )}

        <button className="motor-focus-btn" onClick={onFocus} style={{ width: '100%', marginTop: '4px' }}>
          🎯 Frame Selected in Viewport
        </button>
      </div>
    </aside>
  );
};
