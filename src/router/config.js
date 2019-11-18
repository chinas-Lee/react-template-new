import Bundle from './loadable'

const Demo = Bundle(() => import('../views/demo/demo'))
const NotFound = Bundle(() => import('../views/demo/404'))
const Login = Bundle(() => import('../views/demo/login'))

const Routes = [
    {
        path: '/',
        component: Demo,
        auth: true,
        title: '首页',
        exact: true
    },
    {
        path: '/login',
        component: Login,
        title: '登录'
    },
    {
        path: '/404',
        component: NotFound,
        title: '404',
        exact: true
    }
]

export default Routes
