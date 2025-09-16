'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Necesito experiencia en trail?',
      answer: 'No, este campamento está diseñado para principiantes.',
      category: 'Nivel'
    },
    {
      question: '¿Y si no conozco a nadie?',
      answer: 'El grupo reducido y el "buen rollo" de la comunidad harán que te sientas como en casa desde el primer momento.',
      category: 'Social'
    },
    {
      question: '¿Qué pasa si me lesiono o hace mal tiempo?',
      answer: 'Tendremos un seguro de accidentes y un plan B para la ruta si el tiempo no acompaña.',
      category: 'Seguridad'
    },
    {
      question: '¿Tengo que llevar mucho material?',
      answer: 'Te enviaremos una lista con lo esencial. Nada de equipo caro.',
      category: 'Material'
    },
    {
      question: '¿Qué nivel físico necesito?',
      answer: 'Solo necesitas estar en forma básica y tener ganas de aprender. Si corres regularmente, estás listo.',
      category: 'Nivel'
    },
    {
      question: '¿Cuál es la política de cancelación?',
      answer: 'Reserva con solo 50€. El resto se paga al llegar al evento. Puedes cancelar hasta 15 días antes con devolución del 100%.',
      category: 'Reserva'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" size="lg" className="mb-4">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-display-3 font-nike text-dark-950 mb-6">
            ¿TIENES <span className="text-primary-500">DUDAS?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos las preguntas más comunes sobre el Trail Camp de Iniciación
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <HelpCircle className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <span className="inline-block bg-slate-800 text-white px-2 py-1 rounded-full text-xs font-semibold mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-bold text-dark-950 font-nike">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-600" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pl-16">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800 rounded-2xl p-8 text-white">
            <div className="max-w-2xl mx-auto">
              <HelpCircle className="h-12 w-12 text-primary-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 font-nike">
                ¿Tienes más preguntas?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Estamos aquí para resolver cualquier duda que tengas. 
                No dudes en contactarnos directamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@trailcamp.com" 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
                >
                  Enviar Email
                </a>
                <a 
                  href="https://wa.me/34600000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-6 py-3 rounded-full font-semibold transition-all duration-200"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
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

export default FAQSection;