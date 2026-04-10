import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Blog - Aceplan",
  description: "Acompanhe as notícias e novidades do Grupo Aceplan.",
};

export default function BlogsPage() {
  const posts = [
    { title: "Grupo Aceplan Celebra 40 Anos de Trajetória", date: "19 de Março de 2026", img: "https://sgw.aceplanvr.com.br/storage/conteudo/1/383/20260320113046_69bd5a16c4eb7.jpg" },
    { title: "Grupo Aceplan promove bate-papo com colaboradores em apoio a Campanha Janeiro Branco", date: "30 de Janeiro de 2026", img: "https://sgw.aceplanvr.com.br/storage/conteudo/1/382/20260202102804_6980a664412b2.jpg" },
    { title: "Grupo Aceplan realiza confraternização de fim de ano com os colaboradores", date: "23 de Dezembro de 2025", img: "https://sgw.aceplanvr.com.br/storage/conteudo/1/381/20251224102850_694bea924aac4.jpg" },
    { title: "Grupo Aceplan realiza atividades de conscientização com colaboradores em apoio a Campanha Outubro Rosa", date: "13 de Outubro de 2025", img: "https://sgw.aceplanvr.com.br/storage/conteudo/1/380/20251013164432_68ed56a055a96.jpg" },
    { title: "Grupo Aceplan desempenha atividade de conscientização com colaboradores em apoio a Campanha Setembro Amarelo", date: "05 de Setembro de 2025", img: "https://sgw.aceplanvr.com.br/storage/conteudo/1/379/20250905131740_68bb0d24979fe.png" },
    { title: "Entrega de Chaves - Village Retiro", date: "27 de Agosto de 2025", img: "https://sgw.aceplanvr.com.br/storage/conteudo/1/378/20250901170212_68b5fbc461d5c.jpg" }
  ];

  return (
    <div className="bg-[#FAF9F6] w-full min-h-screen py-24 font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-5xl font-bold text-brand-text font-mitr mb-2">Blog</h1>
        <div className="text-gray-500 mb-12 text-lg">Acompanhe as últimas novidades.</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <Link href="#" key={index} className="group block bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
               <div className="w-full h-64 relative overflow-hidden">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-md text-xs font-bold text-brand-text shadow-sm truncate">
                    {post.date}
                  </div>
               </div>
               <div className="p-8">
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-widest block mb-3">Notícias</span>
                  <h3 className="text-2xl font-bold text-brand-text font-mitr leading-snug group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
