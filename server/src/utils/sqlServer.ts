import mssql from 'mssql'
export const query = async (query:string) => {
  var connectionString = {
    server: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME,
    type: 'default',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  }
  const conn = await mssql.connect(connectionString)
  return await conn.request().query(query).catch(err => console.log(err))
}