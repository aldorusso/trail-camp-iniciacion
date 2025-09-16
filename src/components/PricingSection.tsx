'use client';

import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Check, Star, Zap, Heart, Clock, Users, TrendingUp } from 'lucide-react';

const PricingSection: React.FC = () => {
  const pricingOptions = [
    {
      id: 'base',
      title: 'Base',
      subtitle: 'Tu primer trail perfecto',
      price: '170',
      currency: '€',
      description: 'Todo lo esencial para empezar en el trail running con total seguridad',
      features: [
        'Rutas guiadas los 2 días con instructor certificado',
        'Seguro RC y accidentes incluido',
        'Grupo reducido máximo 10 personas',
        'Plan de entrenamiento previo (2 semanas)',
        'Material de apoyo y tracks GPS',
        'Fotos y recuerdo del fin de semana'
      ],
      badge: 'Esencial',
      badgeVariant: 'primary' as const,
      buttonText: 'Reservar Base',
      buttonVariant: 'outline' as const,
      popular: false,
      icon: Zap
    },
    {
      id: 'experiencia-total',
      title: 'Experiencia Total',
      subtitle: 'La tranquilidad de tenerlo todo organizado',
      price: '215',
      currency: '€',
      description: 'Incluye todo lo de la opción Esencial + alojamiento y pensión completa',
      features: [
        'Incluye todo lo de la opción Esencial',
        'Alojamiento y pensión completa',
        'Todas las comidas del fin de semana (cenas, desayunos y almuerzos)',
        'La tranquilidad de tenerlo todo organizado'
      ],
      badge: 'Más Popular',
      badgeVariant: 'success' as const,
      buttonText: 'Reservar Experiencia Total',
      buttonVariant: 'primary' as const,
      popular: true,
      icon: Heart
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" size="lg" className="mb-4">
            Elige Tu Modalidad
          </Badge>
          <h2 className="text-display-3 font-nike text-dark-950 mb-6">
            TU <span className="text-primary-500">INVERSIÓN</span> PERFECTA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No es solo un precio, es tu <strong>entrada al trail running</strong>. 
            Elige la opción que mejor se adapte a ti y empieza tu aventura.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 max-w-4xl mx-auto">
          {pricingOptions.map((option) => (
            <Card 
              key={option.id} 
              className={`relative h-full ${
                option.popular 
                  ? 'border-2 border-primary-500 shadow-2xl transform scale-105' 
                  : 'hover:shadow-xl hover:-translate-y-1'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant={option.badgeVariant} size="lg" className="px-6">
                    <Star className="h-4 w-4 mr-2" />
                    {option.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                {/* Icon */}
                <div className={`${
                  option.popular ? 'bg-primary-500' : 'bg-slate-800'
                } rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center`}>
                  <option.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title and Price */}
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-dark-950 font-nike mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {option.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className={`text-5xl font-bold ${
                      option.popular ? 'text-primary-500' : 'text-dark-950'
                    } font-nike`}>
                      {option.price}
                    </span>
                    <span className="text-2xl text-gray-500 ml-1">
                      {option.currency}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    {option.description}
                  </p>
                </div>

                {/* Non-popular badge */}
                {!option.popular && (
                  <Badge variant={option.badgeVariant} size="md">
                    {option.badge}
                  </Badge>
                )}
              </CardHeader>

              <CardContent>
                {/* Features List */}
                <ul className="space-y-4">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className={`h-5 w-5 ${
                        option.popular ? 'text-primary-500' : 'text-slate-800'
                      } mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button 
                  variant={option.buttonVariant}
                  size="lg" 
                  className={`w-full ${
                    option.popular 
                      ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg' 
                      : ''
                  }`}
                >
                  {option.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}

        </div>

        {/* CTA Section */}
        <div className="bg-dark-950 rounded-2xl p-8 md:p-12 text-center text-white mt-16">
          <div className="max-w-3xl mx-auto">
            <Heart className="h-12 w-12 text-primary-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 font-nike">
              Solo 20 plazas disponibles para garantizar la atención exclusiva
            </h3>
            <div className="flex justify-center mt-8 space-x-4">
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-slate-800 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;