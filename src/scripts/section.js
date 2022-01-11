export let loggedAs = null;
export const logIn = userPointer => { loggedAs = userPointer };
export const logOut = () => { loggedAs = null };
export const getLoggedUser = () => loggedAs;