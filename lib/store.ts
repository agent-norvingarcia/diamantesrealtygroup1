import { mockProfile, mockProperties } from './mock-data';
import { Profile, Property } from './types';

// In-memory store. Reemplazar por Supabase/Firebase posteriormente.
const db = {
  properties: [...mockProperties],
  profile: { ...mockProfile }
};

export function getProperties() {
  return db.properties;
}

export function getPropertyById(id: string) {
  return db.properties.find((property) => property.id === id);
}

export function upsertProperty(property: Property) {
  const index = db.properties.findIndex((item) => item.id === property.id);
  if (index >= 0) {
    db.properties[index] = property;
  } else {
    db.properties.unshift(property);
  }
  return property;
}

export function deleteProperty(id: string) {
  db.properties = db.properties.filter((item) => item.id !== id);
}

export function getProfile() {
  return db.profile;
}

export function updateProfile(profile: Profile) {
  db.profile = profile;
  return db.profile;
}
