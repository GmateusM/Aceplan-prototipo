'use client';

import { UploadCloud } from 'lucide-react';

/* Usaremos uma server action vazia temporária caso precisem, 
   mas o visual foi priorizado conforme instruções originais */
export default function TrabalheConosco() {
  return (
    <div className="bg-[#FAF9F6] w-full min-h-screen py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-5/12">
            <h1 className="text-4xl md:text-5xl font-bold font-mitr text-brand-text mb-6 leading-tight">Você gostaria <br/>de se juntar <br/>ao nosso time?</h1>
            <p className="text-gray-600 font-light leading-relaxed mb-6 text-justify">
              Se você deseja trabalhar em um grupo que está há 36 anos construindo com responsabilidade, qualidade e eficiência, e que valoriza seus clientes, colaboradores e parceiros, você está no lugar certo! Verifique nossas vagas e envie seu currículo.
            </p>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold font-mitr text-brand-text mb-8">Envie seu currículo</h2>
              
              <form className="flex flex-col gap-5">
                <div>
                   <input type="text" name="nome" placeholder="Qual o seu nome" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" />
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                   <input type="tel" name="telefone" placeholder="Telefone" required className="w-full md:w-1/2 px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" />
                   <input type="email" name="email" placeholder="E-mail" required className="w-full md:w-1/2 px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" />
                </div>
                <div>
                   <input type="text" name="funcao" placeholder="Função desejada" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" />
                </div>
                
                <div className="relative group cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-brand-orange transition-colors bg-gray-50">
                   <input type="file" name="arquivo" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
                   <div className="flex flex-col items-center gap-2 pointer-events-none text-gray-500 group-hover:text-brand-orange transition-colors">
                      <UploadCloud size={32} />
                      <span className="font-bold">Anexar currículo</span>
                      <span className="text-xs">Clique ou arraste o arquivo aqui (.pdf, .doc)</span>
                   </div>
                </div>

                <div>
                   <textarea name="mensagem" placeholder="Digite uma mensagem ou carta de apresentação" required rows={4} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" />
                </div>

                <button type="submit" className="w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 shadow-lg shadow-orange-500/30 transition-all uppercase tracking-wider text-sm mt-2">
                   Enviar Currículo
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
