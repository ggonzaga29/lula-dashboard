import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Font Awesome
import './vendor/fontawesome-free/css/all.min.css';
// Main SCSS
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
