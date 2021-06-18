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

    public static canFeed(animal: Animal): boolean {
        let timeElapsedSinceFed = new Date().getTime() - new Date(animal.lastFed).getTime();

        if (timeElapsedSinceFed > 10800000) {
            return true;
        } else {
            return false;
        }
    }

    public static isHungry(animal: Animal): boolean {
        let timeElapsedSinceFed = new Date().getTime() - new Date(animal.lastFed).getTime();

        if (timeElapsedSinceFed > 14400000) {
            return true;
        } else {
            return false;
        }
    }
}

