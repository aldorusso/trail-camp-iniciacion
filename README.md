# Trail Camp Iniciación 🏃‍♂️⛰️

Una web moderna para programas de trail running con diseño inspirado en Nike, construida con Next.js y Docker.

## ✨ Características

- **Diseño Nike-inspired**: Colores, tipografía y layout minimalista y moderno
- **Hero Section impactante**: Con estadísticas y CTAs prominentes
- **Programas personalizados**: 3 niveles (Básico, Intermedio, Avanzado)
- **Responsive Design**: Mobile-first con breakpoints optimizados
- **Animaciones sutiles**: Fade-ups y slides para mejor UX
- **Docker Ready**: Configuración completa para desarrollo y producción

## 🎨 Paleta de Colores

```css
/* Colores principales */
--primary-500: #f97316  /* Naranja trail */
--dark-950: #111111     /* Negro Nike */
--trail-500: #22c55e    /* Verde naturaleza */
```

## 🚀 Inicio Rápido

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Visita `http://localhost:3000` para ver la aplicación.

### Con Docker

```bash
# Desarrollo
docker-compose --profile dev up

# Producción
docker-compose up
```

## 🛠️ Tecnologías

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Componentes**: Lucide React (iconos)
- **Tipografía**: Inter (Google Fonts)
- **Containerización**: Docker + Docker Compose
- **Styling**: CSS personalizado con animaciones

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css          # Estilos globales y animaciones
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página de inicio
├── components/
│   ├── ui/                  # Componentes reutilizables
│   │   ├── Button.tsx       # Botón estilo Nike
│   │   ├── Card.tsx         # Cards con hover effects
│   │   └── Badge.tsx        # Badges para etiquetas
│   ├── HeroSection.tsx      # Sección hero principal
│   └── ProgramsSection.tsx  # Sección de programas
└── lib/
    └── utils.ts             # Utilidades (clsx, twMerge)
```

## 🎯 Componentes Principales

### HeroSection
- Imagen de fondo con overlay
- Estadísticas animadas (500+ runners, 15 rutas, 98% satisfacción)
- CTAs prominentes con efectos hover
- Scroll indicator animado

### ProgramsSection
- 3 programas con diferentes niveles
- Cards con hover effects
- Pricing y características
- CTA section con call-to-action

### Componentes UI
- **Button**: 4 variantes, 4 tamaños, animaciones
- **Card**: Hover effects y estructura flexible
- **Badge**: Múltiples variantes para etiquetas

## 🎨 Sistema de Diseño

### Colores
- **Primary**: Naranja trail (#f97316)
- **Dark**: Negro Nike (#111111)
- **Trail**: Verde naturaleza (#22c55e)
- **Gray**: Escalas de grises para texto

### Tipografía
- **Font Family**: Inter (similar a Nike's Helvetica)
- **Tamaños**: Display (4.5rem - 3rem), Headline (2.25rem - 1.875rem)
- **Pesos**: 400, 500, 600, 700, 800, 900

### Animaciones
- **fadeUp**: Entrada desde abajo con fade
- **slideInRight**: Entrada desde la derecha
- **heroZoom**: Zoom sutil para imágenes de fondo

## 🐳 Docker

### Archivos incluidos:
- `Dockerfile`: Imagen optimizada de producción
- `Dockerfile.dev`: Imagen para desarrollo
- `docker-compose.yml`: Orquestación completa

### Comandos Docker:

```bash
# Desarrollo (con hot reload)
docker-compose --profile dev up

# Producción
docker-compose up

# Construcción manual
docker build -t trail-camp .
```

## 📱 Responsive Design

Breakpoints optimizados:
- **xs**: 320px (móviles pequeños)
- **sm**: 640px (móviles)
- **md**: 960px (tablets)
- **lg**: 1200px (desktop)
- **xl**: 1920px (desktop grande)

## 🎯 Próximas Mejoras

- [ ] Navegación/Header con menú hamburguesa
- [ ] Footer con enlaces e información
- [ ] Sección de testimonios
- [ ] Galería de rutas con mapas
- [ ] Formulario de inscripción
- [ ] Blog/artículos de trail running
- [ ] Integración con APIs de rutas

## 🤝 Contribuir

1. Fork del proyecto
2. Crear una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

---

**Trail Camp Iniciación** - Descubre tu trail interior 🏔️
