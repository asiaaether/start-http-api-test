import { faker } from '@faker-js/faker';

const randomName = faker.name.firstName();
const randomPassword = faker.internet.password(10, false,  /\S/);

const config = {
    url: "https://bookstore.demoqa.com",
    credentials: {
        "userName": "Aliyah1",
        "password": "AwjqA1A1!d"
    },
    newUser: {
        "userName": `${randomName}`,
        "password": `${randomPassword}1!`
    }
}

export default config;