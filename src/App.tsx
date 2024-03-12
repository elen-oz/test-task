import {} from 'antd';
import AppFooter from './components/Footer';
import AppHeader from './components/Header';
import PageContent from './components/PageContent';

import './app.css';

const App = () => {
  return (
    <div className='app'>
      <AppHeader />
      <PageContent />
      <AppFooter />
    </div>
  );
};

export default App;
