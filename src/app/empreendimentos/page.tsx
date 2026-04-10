'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { propertiesMock, getStatusLabel, getStatusColor } from '@/data/properties';
import { Search, MapPin, BedDouble, DollarSign, PlusCircle } from 'lucide-react';

export default function EmpreendimentosPage() {
  const [cityFilter, setCityFilter] = useState<string>('');
  const [bedsFilter, setBedsFilter] = useState<string>('');
  const [priceMaxFilter, setPriceMaxFilter] = useState<string>('');

  const filteredProperties = useMemo(() => {
    return propertiesMock.filter((prop) => {
      let match = true;
      if (cityFilter && prop.city !== cityFilter) match = false;
      if (bedsFilter && prop.beds !== parseInt(bedsFilter)) match = false;
      if (priceMaxFilter && prop.price > parseInt(priceMaxFilter)) match = false;
      return match;
    });
  }, [cityFilter, bedsFilter, priceMaxFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 200, damping: 20 } }
  };

  return (
    <div className="bg-brand-bg min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">
            Empreendimentos
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Encontre o Aceplan perfeito para você. Utilize os filtros abaixo para refinar sua busca por quartos, valores e cidades.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                <MapPin size={16} /> Cidade
              </label>
              <select 
                className="p-3 bg-brand-bg rounded-lg border-none focus:ring-2 focus:ring-brand-orange outline-none"
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
              >
                <option value="">Todas as cidades</option>
                <option value="Volta Redonda">Volta Redonda</option>
                <option value="Pinheiral">Pinheiral</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                <BedDouble size={16} /> Quartos
              </label>
              <select 
                className="p-3 bg-brand-bg rounded-lg border-none focus:ring-2 focus:ring-brand-orange outline-none"
                value={bedsFilter}
                onChange={(e) => setBedsFilter(e.target.value)}
              >
                <option value="">Qualquer quantidade</option>
                <option value="1">1 Quarto</option>
                <option value="2">2 Quartos</option>
                <option value="3">3 Quartos</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                <DollarSign size={16} /> Preço Máximo
              </label>
              <select 
                className="p-3 bg-brand-bg rounded-lg border-none focus:ring-2 focus:ring-brand-orange outline-none"
                value={priceMaxFilter}
                onChange={(e) => setPriceMaxFilter(e.target.value)}
              >
                <option value="">Qualquer valor</option>
                <option value="200000">Até R$ 200.000</option>
                <option value="300000">Até R$ 300.000</option>
                <option value="500000">Até R$ 500.000</option>
                <option value="800000">Até R$ 800.000</option>
              </select>
            </div>

          </div>
        </div>

        {/* Results */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl">
            <Search className="mx-auto text-gray-300 mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-700">Nenhum imóvel encontrado</h3>
            <p className="text-gray-500 mt-2">Tente ajustar ou remover alguns filtros.</p>
            <button 
              onClick={() => { setCityFilter(''); setBedsFilter(''); setPriceMaxFilter(''); }}
              className="mt-6 text-brand-orange hover:underline font-medium"
            >
              Limpar Todos os Filtros
            </button>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProperties.map((prop) => (
                <motion.div key={prop.id} variants={itemVariants} layout>
                  <Link href={`/empreendimentos/${prop.slug}`} className="block group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image 
                        src={prop.image} 
                        alt={prop.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${getStatusColor(prop.status)}`}>
                          {getStatusLabel(prop.status)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-brand-text mb-2 line-clamp-1 group-hover:text-brand-orange transition-colors">
                        {prop.title}
                      </h2>
                      <address className="text-gray-500 text-sm not-italic mb-6 flex items-start gap-2 h-10 line-clamp-2">
                         <MapPin size={16} className="mt-0.5 flex-shrink-0" /> {prop.address}, {prop.city}
                      </address>
                      <hr className="border-gray-100 mb-4" />
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                           <div className="flex items-center gap-1.5 text-gray-600 text-sm font-medium">
                             <BedDouble size={16} className="text-gray-400" /> {prop.beds}
                           </div>
                           <div className="flex items-center gap-1.5 text-gray-600 text-sm font-medium">
                             <DollarSign size={16} className="text-gray-400" /> 
                             {prop.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                           </div>
                        </div>
                        <div className="text-brand-orange font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                           Detalhes <PlusCircle size={16} />
                        </div>
                      </div>
                    </div>

                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
