function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export class Hotel {
    constructor(
        id,
        header,
        description,
        startDate,
        endDate,
        image,
        region,
        price,
        contact

    ){
        this.id = id;
        this.header = header;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.image = image;
        this.region = region;
        this.price = price;
        this.contact = contact;

    }
    getName() { return this.header };
    getDescription() {return this.description};
    getId() {return this.id}
    getStartDate() { return this.startDate.split("T")[0] };
    getEndDate() {return this.endDate.split("T")[0]}
    getDate() {return this.endDate.split("T")[0]}
    getMiejscowosc() { return this.region };
    getRating() {randomIntFromInterval(0,5)};
    getPrice() {return this.price};
    getURLImage() {return this.image};
    getContact() {return this.contact === "" ? "administracja@tripy.com":this.contact}
}