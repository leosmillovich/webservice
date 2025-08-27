import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, Clock, Shield, Zap } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            ¿Tu competencia ya tiene web y vos no?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Cada día que pasa sin presencia online son clientes que se van a la competencia. 
            No esperes más para estar donde tus clientes te buscan.
          </p>
        </div>

        {/* Estadísticas impactantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">85%</div>
            <div className="text-blue-100">de consumidores busca online antes de comprar</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">70%</div>
            <div className="text-blue-100">prefiere negocios con presencia web</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">24/7</div>
            <div className="text-blue-100">tu web trabaja aunque vos duermas</div>
          </div>
        </div>

        {/* CTA Principal */}
        <div className="mb-8">
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 mb-4"
            onClick={() => window.open('https://wa.me/5493572609036', '_blank')}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Hablar por WhatsApp ahora
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Respuesta garantizada en el día</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Presupuesto sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Arrancar esta misma semana</span>
            </div>
          </div>
        </div>

        {/* Mensaje de urgencia */}
        <div className="bg-yellow-400 text-yellow-900 rounded-2xl p-6 mb-8 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl mb-2">
            🔥 Esta semana tenemos 2 cupos disponibles
          </h3>
          <p>
            No te quedes sin tu lugar. Los cupos se llenan rápido porque trabajamos con máxima dedicación en cada proyecto.
          </p>
        </div>

        {/* Compromiso final */}
        <div className="text-lg text-blue-100">
          <p className="mb-2">
            <strong className="text-white">Nuestro compromiso:</strong>
          </p>
          <p>
            Te respondemos en menos de 24 horas, te damos un presupuesto claro y transparente, 
            y si decidís arrancar, tenés tu web vendiendo en máximo 7 días.
          </p>
        </div>

        {/* Botón secundario para scroll hacia arriba */}
        <div className="mt-8">
          <button 
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-blue-200 hover:text-white underline transition-colors duration-300"
          >
            Ver paquetes y precios otra vez ↑
          </button>
        </div>
      </div>
    </section>
  );
}