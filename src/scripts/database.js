// Lecę tak, bo nie mam czasu się bawić, don't judge me

class Card {
  constructor(
      type,
      name,
      image=null,
      desc="Opis",
      rating=5.0,
      link="www.x.com",
      contact="example@gmail.com",
      price=100){

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

  
  getType() {return this.meta.type};
  getKey() {return this.meta.key};
}

export const cards = {
  loty: [
    new Card("lot", "Lot 1"),
    new Card("lot", "Lot 2"),
    new Card("lot", "Lot 3"),
    new Card("lot", "Lot 4"),
    new Card("lot", "Lot 5"),
    new Card("lot", "Lot 6"),
    new Card("lot", "Lot 7"),
    new Card("lot", "Lot 8"),
    new Card("lot", "Lot 9"),
  ],
  hotele: [
    new Card("hotel", "Hotel 1"),
    new Card("hotel", "Hotel 2"),
    new Card("hotel", "Hotel 3"),
    new Card("hotel", "Hotel 4"),
    new Card("hotel", "Hotel 5"),
    new Card("hotel", "Hotel 6"),
    new Card("hotel", "Hotel 7"),
    new Card("hotel", "Hotel 8"),
    new Card("hotel", "Hotel 9"),
  ],
  atrakcje: [
    new Card("atrakcja", "Atrakcja 1"),
    new Card("atrakcja", "Atrakcja 2"),
    new Card("atrakcja", "Atrakcja 3"),
    new Card("atrakcja", "Atrakcja 4"),
    new Card("atrakcja", "Atrakcja 5"),
    new Card("atrakcja", "Atrakcja 6"),
    new Card("atrakcja", "Atrakcja 7"),
    new Card("atrakcja", "Atrakcja 8"),
    new Card("atrakcja", "Atrakcja 9"),
  ]
};

export const cart = {
  loty: [],
  hotele: [],
  atrakcje: []
};

export const search = {
  wylot: '',
  email: '',
  miejscowosc: '',
  liczbaOsob: '',
  budzetMinimalny: '',
  budzetMaksymalny: '',

  setWylot: function(arg) {this.wylot = arg},
  setEmail: function(arg) {this.email = arg},
  setMiejscowosc: function(arg) {this.miejscowosc = arg},
  setBudzetMinimalny: function(arg) {this.budzetMinimalny = arg},
  setBudzetMaksymalny: function(arg) {this.budzetMaksymalny = arg},

  getWylot: function() { return this.wylot },
  getEmail: function() { return this.email },
  getLiczbaOsob: function() { return this.liczbaOsob },
  getBudzetMinimalny: function() { return this.budzetMinimalny },
  getBudzetMaksymalny: function() { return this.budzetMaksymalny }
};

export const closePath = {
  name: '/',
  set: function(path) { this.name = path},
  get: function() { return this.name }
};