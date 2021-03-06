import request from '../config/request'

export const login = (data) => request('guest/login', 'post', data);

export const getUserInfo = () => {
	return request('me/info', 'get', null, true).then((data) => {
        return data;
	})
};

export const saveUserInfo = (data) => {
	request('me/info/save', 'post', data);
}

export const getProductlist = (data) => {
	return request('product', 'get', data);
}

export const saveProductBaseInfo = (data) => {
	return request('product/detail/save', 'post', data);
}

export const getProductDetail = (data) => {
    return request('product/detail', 'get', data)
}

export const saveProductAttribute = (data) => {
	return request('product/detail/saveAttribute', 'post', data)
}

export const getAttribute = () => {
	return request('product/attribute', 'get', null).then((data) => {
		return data;
	})
}

export const getAttbuDetail = (data) => {
    return request('product/attribute/detail', 'get', data, true).then((data) => {
		return data;
	})
}

export const saveAttribute = (data) => {
	return request('product/attribute/save', 'post', data);
}

export const getStocklist = (data) => {
    return request('purchase/order', 'get', data).then((data) => {
    	return data;
    })
}

// export const exportexcel = (data) => {
// 	return request.downloadexcel('product/io/export', data)
// }