import { style } from '@vanilla-extract/css';

import { vars } from '../../../common/variables.css';

const statisticsControlCheckboxLabel = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: 'fit-content',
  padding: '12px',
  backgroundColor: vars.color.gray,
  fontSize: '16px',
  borderRadius: '8px',

  ':hover': {
    backgroundColor: vars.color.grayHovered,
  },
});

export { statisticsControlCheckboxLabel };
