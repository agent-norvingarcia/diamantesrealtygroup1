# Norvin Garcia Realty Web

Proyecto web profesional para un agente inmobiliario construido con **Next.js App Router**, **Tailwind CSS**, **Framer Motion** y estructura lista para conectar **Supabase o Firebase**.

## Características

- Sitio premium y responsive.
- Páginas independientes: inicio, propiedades, detalle, mapa, perfil y contacto.
- Panel admin con login y dashboard CRUD básico.
- API routes para propiedades y perfil.
- Mapa interactivo con Leaflet.
- SEO base y arquitectura escalable.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3000`

## Variables de entorno opcionales

Crea `.env.local`:

```env
ADMIN_EMAIL=admin@norvin.com
ADMIN_PASSWORD=Admin123*
```

## Estructura

- `app/` rutas App Router y API routes
- `components/` componentes reutilizables
- `lib/` tipos, helpers y mock data
- `public/` assets estáticos

## Deploy

Listo para Vercel.
