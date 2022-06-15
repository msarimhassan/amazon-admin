import client from "./index";

export default {
    get: async (url, headers, data) => {
        client.setHeaders(headers);
        return await client.get(url, data);
    },
    post: async (url, data, headers) => {
        client.setHeaders(headers);
        return await client.post(url, data);
    },
    patch: async (url, data, headers) => {
        client.setHeaders(headers);
        return await client.patch(url, data);
    },
    delete: async (url, data, headers) => {
        client.setHeaders(headers);
        return await client.delete(url, data);
    },
};

// these are keys in an object
// const obj={
//     firstname:'Sarim',
//     lastname:'Sarim',
//     add:function add(a,b){
//         return a+b
//     }
// }

// obj.add(2,3);