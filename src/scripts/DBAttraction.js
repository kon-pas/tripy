export class Attraction {
    constructor(
        id,
        header,
        description,
        image,
        price,
        region
    ){
        this.id = id;
        this.header = header;
        this.description = description;
        this.image = image;
        this.price = price;
        this.region = region;

    }
    getHeader() { return this.header };
    getDescription() {return this.description};
    getImage() {return this.image}
    getId() {return this.id}
    getPrice() { return this.price };
    getMiejscowosc() { return this.region };

}
