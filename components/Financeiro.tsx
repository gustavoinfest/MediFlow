
import React, { useState, useMemo } from 'react';
import { DollarSign, TrendingUp, TrendingDown, MoreHorizontal, Download, Filter, Search } from 'lucide-react';
import { Transaction } from '../types';

const transactions: Transaction[] = [
  { id: '1', description: 'Consulta Ana Maria', amount: 350.00, type: 'income', date: '2024-10-20', category: 'Atendimento' },
  { id: '2', description: 'Aluguel Consultório', amount: -2500.00, type: 'expense', date: '2024-10-18', category: 'Infraestrutura' },
  { id: '3', description: 'Convênio Unimed', amount: 1250.40, type: 'income', date: '2024-10-17', category: 'Convênio' },
  { id: '4', description: 'Material de Limpeza', amount: -150.00, type: 'expense', date: '2024-10-15', category: 'Suprimentos' },
  { id: '5', description: 'Assinatura Software', amount: -299.90, type: 'expense', date: '2024-10-10', category: 'Software' },
];

export const Financeiro: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase()) || t.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || t.type === filterType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, filterType]);

  const stats = useMemo(() => {
    const income = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
    return { income, expense, balance: income + expense };
  }, []);

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Gestão Financeira</h2>
          <p className="text-slate-500">Controle seu fluxo de caixa e aplique filtros para análise.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-50 transition-all">
            <Download size={18} />
            Relatórios
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow-lg shadow-blue-200 transition-all">
            + Nova Transação
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border-l-4 border-l-emerald-500 border border-slate-200 shadow-sm relative overflow-hidden">
          <p className="text-sm font-medium text-slate-500 mb-1">Entradas</p>
          <p className="text-3xl font-bold text-slate-900">R$ {stats.income.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
          <TrendingUp size={40} className="text-emerald-50 absolute bottom-4 right-6" />
        </div>
        <div className="bg-white p-6 rounded-2xl border-l-4 border-l-red-500 border border-slate-200 shadow-sm relative overflow-hidden">
          <p className="text-sm font-medium text-slate-500 mb-1">Saídas</p>
          <p className="text-3xl font-bold text-slate-900">R$ {Math.abs(stats.expense).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
          <TrendingDown size={40} className="text-red-50 absolute bottom-4 right-6" />
        </div>
        <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-xl shadow-blue-200 relative overflow-hidden">
          <p className="text-sm font-medium opacity-80 mb-1">Saldo Atual</p>
          <p className="text-3xl font-bold">R$ {stats.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
          <DollarSign size={40} className="opacity-20 absolute bottom-4 right-6" />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex bg-slate-100 p-1 rounded-lg w-full md:w-auto">
            <button 
              onClick={() => setFilterType('all')}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filterType === 'all' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Todas
            </button>
            <button 
              onClick={() => setFilterType('income')}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filterType === 'income' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Entradas
            </button>
            <button 
              onClick={() => setFilterType('expense')}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filterType === 'expense' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Saídas
            </button>
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar descrição ou categoria..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-blue-500/20 outline-none"
            />
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredTransactions.map((t) => (
            <div key={t.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  t.type === 'income' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                }`}>
                  {t.type === 'income' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.description}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded font-bold uppercase">{t.category}</span>
                    <span className="text-[10px] text-slate-400">{t.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <p className={`font-bold ${t.type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>
                  {t.type === 'income' ? '+' : '-'} R$ {Math.abs(t.amount).toFixed(2)}
                </p>
                <button className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          ))}
          {filteredTransactions.length === 0 && (
            <div className="p-10 text-center text-slate-400">Nenhuma transação encontrada com estes critérios.</div>
          )}
        </div>
      </div>
    </div>
  );
};
