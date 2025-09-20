import { render, screen } from '@testing-library/react';

import { Button } from '@/app/components/ui/button';

describe('Button', () => {
  it('renders with default styles', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain('bg-primary');
  });

  it('supports ghost variant', () => {
    render(
      <Button variant="ghost" aria-label="ghost button">
        Ghost
      </Button>
    );
    const button = screen.getByRole('button', { name: /ghost button/i });
    expect(button.className).toContain('bg-transparent');
  });
});
