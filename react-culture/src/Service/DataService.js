// import axios from "axios"
export const libraires = []

export const getLibraires = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(libraires)
        }, 3000)
    })
}

let compteurLibraire = 1

export const ajouterLibraire = (libraire) => {
    const tmpLibraire = {
        ...libraire,
        id : compteurLibraire
    }
    libraires.push(tmpLibraire)
    compteurLibraire++
}

export const search = (filter) => {
    return new Promise((resolve,reject) => {
        const tmpLibraires = libraires.filter(l => l.nom.includes(filter) || l.description.includes(filter))
        setTimeout(() => {
            resolve(tmpLibraires)
        }, 3000)
    })
}

export const getLibraireById = (id) => {
    return libraires.find(l => l.id ==id)
}

export let favoris = []

const users = [
    {login : 'Elotora', password : '1234567'}
]
export let isLogged = false
export const login = (login, password) => {
    const u = users.find(l => l.login == login && l.password == password)
    return u != undefined
}
export const changeIsLogged = (log) => {
    isLogged = log
}





