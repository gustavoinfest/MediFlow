import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Software de Gestão Médica #1
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              A gestão da sua clínica <span className="text-teal-600">simples e inteligente.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl">
              Organize sua agenda, prontuários e financeiro em um só lugar. 
              Junte-se a mais de 15.000 médicos que transformaram seus consultórios com o MediFlow.
            </p>

            <ul className="space-y-3">
              {['Agenda médica inteligente com confirmação via WhatsApp', 'Prontuário eletrônico personalizável', 'Faturamento TISS e controle financeiro completo'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lead Form Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Faça um teste grátis</h3>
              <p className="text-slate-500 mb-6 text-sm">Sem cartão de crédito. Cancele quando quiser.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome completo</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="Dr. João Silva" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail profissional</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="joao@clinica.com" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label htmlFor="crm" className="block text-sm font-medium text-slate-700 mb-1">Especialidade</label>
                    <select id="crm" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white">
                      <option>Selecione</option>
                      <option>Dermatologia</option>
                      <option>Cardiologia</option>
                      <option>Pediatria</option>
                      <option>Psicologia</option>
                      <option>Outra</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg">
                  Ver demonstração agora
                </button>
                
                <p className="text-xs text-center text-slate-400 mt-4">
                  Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};