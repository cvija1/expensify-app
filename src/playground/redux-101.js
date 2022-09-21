import { createStore } from "redux";
//state={count:0}
//nesto nalik this.setState((prevstate)=>{return {count:prevstat.count+1};}
//createStore-u se proslijedi kao prvi argument state koji zelimo
//drugi argument su akcije koje mu saljemo sa dispatch() 
//zatim kazemo state-u sta zelimo sa nasim podacima kada naidjemo na dispatch()
//ako je akcija inkrement onda povecaj count za 1 , prosto


//ako ima objekat proslijedjen f-ji onda mu uzmi incrementBy ii postavi osobinu incrementBy na 1 ako ga nema u tom objekt
//ali ako nema uopste objekta onda postavi prazan objekat
const incrementCount=({incrementBy=1}={})=>(
   
    {
        type:'INCREMENT',
        incrementBy:incrementBy
    }
    
);

const decrementCount=({ decrementBy=1 }={})=>(
    {
        type:'DECREMENT',
        decrementBy:decrementBy
    }
);

const setCount=({count})=>(
    {
        type:'SET',
        count:count
    }
);

const resetCount=()=>(
    {
        type:'RESET'
    }
);

//Reducers
//Recucers zavisi od argumenata, interaktuje samo sa njima(pure function)

const countReducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count+action.incrementBy
            };
        case 'DECREMENT':
            return{
                count:state.count-action.decrementBy
            };
        case 'RESET':
            return{
                count:0
            };
        case 'SET':
            return{
                count:action.count
            }
        default:
            return state;
    }
};

const store=createStore(countReducer);


//svaki put kad se desi promjena u stejtu uradi ovu f-ju
//ako store.subscribe sjestimo u neku promjenljivu, vrijednost koju vraca je unsubscribe
//i tada se vise ne prate promjene u stejtu
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});


/* store.dispatch({
    type:"INCREMENT",
    incrementBy:5

}); */ 

store.dispatch(incrementCount({ incrementBy:5 }));

store.dispatch(incrementCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:10}));

store.dispatch(resetCount());

store.dispatch(incrementCount()); 


