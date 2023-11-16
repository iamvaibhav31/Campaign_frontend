const priceFormate = (num: number) => {
    return num.toLocaleString('en-IN');
}

const dateFormate = (date: string) => {
    const inputDate = new Date(date);
    return inputDate.toDateString();
}


export {
    priceFormate,
    dateFormate
}