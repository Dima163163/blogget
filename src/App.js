import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {PostContextProvider} from './context/postsContext';

function App() {
  return (
    <TokenContextProvider value={{}}>
      <AuthContextProvider value={{}}>
        <Header />
        <PostContextProvider value={[]}>
          <Main />
        </PostContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
