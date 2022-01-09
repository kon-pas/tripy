import { Cart } from "./Cart";

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
