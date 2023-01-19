import supertest from "supertest";
import config from "./config";
const {url} = config;

let token = ''
let userID = ''

const user = {

    createUser: (newUser) => {
        return supertest(url)
        .post('/Account/v1/User')
        .set('Accept', 'application/json')
        .send(newUser)
    },

    login: (payload) => {
        return supertest(url)
            .post('/Account/v1/Authorized')
            .set('Accept', 'application/json')
            .send(payload)
    },

    user: (token) => {
        return supertest(url)
            .post('Account/v1/GenerateToken')
            .set('Accept', 'application/json')
            .set('Authorized', `Bearer${token}`)
            .send()
    },

    getToken: (payload) => {
        return supertest(url)
        .post('/Account/v1/GenerateToken')
        .set('Accept', 'application/json')
        .send(payload)
    },

    getUserInfo: (userID) => {
        return supertest(url)
        .get(`Account/v1/User/${userID}`)
        .set('Accept', 'application/json')
        .send()
    },

    async getUserId() {
        const payload = config.newUser
        const res = await this.createUser(payload)
        return res.body.userID
    },

    async getAuthToken() {
        const payload = config.credentials
        const res = await this.login(payload)
        return res.body.token
    },

    async getAuthTokenWithCash() {
        if(token) {
            return token
        } 
        token = await this.getAuthToken()
        return token

    }

}

export default user;