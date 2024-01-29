import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Contact from './Contact';
import Home from './Home';
import { Provider } from 'react-redux';
import { store } from './Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router >
        <Link to='/'>Home</Link> |
        <Link to='/Login'>Login</Link> |
        <Link to='Contact'>Contact</Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
