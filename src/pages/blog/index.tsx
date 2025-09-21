import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import BlogLayout from '../../components/blog/BlogLayout';
import BlogCard, { BlogPost } from '../../components/blog/BlogCard';

// Datos de ejemplo - en el futuro vendrán de un CMS o archivos markdown
const blogPosts: BlogPost[] = [
  {
    slug: 'como-crear-pagina-web-negocio-local-2024',
    title: 'Cómo crear una página web para tu negocio local en 2024',
    excerpt: 'Guía completa paso a paso para crear tu página web profesional sin conocimientos técnicos. Incluye herramientas, costos y estrategias de marketing.',
    content: 'Contenido completo del artículo...',
    category: 'Tutoriales',
    tags: ['página web', 'negocio local', 'marketing digital', 'SEO'],
    publishedAt: '2024-01-15',
    readTime: '8 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  },
  {
    slug: 'panaderia-multiplica-ventas-web',
    title: 'De 0 a 50 clientes: cómo una panadería multiplicó sus ventas con su web',
    excerpt: 'Caso real de una panadería que pasó de vender solo en el local a tener pedidos online constantes. Descubrí su estrategia paso a paso.',
    content: 'Contenido completo del artículo...',
    category: 'Casos de Éxito',
    tags: ['caso de éxito', 'panadería', 'ventas online', 'WhatsApp'],
    publishedAt: '2024-01-10',
    readTime: '6 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=400&fit=crop'
  },
  {
    slug: 'herramientas-gratuitas-contenido-web',
    title: '10 herramientas gratuitas para crear contenido para tu web',
    excerpt: 'Lista curada de herramientas gratuitas para crear imágenes, videos y contenido que harán que tu página web destaque de la competencia.',
    content: 'Contenido completo del artículo...',
    category: 'Herramientas',
    tags: ['herramientas', 'contenido', 'diseño', 'gratis'],
    publishedAt: '2024-01-05',
    readTime: '5 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop'
  },
  {
    slug: 'whatsapp-business-vs-whatsapp-web',
    title: 'WhatsApp Business vs WhatsApp Web: ¿Cuál elegir para tu comercio?',
    excerpt: 'Comparativa detallada entre WhatsApp Business y WhatsApp Web para ayudarte a elegir la mejor opción para tu negocio local.',
    content: 'Contenido completo del artículo...',
    category: 'Comparativas',
    tags: ['WhatsApp', 'WhatsApp Business', 'comercio', 'comunicación'],
    publishedAt: '2024-01-01',
    readTime: '7 min',
    featured: false
  }
];

const categories = ['Todos', 'Tutoriales', 'Casos de Éxito', 'Herramientas', 'Comparativas'];

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <BlogLayout 
      title="Blog - Tuwebdeventas"
      description="Consejos, casos de éxito y herramientas para hacer crecer tu negocio con una página web profesional"
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Blog Tuwebdeventas
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Consejos prácticos, casos de éxito reales y herramientas para hacer crecer tu negocio con una página web profesional.
        </p>
        
        {/* Search */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "bg-blue-600" : ""}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos Destacados</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard
                key={post.slug}
                post={post}
                onClick={() => window.location.href = `/blog/${post.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Todos los Artículos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard
                key={post.slug}
                post={post}
                onClick={() => window.location.href = `/blog/${post.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-900 mb-4">No se encontraron artículos</h3>
          <p className="text-gray-600 mb-6">
            Intenta con otros términos de búsqueda o cambia la categoría.
          </p>
          <Button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Todos');
            }}
            variant="outline"
          >
            Limpiar filtros
          </Button>
        </div>
      )}

      {/* CTA Section */}
      <section className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¿Listo para aplicar lo que aprendiste?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Ahora que sabés más sobre páginas web para negocios locales, es hora de crear la tuya. 
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
      </section>
    </BlogLayout>
  );
}
