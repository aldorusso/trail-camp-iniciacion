'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Users, Download, CheckCircle } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-16">
          <Badge variant="primary" size="lg" className="mb-4">
            Únete a la Comunidad
          </Badge>
          <h2 className="text-display-3 font-nike text-dark-950 mb-6">
            HAZTE <span className="text-primary-500">MIEMBRO</span> DE NUESTRA COMUNIDAD
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Y recibe nuestro decálogo de &ldquo;Buenas Prácticas en la Montaña&rdquo;
          </p>
        </div>

        {/* Community Benefits */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-dark-950">Comunidad Activa</h3>
              <p className="text-gray-600">Conecta con otros trail runners</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-dark-950">Consejos Expertos</h3>
              <p className="text-gray-600">Recibe tips y guías exclusivas</p>
            </div>
            <div className="text-center">
              <Download className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-dark-950">Recursos Gratuitos</h3>
              <p className="text-gray-600">Descarga material de valor</p>
            </div>
          </div>
          
          {/* Decálogo Preview */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h4 className="text-xl font-bold text-dark-950 mb-4 font-nike">
              📋 Decálogo de &ldquo;Buenas Prácticas en la Montaña&rdquo;
            </h4>
            <p className="text-gray-600 mb-4">
              Una guía esencial con 10 principios fundamentales para disfrutar de la montaña de forma segura y responsable.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                  <span>Planificación de rutas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                  <span>Material imprescindible</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                  <span>Seguridad personal</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                  <span>Meteorología</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                  <span>Orientación básica</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                  <span>Respeto al medio ambiente</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                  <span>Hidratación y alimentación</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                  <span>Protocolo de emergencias</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                  <span>Técnicas de progresión</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                  <span>Ética del montañero</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <Button 
            variant="primary" 
            size="lg" 
            className="group w-full sm:w-auto"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Descargar Decálogo Gratuito
          </Button>
        </div>

        {/* Community Message */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            <p className="text-dark-950 font-nike font-semibold">
              Únete a más de 1,000 trail runners que ya forman parte de nuestra comunidad
            </p>
            <div className="w-3 h-3 bg-slate-800 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;