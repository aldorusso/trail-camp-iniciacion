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
      id: 'completa',
      title: 'Completa',
      subtitle: 'Experiencia total sin preocupaciones',
      price: '240',
      currency: '€',
      description: 'Incluye todo lo de Base + alojamiento y comidas completas',
      features: [
        'Todo lo incluido en opción Base',
        'Alojamiento completo en casa rural',
        'Todas las comidas del fin de semana',
        'Cena del sábado en grupo',
        'Desayunos energéticos para trail',
        'Snacks y hidratación en rutas'
      ],
      badge: 'Más Popular',
      badgeVariant: 'success' as const,
      buttonText: 'Reservar Completa',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
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

          {/* Payment info as third card */}
          <Card className="h-full">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Información de reserva"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="warning" size="md">
                  Condiciones
                </Badge>
              </div>
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                <Star className="h-5 w-5 text-primary-500 fill-current" />
              </div>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-dark-950 font-nike">
                  Reserva
                </h3>
                <div className="text-2xl font-bold text-primary-500">
                  50€
                </div>
              </div>
              <p className="text-gray-600 mb-4">Condiciones flexibles para tu tranquilidad y confianza</p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  Solo reserva
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  Resto al llegar
                </div>
                <div className="flex items-center text-gray-500 col-span-2">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Cancelación flexible
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Reserva tu plaza con solo 50€
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Cancela hasta 15 días antes del evento
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Devolución del 100% si cancelas a tiempo
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Resto del pago al llegar al evento
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Confirmación inmediata por email
                </li>
              </ul>
            </CardContent>

            <CardFooter>
              <Button 
                variant="outline" 
                size="md" 
                className="w-full"
              >
                Consultar Condiciones
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12 space-x-4">
          <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-slate-800 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;