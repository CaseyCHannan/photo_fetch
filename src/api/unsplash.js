import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 4b33fb2cdf7c861c98309bb4eb0217d2f9a4b8ad735c31ad13945e0f6d190694'
    }

})