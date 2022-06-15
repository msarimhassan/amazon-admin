import { create } from 'apisauce';

const baseUrl = 'http://192.168.10.4:8080/api/';
// const baseUrl = 'https://amazon-clone-12345.herokuapp.com/api/';

const client = create({
    baseURL: baseUrl,
});

export const config = async () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    };
};
export const authConfig = async (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    };
};

export const muntipartConfig = async () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'multipart/form-data',
        },
    };
};

export default client;
