FROM nginx:1.27-alpine

LABEL org.opencontainers.image.source="https://github.com/bexonia/learn-biology" \
      org.opencontainers.image.description="BEXONIA 3D Cell & Virus Explorer (learn.bexonia.com)" \
      org.opencontainers.image.licenses="MIT"

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY cell_explorer.html \
     eukaryotic_cell_3d.html \
     prokaryotic_cell_3d.html \
     dna_styles.html \
     animal_cell_realistic.html \
     plant_cell_realistic.html \
     fungal_cell_realistic.html \
     prokaryote_cell_realistic.html \
     molecules_preview.html \
     bacteriophage_realistic.html \
     hiv_realistic.html \
     coronavirus_realistic.html \
     adenovirus_realistic.html \
     tmv_realistic.html \
     robots.txt \
     sitemap.xml \
     /usr/share/nginx/html/

COPY screenshots/ /usr/share/nginx/html/screenshots/
COPY tours/ /usr/share/nginx/html/tours/

RUN cp /usr/share/nginx/html/cell_explorer.html /usr/share/nginx/html/index.html && \
    chmod -R a+rX /usr/share/nginx/html

EXPOSE 8080
