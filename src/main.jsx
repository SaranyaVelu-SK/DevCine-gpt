import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import appStore from './store/appStore.js';

const StoreApp = () =>{
  return (
    <Provider store={appStore}>
      <App />
    </Provider>
  )
}


createRoot(document.getElementById('root')).render(<StoreApp />)
