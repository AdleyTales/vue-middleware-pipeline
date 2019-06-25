
export default function guest({next, store}) {
    if(store.getters.auth.loginedIn) {
        return next({
            name: 'dashboard'
        })
    }

    return next()
}