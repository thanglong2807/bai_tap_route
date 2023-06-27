import './app.css';
import "./common.css"
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { publicRoute } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {
            publicRoute.map(item => {
              const Layouts = item.component
              return <Route key={item.id} path={item.path} element={<Layouts />} />
            })
          }
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
