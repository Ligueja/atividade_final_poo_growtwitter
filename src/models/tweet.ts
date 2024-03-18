import { randomUUID } from "crypto";
import { User } from "./user";
import { Reply } from "./reply";
import { users } from "../databases/users.database";

export class Tweet {
  private _id: string = randomUUID();
  // private __likes: Like [] = [];
  private _reply: Reply[] = [];
  private _user: User;
  public _likes: User[] = [];

  constructor(public content: string, public user: User) {
    this._user = user;
  }

  public get id(): string {
    return this._id;
  }

  // método para dar reply nos twwes ("instanciando o mesmo no próprio método")
  public reply(reply: string, user: User): void {
    const newReply: Reply = new Reply(reply, user, this);
    this._reply.push(newReply);
  }

  //metodo para dar like no tweet
  public like(user: User) {
    if (this._likes.includes(user)) {
      return;
    }
    this._likes.push(user);
  }

  // Metodo para mostrar os _likes do tweet
  public show_likes() {
    if (this._likes.length === 0) {
      console.log(`\t@${this._user._username}: ${this.content}
        [0 _likes]`);
    } else if (this._likes.length === 1) {
      console.log(`\t@${this._user._username}: ${this.content}
        [@${this._likes[0].username} curtiu]`);
    } else if (this._likes.length === 2) {
      console.log(`\t@${this._user._username}: ${this.content}
        [@${this._likes[0].username} e mais 1 usuário curtiu]`);
    } else if (this._likes.length > 2) {
      console.log(`\t@${this._user._username}: ${this.content}
        [@${this._likes[0].username} e mais ${
        this._likes.length - 1
      } usuários curtiram]`);
    }
  }

  //método para mostrar todos os reply e _likes (em consequência mostrar tods os tweets que tiveram reply ou like)
  public show(): void {
    console.log(`\n--------------------------------------------------------\n`);
    this.show_likes();
    this.showReplies();
  }

  // método para mostrar o(s) reply(s) de um tweet
  public showReplies(): void {
    this._reply.forEach((replay) => {
      console.log(`\t  > @${replay.fron._username}: ${replay.reply}`);
    });
  }
}