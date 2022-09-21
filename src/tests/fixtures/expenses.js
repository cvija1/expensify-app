import moment from "moment";
const expenses=[{
    id:'1',
    description:'Gum',
    note:'',
    amount:195,
    createdAt:0
},{
    id:'2',
    description:'Rent',
    note:'',
    amount:190005,
    //subtract je metoda koja omogucuje oduzimanje minuta, sati, dana na odredjeni momenat
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'Credit card',
    note:'',
    amount:4500,
    //daje rez u milisec
    createdAt:moment(0).add(4,'days').valueOf()
}];
export default expenses;