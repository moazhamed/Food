import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer pci0gFcMaNOhuv-Nk2GRkVxDuh0AzS7c2eZWZ1XOkUaqfOC_AiM3s-tbL9sbOm8MztvUFp5X9ieLlCjQ7i7dnGiJqyzTFfZQdIVGFdAROZZbmcNmC4F3bJ82s3gcX3Yx'
    }
})


