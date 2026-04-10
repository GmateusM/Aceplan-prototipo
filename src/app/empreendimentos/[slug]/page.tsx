import Image from 'next/image';
import Link from 'next/link';
import { propertiesMock, getStatusLabel, getStatusColor } from '@/data/properties';
import { ArrowLeft, MapPin, BedDouble, CheckCircle } from 'lucide-react';

export default function PropertyDetailsPage({ params }: { params: { slug: string } }) {
  const property = propertiesMock.find(p => p.slug === params.slug);

  if (!property) {
    return (
      <div className="bg-brand-bg min-h-screen py-20 text-center">
        <h1 className="text-4xl font-bold text-brand-text font-mitr">Imóvel não encontrado.</h1>
        <Link href="/empreendimentos" className="text-brand-orange mt-4 inline-block hover:underline">Voltar para listagem</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Banner/Image */}
      <section className="w-full relative h-[60vh] bg-black">
        <Image 
          src={property.image}
          alt={property.title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent" />
      </section>

      {/* Info Content */}
      <section className="container mx-auto px-4 lg:px-8 -mt-32 relative z-10 pb-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-10 flex flex-col md:flex-row justify-between items-start gap-8">
           
           <div className="w-full md:w-2/3">
             <Link href="/empreendimentos" className="inline-flex items-center gap-2 text-brand-orange uppercase text-xs font-bold tracking-widest mb-6 hover:translate-x-[-5px] transition-transform">
               <ArrowLeft size={16} /> Voltar
             </Link>
             <h1 className="text-4xl md:text-5xl font-bold font-mitr text-brand-text mb-4">
               {property.title}
             </h1>
             <p className="flex items-center gap-2 text-gray-500 font-medium text-lg leading-relaxed mb-6">
                <MapPin size={20} className="text-brand-orange" /> {property.address}, {property.city}
             </p>
             <div className="flex gap-4 mb-4">
                <span className={`text-white text-xs uppercase font-bold px-4 py-2 rounded-full ${getStatusColor(property.status)}`}>
                  {getStatusLabel(property.status)}
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs uppercase font-bold px-4 py-2 rounded-full flex items-center gap-1">
                  <BedDouble size={14} /> {property.beds} Quartos
                </span>
             </div>
           </div>

           <div className="w-full md:w-1/3 bg-[#FAF9F6] p-8 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center">
             <h3 className="text-gray-500 font-semibold mb-2">Valor Estimado</h3>
             <p className="text-4xl font-mitr font-bold text-brand-text mb-6">
               {property.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
             </p>
             <a href="https://wa.me/552433462427" target="_blank" className="w-full flex justify-center items-center gap-2 bg-brand-orange text-white font-bold px-6 py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
               Quero Simular Financiamento
             </a>
           </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
             <h3 className="text-2xl font-bold text-brand-text font-mitr mb-6">Diferenciais do Imóvel</h3>
             <ul className="space-y-4">
               <li className="flex gap-3 text-gray-600"><CheckCircle className="text-brand-orange shrink-0" /> Excelente Localização com fácil acesso ao centro.</li>
               <li className="flex gap-3 text-gray-600"><CheckCircle className="text-brand-orange shrink-0" /> Projeto paisagístico integrado e área verde.</li>
               <li className="flex gap-3 text-gray-600"><CheckCircle className="text-brand-orange shrink-0" /> Documentação regularizada para financiamento rápido.</li>
               <li className="flex gap-3 text-gray-600"><CheckCircle className="text-brand-orange shrink-0" /> Garantia de infraestrutura e selo Qualidade PBQP-H.</li>
             </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
             <h3 className="text-2xl font-bold text-brand-text font-mitr mb-6">Localização</h3>
             <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
               <MapPin size={48} className="text-brand-orange/50 animate-pulse" />
             </div>
             <p className="text-sm text-gray-500 mt-4 text-center">Mapa Interativo Temporariamente Desabilitado</p>
          </div>
        </div>
      </section>

    </div>
  );
}
