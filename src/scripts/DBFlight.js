function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
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
    getName() { return this.header };
    getDescription() {return this.description};
    getId() {return this.id}
    getStartDate() { return this.startDate.split("T")[0] };
    getEndDate() {return this.endDate.split("T")[0]}
    getDate() { return this.endDate.split("T")[0] };
    getRating() {randomIntFromInterval(0,5)};
    //getFromMiejscowosc() { return this.fromCountry };
    getMiejscowosc() {return this.toCountry};
    getPrice() {return this.price};
    getURLImage() {return this.image};
    getLink() {return "https://www.skyscanner.pl/"}

}

