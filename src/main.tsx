import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found. Make sure index.html has a div with id="root"')
}

console.log('Main.tsx is executing');
console.log('Root element found:', rootElement);

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  console.log('React app rendered successfully');
} catch (error) {
  console.error('Error rendering app:', error);
  rootElement.innerHTML = `
    <div style="padding: 40px; font-family: sans-serif; background: #fee2e2; min-height: 100vh;">
      <h1 style="color: #dc2626;">Error Loading App</h1>
      <p style="color: #991b1b;">${error instanceof Error ? error.message : 'Unknown error'}</p>
      <pre style="background: white; padding: 20px; border-radius: 8px; overflow: auto;">
        ${error instanceof Error ? error.stack : String(error)}
      </pre>
    </div>
  `;
}
