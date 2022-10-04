import Success from './components/success/Success';
import Error from './components/error/Error';
import Loading from './components/loading/Loading';
import './App.css';

function App() {
  return (
    <div className="App">
      <Success />
      <Error />
      <Loading />
    </div>
  );
}

export default App;
