const clientId = process.env.VUE_APP_UNSPLASH_ACCESS_KEY;
const query = "dog";
const count = 1;
export const unsplashUrl = `https://api.unsplash.com/photos/random/?client_id=${clientId}&query=${query}&count=${count}`;
