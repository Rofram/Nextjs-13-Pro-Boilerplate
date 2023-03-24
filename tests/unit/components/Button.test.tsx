import { render, screen } from '@testing-library/react'
import { Button } from "@/shared/components/Button";

describe('Button component', () => {
  it('should render', () => {
    render(<Button />)
    expect(screen.getByRole('button', { name: /Hello World/i })).toBeInTheDocument();
  })
})