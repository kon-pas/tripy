import { Cart } from "./Cart";
import { Card as CardClass} from "./Card";

export const currentCart = new Cart();

export const userCarts = [
  new Cart(),
  new Cart()
];

export let currentPlanningPageCards = [];

export const getCurrentPlanningPageCards = () => {
  return currentPlanningPageCards;
}

export const setCurrentPlanningPageCards = arr => {
  currentPlanningPageCards = arr;
}

export const cart1 = new Cart(
  [new CardClass("lot", "Lot 1"), new CardClass("lot", "Lot 3")],
  [new CardClass("hotel", "Hotel 1"), new CardClass("hotel", "Hotel 2"), new CardClass("hotel", "Hotel 3")],
  [new CardClass("atrakcja", "Atrakcja 1"), new CardClass("atrakcja", "Atrakcja 2"), new CardClass("atrakcja", "Atrakcja 3")],
)
export const cart2 = new Cart(
  [new CardClass("lot", "Lot 4"), new CardClass("lot", "Lot 5"), new CardClass("lot", "Lot 6")],
  [new CardClass("hotel", "Hotel 1"), new CardClass("hotel", "Hotel 3")],
  [new CardClass("atrakcja", "Atrakcja 1"), new CardClass("atrakcja", "Atrakcja 2"), new CardClass("atrakcja", "Atrakcja 3")],
)
export const cart3 = new Cart(
  [new CardClass("lot", "Lot 1"), new CardClass("lot", "Lot 3"), new CardClass("lot", "Lot 8")],
  [new CardClass("hotel", "Hotel 1"), new CardClass("hotel", "Hotel 2"), new CardClass("hotel", "Hotel 3")],
  [new CardClass("atrakcja", "Atrakcja 1"), new CardClass("atrakcja", "Atrakcja 2")],
)



