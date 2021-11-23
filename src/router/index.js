import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Register from "../views/Register";
import ItemsList from "../views/user/ItemsList";
import ItemBooking from "../views/user/ItemBooking";
import UserProfile from "../views/user/UserProfile";
import Admin from "../views/admin/Admin";
import ModifyOffer from "../views/admin/ModifyOffer";
import CreateOffer from "../views/admin/CreateOffer";
import Auth from "../views/Auth";

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        alias: '/',
        path: '/list',
        name: 'list',
        component: ItemsList
    },
    {
        path: '/booking/:id',
        name: 'booking',
        component: ItemBooking
    },
    {
        path: '/profile',
        name: 'profile',
        component: UserProfile
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    },
    {
        path: '/modify/:id',
        name: 'modify',
        component: ModifyOffer
    },
    {
        path: '/create',
        name: 'create',
        component: CreateOffer
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
