const getExpenseTotal=(expenses)=>{
    if(expenses.length!==0){
    const initialValue = 0;
   const total=expenses.map((expense)=>{
        return expense.amount;
    });
    return total.reduce((previousValue, currentValue) => previousValue + currentValue,
    initialValue);
    }
    return 0;

};

export default getExpenseTotal;