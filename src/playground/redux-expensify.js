import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense=(
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    }={}
    )=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt

    }

});

const removeExpense=({id}={})=>(
    {
        type:'REMOVE_EXPENSE',
        id
    }
);

const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter=(text='')=>(
    {
        type:'SET_TEXT_FILTER',
        text
    }
);

const sortByAmount=()=>(
    {
        type:'SORT_BY_AMOUNT',
        sortBy:'amount'
    }
);

const sortByDate=()=>(
    {
        type:'SORT_BY_DATE',
        sortBy:'date'
    }
);

const setStartDate=(date=undefined)=>(
    {
        type:'SET_START_DATE',
        startDate:date
    }
);

const setEndDate=(date=undefined)=>(
    {
        type:'SET_END_DATE',
        endDate:date
    }
);



//Expenses reducerrs

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
        default:
            return state;
    }};

//filter reducers

const filterReducersDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};
const filterReducer=(state=filterReducersDefaultState,action)=>{
    switch(action.type){
        case'SET_TEXT_FILTER':
            return{
                ...state,
                text:action.text,
            };
        case'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:action.sortBy
            };
        case'SORT_BY_DATE':
            return{
                ...state,
                sortBy:action.sortBy
            };
        case'SET_START_DATE':
        return{
            ...state,
            startDate:action.startDate
        };
        case'SET_END_DATE':
        return{
            ...state,
            endDate:action.endDate
        };
        default:
            return state;
    }

};

//get visible expenses
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number'||expense.createdAt>=startDate;
        const endDateMatch=typeof endDate!=='number'||expense.createdAt<=endDate;
        const textMatch=''||expense.description.toLowerCase().includes(text.toLowerCase()); 

        return startDateMatch&&endDateMatch&&textMatch;
//sort uporedjuje sve clanove niza, ako f-ja vrati 1 onda je A poslije B, ako -1 onda obrnuto
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt?1:-1;
        }else if(sortBy==='amount'){
            return a.amount<b.amount?1:-1;
        }
    });

};

//store creation
//u combineReducers se proslijedi kako zelimo da izgleda nas stejt
const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    }));

    store.subscribe(()=>{
        const state=store.getState();
        const VisibleExpenses=getVisibleExpenses(state.expenses,state.filters);
        console.log(VisibleExpenses);
    })
    
    //u expenseOne dobijamo action objekat nazad
    const expenseOne= store.dispatch(addExpense({description:'rent',amount:100,createdAt:-1000}));
   const expenseTwo= store.dispatch(addExpense({description:'coffe',amount:300,createdAt:1000}));
//     store.dispatch(removeExpense({id:expenseOne.expense.id}))
//     store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));
    // store.dispatch(setTextFilter('rent'));
//     store.dispatch(setTextFilter());
 //  store.dispatch(sortByAmount());
//store.dispatch(sortByDate()); 

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());


const demoState={
    expenses:[{
        id:'dfsdfsd',
        description:'January Rent',
        note:'This was the final payment for that address',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', 
        startDate:undefined,
        endDate:undefined
    }
}; 

const user={
    name:'Jen',
    age:24
};

console.log({...user})