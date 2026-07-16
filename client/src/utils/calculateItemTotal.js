export function calculateItemTotal(items){
    const total = items.reduce((sum, item)=>{
        return sum + (Number(item.price) * Number(item.selected));
    }, 0);
    console.log(total);
    return total;
}