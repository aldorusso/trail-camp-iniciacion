'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Heart, MapPin } from 'lucide-react';

const programSchedule = [
  {
    day: 'VIERNES',
    subtitle: 'Llegada y bienvenida',
    activities: [
      { time: '17:00 h', activity: 'Recepción y check-in', description: 'Café de bienvenida.' },
      { time: '18:00 h', activity: 'Presentación del camp', description: 'Introducción a la filosofía Desconecta EcoTrail, a la ruta y a la agenda del fin de semana.' },
      { time: '19:30 h', activity: 'Taller: "Del asfalto a la montaña"', description: 'Sesión de dudas y consejos prácticos para iniciarse en el trail: material, técnica y mentalidad.' },
      { time: '21:00 h', activity: 'Cena comunitaria', description: 'Momento para conectar con la tribu.' },
      { time: '22:30 h', activity: 'Proyección & debate', description: 'Proyección de un documental inspirador.' }
    ]
  },
  {
    day: 'SÁBADO',
    subtitle: 'Día de entrenamiento y acción',
    activities: [
      { time: '08:00 h', activity: 'Desayuno del corredor', description: '' },
      { time: '09:00 h', activity: 'Plogging: calentamiento con propósito', description: 'Salida para calentar, con una breve sesión de plogging en una zona cercana.' },
      { time: '09:30 h', activity: 'Ruta guiada', description: 'Recorrido de 15-20 km (adaptado a 2 niveles) por rutas emblemáticas de la zona, con paradas técnicas para realizar ejercicios de técnica.' },
      { time: '14:00 h', activity: 'Comida y recuperación', description: 'Comida picnic en un punto emblemático de la ruta.' },
      { time: '16:00 h', activity: 'Taller práctico', description: 'Sesión sobre seguridad en montaña, orientación con mapa y gestión de residuos.' },
      { time: '18:00 h', activity: 'Salida nocturna', description: 'Disfrute de la experiencia con frontal.' },
      { time: '21:00 h', activity: 'Cena y convivencia', description: 'Barbacoa o cena local. Espacio para compartir experiencias.' }
    ]
  },
  {
    day: 'DOMINGO',
    subtitle: 'Mañana de flow y despedida',
    activities: [
      { time: '08:00 h', activity: 'Desayuno y stretching', description: 'Sesión de estiramientos conscientes para recuperar los músculos.' },
      { time: '09:00 h', activity: 'Ruta de "Flow"', description: 'Última salida de 8-10 km por un sendero suave y fluido. Momento para disfrutar del trail sin presión.' },
      { time: '13:00 h', activity: 'Ceremonia final', description: 'Entrega de un certificado simbólico, bolsa del corredor y foto de grupo.' },
      { time: '14:00 h', activity: 'Comida y cierre', description: 'Comida de despedida y sesión de feedback.' },
      { time: '17:00 h', activity: 'Salida del camp', description: '' }
    ]
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
            El Programa: <span className="text-primary-500">3 días para un nuevo comienzo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No es un curso, no es una carrera. Es tu <strong>primer paso real</strong> hacia el trail running.
          </p>
          <div className="mt-8">
            <Badge variant="success" size="lg">
              LA EXPERIENCIA PASO A PASO
            </Badge>
          </div>
        </div>

        {/* Program Schedule */}
        <div className="space-y-12 mb-16">
          {programSchedule.map((dayProgram, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              {/* Day Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-dark-950 font-nike mb-2">
                  {dayProgram.day}
                </h3>
                <p className="text-lg text-primary-500 font-semibold">
                  {dayProgram.subtitle}
                </p>
              </div>

              {/* Schedule Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 w-24">Hora</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actividad</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dayProgram.activities.map((activity, activityIndex) => (
                      <tr key={activityIndex} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 font-semibold text-primary-500">
                          {activity.time}
                        </td>
                        <td className="py-4 px-4 font-semibold text-dark-950">
                          {activity.activity}
                        </td>
                        <td className="py-4 px-4 text-gray-600">
                          {activity.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
              Solo <strong className="text-primary-500">20 plazas disponibles</strong> para garantizar 
              atención personalizada y máxima seguridad en el grupo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Inscribirse Ahora
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