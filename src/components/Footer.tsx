import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido principal del footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Información de la empresa */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <h3 className="text-2xl text-gray-900 mb-3">Tuwebdeventas</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  Especializados en páginas web para comercios locales. 
                  Tu presencia online lista para vender en máximo 7 días, sin complicaciones técnicas.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">WhatsApp</div>
                    <div className="text-gray-900">+54 9 357 260-9036</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-gray-900">leosmillovich@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Ubicación</div>
                    <div className="text-gray-900">Río Segundo, Córdoba</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Horarios</div>
                    <div className="text-gray-900">Lun a Vie 9:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div className="lg:col-span-3">
              <h4 className="text-lg text-gray-900 mb-6">Nuestros servicios</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#packages" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group">
                    <span>Páginas web Express</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
                <li>
                  <a href="#packages" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group">
                    <span>Páginas web Pro</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
                <li>
                  <a href="#packages" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group">
                    <span>Páginas web Premium</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
                <li>
                  <span className="text-gray-600">Configuración de dominio</span>
                </li>
                <li>
                  <span className="text-gray-600">Copy optimizado</span>
                </li>
                <li>
                  <span className="text-gray-600">Analytics y métricas</span>
                </li>
                <li>
                  <span className="text-gray-600">Soporte técnico</span>
                </li>
              </ul>
            </div>

            {/* Enlaces útiles */}
            <div className="lg:col-span-4">
              <h4 className="text-lg text-gray-900 mb-6">Navegación rápida</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <a href="#packages" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block">
                    Paquetes y precios
                  </a>
                  <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block">
                    Cómo trabajamos
                  </a>
                  <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block">
                    Preguntas frecuentes
                  </a>
                </div>
                <div className="space-y-3">
                  <a href="#cases" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block">
                    Casos de éxito
                  </a>
                  <a href="#brief" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block">
                    Empezar proyecto
                  </a>
                  <button 
                    onClick={() => window.open('https://wa.me/5493572609036', '_blank')}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-left"
                  >
                    Contactar ahora
                  </button>
                </div>
              </div>
              
              {/* CTA destacado */}
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h5 className="text-gray-900 mb-2">¿Listo para empezar?</h5>
                <p className="text-gray-600 text-sm mb-4">
                  Charlemos sobre tu proyecto sin compromiso
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/5493572609036', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Hablar por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-200"></div>

        {/* Información legal */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="text-gray-500 text-sm">
              © 2025 Tuwebdeventas. Todos los derechos reservados.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                Términos y condiciones
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                Política de privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                Política de cookies
              </a>
            </div>
          </div>
        </div>

        {/* Aviso legal simplificado */}
        <div className="pb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Aviso legal:</strong> Los resultados mostrados en casos de éxito son reales pero pueden variar según 
              el tipo de negocio, mercado local y factores externos. No garantizamos resultados específicos, 
              pero sí garantizamos una web profesional, funcional y optimizada. Trabajamos bajo contrato con 
              condiciones claras de entrega y soporte.
            </p>
          </div>
        </div>
      </div>

      {/* CTA flotante sticky (solo en mobile) */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <button 
          onClick={() => window.open('https://wa.me/5493572609036', '_blank')}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl shadow-2xl flex items-center justify-center gap-2 transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          Hablar por WhatsApp
        </button>
      </div>
    </footer>
  );
}