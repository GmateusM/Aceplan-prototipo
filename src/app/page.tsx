'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { propertiesMock } from '@/data/properties';
import { ArrowRight, Quote, ShieldCheck } from 'lucide-react';

export default function Home() {
  const [activeTestimonialTab, setActiveTestimonialTab] = useState<'text' | 'videos'>('text');

  // Hardcoding os imóveis exibidos para refletir extamente a estrutura do HTML original do cliente:
  const arvoredo = propertiesMock.find(p => p.slug === "loteamento-arvoredo-fase-2");
  const mirante = propertiesMock.find(p => p.slug === "loteamento-mirante-do-bosque");
  const pinheiral = propertiesMock.find(p => p.slug === "casas-pinheiral-fase-02");

  const testimonials = [
    { name: "Suellen e Tiago Morais", quote: "É um sonho nosso, de anos, realizado! Estamos muito felizes com a entrega do apartamento. Adquirimos na planta em julho de 2020 e estávamos em uma expectativa muito grande para a entrega. Já casamos, mas ainda não tínhamos casa, agora teremos! Parabéns a Aceplan pelo empreendimento." },
    { name: "Larissa Oliveira e Vinicius Santos", quote: "Foi graças a um stand de vendas da Aceplan que vimos em um dia de folga, que tudo aconteceu, foi tudo muito rápido! Estamos muito felizes. Vamos nos casar em dezembro, mas já vamos começar a arrumar e deixar tudo com a nossa cara." },
    { name: "Vanessa Quintino e Rafael Dias", quote: "Estamos muito ansiosos para mudar, é a realização de um sonho. Nós moramos há dois anos em uma casa que não era nossa e estávamos na expectativa de ter um imóvel próprio, para termos nosso cantinho, colocar tudo do jeito que queremos. Foi uma realização muito grande, o custo e benefício foi muito vantajoso para nós, juntamos o FGTS meu e dele e demos de entrada. Não paramos de pesquisar dicas de decoração e planejados, para deixarmos bem a nossa cara." }
  ];

  const blogPosts = [
    { title: "Grupo Aceplan Celebra 40 Anos de Trajetória", category: "Notícias", img: "/sgw.aceplanvr.com.br/storage/conteudo/1/383/20260320113046_69bd5a16c4eb7.jpg", link: "/blogs" },
    { title: "Grupo Aceplan promove bate-papo com colaboradores em apoio a Campanha Janeiro Branco (Prevenção a Saúde Mental)", category: "Notícias", img: "/sgw.aceplanvr.com.br/storage/conteudo/1/382/20260202102804_6980a664412b2.jpg", link: "/blogs" },
    { title: "Grupo Aceplan realiza confraternização de fim de ano com os colaboradores", category: "Notícias", img: "/sgw.aceplanvr.com.br/storage/conteudo/1/381/20251224102850_694bea924aac4.jpg", link: "/blogs" }
  ];

  return (
    <div className="bg-[#FAF9F6] w-full min-h-screen font-sans">
      
      {/* Slide / Carousel Hero */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex overflow-hidden">
        <a 
          href="https://api.whatsapp.com/send?phone=5524999559898"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full relative group block cursor-pointer"
        >
            <Image 
              src="/sgw.aceplanvr.com.br/storage/conteudo/1/348/20231002161353_651b167135b78.png"
              alt="Banner Aceplan"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-text/80 via-black/20 to-transparent" />
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="hidden md:block absolute bottom-10 md:bottom-20 left-4 md:left-20 z-10 p-6 md:p-0"
            >
               <span className="text-brand-orange uppercase font-bold tracking-[0.2em] text-sm md:text-base drop-shadow-md mb-2 block">
                  Construindo Sonhos
               </span>
               <h1 className="text-white text-4xl md:text-6xl font-black font-mitr leading-tight drop-shadow-xl max-w-2xl">
                  Bem-vindo à nova dimensão Aceplan.
               </h1>
            </motion.div>
        </a>
      </section>

      {/* Novos Empreendimentos */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-text font-mitr border-b-2 border-brand-orange pb-4 inline-block">
              Novos Empreendimentos
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-brand-orange/5 transition-all duration-500 overflow-hidden mb-10 group border border-gray-50 relative"
          >
            {arvoredo && (
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-5/12 h-[350px] lg:h-auto relative overflow-hidden">
                  <Image src={arvoredo?.image || ''} alt={arvoredo?.title || ''} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <span className="absolute bottom-6 left-6 bg-brand-orange text-white text-xs font-black uppercase tracking-widest py-2 px-4 rounded-full shadow-lg pointer-events-none">Novo</span>
                </div>
                <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-3xl md:text-4xl font-black font-mitr text-brand-text mb-2 group-hover:text-brand-orange transition-colors">
                    {arvoredo?.title}
                  </h3>
                  <small className="text-brand-orange tracking-widest mb-6 block uppercase font-bold bg-orange-100 table px-3 py-1 rounded text-xs">{arvoredo?.city}</small>
                  
                  <p className="text-gray-600 font-light text-lg leading-relaxed mb-10">
                    A Fase 02 do Loteamento Arvoredo é um lançamento exclusivo de 126 lote em uma localização privilegiada! Após o sucesso da Fase 01, que consolidou o Loteamento Arvoredo como o loteamento de maior sucesso da região...
                  </p>
                  
                  <ul className="flex flex-wrap gap-8 items-center text-sm font-bold text-brand-text mb-10 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <li className="flex items-center gap-3"><div className="p-2 bg-orange-50 rounded-full"><Image src="/assets/img/plus-circle.svg" width={20} height={20} alt="Icon"/></div> A 15km de Volta Redonda</li>
                    <li className="flex items-center gap-3"><div className="p-2 bg-orange-50 rounded-full"><Image src="/assets/img/area.svg" width={20} height={20} alt="Área"/></div> Lotes a partir de 250m²</li>
                  </ul>
                  
                  <div className="w-full">
                    <Link href={`/empreendimentos/${arvoredo?.slug}`} className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white w-full md:w-max px-10 py-4 rounded-full shadow-xl shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:bg-orange-600 transition-all font-black uppercase tracking-widest text-sm hover:-translate-y-1">
                      Ver Mais <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <div className="text-right">
             <Link href="/empreendimentos" className="inline-flex items-center gap-2 text-brand-orange font-bold uppercase tracking-wide hover:gap-4 transition-all">
                Mais empreendimentos <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* Em Destaque */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="mb-16 text-center"
           >
              <h2 className="text-4xl font-bold text-brand-text font-mitr inline-block border-b-2 border-brand-orange pb-4">
                Em Destaque
              </h2>
           </motion.div>

           <div className="flex flex-col gap-20">
             {mirante && (
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="flex flex-col lg:flex-row gap-12 items-center group"
               >
                 <div className="w-full lg:w-5/12 z-10 lg:-mr-16">
                    <div className="bg-white/90 backdrop-blur-xl p-10 lg:p-12 rounded-3xl shadow-2xl border border-white relative text-right">
                       <div className="absolute top-0 right-10 w-24 h-2 bg-green-500 rounded-b-full"></div>
                       <span className="text-green-600 font-black uppercase tracking-widest text-[10px] block mb-4 mt-2">Pronto para Morar</span>
                       <h4 className="text-2xl md:text-3xl font-black text-brand-text font-mitr mb-4 group-hover:text-brand-orange transition-colors">{mirante?.title}</h4>
                       <h3 className="text-lg font-light text-gray-600 mb-8 leading-relaxed">Tudo que você precisa para viver tranquilo e com bons ares!</h3>
                       <Link href={`/empreendimentos/${mirante?.slug}`} className="inline-flex items-center gap-3 bg-brand-text text-white px-8 py-4 rounded-full shadow-lg shadow-gray-300 font-bold uppercase text-xs tracking-widest hover:bg-brand-orange hover:shadow-brand-orange/40 hover:-translate-y-1 transition-all">
                          Saiba mais <ArrowRight size={16} className="group-hover:translate-x-1" />
                       </Link>
                    </div>
                 </div>
                 <div className="w-full lg:w-7/12 h-[350px] md:h-[450px] relative rounded-[40px] overflow-hidden shadow-2xl skew-y-0 lg:-skew-y-2 group-hover:skew-y-0 transition-transform duration-700 ease-out">
                    <Image src={mirante?.image || ''} alt={mirante?.title || ''} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-brand-orange/10 group-hover:bg-transparent transition-colors duration-500" />
                 </div>
               </motion.div>
             )}

             {pinheiral && (
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="flex flex-col lg:flex-row-reverse gap-12 items-center group"
               >
                 <div className="w-full lg:w-5/12 z-10 lg:-ml-16">
                    <div className="bg-white/90 backdrop-blur-xl p-10 lg:p-12 rounded-3xl shadow-2xl border border-white relative text-left">
                       <div className="absolute top-0 left-10 w-24 h-2 bg-cyan-500 rounded-b-full"></div>
                       <span className="text-cyan-600 font-black uppercase tracking-widest text-[10px] block mb-4 mt-2">Lançamento</span>
                       <h4 className="text-2xl md:text-3xl font-black text-brand-text font-mitr mb-4 group-hover:text-brand-orange transition-colors">{pinheiral?.title}</h4>
                       <h3 className="text-lg font-light text-gray-600 mb-8 leading-relaxed">Sua chance de investir no conforto.</h3>
                       <Link href={`/empreendimentos/${pinheiral?.slug}`} className="inline-flex items-center gap-3 bg-brand-text text-white px-8 py-4 rounded-full shadow-lg shadow-gray-300 font-bold uppercase text-xs tracking-widest hover:bg-brand-orange hover:shadow-brand-orange/40 hover:-translate-y-1 transition-all">
                          Saiba mais <ArrowRight size={16} className="group-hover:translate-x-1" />
                       </Link>
                    </div>
                 </div>
                 <div className="w-full lg:w-7/12 h-[350px] md:h-[450px] relative rounded-[40px] overflow-hidden shadow-2xl skew-y-0 lg:skew-y-2 group-hover:skew-y-0 transition-transform duration-700 ease-out">
                    <Image src={pinheiral?.image || ''} alt={pinheiral?.title || ''} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors duration-500" />
                 </div>
               </motion.div>
             )}
           </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 relative overflow-hidden bg-[#FAF9F6] border-y border-gray-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="mb-14 text-center block"
          >
             <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 block">Relatos Reais</span>
             <h2 className="text-4xl md:text-5xl font-black text-brand-text font-mitr drop-shadow-sm">O Que Nossos Clientes Dizem</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 border-b border-gray-200 pb-6 w-full md:w-max mx-auto px-4"
          >
            <button 
              onClick={() => setActiveTestimonialTab('text')}
              className={`px-8 py-3 rounded-full font-black uppercase text-sm tracking-widest transition-all duration-300 ${activeTestimonialTab === 'text' ? 'bg-brand-orange text-white shadow-xl shadow-brand-orange/40 scale-105' : 'bg-transparent text-gray-400 hover:text-brand-text hover:bg-gray-100'}`}
            >
              Textos
            </button>
            <button 
              onClick={() => setActiveTestimonialTab('videos')}
              className={`px-8 py-3 rounded-full font-black uppercase text-sm tracking-widest transition-all duration-300 ${activeTestimonialTab === 'videos' ? 'bg-brand-orange text-white shadow-xl shadow-brand-orange/40 scale-105' : 'bg-transparent text-gray-400 hover:text-brand-text hover:bg-gray-100'}`}
            >
              Vídeos
            </button>
          </motion.div>

          <div className="min-h-[350px]">
             {activeTestimonialTab === 'text' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((t, idx) => (
                     <motion.div 
                       key={idx} 
                       initial={{ opacity: 0, y: 40 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.5, delay: idx * 0.15 }}
                       className="bg-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-t-amber-100/50 flex flex-col justify-between relative group hover:-translate-y-2 transition-transform duration-300"
                     >
                       <Quote className="absolute top-8 right-8 text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors rotate-180" size={80} />
                       <div className="relative z-10">
                         <p className="text-gray-600 font-light italic mb-10 text-lg leading-relaxed">
                           &quot;{t.quote}&quot;
                         </p>
                         <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm font-mitr font-bold text-gray-400">
                             {t.name.charAt(0)}
                           </div>
                           <h4 className="font-bold text-brand-text font-mitr text-lg">{t.name}</h4>
                         </div>
                       </div>
                     </motion.div>
                  ))}
                </div>
             ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-50 p-3 group hover:-translate-y-2 transition-all cursor-pointer relative overflow-hidden">
                      <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-colors z-10 pointer-events-none rounded-3xl" />
                      <iframe className="w-full h-56 rounded-2xl relative z-20 pointer-events-auto" src="https://www.youtube.com/embed/4bk-m1kT4bs" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
                      <div className="p-6">
                        <p className="font-black text-brand-text text-base group-hover:text-brand-orange transition-colors">Grupo Aceplan comemora 37 anos de atuação</p>
                      </div>
                   </div>
                   <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-50 p-3 group hover:-translate-y-2 transition-all cursor-pointer relative overflow-hidden">
                      <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-colors z-10 pointer-events-none rounded-3xl" />
                      <iframe className="w-full h-56 rounded-2xl relative z-20 pointer-events-auto" src="https://www.youtube.com/embed/4bk-m1kT4bs" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
                      <div className="p-6">
                        <p className="font-black text-brand-text text-base group-hover:text-brand-orange transition-colors">Grupo Aceplan, 36 anos de história!</p>
                      </div>
                   </div>
                   <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-50 p-3 group hover:-translate-y-2 transition-all cursor-pointer relative overflow-hidden">
                      <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-colors z-10 pointer-events-none rounded-3xl" />
                      <iframe className="w-full h-56 rounded-2xl relative z-20 pointer-events-auto" src="https://www.youtube.com/embed/qAxAtfikDw4" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
                      <div className="p-6">
                        <p className="font-black text-brand-text text-base group-hover:text-brand-orange transition-colors">Nossa História Aceplan - Beatriz e Paulo</p>
                      </div>
                   </div>
                </div>
             )}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
           <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
             <div>
               <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 block">Últimas Atualizações</span>
               <h2 className="text-4xl md:text-5xl font-black text-brand-text font-mitr">Blog Institucional</h2>
             </div>
             <Link href="/blogs" className="hidden md:inline-flex text-white font-bold uppercase text-xs tracking-widest items-center gap-2 bg-brand-text hover:bg-brand-orange px-8 py-4 rounded-full shadow-lg shadow-gray-300 hover:shadow-brand-orange/30 transition-all">
               Ver todos os artigos <ArrowRight size={16} />
             </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {blogPosts.map((post, idx) => (
                 <Link href={post.link} key={idx} className="group flex flex-col bg-white rounded-[32px] overflow-hidden shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-brand-orange/10 hover:-translate-y-3 transition-all duration-500 border border-gray-50">
                    <div className="w-full h-64 relative overflow-hidden">
                       <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                       <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-brand-text shadow-sm">
                         NOVIDADE
                       </div>
                    </div>
                    <div className="p-8 pt-10 relative">
                      <div className="w-10 h-1 bg-brand-orange rounded-full mb-6 absolute top-0 left-8 -translate-y-1/2 group-hover:w-20 transition-all duration-500"></div>
                      <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">{post.category}</span>
                      <h3 className="text-2xl font-black text-brand-text font-mitr leading-snug group-hover:text-brand-orange transition-colors">
                        {post.title}
                      </h3>
                    </div>
                 </Link>
              ))}
           </div>
           
           <div className="text-center mt-12 md:hidden">
             <Link href="/blogs" className="inline-flex text-white font-bold uppercase text-sm tracking-widest items-center gap-2 bg-brand-text px-10 py-5 rounded-full shadow-lg">
               Ver todos <ArrowRight size={18} />
             </Link>
           </div>
        </div>
      </section>

      {/* Nossas Empresas */}
      <section className="py-24 border-t border-gray-100 bg-gradient-to-b from-[#FAF9F6] to-white relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[url('/assets/img/pattern.png')] bg-repeat opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="mb-16 text-center"
           >
             <h2 className="text-3xl md:text-4xl font-black text-brand-text font-mitr mb-2">Empresas do Grupo</h2>
             <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">Nossos paceiros homologados do padrão Aceplan</p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.3 }}
             className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
           >
              <Image src="/sgw.aceplanvr.com.br/storage/galeria/1/94/20220222101732_6214e26c9f562.png" width={180} height={100} alt="Empresa 1" className="object-contain hover:scale-110 transition-transform duration-300" />
              <Image src="/sgw.aceplanvr.com.br/storage/galeria/1/94/20220222101735_6214e26f59554.png" width={180} height={100} alt="Empresa 2" className="object-contain hover:scale-110 transition-transform duration-300" />
              <Image src="/sgw.aceplanvr.com.br/storage/galeria/1/94/20220222101736_6214e27026e07.png" width={180} height={100} alt="Empresa 3" className="object-contain hover:scale-110 transition-transform duration-300" />
              <Image src="/sgw.aceplanvr.com.br/storage/galeria/1/94/20220225091446_6218c836c152b.png" width={180} height={100} alt="Empresa 4" className="object-contain hover:scale-110 transition-transform duration-300" />
           </motion.div>
        </div>
      </section>

      {/* LGPD Compliance Section */}
      <div className="w-full bg-[#111] py-4 text-center border-t border-brand-orange/20 mt-auto shadow-inner relative z-20">
         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 text-xs tracking-wider">
            <span className="flex items-center gap-2">
               <ShieldCheck size={16} className="text-brand-orange" />
               Ambiente Seguro e Protegido.
            </span>
            <span className="hidden md:inline text-gray-700">|</span>
            <p>
               Garantimos o cumprimento à <b className="text-gray-300">Lei Geral de Proteção de Dados (LGPD)</b>. 
               Seus dados estão protegidos.
            </p>
         </div>
      </div>
    </div>
  );
}
