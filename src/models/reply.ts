import { randomUUID } from "crypto";
import { User } from "./user";
import { Tweet } from "./tweet";

export class Reply {
    private _id: string = randomUUID();
    
    constructor (
        public reply: string,
        private _user: User, 
        private _whichTweet: Tweet,
    ){}

    public get id() : string {
        return this._id
    }

    public get fron () : User {
        return this._user
    }
        
    public get whichTweet () : Tweet {
        return this._whichTweet
    }
    
}
