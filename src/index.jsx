import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Compo1 } from './compo1/compo1';

const root = ReactDOMClient.createRoot(document.body);

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Compo1 />
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
