function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export class Card {
  constructor(
      type="lot",
      name="placeholder",
      image="https://plikimpi.krakow.pl/pliki/243693/4.jpg",
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta leo vel porttitor congue. Aliquam facilisis consectetur consectetur. Sed malesuada turpis vitae dictum blandit. Vestibulum et ullamcorper ligula. In vitae est eleifend, sagittis turpis quis, sollicitudin tellus. Quisque sed sapien malesuada velit laoreet scelerisque quis sit amet mi. Curabitur sed lacinia enim. In eget elementum purus. Nullam vel sem volutpat, aliquet nulla et, dictum nulla. Quisque semper est vitae arcu ultricies aliquet. Fusce dapibus quis quam eu facilisis. Pellentesque tristique lorem nunc. Nullam at sem ac lorem sodales semper et ornare massa. Aliquam et auctor ex.",
      rating= randomIntFromInterval(0,5),
      link="www.x.com",
      contact="example@gmail.com",
      price=randomIntFromInterval(100, 1500)){

    this.name = name;
    this.image = image;
    this.desc = desc;
    this.rating = rating;
    this.link = link;
    this.contact = contact;
    this.price = price;

    this.meta = {
      type: type,
      key: Math.random()
    };
  }
  getName() { return this.name };
  getImage() { return this.image };
  getDesc() { return this.desc };
  getRating() { return this.rating };
  getLink() { return this.link };
  getContact() { return this.contact };
  getPrice() { return this.price };
  
  getType() {return this.meta.type};
  getKey() {return this.meta.key};
}

// export class Card {
//   constructor(
//       type="placeholder",
//       name="placeholder",
//       image="https://plikimpi.krakow.pl/pliki/243693/4.jpg",
//       desc="Opis",
//       rating=5.0,
//       link="www.x.com",
//       contact="example@gmail.com",
//       price=100){

//     this.name = name;
//     this.image = image;
//     this.desc = desc;
//     this.rating = rating;
//     this.link = link;
//     this.contact = contact;
//     this.price = price;

//     this.meta = {
//       type: type,
//       key: Math.random()
//     };
//   }

//   // get image() { return this.image };
//   // set image(e) { this.image = e};

//   getName() { return this.name };
//   getImage() { return this.image };
//   getDesc() { return this.desc };
//   getRating() { return this.rating };
//   getLink() { return this.link };
//   getContact() { return this.contact };
//   getPrice() { return this.price };
  
//   getType() {return this.meta.type};
//   getKey() {return this.meta.key};
// }

