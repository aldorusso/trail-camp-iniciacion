'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Heart, MapPin, Users } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-white">
          <Heart className="h-16 w-16 text-primary-500 mx-auto mb-8 animate-pulse" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-nike px-4">
            ¿LISTO PARA <span className="text-primary-500">DAR EL PASO?</span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 leading-relaxed px-4">
            Solo <strong className="text-primary-500">10 plazas disponibles</strong> para garantizar 
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed px-4">
            atención personalizada y máxima seguridad en el grupo.
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Grupo Reducido</h3>
              <p className="text-gray-400">Máximo 10 personas</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Rutas Seguras</h3>
              <p className="text-gray-400">Senderos para iniciación</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">100% Disfrute</h3>
              <p className="text-gray-400">Sin presión ni competición</p>
            </div>
          </div>
          
          {/* Main CTA */}
          <div className="space-y-6">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-primary-500 hover:bg-primary-600 text-white px-12 py-4 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Reservar Plaza Ahora
            </Button>
            
            <p className="text-sm text-gray-400 max-w-md mx-auto">
              Reserva con solo 50€ • Cancela hasta 15 días antes • Devolución 100%
            </p>
          </div>
          
          {/* Urgency indicator */}
          <div className="mt-12 inline-flex items-center space-x-3 bg-slate-700 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">
              <strong className="text-white">Solo quedan pocas plazas</strong> - No te quedes fuera
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;