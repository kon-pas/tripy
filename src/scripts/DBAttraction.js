function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export class Attraction {
    constructor(
        id,
        header,
        description,
        image,
        price,
        region,
        email
    ){
        this.id = id;
        this.header = header;
        this.description = description;
        this.image = image;
        this.price = price;
        this.region = region;
        this.email = email;

    }
    getName() { return this.header };
    getDesc() {return this.description};
    getURLImage() {return this.image};
    getId() {return this.id};
    getRating() {randomIntFromInterval(0,5)};
    getLink() {return "www.gogole.com"};
    getContact() {return this.email};
    getPrice() { return this.price };
    getMiejscowosc() { return this.region };

}
