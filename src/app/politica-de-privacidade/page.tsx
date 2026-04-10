import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Política de Privacidade - Aceplan",
};

export default function PoliticaPrivacidade() {
  return (
    <div className="bg-[#FAF9F6] w-full min-h-screen py-24 font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-gray-100">
        <h1 className="text-5xl font-bold text-brand-text font-mitr mb-4">Política de Privacidade</h1>
        <div className="text-sm font-bold tracking-widest uppercase text-brand-orange mb-10 pb-6 border-b border-gray-100">Atualizado em: 16 de Abril de 2021</div>
        
        <div className="prose prose-lg max-w-none text-gray-600 prose-headings:font-mitr prose-headings:text-brand-text prose-a:text-brand-orange leading-relaxed">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Objetivo</h2>
          <p className="mb-6">A Política Externa de Privacidade do <strong>Grupo Aceplan</strong> foi criada para demonstrar o seu compromisso com a segurança das informações coletadas dos usuários de serviços interativos oferecidos no site, redes sociais e demais meios.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Quais dados pessoais serão tratados pelo Grupo Aceplan?</h2>
          <p className="mb-6">O Grupo Aceplan poderá coletar informações inseridas ativamente pelo usuário no momento do contato ou cadastro, através do preenchimento do formulário ou pelo corretor e, ainda, informações coletadas automaticamente ao utilizar os nossos serviços. Desta forma, há o tratamento de dois tipos de dados pessoais: os fornecidos pelo próprio Usuário e aqueles coletados automaticamente.</p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">2.1. Dados Pessoais Fornecidos pelo Usuário</h3>
          <p className="mb-6">Coletamos todos os dados pessoais inseridos ou encaminhados ativamente pelo usuário ao contatar ou se cadastrar em nossos canais de comunicação. Independentemente de quais dados pessoais o usuário fornece ativamente ao Grupo Aceplan, faremos uso daqueles efetivamente relevantes e necessários para o alcance das finalidades a ele declaradas na coleta.</p>

          <h3 className="text-xl font-bold mt-6 mb-3">2.2. Dados coletados automaticamente pelo Grupo Aceplan</h3>
          <p className="mb-6">O Grupo Aceplan coleta uma série de informações de modo automático em seus canais de comunicação. Para tal coleta, utilizamos tecnologias padrões, que são utilizadas com o propósito de melhorar a sua experiência de navegação em nossos serviços, de acordo com os seus hábitos e preferências.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Com quais finalidades o Grupo Aceplan tratará os seus dados?</h2>
          <p className="mb-6">Os dados pessoais tratados pelo Grupo Aceplan têm como principais finalidades a possibilidade do usuário conhecer a oferta de produtos e serviços. Em alguns casos, poderá tratar seus dados pessoais quando necessários para o cumprimento de obrigação legal ou exercício regular de direitos em processo judicial, administrativo ou arbitral.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Com quem o Grupo Aceplan compartilhará os seus dados pessoais?</h2>
          <p className="mb-4">O Grupo Aceplan poderá compartilhar as suas informações pessoais, nas hipóteses abaixo expostas:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Com empresas parceiras e fornecedores no desenvolvimento e prestação de serviços voltados a você;</li>
            <li>Com autoridades, entidades governamentais ou outros terceiros institucionais, para a proteção dos interesses do Grupo Aceplan em qualquer tipo de conflito.</li>
            <li>Instituições Financeiras para análise e proteção de crédito.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Como o Grupo Aceplan mantêm os seus dados pessoais seguros?</h2>
          <p className="mb-6">Qualquer informação fornecida pelo usuário será coletada e guardada de acordo com os mais rígidos padrões de segurança.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Dúvidas sobre tratamento de dados pessoais</h2>
          <p className="mb-6">Se você tiver dúvidas ou preocupações em relação à sua privacidade ou ao tratamento de seus dados pessoais pelo Grupo Aceplan, encaminhe-as ao nosso canal de atendimento, por meio do email <a href="mailto:contato@grupoaceplan.com.br" className="font-bold hover:underline">contato@grupoaceplan.com.br</a>.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Legislação aplicável</h2>
          <p className="mb-6">Esta Política foi elaborada para atendimento e em conformidade com a Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais), Lei Federal nº 12.965/2014 (Marco Civil da Internet) e Lei Federal nº 8.078/1990 (Código de Defesa do Consumidor).</p>
        </div>
      </div>
    </div>
  );
}
