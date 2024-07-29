import { style } from '@vanilla-extract/css';

import { vars } from '../../../common/variables.css';

const statisticsLineGraphLayout = style({
  marginTop: '32px',
  padding: '10px 16px 16px',
  backgroundColor: vars.color.secondary,
  borderRadius: '8px',
});

const statisticsLineGraphSelectBox = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '4px',
});

const statisticsLineGraphSelectBoxInner = style({
  appearance: 'none',
  padding: '8px',
  backgroundColor: vars.color.white,
  border: '1px solid #ccc',
  borderRadius: '8px',
  cursor: 'pointer',
});

export { statisticsLineGraphLayout, statisticsLineGraphSelectBox, statisticsLineGraphSelectBoxInner };
