const endpoints = {
    //category related endpoints
    Category: '/categories',

    //user related endpoints
    UserSignIN: '/login',
    UserSignUp: '/registration',
    UserUpdate: '/userUpdate',
    UserInfo: '/user',	

    //product related endpoints
    NewProductList: '/product/:tag',  // here tag will dynamic string like it may be 'latest' or 'feature', 'recent_purchase' etc.
    ProductDetals: '/product/:id',

    //cart related endpoints
    Cart: '/cart',
    CartEmpty: '/cart/empty',
    CartChange: 'cart/:pid/:pqty' // here pid is related to product id and pqty is related to product quantity

    // Add more endpoints as needed
};

export default endpoints;