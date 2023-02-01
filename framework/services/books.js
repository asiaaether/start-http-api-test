import supertest from "supertest";
import config from "../config/userConfig";
const {url} = config;


const book = {

    getBookList: () => {
        return supertest(url)
        .get('/BookStore/v1/Books')
        .set('Accept', 'application/json')
        .send()
    },

    createBook: (paload) => {
        return supertest(url)
        .post('/Account/v1/User')
        .set('Accept', 'application/json')
        .send(paload)
    }
}

export default book;
//createBook - посылаем userID  - получаем isbn
//updateBook - посылаем isbn в пути и изменения в теле 
//getBookInfo - посылаем ISBN в пути
//deleteBook - посылаем ISBN и userID