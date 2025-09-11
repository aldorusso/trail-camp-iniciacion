'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Star, Mountain, Award, Users, Heart, MapPin } from 'lucide-react';

const InstructorSection: React.FC = () => {
  const achievements = [
    {
      icon: Mountain,
      title: '+15 años',
      description: 'Experiencia en trail running'
    },
    {
      icon: Award,
      title: 'Certificado',
      description: 'Instructor oficial de montaña'
    },
    {
      icon: Users,
      title: '+500',
      description: 'Corredores acompañados'
    },
    {
      icon: Heart,
      title: '100%',
      description: 'Pasión por enseñar'
    }
  ];

  const testimonials = [
    {
      text: "Óscar hace que parezca fácil lo que antes me daba miedo. Su paciencia y conocimiento son increíbles.",
      author: "María, Barcelona",
      rating: 5
    },
    {
      text: "Gracias a él descubrí que el trail no es solo correr, es conectar con la naturaleza y contigo mismo.",
      author: "Carlos, Madrid",
      rating: 5
    },
    {
      text: "Su experiencia y forma de transmitir la confianza te hacen sentir seguro desde el primer paso.",
      author: "Ana, Valencia",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" size="lg" className="mb-4">
            Tu Instructor
          </Badge>
          <h2 className="text-display-3 font-nike text-dark-950 mb-6">
            CONOCE A <span className="text-primary-500">ÓSCAR</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que un instructor, es tu compañero de aventura que te acompañará 
            en cada paso hacia tu primer trail
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Photo and Info */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/oscar-escribano.jpg"
                  alt="Óscar Escribano - Instructor de Trail Running"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-bold text-dark-950">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">Valoración media</p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-primary-500 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-dark-950 font-nike mb-1">
                    {achievement.title}
                  </div>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Description and Philosophy */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-dark-950 mb-6 font-nike">
                Tu Guía Hacia el Trail
              </h3>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong>Óscar no es solo un instructor certificado</strong> con más de 15 años 
                  de experiencia en montaña. Es alguien que entiende perfectamente tus miedos 
                  porque él también los tuvo.
                </p>
                <p>
                  Comenzó como corredor de asfalto, igual que tú. Su misión es acompañarte 
                  en esa transición de forma segura, divertida y sin presión.
                </p>
                <p>
                  <em>&ldquo;Mi objetivo no es que corras más rápido, sino que disfrutes cada 
                  paso y ganes la confianza para explorar la montaña por ti mismo.&rdquo;</em>
                </p>
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-xl p-6">
              <h4 className="text-xl font-bold text-dark-950 mb-4 font-nike">
                Sus Especialidades
              </h4>
              <ul className="space-y-3">
                {[
                  'Técnica de carrera en senderos y desniveles',
                  'Gestión del miedo y confianza en montaña',
                  'Orientación y seguridad en trail',
                  'Ritmo y estrategia para principiantes',
                  'Mentalidad y disfrute del proceso'
                ].map((specialty, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-primary-500 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-slate-800 rounded-xl p-6 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="h-6 w-6 text-primary-500" />
                <div>
                  <h4 className="font-bold font-nike">Conócelo en Persona</h4>
                  <p className="text-gray-300 text-sm">
                    Charlará contigo antes del Trail Camp
                  </p>
                </div>
              </div>
              <Button variant="secondary" size="md" className="w-full">
                Hablar con Óscar
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-dark-950 text-center mb-12 font-nike">
            Lo Que Dicen Sus <span className="text-primary-500">Trail Runners</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <span className="font-semibold text-dark-950">
                    {testimonial.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            <p className="text-dark-950 font-nike font-semibold">
              Con Óscar, tu primer trail será memorable
            </p>
            <div className="w-3 h-3 bg-slate-800 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;