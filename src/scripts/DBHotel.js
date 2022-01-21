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

    ){
        this.id = id;
        this.header = header;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.image = image;
        this.region = region;
        this.price = price;

    }
    getHeader() { return this.header };
    getDescription() {return this.description};
    getId() {return this.id}
    getStartDate() { return this.startDate };
    getEndDate() {return this.endDate}
    getRegion() { return this.region };
    getPrice() {return this.price};
    getImage() {return this.image};
}