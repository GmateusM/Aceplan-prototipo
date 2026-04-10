import Link from 'next/link';
import { ArrowLeft, Construction } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#FAF9F6] min-h-[80vh] flex flex-col items-center justify-center py-20 px-4">
      <Construction className="text-brand-orange mb-6" size={80} />
      <h1 className="text-4xl md:text-6xl font-bold text-brand-text font-mitr mb-4 text-center">
        Página em Construção
      </h1>
      <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl mb-10">
        Esta seção do site está sendo refatorada para a nova versão. Volte em breve para conferir as novidades.
      </p>
      <Link 
        href="/"
        className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-orange-600 hover:shadow-xl transition-all"
      >
        <ArrowLeft size={20} />
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
