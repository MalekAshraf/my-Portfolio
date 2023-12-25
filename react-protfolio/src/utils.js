/* this fun is to pass images from assets to site dynamicly and return a new url to be use in different componants   */
export const getImageUrl = (path) => {
    return new URL (`/assets/${path}`, import.meta.url).href;
};