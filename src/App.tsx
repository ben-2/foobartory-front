import './App.css';
import AppTitle from './components/AppTitle';
import AppSubTitle from './components/AppSubTitle';
import LangSelect from './components/LangSelect';

function App() {
  return (
    <div className="App">
      <div className="LangSelect"><LangSelect /></div>
      <div>
        <AppTitle />
        <AppSubTitle />
      </div>
    </div>
  );
}

export default App;
