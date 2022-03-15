import Header from './components/Header';
import { routes } from './links';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  const showRoutes = (routes) => {
    return routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          element={route.element()}
        />
      )
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
        {/* Header */}
        <Header />
        {/* Body */}
        <div className='container-fluid'>
          <div className='row'>
            <Routes>
              {showRoutes(routes)}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
