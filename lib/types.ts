export type SocialLinks = {
  instagram: string;
  facebook: string;
  whatsapp: string;
  email: string;
};

export type Property = {
  id: string;
  titulo: string;
  descripcion: string;
  precio: number;
  ubicacion: string;
  latitud: number;
  longitud: number;
  imagenes: string[];
  tipo: string;
  fecha: string;
};

export type Profile = {
  nombre: string;
  foto: string;
  descripcion: string;
  experiencia: string;
  redes: SocialLinks;
};
