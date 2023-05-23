const calcularTotal = (price, adds, plan_frecuncy) => {
    if(adds.length <= 0){
        if(plan_frecuncy !== 'monthly'){
            return `+$${price}/yr` 
        }
        return `+$${price}/mo` 
    }
    if(plan_frecuncy !== 'monthly'){
        const yearly = adds.map(add => add.prices.priceYear);
        const suma = yearly.reduce((acumulador, currentValue ) => {
            return acumulador + currentValue;
        })
        return `+$${price+suma}/yr`
    }else{
        const monthly = adds.map(add => add.prices.priceMonth);
        const suma = monthly.reduce((acumulador, currentValue ) => {
            return acumulador + currentValue;
        })
        return `+$${price+suma}/mo`
    }
}

export default calcularTotal;