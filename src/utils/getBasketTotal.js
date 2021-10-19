export const getBasketTotal = (basket)=>{
    let total = 0
    basket.map(elem => {
        total = total + elem.price
        return total
    })

    return total
}