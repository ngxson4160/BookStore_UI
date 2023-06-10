import AllBooks from '../Pages/AllBooks/AllBooks.js'; 
import {Login, Register} from '../Pages/Account/index.js';
import DetailPage from '../Pages/Detail/index.js';

const publicRoutes = [
    {path: '/', page: AllBooks},
    {path: '/list-book', page: AllBooks},
    {path: '/Login', page: Login},
    {path: '/Register', page: Register},
    {path: '/Detail', page: DetailPage}
];

// const privateRoutes = [
    
// ];

export {publicRoutes};