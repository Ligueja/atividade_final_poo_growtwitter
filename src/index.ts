import { users } from "./databases/users.database";
import { Reply } from "./models/reply";
import { Tweet } from "./models/tweet";
import { User } from "./models/user";

// criação de usuários (se tiver o mesmo user name irá dar um erro.):
const luiz = new User("Luiz Henrique", "ligueja", "ligueja@test.com", "123456");
const fernanda = new User("Fernanda", "Fefa", "fefa@test.com", "654321");
const claudia = new User("Claudia", "claudete", "claudete@test.com", "123654");
const lucas = new User("Lucas", "luquinhas", "lucas@test.com", "7896547");

luiz.showUsers();

// cadastrando seguidores à um usuário. Não sendo possível seguir a si mesmo.
luiz.follow(fernanda);
luiz.follow(claudia);
luiz.follow(luiz);

// mostrando quem o usuário está seguindo
// luiz.showFollowers();

//criando tweets
const tweet1 = new Tweet("Hoje o bicho vai pegar!", luiz);
const tweet2 = new Tweet("Alguem afim de sair hoje?", luiz);
const tweet3 = new Tweet("Estou tomando um chimarrão", claudia);
const tweet4 = new Tweet("Hoje tem festinha de aniversário!", lucas);
const tweet5 = new Tweet(
  "Amanhã tenho que sair cedo para trabalhar.",
  fernanda
);

// enviando tweets
luiz.sendTweet(tweet1);
luiz.sendTweet(tweet2);
claudia.sendTweet(tweet3);
fernanda.sendTweet(tweet5);
lucas.sendTweet(tweet4);
fernanda.sendTweet(tweet5);

// adicionando replys aos tweets
tweet1.reply("Só quero ver", fernanda);
tweet2.reply("Eu quero, que horas te busco?", claudia);
tweet3.reply("Vou passar ai para tomar com você", luiz);
tweet4.reply("Nessa boquinha eu quero ir heim...", claudia);

// mostrando os riples de um determinado tweet
tweet1.showReplies()

// adicionando likes aos tweets
tweet1.like(claudia);
tweet1.like(lucas);
tweet1.like(luiz);
tweet2.like(fernanda);
tweet2.like(luiz);
tweet3.like(lucas);

//mostrar tweets, likes e retweets (replys)
tweet1.show();
tweet2.show();
tweet3.show();
tweet4.show();
tweet5.show();

// mostrar o feed de um determinado usuário
luiz.showFeed();

// mostrar os teets de um determinado usuário
luiz.showTweets();