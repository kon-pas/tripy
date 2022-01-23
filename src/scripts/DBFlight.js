export class Flight {
    constructor(
        id,
        header,
        description,
        startDate,
        endDate,
        image,
        fromCountry,
        toCountry,
        price
    ){
        this.id = id;
        this.header = header;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.image = image;
        this.fromCountry = fromCountry;
        this.toCountry = toCountry;
        this.price = price;

    }
    getHeader() { return this.header };
    getDescription() {return this.description};
    getId() {return this.id}
    getStartDate() { return this.startDate };
    getEndDate() {return this.endDate}
    getFromMiejscowosc() { return this.fromCountry };
    getToMiejscowosc() {return this.toCountry};
    getPrice() {return this.price};
    getImage() {return this.image};
}

