# SEO Checklist para CENDES Landing Page

## ✅ Implementado

### Meta Tags Básicos
- ✅ Title optimizado (60-70 caracteres)
- ✅ Meta description (150-160 caracteres)
- ✅ Meta keywords relevantes
- ✅ Canonical URL
- ✅ Language (es-MX)
- ✅ Robots meta tag

### Open Graph (Redes Sociales)
- ✅ og:title
- ✅ og:description
- ✅ og:image (1200x630px)
- ✅ og:url
- ✅ og:type
- ✅ og:locale

### Twitter Cards
- ✅ twitter:card
- ✅ twitter:title
- ✅ twitter:description
- ✅ twitter:image

### Datos Estructurados (Schema.org)
- ✅ Organization
- ✅ WebSite
- ✅ FAQPage

### Archivos SEO
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ manifest.json (PWA)

### Optimizaciones Técnicas
- ✅ Idioma español (es-MX)
- ✅ Preconnect fonts
- ✅ Headers de seguridad
- ✅ Compresión habilitada
- ✅ Imágenes optimizadas (AVIF/WebP)

---

## 📋 Tareas Pendientes (Para Hacer Manualmente)

### 1. Imagen Open Graph
**URGENTE**: Necesitas crear una imagen `cendes-og-image.jpg` en `/public/images/`
- Dimensiones: **1200 x 630 píxeles**
- Formato: JPG o PNG
- Contenido sugerido: Logo CENDES + texto "Protege a tu comunidad escolar"
- Herramienta recomendada: Canva, Figma, o Photoshop

### 2. Variable de Entorno
Crea un archivo `.env.local` con:
```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio-final.com
```

### 3. Google Search Console
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega tu propiedad (dominio)
3. Verifica propiedad (método recomendado: TXT DNS)
4. Envía el sitemap: `https://tu-dominio.com/sitemap.xml`

### 4. Google Analytics (Opcional)
1. Crea propiedad en [Google Analytics](https://analytics.google.com)
2. Obtén tu ID (G-XXXXXXXXXX)
3. Agrégalo a `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Instala el script en `_app.js` o usa [next-google-analytics](https://www.npmjs.com/package/nextjs-google-analytics)

### 5. Bing Webmaster Tools
1. Ve a [Bing Webmaster](https://www.bing.com/webmasters)
2. Agrega y verifica tu sitio
3. Envía el sitemap

### 6. Optimización de Imágenes
Asegúrate de que TODAS las imágenes en `/public/images/` tengan:
- ✅ Nombres descriptivos (ej: `cendes-ninos-leyendo.jpg` en vez de `img001.jpg`)
- ✅ Alt text descriptivo
- ✅ Formato WebP o AVIF cuando sea posible
- ✅ Tamaño optimizado (usa [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app))

### 7. Backlinks y Difusión
**Para posicionamiento rápido:**
- Registra el sitio en directorios mexicanos de educación
- Contacta blogs de educación para menciones
- Comparte en redes sociales de CENDES
- Pide a escuelas asociadas que enlacen tu sitio
- Crea contenido en Medium/LinkedIn apuntando al sitio

### 8. Performance Testing
Verifica el sitio en:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Objetivo: Score 90+ en mobile y desktop

### 9. Actualizar Sitemap
Cuando actualices el dominio final:
1. Edita `/public/sitemap.xml` con el dominio real
2. Edita `/public/robots.txt` con el dominio real
3. Actualiza `.env.local`

### 10. Rich Snippets Testing
Verifica que los datos estructurados funcionen:
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

---

## 🚀 Checklist de Lanzamiento

- [ ] Crear imagen OG (1200x630px)
- [ ] Configurar `.env.local` con dominio final
- [ ] Optimizar todas las imágenes
- [ ] Registrar en Google Search Console
- [ ] Enviar sitemap a Google
- [ ] Registrar en Bing Webmaster
- [ ] Configurar Analytics (opcional)
- [ ] Test de velocidad (90+ score)
- [ ] Verificar links externos (todos con https)
- [ ] Verificar responsive en móviles
- [ ] Test de Rich Snippets
- [ ] Compartir en redes sociales

---

## 🎯 Keywords Principales Implementadas

1. prevención violencia sexual escuelas
2. prevención bullying México
3. programas educativos CDMX
4. educación sexual infantil
5. CENDES
6. prevención acoso escolar
7. talleres escolares prevención
8. seguridad escolar México
9. capacitación docentes prevención
10. programas arte educación

---

## 📊 KPIs a Monitorear

1. **Posición en Google** para keywords principales (semana 1-4)
2. **Tráfico orgánico** (Google Analytics)
3. **Click-through rate (CTR)** en Search Console
4. **Impresiones** en resultados de búsqueda
5. **Conversiones** (clicks en botón de registro)
6. **Tiempo en página** y **bounce rate**

---

## 💡 Tips para Posicionamiento Rápido

1. **Contenido único**: El texto debe ser 100% original
2. **Velocidad**: Mantén el sitio rápido (<2 segundos)
3. **Mobile-first**: Google prioriza versión móvil
4. **Link building**: Conseguir enlaces de calidad
5. **Actualización**: Modifica contenido cada 2-3 semanas
6. **Local SEO**: Registra en Google My Business si aplica
7. **Redes sociales**: Comparte constantemente

---

## 🔗 Recursos Útiles

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster](https://www.bing.com/webmasters)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema.org Validator](https://validator.schema.org/)
- [TinyPNG - Optimización Imágenes](https://tinypng.com)
- [Canva - Crear OG Image](https://www.canva.com)

---

**Última actualización**: 20 de enero 2026
