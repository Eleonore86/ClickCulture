import axios from "axios"

export let historique = []


// const users = [
//     {login : 'Elotora', password : '1234567'}
// ]
export let isLogged = false
export const login = (login, password) => {
    const u = users.find(l => l.login == login && l.password == password)
    return u != undefined
}
export const changeIsLogged = (log) => {
    isLogged = log
}
