export const searchSettings = {
  wylot: '',
  powrot: '',
  miejscowosc: '',
  liczbaOsob: '',
  budzetMinimalny: '',
  budzetMaksymalny: '',

  setWylot: function(arg) {this.wylot = arg},
  setPowrot: function(arg) {this.email = arg},
  setMiejscowosc: function(arg) {this.miejscowosc = arg},
  setBudzetMinimalny: function(arg) {this.budzetMinimalny = arg},
  setBudzetMaksymalny: function(arg) {this.budzetMaksymalny = arg},

  getWylot: function() { return this.wylot },
  getPowrot: function() { return this.email },
  getLiczbaOsob: function() { return this.liczbaOsob },
  getBudzetMinimalny: function() { return this.budzetMinimalny },
  getBudzetMaksymalny: function() { return this.budzetMaksymalny }
};

