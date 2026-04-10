'use client';

import { useState } from 'react';
import { Leaf, Users, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function Accordion({ title, icon, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-brand-bg rounded-full flex items-center justify-center text-brand-orange">
            {icon}
          </div>
          <h3 className="text-xl font-bold font-mitr text-brand-text text-left">{title}</h3>
        </div>
        <div className="text-gray-400">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-brand-bg/30">
          <div className="text-gray-600 font-light leading-relaxed space-y-6 pt-4 text-justify">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ESG() {
  return (
    <div className="bg-[#FAF9F6] w-full min-h-screen py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-mitr text-brand-text mb-6">ESG</h1>
          <p className="text-gray-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            ESG é o compromisso das empresas em gerenciar e melhorar sua atuação visando o bem-estar da sociedade a partir de três pilares: Ambiental, Social e Governança.
          </p>
          <p className="text-gray-600 text-md font-light leading-relaxed max-w-2xl mx-auto mt-4">
            Confira abaixo as ações desenvolvidas pelo Grupo Aceplan em seu compromisso com ESG:
          </p>
        </div>

        <div className="space-y-4">
          
          <Accordion title="Responsabilidade Ambiental" icon={<Leaf size={20} />}>
            <p>Contribuir de maneira positiva para a sociedade e o meio ambiente faz parte dos nossos princípios. Construímos com responsabilidade e acreditamos no desenvolvimento sustentável para melhorar o mundo em que vivemos.</p>
            
            <div>
              <h4 className="text-brand-text font-bold mb-2">Valorização e proteção da natureza</h4>
              <p>Através do Projeto “Plantar o Amanhã”, realizamos o plantio de 300 mudas em uma área destinada a preservação ambiental. Convidamos nossos clientes, colaboradores e parceiros para realizarem o plantio e como forma de agradecimento e homenagem, a árvore recebeu o seu nome em uma placa fixada a árvore. Esta ação reforçou o nosso comprometimento com o meio ambiente.</p>
              <p className="text-sm mt-2">Apoio: Parque Estadual da Serra da Concórdia – Valença/RJ | Projeto RECRIAR</p>
            </div>
            
            <div>
              <h4 className="text-brand-text font-bold mb-2">Reflorestamento</h4>
              <p>Doação de mudas para as secretarias de Meio Ambiente de Volta Redonda e Barra Mansa para compensação ambiental.</p>
            </div>

            <div>
              <h4 className="text-brand-text font-bold mb-2">Selo Azul</h4>
              <p>Somos a única empresa da região Sul Fluminense com a certificação Selo Azul, da Caixa Econômica Federal. Um sistema de classificação do índice de sustentabilidade de projetos habitacionais.</p>
            </div>

            <div>
              <h4 className="text-brand-text font-bold mb-2">Energia fotovoltaica</h4>
              <p>O Grupo Aceplan começou a gerar energia solar em 2022, através da AC ENERGY. A energia limpa gerada pelas usinas abastece as nossas obras e frentes de negócio do Grupo. A produção de energia solar equivale a 25.769 árvores plantadas.</p>
            </div>

            <div>
              <h4 className="text-brand-text font-bold mb-2">Reuso de madeira & Segregação de resíduos</h4>
              <p>Todas as nossas obras fazem reuso de madeira, de forma que reduzimos o desperdício do material. Fazemos também a segregação de resíduos nas obras, além de possuirmos áreas de transbordo e triagem responsáveis pela coleta direcionamento ao seu destino (reciclagem).</p>
            </div>
          </Accordion>

          <Accordion title="Responsabilidade Social" icon={<Users size={20} />}>
            <div>
              <h4 className="text-brand-text font-bold mb-2">Inclusão social na construção civil</h4>
              <p>O Grupo Aceplan participa e apoia iniciativas de inclusão social na construção civil, principalmente, com a inserção e capacitação de populações em vulnerabilidade social e mulheres nas obras.</p>
            </div>

            <div>
              <h4 className="text-brand-text font-bold mb-2">Assistência psicológica</h4>
              <p>Oferecemos a nossos funcionários assistência psicológica no ambiente de trabalho, investindo na saúde mental de nossa equipe e em um ambiente de trabalho leve e colaborativo.</p>
            </div>

            <div>
              <h4 className="text-brand-text font-bold mb-2">Atuação com a comunidade</h4>
              <p>Doação de cestas básicas para projetos solidários e doações financeiras para projetos solidários que incentivam a prática de esportes em comunidades carentes.</p>
            </div>

            <div>
              <h4 className="text-brand-text font-bold mb-2">Plano de desenvolvimento social</h4>
              <p>A cada empreendimento, criamos um plano de desenvolvimento social com as estratégias de aproximação e integração dos moradores da vizinhança, clientes e a sociedade, com o empreendimento em construção.</p>
            </div>
            
            <div>
              <h4 className="text-brand-text font-bold mb-2">Desenvolvimento humano & Segurança</h4>
              <p>Através do programa &quot;Talentos Aceplan&quot;, incentivamos projetos criativos. Realizamos frequentemente o Diálogo de Segurança no canteiro de obras e fiscalização de alojamentos.</p>
            </div>
          </Accordion>

          <Accordion title="Ações de Governança Corporativa" icon={<ShieldCheck size={20} />}>
            <div>
              <h4 className="text-brand-text font-bold mb-2">Ouvidoria Interna e Pesquisa de Clima</h4>
              <p>Realizamos semestralmente pesquisa de clima e disponibilizamos um canal de Ouvidoria para sugestões, reclamações e denúncias confidenciais para nossos colaboradores.</p>
            </div>

            <div>
              <h4 className="text-brand-text font-bold mb-2">Grupo Gestor</h4>
              <p>O Grupo Aceplan investe em lideranças participativas e horizontais. Nosso Grupo Gestor atua como um comitê executivo para avaliar e decidir estrategicamente.</p>
            </div>

            <div>
              <h4 className="text-brand-text font-bold mb-2">Canal exclusivo e humanizado</h4>
              <p>Após a compra, o cliente recebe acesso ao painel do cliente (Acélia), onde ele tem acesso a informações detalhadas do empreendimento.</p>
            </div>

            <div>
              <h4 className="text-brand-text font-bold mb-2">Transparência (acompanhamento da obra)</h4>
              <p>Mensalmente nossa equipe realiza o acompanhamento das obras, disponibilizando fotos/vídeos em nossas redes sociais e painel do cliente atestando o progresso.</p>
            </div>
          </Accordion>

        </div>

      </div>
    </div>
  );
}
