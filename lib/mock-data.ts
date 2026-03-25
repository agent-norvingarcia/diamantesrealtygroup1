import { Profile, Property } from './types';

export const mockProperties: Property[] = [
  {
    id: '1',
    titulo: 'Penthouse Vista Panorámica',
    descripcion: 'Penthouse de lujo con acabados premium, terraza privada y acceso exclusivo.',
    precio: 850000,
    ubicacion: 'Santo Domingo, Piantini',
    latitud: 18.4726,
    longitud: -69.9394,
    imagenes: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
    ],
    tipo: 'Apartamento',
    fecha: '2026-01-12'
  },
  {
    id: '2',
    titulo: 'Villa Familiar con Jardín',
    descripcion: 'Espaciosa villa con piscina, jardín y área social para familia moderna.',
    precio: 1200000,
    ubicacion: 'Santiago, Cerro Hermoso',
    latitud: 19.4638,
    longitud: -70.695,
    imagenes: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde'
    ],
    tipo: 'Casa',
    fecha: '2026-02-03'
  },
  {
    id: '3',
    titulo: 'Terreno Estratégico Comercial',
    descripcion: 'Terreno ideal para inversión inmobiliaria en zona de alto crecimiento.',
    precio: 430000,
    ubicacion: 'Punta Cana, Bávaro',
    latitud: 18.6766,
    longitud: -68.412,
    imagenes: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef'],
    tipo: 'Terreno',
    fecha: '2026-03-10'
  }
];

export const mockProfile: Profile = {
  nombre: 'Norvin Garcia',
  foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
  descripcion:
    'Asesor inmobiliario especializado en propiedades premium, inversiones estratégicas y acompañamiento integral para compradores y vendedores.',
  experiencia: 'Más de 10 años gestionando operaciones inmobiliarias de alto valor en República Dominicana.',
  redes: {
    instagram: 'https://instagram.com/norvingarcia',
    facebook: 'https://facebook.com/norvingarcia',
    whatsapp: 'https://wa.me/18095551234',
    email: 'mailto:norvin@example.com'
  }
};
