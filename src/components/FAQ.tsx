import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "¿Cuánto tiempo tardan en hacer mi web?",
      answer: "Entregamos tu web en máximo 7 días desde que recibimos el mini-brief completo. Si necesitás entrega urgente en 48 horas, tiene un costo adicional de +25%."
    },
    {
      question: "¿Qué incluye exactamente cada paquete?",
      answer: "Express (USD 199): 3 secciones, WhatsApp, responsive, deploy, 1 revisión. Pro (USD 299-399): todo lo anterior + formulario a Sheets, GA4/Pixel, SEO básico, favicon, sitemap/robots, 2 revisiones. Sin costos ocultos."
    },
    {
      question: "¿La web queda mía o es de ustedes?",
      answer: "La web es 100% tuya. Te entregamos todos los accesos: hosting, dominio (si lo compraste), código fuente y cuentas de analytics. Podés modificarla o cambiar de proveedor cuando quieras."
    },
    {
      question: "¿Qué tipo de soporte incluyen?",
      answer: "Incluimos 7 días de soporte post-publicación para bugs pequeños y dudas básicas. Cambios de diseño o contenido fuera del alcance original se cobran por separado o podés hacer upgrade a Pro."
    },
    {
      question: "¿Necesito tener dominio propio?",
      answer: "No es obligatorio. Podemos publicar tu web en un subdominio gratuito inicialmente. Si querés tu dominio propio (.com, .com.ar), lo configuramos por +USD 30 adicionales."
    },
    {
      question: "¿La web va a aparecer en Google?",
      answer: "Sí, incluimos SEO básico: meta tags, sitemap, robots.txt y estructura optimizada. Para posicionamiento avanzado y contenido SEO especializado, consultanos por servicios adicionales."
    },
    {
      question: "¿Puedo ver métricas de visitantes?",
      answer: "En el paquete Pro configuramos Google Analytics 4 y Meta Pixel. Te explicamos cómo ver cuánta gente visita tu web, de dónde viene y qué hacen. Es súper fácil de entender."
    },
    {
      question: "¿Cómo es el proceso de pago?",
      answer: "50% al iniciar (cuando confirmás el brief) y 50% al publicar la web. Aceptamos transferencia bancaria, MercadoPago o PayPal. Podés cancelar antes de empezar sin costo."
    },
    {
      question: "¿Qué pasa si no me gusta el diseño?",
      answer: "Cada paquete incluye revisiones (1 en Express, 2 en Pro). Si necesitás cambios mayores fuera del brief original, podés hacer upgrade a Pro o pagar tarifa por hora."
    },
    {
      question: "¿Funciona bien en celulares?",
      answer: "Absolutamente. Todas nuestras webs son responsive, se ven perfectas en celulares, tablets y computadoras. La mayoría de tus clientes van a entrar desde el celular."
    },
    {
      question: "¿Pueden escribir los textos de mi web?",
      answer: "Podemos ayudarte con copy corto optimizado por +USD 60. Si preferís escribir vos mismo, te damos una guía con tips y ejemplos para cada sección."
    },
    {
      question: "¿Qué necesito preparar antes de empezar?",
      answer: "Solo completar el mini-brief de 6 preguntas: objetivo, público, oferta, colores/logo, contacto y dominio. Si tenés fotos/contenido listo, mejor, pero podemos ayudarte a conseguir todo."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Todas las dudas que pueden surgirte, respondidas de forma clara y directa.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="text-left py-6 text-lg text-gray-900 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿No encontraste respuesta a tu pregunta?
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5493572609036', '_blank')}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
            Preguntanos por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}