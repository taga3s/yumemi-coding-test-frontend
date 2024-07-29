import { style } from '@vanilla-extract/css';

import { vars } from '../../../common/variables.css';

const statisticsControlLayout = style({
  width: '100%',
  marginTop: '24px',

  '@media': {
    'screen and (max-width: 768px)': {
      height: "360px",
      overflowY: "auto"
    }
  }
});

const statisticsControlHeading = style({
  fontSize: '20px',
  fontWeight: 'bold',
});

const statisticsControlForm = style({
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
  marginTop: '16px',
  padding: '16px',
  backgroundColor: vars.color.primary,
  borderRadius: '8px',
});

export { statisticsControlForm,statisticsControlHeading, statisticsControlLayout };
