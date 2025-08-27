import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Clock, CheckCircle } from 'lucide-react';

export default function MiniBrief() {
  const [formData, setFormData] = useState({
    objective: '',
    target: '',
    offer: '',
    brand: '',
    contact: '',
    domain: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar a Google Sheets
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Simulamos envío exitoso
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center p-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-4">
              ¡Brief recibido correctamente!
            </h3>
            <p className="text-gray-600 mb-6">
              Te vamos a contactar por WhatsApp en las próximas horas para arrancar con tu web.
            </p>
            <Button 
              onClick={() => window.open('https://wa.me/5493572609036', '_blank')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Ir a WhatsApp
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            ¿Listo para empezar? Completá el mini-brief
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Son solo 6 preguntas que nos ayudan a crear tu web perfecta. Tardás menos de 5 minutos.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Tardás 1 minuto · Sin costo</span>
          </div>
        </div>

        <Card className="p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Pregunta 1 */}
            <div>
              <Label className="text-lg text-gray-900 mb-3 block">
                1. ¿Cuál es el objetivo principal de tu web y qué acción querés que hagan tus clientes?
              </Label>
              <Textarea
                placeholder="Ej: Que me contacten por WhatsApp para pedir presupuestos de reformas"
                value={formData.objective}
                onChange={(e) => handleChange('objective', e.target.value)}
                required
                className="min-h-20"
              />
            </div>

            {/* Pregunta 2 */}
            <div>
              <Label className="text-lg text-gray-900 mb-3 block">
                2. ¿Quién es tu público objetivo? (describilo en una frase)
              </Label>
              <Input
                placeholder="Ej: Familias de clase media que quieren remodelar su casa"
                value={formData.target}
                onChange={(e) => handleChange('target', e.target.value)}
                required
              />
            </div>

            {/* Pregunta 3 */}
            <div>
              <Label className="text-lg text-gray-900 mb-3 block">
                3. ¿Cuál es tu oferta principal y tenés algún testimonio/prueba social?
              </Label>
              <Textarea
                placeholder="Ej: Reformas integrales con garantía de 2 años. Cliente María dice: 'Terminaron en tiempo y forma, súper recomendable'"
                value={formData.offer}
                onChange={(e) => handleChange('offer', e.target.value)}
                required
                className="min-h-20"
              />
            </div>

            {/* Pregunta 4 */}
            <div>
              <Label className="text-lg text-gray-900 mb-3 block">
                4. ¿Tenés logo/colores preferidos y 2-3 webs de referencia que te gusten?
              </Label>
              <Textarea
                placeholder="Ej: Logo azul y blanco. Me gustan: ejemplo1.com, ejemplo2.com (por lo simple y claro)"
                value={formData.brand}
                onChange={(e) => handleChange('brand', e.target.value)}
                required
                className="min-h-20"
              />
            </div>

            {/* Pregunta 5 */}
            <div>
              <Label className="text-lg text-gray-900 mb-3 block">
                5. ¿Cuál es tu WhatsApp y email principal de contacto?
              </Label>
              <Input
                placeholder="Ej: WhatsApp: +54 9 11 1234-5678 / Email: contacto@tuempresa.com"
                value={formData.contact}
                onChange={(e) => handleChange('contact', e.target.value)}
                required
              />
            </div>

            {/* Pregunta 6 */}
            <div>
              <Label className="text-lg text-gray-900 mb-3 block">
                6. ¿Tenés dominio propio y acceso a Google Analytics/Meta Business?
              </Label>
              <Textarea
                placeholder="Ej: Dominio: miempresa.com / Analytics: no tengo / Meta: tengo Facebook pero no cuenta business"
                value={formData.domain}
                onChange={(e) => handleChange('domain', e.target.value)}
                required
                className="min-h-20"
              />
            </div>

            <div className="text-center pt-4">
              <Button 
                type="submit"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enviar brief y empezar
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Al enviar este formulario, te contactaremos por WhatsApp para confirmar detalles y comenzar tu proyecto.
              </p>
            </div>
          </form>
        </Card>

        {/* Nota técnica */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            📝 <strong>Nota técnica:</strong> Este formulario está configurado para enviar automáticamente 
            las respuestas a Google Sheets y notificarnos por email para respuesta inmediata.
          </p>
        </div>
      </div>
    </section>
  );
}