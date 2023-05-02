import express, { Router, json } from "express";
import cors from 'cors'
import morgan from 'morgan'
import { getClients } from "./services/getClients";
import { postClient } from "./services/postClient";
const start = () => {
  const port = process.env.PORT || 8080
  const app = express()
  // Middlewares
  app.use(json())
  app.use(cors())
  app.use(morgan('tiny'))
  // Routes
  const router = Router()
  router.get(
    '/client/get',
    getClients
  )
  router.post(
    '/clients/post',
    postClient
  )
  app.use(router)
  //
  app.listen(port, () => console.log(`running on PORT ${port}`))
}
export default start