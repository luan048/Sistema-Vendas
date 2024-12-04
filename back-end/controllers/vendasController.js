import { VendasService } from '../services/vendasServices.js'

const instanceVendasService = new VendasService()

export async function createVenda(req, res) {
    try {
        const { productName, productPrice, qntSales } = req.body
        const result = await instanceVendasService.createVendas(productName, productPrice, qntSales)
        return res.status(200).json({ result })
    }
    catch(error) {
        console.log('Erro na operação: ', error)
    }
}

export async function getVendas(req, res) {
    const result = await instanceVendasService.getAllSales()
    return res.status(200).json({ result })
}

export async function delVendas(req, res) {
    const { id } = req.params
    await instanceVendasService.delSale(id)
    return res.status(200).json({ message: "Sucessfully" })
}