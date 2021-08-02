import './App.css';
import AppTitle from './components/AppTitle';
import AppSubTitle from './components/AppSubTitle';
import LangSelect from './components/LangSelect';
import { useStoreState } from './hooks';
import StartButton from './components/StartButton';
import GameBoard from './components/GameBoard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormattedMessage } from 'react-intl';

function App() {
  const isGameStarted = useStoreState((state) => state.isGameStarted);
  const isGameEnded = useStoreState((state) => state.isGameEnded);

  return (
    <div className="App">
      <div className="LangSelect"><LangSelect /></div>
      <div>
        <AppTitle />
        <AppSubTitle />
      </div>
      {isGameEnded ? <div className={'EndOfGame'}><FormattedMessage id="end" />!</div> : <div>{isGameStarted ? <GameBoard /> : <StartButton />}</div>}
      <ToastContainer hideProgressBar={true} />
    </div>
  );
}

export default App;
