import supertest from "supertest";
import config from "../framework/config/userConfig";
import user from "../framework/services/user";
import book from "../framework/services/books"


describe.only('Books', () => {

  let USER = {}
  let userID = ''
  let token = ''
  let ISBN = '9781593275846'

beforeAll('', async () => {
  USER = config.newUser
  const res = await user.createUser(USER)
  userID = res.body.userID
  //console.log(res.body.books)

  const resToken = await user.generateToken(USER)
  token = resToken.body.token
  //console.log(token)

  const resAuth = await user.login(USER)
  //console.log(resAuth.body)

})

  it('Получение списка книг', async () => {
    const res = await book.getBookList()
    expect(res.status).toEqual(200)
  })

  it('Добавление книги в список юзера', async () => {
    // const USER = config.newUser
    // const res = await user.createUser(USER)
    // const userID = res.body.userID
    // console.log(res.body.books)

    // const resToken = await user.generateToken(USER)
    // const token = resToken.body.token
    // console.log(token)

    // const resAuth = await user.login(USER)
    // console.log(resAuth.body)
    

    const response = await book.addBookToList(token, userID)
      //console.log(response.body)
      //console.log(USER)

        expect(response.status).toEqual(201)

        const resBook = await book.getBookList()
        //console.log(resBook.body)
        
        const responseUser = await user.user(userID, token)
      //console.log(responseUser.body)


  })

  it('Обновление книги', async () => {
    const res = await supertest(config.url)
    .put(`${ISBN}`)
    .set('Accept', 'application/json')
    .send({
      "userId": `${userID}`,
      "isbn": `${ISBN}`
    })

    expect(res.status).toEqual(200)
    console.log(res.body)
  })

  it('Получение информации о книге', () => {
    
  })

  it('Удаление книги', () => {
    
  })
})



// 1 логин - генерация токена - авторизвация -получение информации- удаление