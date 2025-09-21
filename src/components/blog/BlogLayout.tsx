import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '../ui/button';
import { siteConfig } from '../../config/site';

interface BlogLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  showBackButton?: boolean;
}

export default function BlogLayout({ 
  children, 
  title = "Blog - Tuwebdeventas",
  description = "Consejos, casos de éxito y herramientas para hacer crecer tu negocio con una página web profesional",
  showBackButton = true 
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header del Blog */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              {showBackButton && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver
                </Button>
              )}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.location.href = '/'}
                  className="flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  {siteConfig.company.name}
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                onClick={() => window.location.href = '/#brief'}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Quiero mi web
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* SEO Head */}
        <head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </head>

        {children}
      </main>

      {/* Footer del Blog */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              ¿Listo para tener tu página web?
            </h3>
            <p className="text-gray-600 mb-6">
              Aplicá todo lo que aprendiste en este blog y creá tu web profesional en solo 7 días.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = '/#brief'}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Completar Mini-Brief
              </Button>
              <Button
                onClick={() => window.location.href = '/#packages'}
                variant="outline"
                size="lg"
              >
                Ver Paquetes
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                © 2024 {siteConfig.company.name} - {siteConfig.company.location}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
