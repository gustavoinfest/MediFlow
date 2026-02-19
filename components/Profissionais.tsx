
import React, { useState } from 'react';
import { UserPlus, Search, MoreHorizontal, Mail, Phone, Shield, X, Check } from 'lucide-react';
import { Professional } from '../types';

interface ProfissionaisProps {
  professionals: Professional[];
  setProfessionals: React.Dispatch<React.SetStateAction<Professional[]>>;
}

export const Profissionais: React.FC<ProfissionaisProps> = ({ professionals, setProfessionals }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [newProf, setNewProf] = useState<Partial<Professional>>({
    status: 'active',
    specialty: 'Clínica Geral'
  });

  const filtered = professionals.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProf.name || !newProf.crm) return;
    
    const professional: Professional = {
      id: Math.random().toString(36).substr(2, 9),
      name: newProf.name as string,
      crm: newProf.crm as string,
      specialty: newProf.specialty as string,
      email: newProf.email || '',
      phone: newProf.phone || '',
      status: 'active'
    };

    setProfessionals([...professionals, professional]);
    setIsAdding(false);
    setNewProf({ status: 'active', specialty: 'Clínica Geral' });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Corpo Clínico</h2>
          <p className="text-slate-500">Gerencie os profissionais e especialistas da sua unidade.</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-emerald-200 transition-all active:scale-95"
        >
          <UserPlus size={20} />
          Cadastrar Profissional
        </button>
      </div>

      {isAdding && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="font-bold text-slate-900">Novo Cadastro de Profissional</h3>
              <button onClick={() => setIsAdding(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleAdd} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome Completo</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 outline-none"
                    value={newProf.name || ''}
                    onChange={e => setNewProf({...newProf, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">CRM / Registro</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 outline-none"
                    value={newProf.crm || ''}
                    onChange={e => setNewProf({...newProf, crm: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Especialidade</label>
                  <select 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 outline-none"
                    value={newProf.specialty}
                    onChange={e => setNewProf({...newProf, specialty: e.target.value})}
                  >
                    <option>Clínica Geral</option>
                    <option>Cardiologia</option>
                    <option>Dermatologia</option>
                    <option>Pediatria</option>
                    <option>Ginecologia</option>
                    <option>Psicologia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 outline-none"
                    value={newProf.phone || ''}
                    onChange={e => setNewProf({...newProf, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 outline-none"
                    value={newProf.email || ''}
                    onChange={e => setNewProf({...newProf, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all"
                >
                  Finalizar Cadastro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por nome ou especialidade..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                <th className="px-6 py-4">Profissional</th>
                <th className="px-6 py-4">Registro / CRM</th>
                <th className="px-6 py-4">Contato</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((prof) => (
                <tr key={prof.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                        {prof.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{prof.name}</p>
                        <p className="text-xs text-slate-500">{prof.specialty}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">
                      {prof.crm}
                    </span>
                  </td>
                  <td className="px-6 py-5 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Mail size={12} className="text-slate-400" />
                      {prof.email}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Phone size={12} className="text-slate-400" />
                      {prof.phone}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px] uppercase">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      Ativo
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-slate-400 hover:text-emerald-600 p-2 rounded-lg hover:bg-emerald-50 transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-slate-400">
                    Nenhum profissional encontrado com os critérios de busca.
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
