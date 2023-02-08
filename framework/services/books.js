import supertest from "supertest";
import config from "../config/userConfig";
import user, { token, userID } from "./user";
const {url} = config;

let ISBN = ''

const book = {

    getBookList: () => {
        return supertest(url)
        .get('/BookStore/v1/Books')
        .set('Accept', 'application/json')
        .send()
    },

    addBookToList: (token, userID) => {
        return supertest(url)
        .post('/BookStore/v1/Books')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          "userId": `${userID}`,
          "collectionOfIsbns": [
            {
              "isbn": "9781491904244"
            }
          ]
        })
    },

    updateBook: (ISBN, token, userID) => {
      return supertest(config.url)
      .put(`/BookStore/v1/Books/${ISBN}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({
        "userId": `${userID}`,
        "isbn": '9781449331818'
      })
    },

    getBookInfo: (ISBN) => {
      return supertest(config.url)
      .get(`/BookStore/v1/Book?ISBN=${ISBN}`)
      .set('Accept', 'application/json')
      .send()
    },

    deleteBook: (token, userID) => {
      return supertest(config.url)
      .del('/BookStore/v1/Book')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({
        "isbn": "9781449331818",
        "userId": `${userID}`
      })
    }

   
}

export default book;
//createBook - посылаем userID  - получаем isbn
//updateBook - посылаем isbn в пути и изменения в теле 
//getBookInfo - посылаем ISBN в пути
//deleteBook - посылаем ISBN и userID