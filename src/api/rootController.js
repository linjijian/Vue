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

export const getkAttribute = () => {
	return request('product/attribute','get',null,true).then((data) => {
		return data;
	})
}