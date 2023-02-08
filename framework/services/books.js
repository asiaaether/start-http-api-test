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

   
}

export default book;
//createBook - посылаем userID  - получаем isbn
//updateBook - посылаем isbn в пути и изменения в теле 
//getBookInfo - посылаем ISBN в пути
//deleteBook - посылаем ISBN и userID