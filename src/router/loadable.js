import Loadable from 'react-loadable'

// 按需加载
export default function withLoadable (comp) {
    return Loadable({
        loader: comp,
        loading: () => null,
        delay: 0
    })
}
