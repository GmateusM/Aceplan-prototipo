import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),
  email: z.string().email({ message: 'Digite um email válido.' }),
  phone: z.string().min(10, { message: 'Digite um telefone válido com DDD.' }),
  message: z.string().min(10, { message: 'A mensagem deve conter no mínimo 10 caracteres.' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
