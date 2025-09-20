import { AlertCircle, CheckCircle2 } from 'lucide-react';
import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type AlertVariant = 'success' | 'error' | 'info';

type AlertProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
  title?: ReactNode;
};

const variantStyles: Record<AlertVariant, string> = {
  success: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-500',
  error: 'border-red-500/40 bg-red-500/10 text-red-500',
  info: 'border-primary/40 bg-primary/10 text-primary'
};

const icons: Record<AlertVariant, ReactNode> = {
  success: <CheckCircle2 className="h-5 w-5" aria-hidden="true" />,
  error: <AlertCircle className="h-5 w-5" aria-hidden="true" />,
  info: <AlertCircle className="h-5 w-5" aria-hidden="true" />
};

const roles: Record<AlertVariant, 'status' | 'alert'> = {
  success: 'status',
  error: 'alert',
  info: 'status'
};

export function Alert({ variant = 'info', className, title, children, ...props }: AlertProps) {
  return (
    <div
      role={roles[variant]}
      className={cn(
        'flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm font-medium',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <span className="mt-0.5" aria-hidden="true">
        {icons[variant]}
      </span>
      <div className="space-y-1">
        {title ? <p className="font-semibold">{title}</p> : null}
        {children}
      </div>
    </div>
  );
}
