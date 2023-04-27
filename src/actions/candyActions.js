export const buyCandy = (candy) => ({
    type: "BUY_CANDY",
    payload: candy
});

export const removeCandy = (candy) => ({
    type: "REMOVE_CANDY",
    payload: candy
});

export const fillStock = (candies) => ({
    type: "FILL_STOCK",
    payload: candies
});
