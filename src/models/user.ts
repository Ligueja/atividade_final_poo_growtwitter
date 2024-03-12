import { randomUUID } from 'crypto';

export class user {
    private _id: string = randomUUID();
    private _tweets: Tweet[] = [];
    
    constructor (
        public name: string,
        public usernamne: string,
        public email: string,
        public passaword: string,
    ) {

    }

    public get id() : string {
        return this._id
    }

    public sendTweet(tweet: Tweet): void {
        this._tweets.push(tweet);
    }

    public follow(user): void {

    }

    public showFeed(): void {

    }

    public showTweets(): void {

    }














}