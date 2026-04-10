'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Institucional', href: '/institucional' },
    { label: 'ESG', href: '/esg' },
    { label: 'Empreendimentos', href: '/empreendimentos' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Canal Direto - Denúncias', href: '/canal-direto-denuncias' },
    { label: 'Seja um fornecedor', href: '/seja-fornecedor' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <>
      <header className="w-full bg-white/10 backdrop-blur-md fixed top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between h-14">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/assets/img/logo.svg" 
                alt="Aceplan" 
                width={150} 
                height={50} 
                className="h-8 w-auto brightness-0 invert"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium text-white">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-brand-orange transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="https://aceplan.cvcrm.com.br/cliente/" 
                  target="_blank"
                  className="flex items-center gap-2 bg-brand-orange text-white px-4 py-2 rounded-[4px] hover:bg-orange-600 transition-colors"
                >
                  <Image src="/assets/img/user.svg" alt="Sou Cliente" width={16} height={16} className="invert brightness-0" />
                  Sou Cliente
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col pt-20 px-6 overflow-y-auto"
          >
            <button 
              className="absolute top-6 right-6 p-2 text-brand-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            <ul className="flex flex-col space-y-6 text-lg font-medium text-brand-text">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="hover:text-brand-orange transition-colors block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t">
                <a 
                  href="https://aceplan.cvcrm.com.br/cliente/" 
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full bg-brand-orange text-white px-6 py-3 rounded-[4px] hover:bg-orange-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image src="/assets/img/user.svg" alt="Sou Cliente" width={20} height={20} className="invert brightness-0" />
                  Sou Cliente
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
