# 🏢 Grupo Aceplan - Plataforma Institucional

Este repositório contém a versão modernizada e turbinada da plataforma web do **Grupo Aceplan**, desenvolvida utilizando as tecnologias e padrões mais avançados de Engenharia de Software focados em **Conversão, Performance (LCP) e Segurança**.

## 🚀 Arquitetura e Tecnologias
O sistema antigo foi aposentado (HTML rígido, Bootstrap pesado e jQuery lento). Agora ele roda 100% sobre o **Next.js 14 (App Router)**.

### 1. The React Core: App Router (`src/app/layout.tsx` & `page.tsx`)
A grande sacada dessa versão arquitetônica é separar Componentes Universais de Páginas de Leitura Rápida:
* **`layout.tsx`:** O Esqueleto imutável do site (*Header com Navbar, Footer Institucional e Cookie Bar de Consenso LGPD*). O Next.js congela essas partes na tela. Poupamos uso absurdo de dados porque a navegação entre rotas passa a ser **Instantânea**; o navegador não pisca.
* **`page.tsx`:** O coração. Cada rota (`/`, `/empreendimentos`, `/contato`) renderiza componentes React pré-processados no servidor que entregam as imagens acima da dobra em milissegundos usando `next/image`.

### 2. Design System: Tailwind CSS & Framer Motion
A aparência elegante do site não custa a performance que custava no passado. 
* Adotamos globalmente o utilitário **Tailwind**. A Responsividade mobile ("celular sempre à frente") é gerida por regras rígidas de layout (`flex-col`, `lg:flex-row`). O design não quebra, e os botões não vazam para fora da tela.
* Efeitos luxuosos de Transição e Surgimento (*Scroll Reveal*) como na seção `Novos Empreendimentos` agora são acelerados por GPU providos pela robusta biblioteca **Framer Motion**, garantindo elegância premium (UX).

### 3. Filtros Dinâmicos Síncronos (`/empreendimentos`)
Criamos um **React Client Component** (onde as variáveis controlam estados no próprio navegador de forma persistida).
Quando o cliente filtra os imóveis por "Cidade", "Preço" ou "Quartos", as opções da tela não precisam ir ao Servidor buscar HTML novo. Os dados estão em memória (arquivo nativo de propriedades / Mock base). Os Cards se dissolvem graciosamente num pulinho de animação para os imóveis correspondentes. A taxa de usabilidade subiu para a estratosfera.

### 4. Segurança de Nível Bancário: Server Actions e `Zod`
Nenhuma submissão de Formulário (`/contato`) é aceita caso venha carregada de vírus.
* **Server-side Executions:** As ações que enviam e-mails ou capturam leads ficam fechadas a sete chaves atrás da fronteira entre o Backend e o Cliente usando `"use server"`.
* A livraria matemática **`Zod`** faz a blitz nos dados: *O nome tem mais que 3 strings? É um payload de robô vazio? Estão tentando submeter código nocivo no e-mail?* Se sim, toda a rede da solicitação é **vetada** imediatamente com precisão cirúrgica exibindo a regra pendente no front-end em texto vivo, garantindo um ambiente inexpugnável (Anti SQL-Injection).

### 5. Otimização Brutal em Automação (SEO de Elite)
A conversão orgânica (vendas vindas do ranqueamento do Imóvel pelo próprio Google) foi a pedra angular desta reconstrução:
* **`sitemap.ts` & `robots.ts`:** Os arquivos dos quais o *GoogleBot* precisava agora são gerados e validados dinâmicamente, listando para o motor de busca aonde está cada imóvel recém inserido.
* **Open Graph e Redes Sociais:** O `metadataBase` do layout introduz chamas dinâmicas. Ou seja: Ao jogar o link Aceplan do Whastapp para um corretor, o Whatsapp mostrará a sua bela Thumbmail corporativa em 1200x630.
* **Lazy Load Automático:** Uma foto ao final da tela só traciona sua internet quando o usuário realizar a rolagem para lá, resultando num site que abre velozmente sob sinais 3G/4G restritos em rua ou loteamento.

---

## 🛠️ Como Iniciar o Ambiente

Se precisar rodar ou continuar mexendo no projeto localmente na sua máquina para homologações:

1. Acesse pelo terminal a pasta do projeto `cd sites/aceplan-next`
2. Instale eventuais pacotes `npm install`.
3. Inicie o servidor turbo: `npm run dev`
4. O ecossistema completo rodará no endereço: `http://localhost:3000`.

*O Grupo Aceplan agora não habita mais na velha internet. Habitamos a nova dimensão.*
