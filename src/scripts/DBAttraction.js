export class Attraction {
    constructor(
        id,
        header,
        description,
        image,
        price
    ){
        this.id = id;
        this.header = header;
        this.description = description;
        this.image = image;
        this.price = price;

    }
    getHeader() { return this.header };
    getDescription() {return this.description};
    getImage() {return this.image}
    getId() {return this.id}
    getPrice() { return this.price };

}
