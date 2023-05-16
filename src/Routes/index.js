import HomePage from '../Pages/Home/HomePage.js'; 
import {Login, Register} from '../Pages/Account/index.js';
import DetailPage from '../Pages/Detail/index.js';

const publicRoutes = [
    {path: '/', page: HomePage},
    {path: '/Login', page: Login},
    {path: '/Register', page: Register},
    {path: '/Detail', page: DetailPage}
];

// const privateRoutes = [
    
// ];

export {publicRoutes};