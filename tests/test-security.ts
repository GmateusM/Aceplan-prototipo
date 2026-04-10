import { submitContactForm } from '../src/actions/contact';

// Polyfill FormData for Node.js environment
const createMockFormData = (data: Record<string, string>) => {
  const fd = new Map();
  for (const [key, value] of Object.entries(data)) {
    fd.set(key, value);
  }
  return {
    get: (key: string) => fd.get(key) || null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any as FormData;
};

async function runTests() {
  console.log("🔥 INICIANDO BATERIA DE TESTES CONTRA O SERVER ACTION DE CONTATO 🔥\n");

  // TESTE 1: Fluxo Ideal
  console.log(">>> [ TESTE 1 ] Cenário Ideal (Dados Corretos) <<<");
  const validData = createMockFormData({
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "24988887777",
    message: "Quero informações sobre o Casas Mirante."
  });
  const res1 = await submitContactForm(null, validData);
  console.log(res1.success ? "✅ APROVADO: Formulário processou corretamente." : "❌ FALHOU");
  console.log(res1, "\n");


  // TESTE 2: Ataque de Injeção XSS / SQL e Falsificação
  console.log(">>> [ TESTE 2 ] Simulação de Ataque de Injeção e Bypass (Email Falso / Payload SQL) <<<");
  const maliciousData = createMockFormData({
    name: "<script>alert(1)</script>", // Tentativa XSS, mas tamanho é válido. O Zod deixa strings mas o React cuidaria do XSS no browser.
    email: "DROP TABLE users;--", // Injeção SQL disfarçada de e-mail.
    phone: "123", // Telefone invádido em formatação.
    message: "A" // Mensagem pequena demais.
  });
  const res2 = await submitContactForm(null, maliciousData);
  console.log(!res2.success ? "✅ APROVADO: Ataque barrado pelo Zod." : "❌ FALHOU: Zod permitiu payload inadequado.");
  console.log(res2, "\n");

  // TESTE 3: Payload Vazio
  console.log(">>> [ TESTE 3 ] Simulação de Robôs de SPAM (Submissão Vazia) <<<");
  const emptyData = createMockFormData({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const res3 = await submitContactForm(null, emptyData);
  console.log(!res3.success ? "✅ APROVADO: SPAM vazio barrado pelo Zod." : "❌ FALHOU: Zod permitiu SPAM.");
  console.log(res3, "\n");
}

runTests().catch(console.error);
