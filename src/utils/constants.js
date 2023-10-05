const lat= 26.907524;
const lng=75.739639;




export const RESTAURANT_LIST_DESKTOP = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

export const RESTAURANT_IMG_CDN = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;
export const MENU_API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=`;
// ${resId}
// &catalog_qa=undefined&submitAction=ENTER`;

export const RESTAURANT_LIST_MOBILE = `https://www.swiggy.com/mapi/homepage/getCards?lat=${lat}&lng=${lng}`;

