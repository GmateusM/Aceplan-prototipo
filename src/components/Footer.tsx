import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-brand-text text-white/80 py-16 mt-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <Image 
            src="/assets/img/logo.svg" 
            alt="Aceplan" 
            width={180} 
            height={60} 
            className="invert brightness-0" // Transforma SVG original para branco
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <h4 className="text-white text-xl mb-4 font-mitr font-medium">Central de Vendas</h4>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <strong className="text-white block mb-1">Central de Vendas C/ Decorados:</strong>
                Rua C, Loteamento Mirante do Bosque, Volta Redonda-RJ <br />
                CEP: 27250-042
              </p>
              <p>
                <strong className="text-white block mb-1">Central de Vendas (Retiro):</strong>
                Av. Maranhão, nº 170, Retiro, Volta Redonda – RJ <br />
                CEP: 27274-090
              </p>
              <p>
                <strong className="text-white block mb-1">SEDE:</strong>
                Av. Oscar de Almeida Gama, 359 – Aterrado, VR – RJ <br />
                CEP: 27213-260
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xl mb-4 font-mitr font-medium">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:2433462427" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                  Atendimento: (24) 3346-2427
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=5524999559898" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                  Vendas: (24) 9 9955-9898
                </a>
              </li>
              <li>
                <a href="mailto:contato@aceplan.com.br" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                  E-mail: contato@aceplan.com.br
                </a>
              </li>
            </ul>
             <h4 className="text-white text-xl mt-8 mb-4 font-mitr font-medium">Oportunidades</h4>
             <Link href="/trabalhe-conosco" className="text-sm hover:text-brand-orange transition-colors block mb-2">Trabalhe Conosco (Ver Vagas)</Link>
             <Link href="/canal-direto-denuncias" className="text-sm hover:text-brand-orange transition-colors text-red-400 font-medium">Canal Direto - Denúncias</Link>
          </div>

          <div>
            <h4 className="text-white text-xl mb-4 font-mitr font-medium">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/institucional" className="hover:text-white transition-colors">Institucional</Link></li>
              <li><Link href="/empreendimentos" className="hover:text-white transition-colors">Empreendimentos</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">FAQ&apos;s</Link></li>
              <li><Link href="/seja-fornecedor" className="hover:text-white transition-colors">Seja um fornecedor</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl mb-4 font-mitr font-medium">Redes Sociais</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.facebook.com/grupoaceplan" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Image src="/assets/img/facebook.svg" alt="Facebook" width={24} height={24} className="invert brightness-0" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/grupoaceplan" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Image src="/assets/img/instagram.svg" alt="Instagram" width={24} height={24} className="invert brightness-0" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Grupo Aceplan. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
             <Link href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
