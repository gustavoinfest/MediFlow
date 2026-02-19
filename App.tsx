
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Mail, 
  DollarSign, 
  Video, 
  Globe,
  LogOut,
  Bell,
  Search,
  Settings as SettingsIcon,
  Activity
} from 'lucide-react';
import { ViewType, AutoMessages } from './types';
import { Dashboard } from './components/Dashboard';
import { Agenda } from './components/Agenda';
import { Prontuario } from './components/Prontuario';
import { Financeiro } from './components/Financeiro';
import { Settings } from './components/Settings';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [clinicName, setClinicName] = useState('MediFlow');
  const [messages, setMessages] = useState<AutoMessages>({
    birthday: 'Parabéns pelo seu dia! 🎉 A [Clinica] te deseja muita saúde e felicidades!',
    confirmation: 'Olá [Paciente], sua consulta na [Clinica] está confirmada para o dia [Data] às [Hora].',
    reminder: 'Olá [Paciente], faz tempo que não nos vemos! Que tal agendar seu retorno na [Clinica]?'
  });

  const menuItems = [
    { id: 'dashboard', label: 'Início', icon: LayoutDashboard },
    { id: 'agenda', label: 'Agenda Médica', icon: Calendar },
    { id: 'prontuario', label: 'Prontuário Eletrônico', icon: FileText },
    { id: 'marketing', label: 'Marketing Médico', icon: Mail },
    { id: 'financeiro', label: 'Gestão Financeira', icon: DollarSign },
    { id: 'teleconsulta', label: 'Teleconsulta', icon: Video },
    { id: 'agendamento', label: 'Agendamento Online', icon: Globe },
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard onNavigate={setCurrentView} clinicName={clinicName} />;
      case 'agenda': return <Agenda />;
      case 'prontuario': return <Prontuario />;
      case 'financeiro': return <Financeiro />;
      case 'configuracoes': return (
        <Settings 
          clinicName={clinicName} 
          setClinicName={setClinicName} 
          messages={messages} 
          setMessages={setMessages} 
        />
      );
      default: return (
        <div className="flex flex-col items-center justify-center h-full text-slate-500">
          <Globe size={64} className="mb-4 opacity-20" />
          <h2 className="text-xl font-medium">Módulo em Desenvolvimento</h2>
          <p>Esta funcionalidade será integrada em breve.</p>
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="mt-4 text-emerald-600 font-semibold hover:underline"
          >
            Voltar ao início
          </button>
        </div>
      );
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
            <Activity size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight truncate">{clinicName}</span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentView(item.id as ViewType)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    currentView === item.id 
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-1">
          <button 
            onClick={() => setCurrentView('configuracoes')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              currentView === 'configuracoes' 
                ? 'bg-slate-700 text-white' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <SettingsIcon size={18} />
            Configurações
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-colors text-sm w-full rounded-lg hover:bg-slate-800">
            <LogOut size={18} />
            Sair do Sistema
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar paciente ou consulta..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-slate-600 hover:text-emerald-600 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">3</span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-900 leading-none">Dr. Ricardo Mendes</p>
                <p className="text-xs text-slate-500 mt-1">CRM 12345-SP</p>
              </div>
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold border border-emerald-200">
                RM
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic View */}
        <main className="flex-1 overflow-y-auto p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
