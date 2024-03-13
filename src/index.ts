import { Tweet } from "./models/tweet";
import { User } from "./models/user";


const luiz: User = new User("Luiz Henrique", "ligueja", "lhc@gmamil.com", "123456")
const fernanda: User = new User("Fernanda Soares", "fefa", "fefa@gmamil.com", "654321")
const pedro = new User("Pedro", "pedro789", "pedro@example.com", "senha789");

const tweet1 = new Tweet ("Esse é o tweet numero 1", "normal")
const tweet2 = new Tweet ("Esse é o numero 2", "normal")

luiz.sendTweet (tweet1)

luiz.follow(fernanda)

luiz.showTweets()


