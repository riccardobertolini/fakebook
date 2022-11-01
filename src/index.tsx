import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { inject } from '@vercel/analytics';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
inject();
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);

reportWebVitals();
