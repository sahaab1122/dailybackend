
let BASE_URL = 'https://windailyapp.herokuapp.com/'
// let localhost = 'http:///192.168.100.25:3000/'

export default {
    login: BASE_URL + 'login',
    register: BASE_URL + 'register',
    update: BASE_URL + 'update/',
    getuser: BASE_URL + 'users',
    getticket: BASE_URL + 'tickets',
    prizesadd: BASE_URL +'prizes/add',
    getprizes: BASE_URL + 'prizes',
    deleteprize: BASE_URL + 'deleteprizes',
    deletecat: BASE_URL + 'categories/delete',
    categoriesadd: BASE_URL + 'categories/add',
    getcategories: BASE_URL + 'categories',
    getorders: BASE_URL + 'orders'
}