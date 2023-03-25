import { render, screen, waitFor, fireEvent, within } from '@testing-library/react';
import { Button } from "@/shared/components/Button";

describe('Button component', () => {
  it('should be able render', () => {
    render(<Button />)
    const button = screen.getByRole('button', { name: /Count/i })
    expect(button).toBeInTheDocument();
  })

  it('should be able to increase counter when clicked', async () => {
    render(<Button />)
    expect(screen.getByText(/Count/i).innerHTML).toBe('Count: 0');
    const button = screen.getByRole('button', { name: /Count/i })
    fireEvent.click(button);
    const updatedButton = within(button);
    await waitFor(() => expect(updatedButton.getByText(/Count/i).innerHTML).toBe('Count: 1'));
  })
})