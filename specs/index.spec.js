import supertest from "supertest";
import config from "../framework/config/userConfig";
import user from "../framework/services/user";
import book from "../framework/services/books"



describe.skip('user', () => {
  describe('POST /Account/v1/Authorized', () => {

    it.skip('Создание юзера', async () => {

      const res = await user.createUser(config.credentials)
      console.log(res.body)

      expect(res.status).toEqual(201);

    })

    it('Получение токена', async () => {
    
      const res = await user.generateToken(config.credentials)
      console.log(res.body.token)

      expect(res.status).toEqual(200)

    })

    it('Авторизация должна проходить успешно с правильным логином и паролем', async () => {

      const res = await user.login(config.credentials)
      console.log(res.body)

      expect(res.status).toEqual(200);
      expect(res.body).toEqual(true)
    })


    it('Получение информации о юзере', async () => {
      const USER = config.newUser
      const res = await user.createUser(USER)
      const userID = res.body.userID
      console.log(userID)

      const resToken = await user.generateToken(USER)
      const token = resToken.body.token
      console.log(token)

      const resAuth = await user.login(USER)
      console.log(resAuth.body)

      const response = await user.user(userID, token)
      console.log(response.body)
      expect(res.status).toEqual(201);
    })

    it('Удаление юзера', async () => {
      const USER = config.newUser
      const res = await user.createUser(USER)
      const userID = res.body.userID
      console.log(userID)

      const resToken = await user.generateToken(USER)
      const token = resToken.body.token
      console.log(token)

      const resAuth = await user.login(USER)

      const response = await user.deleteUser(userID, token)
      expect(response.status).toEqual(200)
    })
    
  })
})


describe('Books', () => {
  it('Получение списка книг', async () => {
    const res = await book.getBookList()
    expect(res.status).toEqual(200)
  })

  it('Создание книги', async () => {
    const USER = config.newUser
    const res = await user.createUser(USER)
    const userID = res.body.userID
    console.log(userID)

    const resToken = await user.generateToken(USER)
    const token = resToken.body.token
    console.log(token)

    const resAuth = await user.login(USER)

    const response = await 
    expect(response.status).toEqual(200)
  })

  it('Обновление книги', () => {
    
  })

  it('Получение информации о книге', () => {
    
  })

  it('Удаление книги', () => {
    
  })
})



// 1 логин - генерация токена - авторизвация -получение информации- удаление