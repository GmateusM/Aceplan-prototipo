'use server';

import { contactSchema } from '@/schemas/contact';

export async function submitContactForm(prevState: unknown, formData: FormData) {
  // Simular delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  };

  // Validar com Zod no servidor para evitar SQL Injections e falsificações
  const validation = contactSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
      message: 'Revise os campos e tente novamente.',
    };
  }

  // Aqui entraria lógica de salvar no banco ou despachar e-mail via SendGrid/Mailgun
  // e.g. await db.insert(...)

  return {
    success: true,
    message: 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.',
    errors: null,
  };
}
