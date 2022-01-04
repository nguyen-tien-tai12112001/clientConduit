import 'antd/dist/antd.css';
import './App.css';
import { Footer, Header } from './components';
import Router from './routers';

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
