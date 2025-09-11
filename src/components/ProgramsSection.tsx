'use client';

import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Clock, Users, MapPin, Star, TrendingUp, Heart } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Sábado',
    description: 'Primer día del Trail Camp con bienvenida, ruta guiada y sesiones prácticas',
    duration: 'Día completo',
    level: 'Iniciación',
    participants: '10 máx',
    price: 'DÍA 1',
    features: [
      'Bienvenida + charla: "Del asfalto al trail"',
      'Ruta guiada 10-15 km con paradas técnicas',
      'Almuerzo en grupo en plena naturaleza',
      'Sesión práctica: orientación y seguridad',
      'Cena compartida'
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Bienvenida',
    badgeVariant: 'primary' as const
  },
  {
    id: 2,
    title: 'Domingo',
    description: 'Segundo día con práctica de técnicas y cierre motivacional del programa',
    duration: 'Mañana',
    level: 'Práctica',
    participants: '10 máx',
    price: 'DÍA 2',
    features: [
      'Ruta corta 8-10 km con práctica de ritmo',
      'Técnicas de bajadas seguras',
      'Dinámica de mentalidad y miedos',
      'Cierre en grupo',
      'Plan personal de próximos pasos'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Cierre',
    badgeVariant: 'success' as const
  },
  {
    id: 3,
    title: 'Qué Incluye',
    description: 'Todo lo que está incluido en tu Trail Camp de iniciación completo',
    duration: '2 días',
    level: 'Completo',
    participants: 'Todo',
    price: 'INCLUIDO',
    features: [
      '2 rutas guiadas con seguro RC y accidentes',
      'Grupo reducido con atención personalizada',
      'Plan previo de entrenamiento (2 semanas)',
      'Material de apoyo y tracks GPS',
      'Fotos y recuerdo del fin de semana'
    ],
    image: 'https://images.unsplash.com/photo-1602245986256-bb9d7703b4b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: '¡Todo Incluido!',
    badgeVariant: 'warning' as const
  }
];

const ProgramsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" size="lg" className="mb-4">
            Programa del Fin de Semana
          </Badge>
          <h2 className="text-display-3 font-nike text-dark-950 mb-6">
            TU <span className="text-primary-500">PRIMER TRAIL CAMP</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No es un curso, no es una carrera: es tu <strong>primer paso real</strong> hacia el trail. 
            Diseñado para que aprendas, disfrutes y ganes confianza.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => (
            <Card key={program.id} className="h-full">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={program.badgeVariant} size="md">
                    {program.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                  <Star className="h-5 w-5 text-primary-500 fill-current" />
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-dark-950 font-nike">
                    {program.title}
                  </h3>
                  <div className="text-2xl font-bold text-primary-500">
                    {program.price}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {program.duration}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {program.participants} personas
                  </div>
                  <div className="flex items-center text-gray-500 col-span-2">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Nivel {program.level}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  variant="primary" 
                  size="md" 
                  className="w-full"
                >
                  Inscribirse Ahora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-dark-950 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Heart className="h-12 w-12 text-primary-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 font-nike">
              ¿LISTO PARA DAR EL PASO?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Solo <strong className="text-primary-500">10 plazas disponibles</strong> para garantizar 
              atención personalizada y máxima seguridad en el grupo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Reservar Plaza Ahora
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-dark-950">
                <MapPin className="mr-2 h-5 w-5" />
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;