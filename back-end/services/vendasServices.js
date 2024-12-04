import {VendasModel} from '../models/vendasModels.js';
import {database} from '../database/db.js';

export class VendasService {
    async createVendas(productName, productPrice, qntSales){
        try{
            await database.sync()
            const newVenda = await VendasModel.create({productName, productPrice, qntSales})
            return {
                saleId :newVenda.id,
                message: 'Created Sucessfully',
                statusValue: 20
            }
        }
        catch(error) {
            console.log('Error na operação para criar vendas')
        }
    }

    async getAllSales() {
        try{
            await database.sync()
            const vendas = await VendasModel.findAll()
            return{
                statusValue: 200,
                message: 'Sucessfully',
                vendas,
            }
        }
        catch(error) {
            console.log('Erro na operação de listar as vendas')
        }
    }

    async delSale(id) {
        try{
            await database.sync()
            const venda = await VendasModel.findByPk(id)
            venda.destroy()
            return{
                statusValue: 200,
                message: 'Sucessfully'
            }
        }
        catch(error) {
            console.log('Erro na operação de deletar venda')
        }
    }
}