
import moment from "moment";
import filterReducer from "../../reducers/filters";

test('should setup defualt filter values',()=>{
    const state=filterReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});
test('should set sortBy to amount',()=>{
    const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});
test('should set sortBy to date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const state=filterReducer(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});
test('should set text filter',()=>{
    const state=filterReducer(undefined,{type:'SET_TEXT_FILTER',text:'srbija'});
    expect(state.text).toBe('srbija');
});
test('should set startDate filter',()=>{
    const state=filterReducer(undefined,{type:'SET_START_DATE',startDate:moment(0).add(4,'days')});
    expect(state.startDate).toEqual(moment(0).add(4,'days'))
});
test('should set endDate filter',()=>{
    const state=filterReducer(undefined,{type:'SET_END_DATE',endDate:moment(0).add(4,'days')});
    expect(state.endDate).toEqual(moment(0).add(4,'days'))
});