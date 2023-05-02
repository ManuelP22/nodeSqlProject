import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ClientTable = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8080/client/get');
      setClientes(result.data.recordset);
    };
    fetchData();
  }, []);

  const style = {
    border: "border:1px solid black"
  }

  return (
    <div>
      <h2>Clientes:</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Género</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.ClientID}>
              <td>{cliente.ClientID}</td>
              <td>{cliente.Name}</td>
              <td>{cliente.LastName}</td>
              <td>{cliente.Gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClientTable
