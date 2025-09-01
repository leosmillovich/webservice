import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp, Clock, MessageCircle } from 'lucide-react';

export default function Cases() {
  const cases = [
    {
      image: "https://images.unsplash.com/photo-1699671441371-568013519f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NTkyMjM1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      business: "Parrilla El Asador",
      category: "Gastronomía",
      result: "+150% pedidos online",
      timeframe: "En 2 meses",
      description: "Web con menú digital y botón directo a WhatsApp. Los clientes ahora pueden ver la carta y hacer pedidos sin esperar al teléfono.",
      metrics: [
        { icon: TrendingUp, value: "150%", label: "más pedidos" },
        { icon: MessageCircle, value: "80%", label: "por WhatsApp" },
        { icon: Clock, value: "7 días", label: "tiempo entrega" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1605980626247-eb3a2f10ec8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHNwYXxlbnwxfHx8fDE3NTU5MjE4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      business: "Estética Luna",
      category: "Belleza & Spa",
      result: "+200% turnos reservados",
      timeframe: "En 6 semanas",
      description: "Formulario de contacto directo a WhatsApp y galería de trabajos. Las clientas reservan turnos directamente desde la web.",
      metrics: [
        { icon: TrendingUp, value: "200%", label: "más turnos" },
        { icon: MessageCircle, value: "90%", label: "por formulario" },
        { icon: Clock, value: "5 días", label: "tiempo entrega" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1674105763702-7d69c4c74ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMHJldGFpbCUyMHNob3B8ZW58MXx8fHwxNzU1OTIyMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      business: "Librería Punto Aparte", 
      category: "Retail",
      result: "+300% consultas",
      timeframe: "En 1 mes",
      description: "Catálogo online con búsqueda y WhatsApp para consultas. Los clientes pueden ver stock disponible antes de ir al local.",
      metrics: [
        { icon: TrendingUp, value: "300%", label: "más consultas" },
        { icon: MessageCircle, value: "95%", label: "por WhatsApp" },
        { icon: Clock, value: "6 días", label: "tiempo entrega" }
      ]
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Casos reales de comercios como el tuyo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estos números no son promesas, son resultados reales de clientes que ya tienen su web funcionando.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden">
                s<ImageWithFallback priority={index === 0} placeholder="📊" 
                  src={caseItem.image}
                  alt={`Caso de éxito: ${caseItem.business}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {caseItem.category}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-2">
                  {caseItem.business}
                </h3>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl text-green-600">
                    {caseItem.result}
                  </span>
                  <span className="text-sm text-gray-500">
                    {caseItem.timeframe}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {caseItem.description}
                </p>

                {/* Métricas */}
                <div className="grid grid-cols-3 gap-4">
                  {caseItem.metrics.map((metric, idx) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={idx} className="text-center">
                        <div className="flex justify-center mb-2">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-lg text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer editable */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            <strong>Casos reales:</strong> Los nombres y datos específicos han sido modificados por privacidad, 
            pero los resultados son auténticos y verificables. Cada negocio es único y los resultados pueden variar.
          </p>
        </div>
      </div>
    </section>
  );
}