import { randomUUID } from "crypto";
import { User } from "./user";
import { Reply } from "./reply";
import { users } from "../databases/users.database";


export class Tweet {
    private _id: string = randomUUID();
    // private _likes: Like [] = [];
    private _reply: Reply [] = [];
    private _user: User;
    public likes: User [] = [];
    
    constructor(
        public content: string,
        public user: User,
        
    ){
        this._user = user;
    }
    
    public get id() : string {
        return this._id
    }
    
    public reply(reply:string, user: User): void {
        const newReply: Reply = new Reply(reply, user, this) 
        this._reply.push(newReply)
    }

    public like(user: User) {
        if (this.likes.includes(user)) {
            return;
        }

        this.likes.push(user);
    }
            
     // Mostrar os likes do tweet
    public showLikes() {
        if (this.likes.length === 0) {
            console.log(`\t@${this._user._username}: ${this.content}
        [0 likes]`);
        }
        else if (this.likes.length === 1) {
            console.log(`\t@${this._user._username}: ${this.content}
        [@${this.likes[0].username} curtiu]`);
        } else if (this.likes.length === 2) {
            console.log(`\t@${this._user._username}: ${this.content}
        [@${this.likes[0].username} e mais 1 usuário curtiu]`);
        } else if (this.likes.length > 2) {
            console.log(`\t@${this._user._username}: ${this.content}
        [@${this.likes[0].username} e mais ${this.likes.length - 1} usuários curtiram]`);
        }
    }

    public show(): void {
        console.log(`\n--------------------------------------------------------\n`)
        this.showLikes()
        this.showReplies()
        
    }

    public showReplies(): void {
      this._reply.forEach((replay) => {
        console.log(`\t  > @${replay.fron._username}: ${replay.reply}`)
      })
    }
}

