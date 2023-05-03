import './App.css';
import ClientTable from './components/ClientTable';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/client/get' element={<ClientTable />} />
      </Routes>
    </div>
  );
}

export default App;
