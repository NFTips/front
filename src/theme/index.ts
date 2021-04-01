export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    background: '#121317',
    text: '#ffffff',
    primary: '#4E3FCE',
    secondary: '#ffbc42'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Roboto, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  },
  buttons: {
    primary: {
      minHeight: '40px',
      bg: 'primary',
      borderRadius: '20px',
      px: '32px',
      fontFamily: 'heading',
      fontWeight: 'bold',
      cursor: 'pointer',
      opacity: 0.7,
      transition: 'all 300ms',
      '&:hover': {
        transform: 'scale(1.02)',
        opacity: 1,
        transition: 'all 300ms'
      }
    },
    secondary: {
      minHeight: '40px',
      bg: 'secondary',
      borderRadius: '20px',
      px: '32px',
      fontFamily: 'heading',
      fontWeight: 'bold',
      cursor: 'pointer',
      opacity: 0.7,
      transition: 'all 300ms',
      '&:hover': {
        transform: 'scale(1.02)',
        opacity: 1,
        transition: 'all 300ms'
      }
    }
  }
};
