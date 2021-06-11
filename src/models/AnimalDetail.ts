export class AnimalDetail {
    constructor(
        public id: string,
        public name: string,
        public latinName: string,
        public longDescription: string,
        public imageUrl: string,
        public isFed: boolean,
    ) {}
}