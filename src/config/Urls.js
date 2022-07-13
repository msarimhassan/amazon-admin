export default {
    login: 'auth/',
    getRoles: 'admin/get-roles',
    createShop: 'admin/create-shop',
    deleteShop: 'admin/delete-shop/',
    getShops: 'admin/get-shops',
    createCategory:(ln)=>`admin/${ln}/add-category`,
    getCategories: (ln)=>`category/${ln}/get-categories`,
    createProduct: 'shop/add-product',
    getProducts: (ln)=>`shop/${ln}/myProducts`,
    deleteProduct: 'shop/delete-product/',
    updateProduct: 'shop/update-product/',
    getsingleProduct:(ln)=>`shop/${ln}/get-product/`,
    getsingleShop: 'shop/myShop',
    updateShop: 'shop/update-shop',
    getRequests: 'admin/get-update-requests',
    approveRequest: 'admin/update-shop/',
    getOrders: 'shop/orders',
};
