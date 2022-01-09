export class Cart {
  constructor(loty=[1, 2, 3], hotele=[], atrakcje=[]){
    this.loty = loty;
    this.hotele = hotele;
    this.atrakcje = atrakcje;
  }
  getLoty() { return this.loty };
  getHotele() { return this.hotele };
  getAtrakcje() { return this.atrakcje };

  setLot(e) {this.loty.append(e) }; 
  setHotel(e) {this.loty.append(e) }; 
  setAtrakcja(e) {this.loty.append(e) }; 
}