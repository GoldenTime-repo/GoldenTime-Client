import { Switch, Route } from 'react-router-dom';
import MainPages from './components/pages/MainPages';

function App() {
  return (
    <Switch>
      <Route path="/" component={MainPages} />
    </Switch>
  );
}

export default App;
