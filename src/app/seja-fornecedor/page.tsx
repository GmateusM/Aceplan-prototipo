import { Metadata } from 'next';
import { User, Phone, Mail, FileUp, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: "Seja um Fornecedor - Aceplan",
};

export default function SejaFornecedor() {
  return (
    <div className="bg-[#FAF9F6] w-full min-h-screen py-24 font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
           <h1 className="text-5xl font-bold text-brand-text font-mitr mb-4">Seja um fornecedor</h1>
           <p className="text-gray-500 text-lg">Preencha o formulário abaixo e envie seus dados para nossa equipe de compras.</p>
        </div>

        <form className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100 space-y-6">
          <div className="relative">
            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-orange" size={20} />
            <input type="text" name="nome" placeholder="Qual o seu nome" required className="w-full bg-brand-bg rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-orange text-brand-text" />
          </div>

          <div className="relative">
            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-orange" size={20} />
            <input type="tel" name="telefone" placeholder="Telefone" required className="w-full bg-brand-bg rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-orange text-brand-text" />
          </div>

          <div className="relative">
            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-orange" size={20} />
            <input type="email" name="email" placeholder="E-mail" required className="w-full bg-brand-bg rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-orange text-brand-text" />
          </div>

          <div className="relative flex items-center justify-between w-full bg-brand-bg rounded-full py-4 px-6 text-gray-500 cursor-pointer overflow-hidden">
            <div className="flex items-center gap-3">
               <FileUp className="text-brand-orange" size={20} />
               <span>Escolha um arquivo*</span>
            </div>
            <span className="font-bold text-brand-orange text-sm uppercase tracking-wider">Procurar</span>
            <input type="file" name="arquivo" required className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>

          <div className="relative">
             <MessageSquare className="absolute left-6 top-6 text-brand-orange" size={20} />
             <textarea name="mensagem" rows={5} placeholder="Digite uma observação / área de atuação" required className="w-full bg-brand-bg rounded-3xl py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-orange text-brand-text resize-none"></textarea>
          </div>

          <button type="submit" className="w-full bg-brand-orange text-white rounded-full py-4 font-bold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all uppercase tracking-wider">
             Enviar Cadastro
          </button>
        </form>
      </div>
    </div>
  );
}
