import { z } from 'zod';

export const contactSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(80, 'Name is too long'),
    email: z.string().email('Enter a valid email address'),
    message: z.string().min(10, 'Message is too short').max(2000, 'Message is too long'),
    hp: z.string().optional()
  })
  .superRefine((data, ctx) => {
    if (data.hp && data.hp.trim().length > 0) {
      ctx.addIssue({
        path: ['hp'],
        code: z.ZodIssueCode.custom,
        message: 'Invalid input'
      });
    }
  });

export type ContactFormInput = z.infer<typeof contactSchema>;
