
export default function auth({next, store}) {
    if(!store.getters.auth.loginedIn) {
        return next({
            name: 'login'
        })
    }

    return next()
}