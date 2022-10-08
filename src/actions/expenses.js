import  database  from '../firebase/firebase';
//ADD_EXPENSE
export const addExpense=(expense)=>({
    type:'ADD_EXPENSE',
    expense

});

export const startAddExpense=(expenseData={})=>{
    return (dispatch)=>{
        const{
            description='',
        note='',
        amount=0,
        createdAt=0
        }=expenseData;
        const expense={description,note,amount,createdAt}
        database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        });
    };
};

export const removeExpense=({id}={})=>(
    {
        type:'REMOVE_EXPENSE',
        id
    }
);

export const startRemoveExpense=({id}={})=>{
    return(dispatch)=>{
        return database.ref(`expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        })
    }
}

export const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});


//SET_EXPENSES
export const setExpenses=(expenses)=>({
    type:'SET_EXPENSES',
    expenses

}
);
export const startSetExpenses=()=>{
    return(dispatch)=>{
        //u sustiini ova f-ja vraca Promise i pokrece set expenses
        //kom za lin ispod: ovo return nam sluzi da vrati Promise. Bez toga ne bii bilo moguce .then u app.js
            return database.ref('expenses').once('value').then((snapshot)=>{
                 const expenses=[];
                 snapshot.forEach((childSnap)=>{
                   expenses.push({
                     id:childSnap.key,
                     ...childSnap.val()
                   })
                 });
                 dispatch(setExpenses(expenses));
              });
    };
} ;