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

    public static isHungry(animal: Animal): boolean {
        // console.log("animal was last fed " + animal.lastFed)
        let timeElapsedSinceFed = new Date().getTime() - new Date(animal.lastFed).getTime();
        // console.log(`${timeElapsedSinceFed / 1000} seconds since fed`);
        if (timeElapsedSinceFed > 1440000) {
            // console.log("This animal is hungry " );
            return true;
        } else {
            return false;
        }
    }
}