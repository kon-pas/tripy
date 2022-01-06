// Lecę tak, bo nie mam czasu się bawić, don't judge me

export const loty = [
  "lot_1",
  "lot_2",
  "lot_3",
  "lot_4",
  "lot_5",
]
export const hotele = [
  "hotel_1",
  "hotel_2",
  "hotel_3",
  "hotel_4",
  "hotel_5",
]
export const atrakcje = [
  "atrakcja_1",
  "atrakcja_2",
  "atrakcja_3",
  "atrakcja_4",
  "atrakcja_5",
]
export const cart = {
  loty: [],
  hotele: [],
  atrakcje: []
}
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
}

  
export const closePath = {
  name: '/',
  set: function(path) { this.name = path},
  get: function() { return this.name }
}