const calcularTotal = (price, adds, plan_frecuncy) => {
    const sumaArray = adds.map(add => add.price);
    const suma = sumaArray.reduce((acumulador, currentValue) => {
        return acumulador + currentValue;
    }, 0);
    const total = suma + price;
    if(plan_frecuncy === 'monthly'){
        return `+$${total}/mo`
    }
    return `+$${total}/yr`
}

export default calcularTotal;