import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { HomePageProvider } from './providers/HomePageProvider';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <HomePageProvider>
              <HomePage />
            </HomePageProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
