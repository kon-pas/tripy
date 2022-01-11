function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export class User {
  constructor(
      id,
      email,
      password,
      name,
      surname
  ){

      this.id = id;
      this.email = email;
      this.password = password;
      this.name = name;
      this.surname = surname;

      this.meta = {
          type: type,
          key: Math.random()
      };
  }
  getName() { return this.name };
  getSurname() {return this.surname};
  getEmail() {return this.email}
  getId() {return this.id}
  getDesc() { return this.desc };
  getContact() { return this.contact };

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