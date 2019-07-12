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

export const saveProductBaseInfo = (data) => {
	return request('product/detail/save', 'post', data);
}

export const getAttribute = () => {
	return request('product/attribute', 'get', null).then((data) => {
		return data;
	})
}

export const getkAttributeDetail = (data) => {
    return request('product/attribute/detail', 'get', data, true).then((data) => {
		return data;
	})
}