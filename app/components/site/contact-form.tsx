'use client';

import { useEffect, useState, useTransition, type ChangeEvent, type FormEvent } from 'react';

import { Alert } from '@/app/components/ui/alert';
import { Button } from '@/app/components/ui/button';
import { contactSchema, type ContactFormInput } from '@/lib/schemas';

const initialState: ContactFormInput = {
  name: '',
  email: '',
  message: '',
  hp: ''
};

type ContactFormProps = {
  labels: {
    title: string;
    subtitle: string;
    success: string;
    error: string;
    fields: {
      name: string;
      email: string;
      message: string;
      honeypot: string;
    };
    submit: string;
    required: string;
  };
};

type FormStatus = 'idle' | 'success' | 'error';

export function ContactForm({ labels }: ContactFormProps) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => setStatus('idle'), 4000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [status]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const issues: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0];
        if (typeof path === 'string') {
          issues[path] = issue.message;
        }
      });
      setErrors(issues);
      setStatus('error');
      return;
    }

    setErrors({});

    startTransition(async () => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(result.data)
        });

        if (response.ok) {
          setForm(initialState);
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{labels.title}</h1>
        <p className="text-lg text-foreground/70">{labels.subtitle}</p>
        <p className="text-xs uppercase tracking-wide text-foreground/50">{labels.required}</p>
      </div>

      {status === 'success' ? <Alert variant="success">{labels.success}</Alert> : null}
      {status === 'error' ? <Alert variant="error">{labels.error}</Alert> : null}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            {labels.fields.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={form.name}
            onChange={handleChange}
            required
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="text-sm text-red-500">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            {labels.fields.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={form.email}
            onChange={handleChange}
            required
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="text-sm text-red-500">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          {labels.fields.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          value={form.message}
          onChange={handleChange}
          required
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="text-sm text-red-500">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp" className="text-sm">
          {labels.fields.honeypot}
        </label>
        <input id="hp" name="hp" type="text" value={form.hp} onChange={handleChange} tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" disabled={isPending} className="w-full md:w-auto">
        {isPending ? `${labels.submit}…` : labels.submit}
      </Button>
    </form>
  );
}
