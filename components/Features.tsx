import React from 'react';
import { CalendarDays, FileText, Wallet, Smartphone, Check, Users, ShieldCheck, Mail } from 'lucide-react';

const FeatureSection: React.FC<{
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  items: string[];
  imageSide: 'left' | 'right';
  gradientColors: string;
}> = ({ id, title, description, icon: Icon, items, imageSide, gradientColors }) => {
  return (
    <div id={id} className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${imageSide === 'right' ? '' : 'md:flex-row-reverse'}`}>
          
          <div className="w-full md:w-1/2 space-y-6">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${gradientColors} text-white shadow-lg mb-2`}>
              <Icon size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
            
            <ul className="space-y-4 pt-4">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-6 text-teal-600 font-bold hover:text-teal-700 inline-flex items-center gap-2 group">
              Saiba mais sobre {title} 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className={`absolute -inset-4 bg-gradient-to-r ${gradientColors} opacity-20 blur-xl rounded-3xl group-hover:opacity-30 transition-opacity duration-500`}></div>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8 aspect-[4/3] flex flex-col justify-center items-center">
                 {/* Mock UI Representation */}
                 <div className="w-full h-full bg-slate-50 rounded-lg border border-slate-200 p-4 relative overflow-hidden">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-8 bg-slate-200 rounded w-1/3"></div>
                        <div className="h-32 bg-white rounded border border-slate-100 shadow-sm p-3 space-y-2">
                             <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                             <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                             <div className="h-4 bg-slate-100 rounded w-full"></div>
                        </div>
                         <div className="grid grid-cols-2 gap-3">
                             <div className="h-24 bg-white rounded border border-slate-100 shadow-sm"></div>
                             <div className="h-24 bg-white rounded border border-slate-100 shadow-sm"></div>
                         </div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 flex items-center gap-2 animate-bounce-slow">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-bold text-slate-700">Status: Ativo</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section className="bg-slate-50">
      
      {/* Intro */}
      <div className="py-20 text-center container mx-auto px-4">
         <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Funcionalidades pensadas para você</h2>
         <p className="text-lg text-slate-600 max-w-2xl mx-auto">
           Descubra como cada ferramenta do MediFlow foi desenhada para otimizar o tempo e aumentar a rentabilidade da sua clínica.
         </p>
      </div>

      <FeatureSection
        id="agenda"
        title="Agenda Médica Inteligente"
        description="Organize seus horários, reduza faltas e tenha o controle total da sua recepção. Nossa agenda multisspecialista permite visualização diária, semanal e mensal."
        icon={CalendarDays}
        items={[
          "Confirmação automática de consultas via WhatsApp e SMS",
          "Lista de espera inteligente que preenche horários vagos",
          "Agendamento online integrado ao seu site",
          "Bloqueio de horários e gestão de feriados"
        ]}
        imageSide="right"
        gradientColors="from-blue-500 to-cyan-500"
      />

      <FeatureSection
        id="prontuario"
        title="Prontuário Eletrônico Personalizável"
        description="Tenha o histórico completo do paciente na palma da mão. Crie modelos de anamnese específicos para sua especialidade e ganhe agilidade no atendimento."
        icon={FileText}
        items={[
          "Modelos de documentos, atestados e receitas prontos",
          "Prescrição eletrônica com base de medicamentos atualizada",
          "Anexação de imagens e arquivos (exames)",
          "Assinatura digital padrão ICP-Brasil"
        ]}
        imageSide="left"
        gradientColors="from-emerald-500 to-teal-500"
      />

      <FeatureSection
        id="financeiro"
        title="Gestão Financeira Completa"
        description="Não perca dinheiro por falta de controle. Monitore o fluxo de caixa, contas a pagar/receber e faça o faturamento de convênios sem dor de cabeça."
        icon={Wallet}
        items={[
          "Faturamento TISS e TUSS automatizado",
          "Relatórios de repasse médico automáticos",
          "Controle de glosas e inadimplência",
          "DRE Gerencial em tempo real"
        ]}
        imageSide="right"
        gradientColors="from-orange-500 to-amber-500"
      />

      <FeatureSection
        id="telemedicina"
        title="Telemedicina Integrada"
        description="Atenda pacientes de qualquer lugar com segurança. Nossa plataforma de vídeo é estável, segura e não exige instalação de nenhum software adicional."
        icon={Smartphone}
        items={[
          "Videochamada integrada ao prontuário",
          "Envio de link da sala por WhatsApp/SMS",
          "Termo de consentimento digital",
          "Gravação de consulta (opcional)"
        ]}
        imageSide="left"
        gradientColors="from-purple-500 to-indigo-500"
      />

      <FeatureSection
        id="marketing"
        title="Marketing e Fidelização"
        description="Encante seus pacientes e faça com que eles voltem. Ferramentas automatizadas de relacionamento para manter sua agenda sempre cheia."
        icon={Mail}
        items={[
          "Campanhas de E-mail Marketing e SMS",
          "Pesquisa de satisfação (NPS) automática",
          "Mensagens de aniversário automáticas",
          "Lembretes de retorno"
        ]}
        imageSide="right"
        gradientColors="from-pink-500 to-rose-500"
      />

    </section>
  );
};