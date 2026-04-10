import { Metadata } from 'next';
import { User, Mail, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: "Canal de Denúncias - Aceplan",
};

export default function CanalDenuncias() {
  return (
    <div className="bg-[#FAF9F6] w-full min-h-screen py-24 font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
           <h1 className="text-5xl font-bold text-brand-text font-mitr mb-4">Canal Direto - Denúncias</h1>
           <p className="text-gray-500 text-lg max-w-xl mx-auto">Este canal é seguro e pode ser anônimo. Utilize-o para reportar quaisquer irregularidades, fraudes ou desvios de conduta.</p>
        </div>

        <form className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100 space-y-6">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Os campos de contato são Opcionais</p>
          
          <div className="relative">
            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" name="nome" placeholder="Seu nome (Opcional)" className="w-full bg-brand-bg rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-orange text-brand-text" />
          </div>

          <div className="relative">
            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="email" name="email" placeholder="E-mail (Opcional)" className="w-full bg-brand-bg rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-orange text-brand-text" />
          </div>

          <div className="relative">
             <MessageSquare className="absolute left-6 top-6 text-brand-orange" size={20} />
             <textarea name="mensagem" rows={8} placeholder="Descreva a denúncia em detalhes (Obrigatório)*" required className="w-full bg-brand-bg rounded-3xl py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-orange text-brand-text resize-none"></textarea>
          </div>

          <button type="submit" className="w-full bg-brand-orange text-white rounded-full py-4 font-bold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all uppercase tracking-wider">
             Enviar Relatório
          </button>
        </form>
      </div>
    </div>
  );
}
