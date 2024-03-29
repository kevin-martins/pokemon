import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './app/store';
import App from './components/App';
import './styles/index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
