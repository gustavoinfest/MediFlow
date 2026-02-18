import React from 'react';
import { Activity, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Activity size={24} className="text-teal-500" />
              <span className="text-xl font-bold">MediFlow</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Transformando a gestão de saúde no Brasil com tecnologia de ponta e inteligência artificial. Simplifique sua rotina hoje.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-teal-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Produto</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Planos e Preços</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Telemedicina</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Segurança</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Integrações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Blog Médico</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Imprensa</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Suporte</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Vídeo Tutoriais</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Status do Sistema</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MediFlow Tecnologia Ltda. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-500">
            Feito com ❤️ para médicos de todo o Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
};
