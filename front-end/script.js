const api = axios.create({
    baseURL: 'http://localhost:3000'
})

const getApi = () => {
    const listarApi = document.getElementById('listarApi')

    api.get("/listVendas")
        .then((response) => {
            listarApi.innerHTML = ''
            response.data.forEach((venda) => {
                const item = document.createElement('div')
                item.textContent = `ID: ${venda.id}, Produto: ${venda.productName}, Preço: ${venda.productPrice}, Quantidade de vendas: ${venda.qntSales}`
                listarApi.appendChild(item)
            })
        })
        .catch(error => console.log(error))
}

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

    //window.location.reload()
}

document.getElementById('button').addEventListener('click', newProduct)

document.addEventListener('DOMContentLoaded', getApi)