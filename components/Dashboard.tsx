
import React from 'react';
import { 
  Calendar, 
  FileText, 
  Mail, 
  DollarSign, 
  Video, 
  Globe,
  TrendingUp,
  Users,
  Clock,
  Cake,
  MessageCircle
} from 'lucide-react';
import { ViewType, Patient } from '../types';

interface DashboardProps {
  onNavigate: (view: ViewType) => void;
  clinicName: string;
}

const mockPatients: Patient[] = [
  { id: '1', name: 'Ana Maria Ferreira', cpf: '123.456.789-00', birthDate: new Date().toISOString().split('T')[0], phone: '11999999999', lastVisit: '15/10/2024', record: '' },
  { id: '2', name: 'Bruno Henrique Silva', cpf: '987.654.321-11', birthDate: '1990-05-15', phone: '11888888888', lastVisit: '02/09/2024', record: '' },
  { id: '3', name: 'Juliana Costa', cpf: '456.789.123-22', birthDate: new Date().toISOString().split('T')[0], phone: '11777777777', lastVisit: '20/10/2024', record: '' },
];

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate, clinicName }) => {
  const cards = [
    { id: 'agenda', title: 'Agenda Médica', icon: Calendar, color: 'bg-emerald-500' },
    { id: 'prontuario', title: 'Prontuário Eletrônico', icon: FileText, color: 'bg-emerald-600' },
    { id: 'marketing', title: 'Marketing Médico', icon: Mail, color: 'bg-emerald-500' },
    { id: 'financeiro', title: 'Gestão Financeira', icon: DollarSign, color: 'bg-emerald-600' },
    { id: 'teleconsulta', title: 'Teleconsulta', icon: Video, color: 'bg-emerald-500' },
    { id: 'agendamento', title: 'Agendamento Online', icon: Globe, color: 'bg-emerald-600' },
  ];

  const today = new Date().toISOString().slice(5, 10); // MM-DD
  const birthdayBoys = mockPatients.filter(p => p.birthDate.slice(5, 10) === today);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Bem-vindo à {clinicName}</h1>
          <p className="text-slate-500">Hoje é {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Novos Pacientes</p>
                <p className="text-2xl font-bold text-slate-900">12</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Faturamento do Mês</p>
                <p className="text-2xl font-bold text-slate-900">R$ 24.500</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => onNavigate(card.id as ViewType)}
                className={`${card.color} group relative p-6 rounded-2xl text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden min-h-[140px]`}
              >
                <card.icon size={32} strokeWidth={1.5} className="mb-2" />
                <h3 className="text-sm font-bold tracking-wide">{card.title}</h3>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-orange-50 border-b border-orange-100 flex items-center gap-2">
              <Cake size={20} className="text-orange-600" />
              <h3 className="font-bold text-orange-900 text-sm">Aniversariantes de Hoje</h3>
            </div>
            <div className="p-4 space-y-4">
              {birthdayBoys.length > 0 ? (
                birthdayBoys.map(p => (
                  <div key={p.id} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-bold">
                        {p.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{p.name}</p>
                        <p className="text-[10px] text-slate-500">Completando idade hoje!</p>
                      </div>
                    </div>
                    <button 
                      title="Enviar Parabéns"
                      className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      onClick={() => window.open(`https://wa.me/${p.phone}?text=Parabéns pelo seu dia! 🎉`, '_blank')}
                    >
                      <MessageCircle size={18} />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-400 text-center py-4 italic">Nenhum aniversariante hoje.</p>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
              <Clock size={18} className="text-emerald-600" />
              Lembretes Rápidos
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-xs text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                Revisar faturamento Unimed (vence amanhã)
              </li>
              <li className="flex items-center gap-3 text-xs text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Confirmar cirurgia das 14:00
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
