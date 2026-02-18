import React, { useState } from 'react';
import { Sparkles, MessageSquare, Copy, Check } from 'lucide-react';
import { generatePatientResponse } from '../services/geminiService';

export const AIResponseGenerator: React.FC = () => {
  const [context, setContext] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!context.trim()) return;
    
    setLoading(true);
    setResponse('');
    const result = await generatePatientResponse(context);
    setResponse(result);
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-demo" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-500 rounded-full blur-[128px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/50 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-6">
              <Sparkles size={14} />
              Powered by Google Gemini
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Atendimento impecável com <span className="text-teal-400">Inteligência Artificial</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Não perca tempo pensando em como responder mensagens difíceis. 
              O assistente IA do MediFlow sugere respostas profissionais e empáticas para seus pacientes em segundos.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <span className="text-xl font-bold text-teal-400">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Descreva a situação</h4>
                  <p className="text-slate-400">Digite brevemente o que o paciente perguntou ou o problema a ser resolvido.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <span className="text-xl font-bold text-teal-400">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">A IA gera a resposta</h4>
                  <p className="text-slate-400">Nossa IA cria uma sugestão de texto polida e pronta para enviar via WhatsApp ou E-mail.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare size={20} className="text-teal-400" />
              Teste agora: Gerador de Respostas
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  O que o paciente disse? (Ex: Achou o valor da consulta caro)
                </label>
                <textarea 
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none h-24 placeholder-slate-600 transition-all"
                  placeholder="Digite aqui o contexto..."
                />
              </div>
              
              <button 
                onClick={handleGenerate}
                disabled={loading || !context}
                className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                  loading || !context 
                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
                    : 'bg-teal-500 hover:bg-teal-400 text-slate-900 hover:shadow-lg hover:shadow-teal-500/20'
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                    Gerando...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    Gerar Sugestão
                  </>
                )}
              </button>

              {response && (
                <div className="mt-6 pt-6 border-t border-slate-700 animate-fade-in">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-teal-400">Sugestão da IA:</span>
                    <button 
                      onClick={copyToClipboard}
                      className="text-slate-400 hover:text-white transition-colors p-1"
                      title="Copiar texto"
                    >
                      {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                    </button>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-4 text-slate-300 text-sm leading-relaxed whitespace-pre-wrap border border-slate-800">
                    {response}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
