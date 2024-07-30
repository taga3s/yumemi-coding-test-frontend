import { style } from '@vanilla-extract/css';

import { vars } from '../common/variables.css';

const headerLayout = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  width: '100%',
  height: '60px',
  padding: '8px 20px',
  backgroundColor: vars.color.green,
});

const headerTitle = style({
  fontSize: '24px',
  fontWeight: 'bold',
});

export { headerLayout, headerTitle };
