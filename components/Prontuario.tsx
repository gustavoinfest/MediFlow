
import React, { useState, useMemo } from 'react';
import { Search, UserPlus, Filter, FileText, ChevronRight, Cake, Calendar as CalendarIcon, X } from 'lucide-react';
import { Patient } from '../types';

const mockPatients: Patient[] = [
  { id: '1', name: 'Ana Maria Ferreira', cpf: '123.456.789-00', birthDate: '1985-10-20', phone: '11999999999', lastVisit: '15/10/2024', record: 'Paciente com histórico de hipertensão...' },
  { id: '2', name: 'Bruno Henrique Silva', cpf: '987.654.321-11', birthDate: '1990-05-15', phone: '11888888888', lastVisit: '02/09/2024', record: 'Retorno de cirurgia ortopédica...' },
  { id: '3', name: 'Carlos Alberto Gomes', cpf: '456.789.123-22', birthDate: '1975-12-05', phone: '11777777777', lastVisit: '20/10/2024', record: 'Check-up anual solicitado...' },
  { id: '4', name: 'Daniela Lima', cpf: '321.654.987-33', birthDate: '1995-10-12', phone: '11666666666', lastVisit: '10/10/2024', record: 'Sintomas gripais leves...' },
  { id: '5', name: 'Eduardo Santos', cpf: '111.222.333-44', birthDate: '1988-02-28', phone: '11555555555', lastVisit: '05/08/2024', record: 'Acompanhamento nutricional' },
];

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export const Prontuario: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [birthMonthFilter, setBirthMonthFilter] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPatients = useMemo(() => {
    return mockPatients.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.cpf.includes(searchTerm);
      const matchesMonth = birthMonthFilter === '' || parseInt(p.birthDate.split('-')[1]) === parseInt(birthMonthFilter);
      return matchesSearch && matchesMonth;
    });
  }, [searchTerm, birthMonthFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setBirthMonthFilter('');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Prontuário Eletrônico</h2>
          <p className="text-slate-500">Pesquise e filtre sua base de pacientes de forma inteligente.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-blue-200 transition-all">
          <UserPlus size={20} />
          Novo Paciente
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Search and Filters Bar */}
        <div className="p-6 border-b border-slate-100 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Nome ou CPF do paciente..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                showFilters ? 'bg-blue-50 border-blue-200 text-blue-600' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Filter size={18} />
              {showFilters ? 'Ocultar Filtros' : 'Filtros Avançados'}
            </button>
            {(searchTerm || birthMonthFilter) && (
              <button 
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg"
              >
                <X size={18} />
                Limpar
              </button>
            )}
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl animate-in slide-in-from-top duration-200">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2">Mês de Aniversário</label>
                <div className="relative">
                  <Cake className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <select 
                    value={birthMonthFilter}
                    onChange={(e) => setBirthMonthFilter(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                  >
                    <option value="">Todos os meses</option>
                    {months.map((m, i) => (
                      <option key={m} value={(i + 1).toString().padStart(2, '0')}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2">Última Visita</label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <select className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none">
                    <option value="">Qualquer período</option>
                    <option value="7">Últimos 7 dias</option>
                    <option value="30">Últimos 30 dias</option>
                    <option value="90">Últimos 3 meses</option>
                  </select>
                </div>
              </div>
              <div className="flex items-end">
                <p className="text-xs text-slate-500 italic">
                  Encontrados: <strong>{filteredPatients.length}</strong> pacientes.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                <th className="px-6 py-4">Paciente</th>
                <th className="px-6 py-4">CPF / Data Nasc.</th>
                <th className="px-6 py-4">Contato</th>
                <th className="px-6 py-4">Último Atendimento</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPatients.map((patient) => {
                const isBirthdayMonth = parseInt(patient.birthDate.split('-')[1]) === (new Date().getMonth() + 1);
                return (
                  <tr key={patient.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                          isBirthdayMonth ? 'bg-orange-100 text-orange-600 ring-2 ring-orange-200' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                        }`}>
                          {patient.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-2">
                            {patient.name}
                            {isBirthdayMonth && <Cake size={14} className="text-orange-500" title="Aniversariante do Mês" />}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-500">
                      <p>{patient.cpf}</p>
                      <p className="text-[10px] font-medium text-slate-400">{new Date(patient.birthDate).toLocaleDateString('pt-BR')}</p>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-500">{patient.phone}</td>
                    <td className="px-6 py-5 text-sm text-slate-500">{patient.lastVisit}</td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-blue-600 font-bold text-sm inline-flex items-center gap-1 hover:underline">
                        Abrir
                        <ChevronRight size={16} />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filteredPatients.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-slate-400">
                    Nenhum paciente encontrado com os filtros aplicados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
