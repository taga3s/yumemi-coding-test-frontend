import { createGlobalTheme } from '@vanilla-extract/css';

const vars = createGlobalTheme(':root', {
  color: {
    green: '#A8D8B9',
    gray: '#F4F4F4',
    grayHovered: '#E0E0E0',
    white: '#FFFFFF',
  },
});

export { vars };
