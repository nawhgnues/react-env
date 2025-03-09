import Text from '@/components/Text/Text';
import { render, screen } from '@testing-library/react';

test('Text Component Test', () => {
  const text = 'Hello, world!';

  // `txt` prop을 전달하면서 컴포넌트를 렌더링합니다.
  render(<Text txt={text} />);

  // 텍스트가 화면에 나타나는지 확인합니다.
  const textElement = screen.getByText(text);
  expect(textElement).toBeInTheDocument();
});
