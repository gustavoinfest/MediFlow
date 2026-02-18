
import React, { useState } from 'react';
import { Save, Building2, MessageSquare, CheckCircle2, Info } from 'lucide-react';
import { AutoMessages } from '../types';

interface SettingsProps {
  clinicName: string;
  setClinicName: (name: string) => void;
  messages: AutoMessages;
  setMessages: (messages: AutoMessages) => void;
}

export const Settings: React.FC<SettingsProps> = ({ clinicName, setClinicName, messages, setMessages }) => {
  const [localName, setLocalName] = useState(clinicName);
  const [localMessages, setLocalMessages] = useState(messages);
  const [showSaved, setShowSaved] = useState(false);

  const handleSave = () => {
    setClinicName(localName);
    setMessages(localMessages);
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Configurações do Sistema</h2>
          <p className="text-slate-500">Personalize a identidade da sua clínica e a comunicação com pacientes.</p>
        </div>
        <button 
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95"
        >
          <Save size={20} />
          Salvar Alterações
        </button>
      </div>

      {showSaved && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl flex items-center gap-3 animate-in slide-in-from-top duration-300">
          <CheckCircle2 size={20} />
          <span className="font-medium">Configurações salvas com sucesso!</span>
        </div>
      )}

      <div className="grid gap-8">
        {/* Clinic Name Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
            <Building2 className="text-blue-600" size={20} />
            <h3 className="font-bold text-slate-900">Identidade da Clínica</h3>
          </div>
          <div className="p-8">
            <div className="max-w-md">
              <label className="block text-sm font-bold text-slate-700 mb-2">Nome da Clínica / Consultório</label>
              <input 
                type="text" 
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
                placeholder="Ex: Clínica Bem Estar"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium text-slate-800"
              />
              <p className="mt-3 text-xs text-slate-400 flex items-center gap-1">
                <Info size={14} />
                Este nome será exibido na barra lateral e em documentos.
              </p>
            </div>
          </div>
        </div>

        {/* Automatic Messages Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
            <MessageSquare className="text-blue-600" size={20} />
            <h3 className="font-bold text-slate-900">Mensagens Automáticas (Templates)</h3>
          </div>
          <div className="p-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Mensagem de Aniversário</label>
                  <textarea 
                    value={localMessages.birthday}
                    onChange={(e) => setLocalMessages({...localMessages, birthday: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm resize-none"
                    placeholder="Escreva a mensagem..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Confirmação de Consulta</label>
                  <textarea 
                    value={localMessages.confirmation}
                    onChange={(e) => setLocalMessages({...localMessages, confirmation: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm resize-none"
                    placeholder="Escreva a mensagem..."
                  />
                </div>
              </div>
              <div className="space-y-4">
                 <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Lembrete de Retorno</label>
                  <textarea 
                    value={localMessages.reminder}
                    onChange={(e) => setLocalMessages({...localMessages, reminder: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm resize-none"
                    placeholder="Escreva a mensagem..."
                  />
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h4 className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Info size={16} />
                    Dica de Variáveis
                  </h4>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Você pode usar etiquetas entre colchetes que o sistema substituirá automaticamente:<br/><br/>
                    <code className="bg-white/50 px-1 rounded font-bold">[Paciente]</code> - Nome do Paciente<br/>
                    <code className="bg-white/50 px-1 rounded font-bold">[Clinica]</code> - Nome da sua Clínica<br/>
                    <code className="bg-white/50 px-1 rounded font-bold">[Data]</code> - Data da Consulta<br/>
                    <code className="bg-white/50 px-1 rounded font-bold">[Hora]</code> - Hora da Consulta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
