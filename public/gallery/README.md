# 📸 Galería de Fotos - Trail Camp

## 🚀 Cómo agregar fotos a la galería

### Método Simple (Recomendado)
1. **Arrastra y suelta** tus fotos en esta carpeta (`public/gallery/`)
2. **Edita** el archivo `src/utils/galleryImages.ts` 
3. **Agrega** una entrada en el array `localGalleryImages`:

```javascript
{
  src: '/gallery/nombre-de-tu-foto.jpg',
  alt: 'Descripción de la foto',
  category: 'Categoría' // Trail Running, Grupo, Paisaje, etc.
}
```

### Formatos Soportados
- ✅ JPG, JPEG
- ✅ PNG
- ✅ WebP

### Nombres Recomendados
- `trail-corriendo-montana.jpg`
- `grupo-campamento-2024.png`
- `paisaje-sendero-amanecer.jpg`
- `entrenamiento-tecnica.jpg`

## 🎯 Categorías Disponibles
- **Trail Running** - Fotos de corredores en acción
- **Grupo** - Fotos grupales del campamento
- **Paisaje** - Vistas y senderos
- **Entrenamiento** - Sesiones de práctica
- **Técnica** - Demostraciones de técnica
- **Naturaleza** - Flora y fauna del sendero

## 📋 Recomendaciones Técnicas
- **Tamaño**: Máximo 2MB por imagen
- **Resolución**: 1200x800px óptimo
- **Orientación**: Horizontal y vertical funcionan
- **Compresión**: JPG al 85% de calidad

## 🔧 Ubicación de Archivos
- **Imágenes**: `public/gallery/`
- **Configuración**: `src/utils/galleryImages.ts`

## ✨ Ejemplo de Uso

```javascript
// En src/utils/galleryImages.ts
export const localGalleryImages = [
  {
    src: '/gallery/mi-nueva-foto.jpg',
    alt: 'Descripción detallada de la foto',
    category: 'Trail Running'
  },
  // ... más fotos
];
```

¡Las fotos aparecerán automáticamente en la galería web!