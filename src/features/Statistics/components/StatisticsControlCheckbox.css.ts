import { style } from '@vanilla-extract/css';

import { vars } from '../../../common/variables.css';

const statisticsControlCheckBoxLabel = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: 'fit-content',
  padding: '12px',
  backgroundColor: vars.color.secondary,
  fontSize: '16px',
  borderRadius: '8px',
});

export { statisticsControlCheckBoxLabel };
