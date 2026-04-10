'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/actions/contact';
import { Send } from 'lucide-react';

export default function ContatoPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  return (
    <div className="bg-brand-bg min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">
            Fale Conosco
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tem alguma dúvida, precisa de suporte ou quer falar com a nossa equipe de vendas? Preencha o formulário abaixo.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          
          {state?.success && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
              {state.message}
            </div>
          )}

          {state?.success === false && state?.message && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
              {state.message}
            </div>
          )}

          <form action={formAction} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full p-3 bg-brand-bg rounded-lg border-none focus:ring-2 focus:ring-brand-orange outline-none"
                placeholder="Seu nome completo"
              />
              {state?.errors?.name && <p className="text-xs text-red-500 mt-1">{state.errors.name[0]}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full p-3 bg-brand-bg rounded-lg border-none focus:ring-2 focus:ring-brand-orange outline-none"
                  placeholder="seu@email.com"
                />
                {state?.errors?.email && <p className="text-xs text-red-500 mt-1">{state.errors.email[0]}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full p-3 bg-brand-bg rounded-lg border-none focus:ring-2 focus:ring-brand-orange outline-none"
                  placeholder="(00) 00000-0000"
                />
                {state?.errors?.phone && <p className="text-xs text-red-500 mt-1">{state.errors.phone[0]}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                className="w-full p-3 bg-brand-bg rounded-lg border-none focus:ring-2 focus:ring-brand-orange outline-none resize-none"
                placeholder="Como podemos te ajudar?"
              ></textarea>
              {state?.errors?.message && <p className="text-xs text-red-500 mt-1">{state.errors.message[0]}</p>}
            </div>

            <button 
              type="submit" 
              disabled={isPending}
              className="w-full flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-4 rounded-[4px] font-medium hover:bg-orange-600 transition-colors disabled:opacity-70"
            >
              {isPending ? 'Enviando...' : 'Enviar Mensagem'}
              {!isPending && <Send size={20} />}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
