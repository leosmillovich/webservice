import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star, Zap, Plus } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      name: "Express",
      price: "USD 199",
      popular: false,
      description: "Perfecto para empezar rápido",
      features: [
        "3 secciones (Inicio, Servicios, Contacto)",
        "Botón CTA WhatsApp integrado",
        "Diseño responsive (se ve bien en todo)",
        "Deploy y publicación incluidos",
        "1 revisión incluida"
      ],
      notIncluded: [
        "Formulario a Google Sheets",
        "Google Analytics y Meta Pixel",
        "SEO básico optimizado",
        "Favicon personalizado"
      ]
    },
    {
      name: "Pro",
      // OFERTA: Conpm run
      price: "USD 199", // "USD 299-399", // Precio original comentado
      originalPrice: "USD 299-399", // Precio original para mostrar tachado
      popular: true,
      description: "La opción más completa",
      features: [
        "Todo lo del paquete Express",
        "Formulario que envía a Google Sheets",
        "Google Analytics 4 + Meta Pixel configurados",
        "SEO básico optimizado",
        "Favicon personalizado",
        "Sitemap y robots.txt",
        "2 revisiones incluidas"
      ],
      notIncluded: []
    },
    {
      name: "Premium",
      price: "USD 599-799",
      popular: false,
      description: "La opción para clientes que quieren destacar al máximo",
      features: [
        "Todo lo del paquete Pro",
        "Branding inicial (colores, tipografías, favicon, kit de plantillas para redes)",
        "Google My Business optimizado y vinculado a la web",
        "Automatización de pedidos (form → Google Sheets + email automático)",
        "Dashboard en Looker Studio con métricas de visitas y conversiones",
        "Página extra (ej: catálogo, portafolio o blog simple)",
        "3 rondas de revisión incluidas",
        "Entrega en 10–14 días",
        "Soporte extendido 30 días post-publicación"
      ],
      notIncluded: []
    }
  ];

  const optionals = [
    { name: "Dominio y configuración DNS", price: "+USD 30" },
    { name: "Copy corto (textos optimizados)", price: "+USD 60" },
    { name: "Entrega urgente (48hs)", price: "+25%" }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Paquetes simples, precios transparentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sin letra chica ni sorpresas. Elegí el paquete que mejor se adapte a tu negocio.
          </p>
        </div>

        {/* Tabla comparativa */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl shadow-lg transition-all duration-500 flex flex-col ${
                pkg.popular 
                  ? 'bg-blue-600 text-white transform scale-105 shadow-xl hover:scale-110 border-2 border-blue-500' 
                  : 'bg-white text-gray-900 hover:-translate-y-2 hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-yellow-900 px-4 py-2 font-semibold shadow-md">
                    <Star className="w-4 h-4 mr-2" />
                    Más elegido
                  </Badge>
                </div>
              )}

              {/* OFERTA: Comentar estas líneas para activar badge de cupos limitados */}
              {pkg.name === "Pro" && (
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-red-500 text-white px-3 py-1 text-xs font-bold animate-pulse shadow-lg">
                    Solo 5 cupos
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-4xl mb-2 ${pkg.popular ? 'text-white' : 'text-blue-600'}`}>
                  {pkg.price}
                </div>
                {/* OFERTA: Comentar estas líneas para mostrar precio original tachado */}
                {pkg.name === "Pro" && pkg.originalPrice && (
                  <div className={`text-lg mb-2 ${pkg.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                    <div className="line-through">{pkg.originalPrice}</div>
                    <div className={`text-green-500 font-semibold ${pkg.popular ? 'text-green-300' : 'text-green-600'}`}>
                      ¡Ahorrás USD 100-200!
                    </div>
                  </div>
                )}
                <p className={`text-sm ${pkg.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      pkg.popular ? 'text-green-300' : 'text-green-500'
                    }`} />
                    <span className={`text-sm ${pkg.popular ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
                {pkg.notIncluded.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 opacity-50">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 border rounded border-gray-400" />
                    <span className={`text-sm line-through ${pkg.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-4 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg shadow-md'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg shadow-md'
                }`}
                onClick={() => document.getElementById('brief')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Elegir {pkg.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Opcionales */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl text-gray-900 mb-6 text-center">
            Servicios opcionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {optionals.map((optional, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Plus className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-900">{optional.name}</span>
                </div>
                <span className="text-blue-600 font-medium">{optional.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Microcopy de transparencia */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            <strong>Sin letra chica:</strong> Los precios incluyen todo lo detallado. 
            No hay costos ocultos ni sorpresas. Lo que ves es lo que pagás.
          </p>
        </div>
      </div>
    </section>
  );
}