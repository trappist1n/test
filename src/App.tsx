import './App.css';
import { Header } from './components/Header';
import { Calendar } from './components/Calendar';
import { Today } from './components/Today';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Calendar />
      <Today />
      <Footer />
    </>
  );
};

export default App;
