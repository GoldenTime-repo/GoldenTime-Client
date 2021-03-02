import { Route } from 'react-router-dom';
import MainPages from './components/pages/MainPages';

function App() {
  return <Route path="/" component={MainPages} />;
}

export default App;
