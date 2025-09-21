import React from 'react';
import { Calendar, Clock, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import BlogLayout from '../../components/blog/BlogLayout';
import { BlogPost } from '../../components/blog/BlogCard';

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('¡Link copiado al portapapeles!');
    }
  };

  return (
    <BlogLayout 
      title={`${post.title} - Blog Tuwebdeventas`}
      description={post.excerpt}
      showBackButton={true}
    >
      <article className="max-w-4xl mx-auto">
        {/* Header del artículo */}
        <header className="mb-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <button 
              onClick={() => window.location.href = '/blog'}
              className="hover:text-blue-600 transition-colors"
            >
              Blog
            </button>
            <span>/</span>
            <span className="text-blue-600">{post.category}</span>
          </nav>

          {/* Categoría */}
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {post.category}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Meta información */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} de lectura</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={sharePost}
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Compartir
            </Button>
          </div>

          {/* Imagen destacada */}
          {post.image && (
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Excerpt */}
          <div className="text-xl text-gray-600 leading-relaxed mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            {post.excerpt}
          </div>
        </header>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            {/* Aquí iría el contenido real del artículo */}
            <p>
              Este es un ejemplo del contenido del artículo. En la implementación real, 
              aquí iría el contenido completo del artículo que podría venir de:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Archivos Markdown</li>
              <li>CMS como Strapi o Sanity</li>
              <li>Base de datos</li>
              <li>API externa</li>
            </ul>

            <p>
              Por ahora, este es contenido de ejemplo para demostrar la estructura 
              y funcionalidad del blog.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Sección de ejemplo
            </h2>

            <p>
              Aquí podrías tener más contenido del artículo, con subtítulos, 
              listas, imágenes, y otros elementos de formato.
            </p>
          </div>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Etiquetas</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA del artículo */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Te gustó este artículo?
          </h3>
          <p className="text-gray-600 mb-6">
            Aplicá estos consejos creando tu propia página web profesional. 
            Te ayudamos a tenerla lista en solo 7 días.
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
        </div>

        {/* Artículos relacionados */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Artículos Relacionados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Aquí irían artículos relacionados */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Próximamente: Más artículos relacionados
              </h4>
              <p className="text-gray-600">
                Aquí aparecerán artículos relacionados basados en las categorías y tags.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Próximamente: Más artículos relacionados
              </h4>
              <p className="text-gray-600">
                Aquí aparecerán artículos relacionados basados en las categorías y tags.
              </p>
            </div>
          </div>
        </section>
      </article>
    </BlogLayout>
  );
}
