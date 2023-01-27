import supertest from "supertest";
import config from "../config/userConfig";
const {url} = config;

export let token = ''
export let userID = ''

const user = {

    createUser: (payload) => {
        return supertest(url)
        .post('/Account/v1/User')
        .set('Accept', 'application/json')
        .send(payload)
    },
    async getUserId() {
        const payload = config.credentials
        const res = await this.createUser(payload)
        return userID = res.body.userID
    },
    async getUserIdWithCache() {
        if(userID) {
            return userID
        }
        userID = await this.getUserId()
        return userID
    },




    generateToken: (payload) => {
        return supertest(url)
        .post('/Account/v1/GenerateToken')
        .set('Accept', 'application/json')
        .send(payload)
    },
    async getAuthToken() {
        const payload = config.credentials
        const res = await this.getAuthToken(payload)
        return res.body.token
    },

async getAuthTokenWithCache() {
    if(token) {
        return token;
    }
    token = await this.getAuthToken()
    return token
},




    login: (payload) => {
        return supertest(url)
            .post('/Account/v1/Authorized')
            .set('Accept', 'application/json')
            .send(payload)
    },





    getUserInfo: (userID) => {
        return supertest(url)
        .get(`/Account/v1/User/${userID}`)
        .set('Accept', 'application/json')
        .send()
    },



    deleteUser: (userID, token) => {
        return supertest(url)
        .del(`/Account/v1/User/${userID}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send()
    },


    user: (userID, token) => {
        return supertest(url)
        .get(`/Account/v1/User/${userID}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send()
    }

}



export default user;


//createUser-> посылаем paload-> получаем ID
//generateToken-> посылаем paload->получаем token
//authorized->посылаем paload->получаем true
//userInfo->посылаем id
//deletUser->посылвем id