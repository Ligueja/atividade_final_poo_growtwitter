import { publicDecrypt, randomUUID } from "crypto";
import { User } from "./user";



export class Tweet {
    private _id: string = randomUUID();
    
    constructor(
        public content: string,
        public type: "normal" | "reply"
    ){}

    
    public get id() : string {
        return this._id
    }
    
    
    public reply(content:string): void {}

    public like(): void {}

    public show(): void {}

    public showReplies(): void {}

}

