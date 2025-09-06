import React from 'react';
import { TrendingUp, Search, MessageCircle, BarChart3, Zap, Globe } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Más ventas desde el primer día",
      description: "Tu web optimizada para convertir visitantes en clientes con botones de WhatsApp y formularios directos."
    },
    {
      icon: Search,
      title: "Aparecé en Google",
      description: "SEO básico incluido para que tus clientes te encuentren cuando buscan lo que ofrecés en tu zona."
    },
    {
      icon: MessageCircle,
      title: "Contacto súper fácil",
      description: "Botón de WhatsApp directo en toda la web. Tus clientes te escriben con un clic, sin complicaciones."
    },
    {
      icon: BarChart3,
      title: "Sabé qué funciona",
      description: "Google Analytics y métricas incluidas para que veas cuánta gente visita tu web y de dónde viene."
    },
    {
      icon: Zap,
      title: "Listo en una semana",
      description: "Mientras otros tardan meses, tu web está online y vendiendo en máximo 7 días. Garantizado."
    },
    {
      icon: Globe,
      title: "Se ve perfecto en todo",
      description: "Tu web se adapta a celulares, tablets y computadoras. Todos tus clientes la ven bien, siempre."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            ¿Por qué tu comercio necesita una web profesional?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En pleno 2025, tener presencia online no es opcional. Es la diferencia entre crecer o quedarse atrás.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Comercios locales ya tienen su web con nosotros</span>
          </div>
        </div>
      </div>
    </section>
  );
}