const api = axios.create({
    baseURL: 'http://localhost:3000'
})

async function getApi() {
    const listarApi = document.getElementById('listarApi');
    const rotaListar = 'http://localhost:3000/listVendas';

    try {
        const responseRepo = await fetch(rotaListar);

        const data = await responseRepo.json()

        listarApi.innerHTML = ''

        data.result.vendas.forEach(item => {
            const divItem = document.createElement('div')
            divItem.textContent = `ID: ${item.id}, Nome do Produto: ${item.productName}, Preço do Produto: ${item.productPrice}, Quantidade de Vendas: ${item.qntSales}`
            listarApi.appendChild(divItem)
        });
    }
    catch(error) {
        console.log(error)
    }
}

// Funçao para criar cadastrar novo produto na API
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

document.addEventListener('DOMContentLoaded', getApi)