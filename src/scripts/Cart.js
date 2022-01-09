export class Cart {
  constructor(loty=[], hotele=[], atrakcje=[]){
    this.loty = loty;
    this.hotele = hotele;
    this.atrakcje = atrakcje;
  }
  getLoty() { return this.loty };
  getHotele() { return this.hotele };
  getAtrakcje() { return this.atrakcje };

  setLoty(e) { this.loty = e };
  setHotele(e) { this.hotele = e };
  setAtrakcje(e) { this.atrakcje = e };

  // addLot(e) { this.loty.push(e) }; 
  // addHotel(e) { this.loty.push(e) }; 
  // addAtrakcja(e) { this.loty.push(e) }; 
}