FROM node:22-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./
RUN npm ci
COPY src/ ./src/
RUN npm run typecheck && npm run build

FROM nginx:1.27-alpine

RUN apk add --no-cache nodejs

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
COPY --from=builder /app/dist/ /usr/share/nginx/html/dist/
COPY --from=builder /app/dist/server.js /app/server.js

RUN cp /usr/share/nginx/html/cell_explorer.html /usr/share/nginx/html/index.html && \
    chmod -R a+rX /usr/share/nginx/html

EXPOSE 8080
CMD ["sh", "-c", "node /app/server.js & nginx -g 'daemon off;'"]
