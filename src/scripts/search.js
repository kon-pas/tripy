export const searchSettings = {
  wylot: Date.now(),
  powrot: Date.now(),
  miejscowosc: '',
  liczbaOsob: 1,
  budzetMinimalny: 0,
  budzetMaksymalny: 20000,

  setWylot: function(arg) {this.wylot = arg},
  setPowrot: function(arg) {this.powrot = arg},
  setMiejscowosc: function(arg) {this.miejscowosc = arg},
  setLiczbaOsob: function(arg) {this.liczbaOsob = arg},
  setBudzetMinimalny: function(arg) {this.budzetMinimalny = arg},
  setBudzetMaksymalny: function(arg) {this.budzetMaksymalny = arg},

  getWylot: function() { return this.wylot },
  getPowrot: function() { return this.powrot },
  getMiejscowosc: function() { return this.miejscowosc },
  getLiczbaOsob: function() { return this.liczbaOsob },
  getBudzetMinimalny: function() { return this.budzetMinimalny },
  getBudzetMaksymalny: function() { return this.budzetMaksymalny }
};

