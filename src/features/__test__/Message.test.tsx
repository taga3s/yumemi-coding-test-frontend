import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

import { Message } from '../Message';

test('messageが表示されること', () => {
  render(<Message message='Hello, World!' />);

  expect(document.querySelector('span')?.textContent).toEqual('Hello, World!');
});
