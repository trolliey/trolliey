export const getBasketTotal = (basket)=>{
    let total = 0
    basket?.map(elem => {
        total = total + elem.price
        return total * elem.qty
    })

    return total
}

export const getShipmentTotal = (basket)=>{
    let total = 0
    basket?.map(elem => {
        total = total + elem.shipment_price
        return total
    })

    return total
}