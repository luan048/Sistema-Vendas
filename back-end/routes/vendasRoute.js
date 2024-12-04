import { Router } from "express";
import {createVenda, getVendas, delVendas} from '../controllers/vendasController.js'

const routerVendas = Router()

routerVendas.get("/listVendas", async(req, res) => {
    return await getVendas(req, res)
})

routerVendas.post("/createVenda", async(req, res) => {
    return await createVenda(req, res)
})

routerVendas.delete("/delVenda/:id", async(req, res) => {
    return await delVendas(req, res)
})

export {routerVendas}