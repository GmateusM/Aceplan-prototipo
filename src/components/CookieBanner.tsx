'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('aceplan_cookie_consent');
    if (!consent) {
      // eslint-disable-next-line
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('aceplan_cookie_consent', accepted ? 'accepted' : 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[99999] max-w-[320px] p-6 bg-white border border-gray-100 shadow-2xl rounded-2xl text-gray-600 text-sm">
      <p className="mb-4 leading-relaxed">
        <strong>A Aceplan utiliza cookies</strong> para otimizar sua experiência no site, personalizar conteúdo e anunciar nossos empreendimentos de forma engajada conosco. <br/><br/>
        Ao fechar ou prosseguir, você concorda com os termos da <Link href="/politica-de-privacidade" className="text-brand-orange font-bold hover:underline">Política de Privacidade.</Link>
      </p>
      <div className="flex flex-col gap-2">
        <button 
          onClick={() => handleConsent(true)}
          className="w-full py-2 bg-brand-orange text-white font-bold rounded hover:bg-orange-600 transition-colors"
        >
          Aceitar cookies
        </button>
        <button 
          onClick={() => handleConsent(false)}
          className="w-full py-2 bg-transparent border-2 border-brand-orange text-brand-orange font-bold rounded hover:bg-brand-orange/10 transition-colors"
        >
          Rejeitar cookies
        </button>
      </div>
    </div>
  );
}
