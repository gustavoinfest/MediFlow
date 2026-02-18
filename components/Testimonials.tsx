import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'Dra. Camila Rodrigues',
    role: 'Dermatologista',
    image: 'https://picsum.photos/100/100?random=1',
    quote: 'O MediFlow mudou completamente a dinâmica do meu consultório. As confirmações automáticas reduziram minhas faltas em 40% no primeiro mês.'
  },
  {
    name: 'Dr. Ricardo Mendes',
    role: 'Cardiologista',
    image: 'https://picsum.photos/100/100?random=2',
    quote: 'Já usei outros sistemas, mas nenhum é tão intuitivo. A parte financeira é fantástica, consigo ver exatamente quanto ganhei no mês com um clique.'
  },
  {
    name: 'Clínica Bem Estar',
    role: 'Equipe Multidisciplinar',
    image: 'https://picsum.photos/100/100?random=3',
    quote: 'A funcionalidade de telemedicina nos permitiu atender pacientes de outros estados. O suporte é rápido e sempre resolvem nossos problemas.'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Quem usa, recomenda
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Junte-se a uma comunidade de profissionais de saúde que escolheram a excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-8 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-8 opacity-50 grayscale">
            {/* Mock Logos */}
            <span className="text-2xl font-bold font-serif text-slate-400">HealthPlus</span>
            <span className="text-2xl font-bold font-sans text-slate-400">MEDICORP</span>
            <span className="text-2xl font-bold font-mono text-slate-400">DocCenter</span>
            <span className="text-2xl font-bold font-serif italic text-slate-400">VitaLife</span>
          </div>
          <p className="text-xs text-slate-400 mt-4">Mais de 2.000 clínicas parceiras em todo o Brasil.</p>
        </div>
      </div>
    </section>
  );
};
