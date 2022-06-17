import { create } from 'apisauce';

const baseUrl = 'https://amazon-clone-12345.herokuapp.com/api/';

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

export const multipartConfig = async () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'multipart/form-data',
        },
    };
};

export default client;
