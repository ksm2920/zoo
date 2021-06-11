export class AnimalDetail {
    constructor(
        public id: number,
        public name: string,
        public latinName: string,
        public longDescription: string,
        public imageUrl: string,
        public isFed: boolean,
        public lastFed: Date
    ) {}
}