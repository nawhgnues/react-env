import Text from '@/components/Text/Text';
import { render, screen } from '@testing-library/react';

test('TextInput Component Test', async () => {
  render(<Text />);

  const textElement = screen.getByText('Text');
  expect(textElement).toBeInTheDocument();
});
