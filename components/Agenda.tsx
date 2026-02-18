
import React from 'react';
// Fixed: Added FileText to the lucide-react imports
import { Plus, ChevronLeft, ChevronRight, User, FileText } from 'lucide-react';
import { Appointment } from '../types';

const appointments: Appointment[] = [
  { id: '1', patientName: 'João da Silva', time: '09:00', date: '2024-10-20', type: 'Primeira Consulta', status: 'confirmed' },
  { id: '2', patientName: 'Maria Oliveira', time: '10:00', date: '2024-10-20', type: 'Retorno', status: 'confirmed' },
  { id: '3', patientName: 'Carlos Souza', time: '11:30', date: '2024-10-20', type: 'Avaliação', status: 'pending' },
  { id: '4', patientName: 'Ana Perreira', time: '14:00', date: '2024-10-20', type: 'Cirurgia', status: 'confirmed' },
];

export const Agenda: React.FC = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Agenda Médica</h2>
          <p className="text-slate-500">Gerencie seus compromissos e horários.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-blue-200 transition-all">
          <Plus size={20} />
          Novo Agendamento
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Calendar Side */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900">Outubro 2024</h3>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-slate-100 rounded"><ChevronLeft size={18} /></button>
                <button className="p-1 hover:bg-slate-100 rounded"><ChevronRight size={18} /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-slate-400 mb-2">
              <span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {[...Array(31)].map((_, i) => (
                <button key={i} className={`h-8 w-8 flex items-center justify-center rounded-lg text-sm transition-colors ${i + 1 === 20 ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-100 text-slate-600'}`}>
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-xl">
            <h4 className="font-bold mb-2">Dica do Dia</h4>
            <p className="text-sm opacity-90">Sua agenda de amanhã está com 90% de ocupação. Considere abrir um horário extra na quarta-feira.</p>
          </div>
        </div>

        {/* List Side */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Segunda-feira, 20 de Outubro</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">4 Pacientes</span>
            </div>
            <div className="divide-y divide-slate-100">
              {appointments.map((apt) => (
                <div key={apt.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="text-center w-16">
                      <p className="text-lg font-bold text-slate-900">{apt.time}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Horário</p>
                    </div>
                    <div className="h-10 w-px bg-slate-200"></div>
                    <div>
                      <h4 className="font-bold text-slate-900 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                        {apt.patientName}
                      </h4>
                      <p className="text-sm text-slate-500">{apt.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      apt.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {apt.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                    </span>
                    <button className="text-slate-400 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-all">
                      <FileText size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
