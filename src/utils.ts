import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Función utilitaria para combinar clases de CSS de manera inteligente
 * Combina clsx y tailwind-merge para eliminar duplicados y conflictos
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Función para formatear precios en formato de moneda
 */
export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
  }).format(price);
}

/**
 * Función para generar IDs únicos
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Función para validar email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Función para validar número de WhatsApp
 */
export function isValidWhatsApp(phone: string): boolean {
  // Elimina espacios, guiones y paréntesis
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  // Verifica que sea un número válido
  return /^\+?[1-9]\d{1,14}$/.test(cleanPhone);
}
