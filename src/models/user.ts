import { randomUUID } from "crypto";
import { Tweet } from "./tweet";
import { users, addUser } from "../databases/users.database";

export class User {
  private _id: string = randomUUID();
  private _tweet: Tweet[] = [];
  public _following: string[] = [];

  constructor(
    public name: string,
    public _username: string,
    public email: string,
    private _password: string
  ) {
    addUser(this);
  }

  public get id(): string {
    return this._id;
  }

  public get username(): string {
    return this._username;
  }

  // o método verifia se existe dentro da lista de usuários um usuário com o mesmo username, não sendo o username do próprio usuário que está sendo avaliado no chamado do método, por isso do uso do "&& user !==this".
  public validateUsername(): void {
    const exist = users.some(
      (user) => user._username === this._username && user !== this
    );
    if (exist) {
      throw Error(`Username já cadastrado por outro usuário!`);
    } else {
      console.log(
        `\n--------------------------------------------------------\n`
      );
      console.log("Usuário cadastrado com sucesso");
    }
  }

  // método que lista os usuários no console
  public showUsers(): void {
    console.log(`Lista de usuários cadastrados:`);
    users.forEach((user) => {
      console.log(
        `\n--------------------------------------------------------\n`
      );
      console.log(
        `Nome: ${user.name}, Username: @${user.username}, Email: ${user.email}`
      );
    });
  }

  // método para usuário disparar um tweet (tweetar)
  public sendTweet(tweet: Tweet): void {
    this._tweet.push(tweet);
  }

  // cadastrando seguidores, com a condição de que não é possível seguir a si mesmo
  public follow(user: User): void {
    if (user === this) {
      console.log(
        `\n--------------------------------------------------------\n`
      );
      console.log(`Um usuário não pode seguir a si mesmo!`);
    } else this._following.push(user._username);
  }

  // metodo que mostra quais os usuários determinado usuário segue
  public showFollowers(): void {
    console.log(`\n--------------------------------------------------------\n`);
    console.log(
      `O usuário @${
        this._username
      } segue os seguintes usuários: @${this._following.join(", @")}`
    );
    console.log(`\n--------------------------------------------------------\n`);
  }
  // método para mostrar os tweets do próprio usuário e (this.showTweets) e para mostrar os tweets do usuários que este segue.
  public showFeed(): void {
    console.log(`\tFeed de @${this._username}:`);
    this.showTweets();

    this._following.forEach((followingUsername: string) => {
      const followingUser = users.find(
        (user) => user._username === followingUsername
      );
      if (followingUser) {
        followingUser.showTweets();
      }
    });
  }

  // método que lista os tweets de cada usuário
  public showTweets(): void {
    if (this._tweet.length === 0) {
      console.log(`@${this._username} ainda não possui tweets.`);
    } else {
      this._tweet.forEach((tweet) => {
        tweet.show();
      });
    }
  }
}