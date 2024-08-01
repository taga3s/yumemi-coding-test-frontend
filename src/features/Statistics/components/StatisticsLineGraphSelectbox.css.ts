import { style } from '@vanilla-extract/css';
import { vars } from '../../../common/variables.css';

const statisticsLineGraphSelectbox = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '4px',
});

const statisticsLineGraphSelectboxInner = style({
  appearance: 'none',
  padding: '8px',
  backgroundColor: vars.color.white,
  border: '1px solid #ccc',
  borderRadius: '8px',
  cursor: 'pointer',
});

export { statisticsLineGraphSelectbox, statisticsLineGraphSelectboxInner };
