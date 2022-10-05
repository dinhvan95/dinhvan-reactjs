import axios from "axios"

const BASE_URL = `https://jsonplaceholder.typicode.com/users`

//call api get list user
//
export const getListUser = async () => {
    const result = await (await fetch(BASE_URL)).json()
    return result
}

export const getListUserAxios = async () => {
    const result = await axios({
        method: 'get',
        baseURL: BASE_URL
    })
    console.log('result', result)
    return result?.data
}

const BASE_URL_USER = `https://api.realworld.io/api/users/login`

export const login = async (data) => {
    try {
        const result = await axios({
            method: 'post',
            baseURL: BASE_URL_USER,
            data: {
                user: {
                    "email": data.email,
                    "password": data.password
                }
            }
        })
        console.log('result', result)
        return result?.data?.user

    } catch (error) {
        return null

    }


}

