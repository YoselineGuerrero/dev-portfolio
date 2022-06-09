import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './mainPage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
