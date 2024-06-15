import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --textMenu: #ffffff;
    --textHeadings: #182c62;
    --textTable: #4b5c68;
    --textFooter: #4b5c68;
    --backgroundHeader: #025feb;
    --backgroundTable: #e4edf2;
    --backgroundEvenRows: #f6f7f7;
    --backgroundFooter: #f6f7f7;
  }

	* {
		margin: 0;
		padding: 0;
	}

	*, *::before, *:after {
		box-sizing: border-box;
	}

	body {
		min-height: 100dvh;
	}

	input, button, textarea, select {
		font: inherit;
	}
	
	p {
		text-wrap: pretty
	}

	h1, h2, h3, h4, h5, h6 {
		text-wrap: balance;
	}

  body {
	min-height: 100dvh;
    font-family: 'Open Sans', sans-serif;
  }
`;
