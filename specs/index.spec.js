import supertest from "supertest";
import config from "../framework/config/userConfig";
import user from "../framework/services/user";




describe('user', () => {
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



// 1 логин - генерация токена - авторизвация -получение информации- удаление