
const expensesReducerDefaultState=[];
const expensesReducer=(state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case'ADD_EXPENSE':
            return [
                //... se koriste da se uzmu svi elementi niza state
                //to koristimo kako ne bi vrsili promjene direktno na stejtu
                ...state,action.expense
            ];
        case'REMOVE_EXPENSE':
        return state.filter((el)=>{
                return el.id!==action.id 
            }
            );
        case'EDIT_EXPENSE':
        //map uvijek vraca isti broj clanova niza
        //map izvrsava f-ju na svakom elementu niza     
        //map vraca novi niz, u ovom slucaju niz objekata expense
        return state.map((expense)=>{
            if(expense.id===action.id){
                return{
                    ...expense,
                    ...action.updates
                };
            }else{
               return expense;
            }

        });
        case'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }};

    export default expensesReducer;
 