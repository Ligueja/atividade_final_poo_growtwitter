import { randomUUID } from "crypto";
import { Tweet } from "./tweet";

export class User {
    private _id: string = randomUUID();
    private _tweet: Tweet[] = [];
    public following: string[] = [];
    
    constructor(
        public name: string,
        public _username: string,
        public email: string,
        private _password: string,
    ) {}

    public get id(): string {
        return this._id;
    }

        public sendTweet(tweet: Tweet): void {
        if (!this._id) {
            console.log("Usuário não cadastrado");
            return;
        }
        this._tweet.push(tweet);
    }
    
    // cadastrando seguidores, com a condição de que não é possível seguir a si mesmo. 
    public follow(user: User): void {
        if(user === this) {
            console.log ("você não pode seguir a si mesmo")
        } else 

        this.following.push(user._username);
    }

    public showFeed(): void {}

    // por enquanto mostrando o usuário e o tweet.
    public showTweets(): void {
        this._tweet.forEach(tweet => {
            console.group(`@${this._username}: ${tweet.content}`)           
        });
    }
}