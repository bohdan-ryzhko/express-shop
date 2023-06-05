export const getMaxPrice = array => Math.max(...array.map(product => product.price));
export const getMinPrice = array => Math.min(...array.map(product => product.price));