import {} from 'antd';
import AppFooter from './components/Footer';
import PageContent from './components/PageContent';

import './app.css';

const App = () => {
  return (
    <div className='app'>
      <PageContent />
      <AppFooter />
    </div>
  );
};

export default App;
