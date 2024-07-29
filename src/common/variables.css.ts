import { createGlobalTheme } from '@vanilla-extract/css';

const vars = createGlobalTheme(':root', {
  color: {
    primary: '#A8D8B9',
    secondary: '#F4F4F4',
    white: '#FFFFFF',
  },
});

export { vars };
