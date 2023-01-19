import supertest from "supertest";
import config from "../framework/config";
import user from "../framework/services";

const USER = config.newUser
const userID = ''

describe('user', () => {
  describe('POST /Account/v1/Authorized', () => {

    it.only('Создание юзера', async () => {

      const res = await user.createUser(USER)
      const userID = res.body.userID
      console.log(res.body)
      console.log(userID)

      expect(res.status).toEqual(201);

    })

    it.only('Получение токена', async () => {
    
      const res = await user.getToken(USER)

      console.log(res.body.token)

      expect(res.status).toEqual(200)

    })

    it.only('Авторизация должна проходить успешно с правильным логином и паролем', async () => {

      const res = await user.login(USER)
      console.log(res.body)

      expect(res.status).toEqual(200);
      expect(res.body).toEqual(true)
    })


    it.only('Получение информации о юзере', async () => {

      const res = await user.getUserInfo(userID)
      console.log(res)

      expect(res.status).toEqual(200);
    })
    

  //   test('Авторизация должна возвращать статус с кодом ошибки если логин неверный', async () => {
  //     const res = await supertest('https://try.vikunja.io')
  //         .post('/api/v1/login')
  //         .set('Accept', 'application/json')
  //         .send({username: 'demo4', password: 'demo'})

  //     expect(res.status).toEqual(412);
  //     expect(res.body.code).toEqual(1011)
  //   })

  //   test('Авторизация должна возвращать статус с кодом ошибки если пароль неверный', async () => {
  //     const res = await supertest('https://try.vikunja.io')
  //         .post('/api/v1/login')
  //         .set('Accept', 'application/json')
  //         .send({username: 'demo', password: 'demo3'})


  //     expect(res.status).toEqual(412);
  //     expect(res.body.code).toEqual(1011)
  //   })
  })
})



// 1 логин - генерация токена - авторизвация -получение информации- удаление