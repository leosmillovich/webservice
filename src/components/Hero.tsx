import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, Shield, Zap, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="text-center mb-16">
            {/* Titular principal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6 leading-tight">
              Tu web lista para vender
              <br />
              <span className="text-blue-600">en días, no semanas</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Páginas web profesionales para comercios locales que funcionan desde el día uno. 
              Sin complicaciones técnicas, con todo incluido para que empieces a vender online ya mismo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => window.open('https://wa.me/5493572609036', '_blank')}
              >
                Hablar por WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver paquetes
              </Button>
            </div>

            {/* Badges de confianza */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Respuesta en el día</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span>Entrega en 7 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decoración visual */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000" />
      <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
    </section>
  );
}