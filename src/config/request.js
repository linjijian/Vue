import { baseUrl } from './env'
import axios from 'axios'
import { Notification } from 'element-ui'

axios.defaults.baseURL = baseUrl

axios.defaults.headers.post['X-Request-With'] = 'XMLHttpRequest'

export default async(url, method, data = {}, forbid) => {
	let response

	if (sessionStorage.getItem('token')) {
     // axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = 'Token kane-52653784'
    }
	if (method == 'get') {
        response = await axios.get(url, { params: data })
	} else if (method == 'post') {
		// console.log(url);
		response = await axios.post(url, data)
	}

	if (response.data.res === 1) {
		if (!forbid) {
			Notification.success({
				message: response.data.msg,
				duration: 1500
			})
		}
		if (response.data) {
			if (response.data.dat) {
				if (response.data.dat.token) {
					sessionStorage.setItem('token', response.data.dat.token)
				}
			}
		}
		// console.log(response.data);
		return Promise.resolve(response.data.dat)
	} else if (response.data.res === 0) {
		Notification.error({
			message: response.data.msg,
			duration: 1500
		})

		return Promise.reject(response.data.msg)
	}
}

export { axios }
