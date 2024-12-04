import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

const newProduct = () => {

    const inputName = document.getElementById('inputName'.trim()).value
    const inputPrice = document.getElementById('inputPrice'.trim()).value
    const inputSales = document.getElementById('inputSales'.trim()).value

    const saleId = Math.floor(1000 + Math.random() * 9000)

    api.post('/createVenda', {
        id: saleId,
        productName: inputName,
        productPrice: inputPrice,
        qntSales: inputSales
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    window.location.reload()
}

document.getElementById('button').addEventListener('click', newProduct)