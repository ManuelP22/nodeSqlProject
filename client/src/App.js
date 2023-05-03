import './App.css';
import ClientTable from './components/ClientTable';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route exact path='/client/get' element={<ClientTable />} />
      </Routes>
    </div>
  );
}

export default App;
