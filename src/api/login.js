export const createEmptyLogin = () => ({
    login: "",
    password: ""
})

export const isValidLogin = (loginInfo) => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(loginInfo.login === 'admin' && loginInfo.password === 'test')
        }, 500);
    })
}

