import Image from 'next/image';
import { Target, Eye, Heart, Award } from 'lucide-react';

export default function Institucional() {
  return (
    <div className="bg-[#FAF9F6] w-full min-h-screen py-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 max-w-6xl mb-20 gap-10 lg:gap-16 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold font-mitr text-brand-text mb-6">Quem Somos</h1>
          <div className="text-gray-600 text-lg font-light leading-relaxed space-y-4 text-justify">
            <p>O Grupo Aceplan, fundado em Volta Redonda, está mais de 37 anos construindo com responsabilidade, qualidade e eficiência, valorizando nossos clientes, colaboradores e parceiros.</p>
            <p>Reconhecemos a importância em consolidar os resultados desejados e ajudar nossos clientes a conquistarem o sonho do imóvel próprio.</p>
            <p>Possuímos um histórico de comprometimento em entregar todos os seus empreendimentos dentro do prazo.</p>
            <p>Nossos clientes são a referência para o nosso negócio. Somos um grupo que serve a sociedade, por isso, nós fazemos a diferença na vida das pessoas.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl relative h-[450px]">
          <Image 
            src="https://sgw.aceplanvr.com.br/storage/conteudo/1/368/20241202100051_674daf836c583.jpg"
            alt="Grupo Aceplan"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-white py-20 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold font-mitr text-brand-text mb-12 text-center">Missão, Visão e Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-bg rounded-3xl p-8 shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} className="text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold font-mitr text-brand-text mb-4">Missão</h3>
              <p className="text-gray-600 font-light leading-relaxed text-justify">
                Possibilitar a moradia de qualidade, fazendo a diferença na vida das pessoas e contribuindo com o desenvolvimento econômico e social.
              </p>
            </div>

            <div className="bg-brand-bg rounded-3xl p-8 shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold font-mitr text-brand-text mb-4">Visão</h3>
              <p className="text-gray-600 font-light leading-relaxed text-justify">
                Crescer de forma sólida e sustentável, buscando nos próximos 10 anos atingir o título de melhor construtora de empreendimentos econômicos do Estado do Rio de Janeiro e na posição das 100 maiores do país.
              </p>
            </div>

            <div className="bg-brand-bg rounded-3xl p-8 shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={32} className="text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold font-mitr text-brand-text mb-4">Valores</h3>
              <p className="text-gray-600 font-light leading-relaxed text-justify">
                A Aceplan possui transparência e ética na construção dos seus empreendimentos, entregando qualidade e excelência, apostando em desenvolvimento tecnológico, criatividade e sustentabilidade. Possui compromisso financeiro com seus fornecedores, colaboradores e com o desenvolvimento social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Política de Qualidade */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <div className="w-20 h-20 bg-brand-text rounded-full flex items-center justify-center mx-auto mb-6">
            <Award size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold font-mitr text-brand-text mb-6">Política de Qualidade</h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed mb-4 text-justify">
            O Grupo Aceplan oferta produtos com qualidade, tendo como parceiros clientes, funcionários e fornecedores, visando resultados que satisfaçam a todos; com compromisso e melhoria contínua, com o atendimento dos requisitos aplicáveis e com a sustentabilidade dos canteiros.
          </p>
          <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">REV 04</span>
        </div>
      </section>

      {/* Nossas Empresas */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold font-mitr text-brand-text mb-12 text-center">Nossas Empresas</h2>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {/* Como extraímos logos originais */}
            <div className="relative w-40 h-24 select-none hover:scale-110 transition-transform">
              <Image src="https://sgw.aceplanvr.com.br/storage/galeria/1/94/20220222101732_6214e26c9f562.png" alt="Empresa 1" fill className="object-contain" />
            </div>
            <div className="relative w-40 h-24 select-none hover:scale-110 transition-transform">
              <Image src="https://sgw.aceplanvr.com.br/storage/galeria/1/94/20220222101735_6214e26f59554.png" alt="Empresa 2" fill className="object-contain" />
            </div>
            <div className="relative w-40 h-24 select-none hover:scale-110 transition-transform">
              <Image src="https://sgw.aceplanvr.com.br/storage/galeria/1/94/20220222101736_6214e27026e07.png" alt="Empresa 3" fill className="object-contain" />
            </div>
            <div className="relative w-40 h-24 select-none hover:scale-110 transition-transform">
              <Image src="https://sgw.aceplanvr.com.br/storage/galeria/1/94/20220225091446_6218c836c152b.png" alt="Empresa 4" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
