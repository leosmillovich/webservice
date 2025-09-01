import React from 'react';
import { FileText, Palette, Rocket, BarChart } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Mini-brief",
      description: "Te mandamos 6 preguntas súper simples sobre tu negocio. Las completás en 5 minutos y tenemos todo claro.",
      duration: "5 min",
      highlight: "Setup exprés (30 min)"
    },
    {
      number: "02", 
      icon: Palette,
      title: "Diseño & copy",
      description: "Creamos tu web con tus colores, logo y textos optimizados. Todo pensado para que tus clientes compren.",
      duration: "2-3 días",
      highlight: "Diseño a medida"
    },
    {
      number: "03",
      icon: Rocket, 
      title: "Publicación",
      description: "Subimos tu web, configuramos analytics, probamos que todo funcione perfecto y te damos acceso completo.",
      duration: "1 día",
      highlight: "Todo configurado"
    },
    {
      number: "04",
      icon: BarChart,
      title: "Medición",
      description: "Te explicamos cómo ver las métricas, quién visita tu web y cómo sacarle el máximo provecho.",
      duration: "Soporte 7 días",
      highlight: "Acompañamiento incluido"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            ¿Cómo trabajamos? Simple y transparente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso probado que nos permite entregar tu web en tiempo récord sin sacrificar calidad.
          </p>
        </div>

        <div className="relative">
          {/* Línea conectora en desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Número del paso */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-lg font-bold">{step.number}</span>
                    </div>
                    
                    {/* Ícono y contenido */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 w-full">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {step.duration}
                        </div>
                        <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm ml-2">
                          {step.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Repo base + checklist */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl text-gray-900 mb-4">
                🚀 Repo base + checklist
              </h3>
              <p className="text-gray-600 mb-4">
                Usamos un template optimizado en Vercel/Git que incluye:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Estructura de secciones predefinida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>SEO tags optimizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Analytics y form→Sheets configurados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Componentes reutilizables</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl text-gray-900 mb-4">
                ✅ Checklist de entrega
              </h3>
              <p className="text-gray-600 mb-4">
                Antes de entregarte tu web, verificamos:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Velocidad y accesibilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Meta tags completos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Eventos de clic configurados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>SSL y documentación de handoff</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}