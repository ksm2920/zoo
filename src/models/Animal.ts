export class Animal {
    constructor(
        public id: number,
        public name: string,
        public latinName: string,
        public yearOfBirth: number,
        public shortDescription: string,
        public longDescription: string,
        public imageUrl: string,
        public isFed: boolean,
        public lastFed: string
    ) {}


    public static getEmpty(): Animal {
        return {
            id: 0,
            name: '',
            latinName: '',
            yearOfBirth: 0,
            shortDescription: '',
            longDescription: '',
            imageUrl: '',
            isFed: false,
            lastFed: ''
        } as Animal;
    }
}