import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ's - Aceplan",
  description: "Dúvidas frequentes e respostas do Grupo Aceplan.",
};

export default function FaqsPage() {
  const faqs = [
    {
      q: "O que é ITBI?",
      a: "O Imposto sobre Transmissão de Bens Imóveis é um imposto cobrado pelo Município sempre que há compra e venda de um imóvel."
    },
    {
      q: "O que é Memorial Descritivo?",
      a: "É um documento que detalha todo o projeto a ser realizado, onde estão relacionados todos os itens da edificação a ser construída. Ex: estruturas, acabamentos e instalações."
    },
    {
      q: "Qual o horário de funcionamento da Central de Vendas?",
      a: "Segunda a sexta: 9h às 19h\nSábado: 9h às 12h\nDomingo: fechado"
    },
    {
      q: "O que é Alvará de Licença?",
      a: "É o documento que dá a permissão para a construção da obra."
    },
    {
      q: "Poderá haver modificações na minha unidade ou na implantação/áreas comuns durante a obra?",
      a: "Não. Todos os projetos aprovados nos órgãos competentes são projetados para não sofrerem alterações."
    },
    {
      q: "Em quais bairros estão localizados os empreendimentos?",
      a: "Village Retiro: Av. Maranhão, 190 - Retiro\nLoteamento Arvoredo e Casas Pinheiral: Pinheiral - RJ\nMirante do Bosque: a 4 km do centro de Volta Redonda"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] w-full min-h-screen py-24 font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="text-5xl font-bold text-brand-text font-mitr mb-4">FAQ&apos;s</h1>
        <p className="text-gray-500 mb-12 text-lg">Principais dúvidas frequentes.</p>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-brand-text font-mitr p-6 list-none hover:text-brand-orange transition-colors">
                <span className="text-lg">{faq.q}</span>
                <span className="transition duration-300 group-open:rotate-180 bg-brand-bg p-2 rounded-full text-brand-orange">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-gray-600 font-light leading-relaxed whitespace-pre-line text-lg">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
