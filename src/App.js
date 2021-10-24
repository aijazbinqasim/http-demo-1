import { BrowserRouter as Router } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

function App() {
  return (
    <Router>
      <div>
        <Blog />
      </div>
    </Router>
  );
}

export default App;