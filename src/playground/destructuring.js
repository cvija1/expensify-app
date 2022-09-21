//ARRAY destructuring

const address=["1299 Cuprijska","Doboj","RS","74000"];
const [street,town,state,zip]=address;
console.log(`You are in ${town} ${state}`);


//Object destructuring
const person={
    
    age:22,
    location:{
        name:"Djordje",
        city:'Doboj',
        temp:28
    }
};

//nesto slicno import{} from '..'
//ako ima name uzmi to a ako nema nek bude anonymous
const {name="Anonymous",age}=person;
//const name=person.name;
//const age=person.age;

//objekti se mogu destrukturirati tako da moze i person.location
//temp je atribut tog objekta ali ako stavis : mozes da promijenis naziv varijable

const {city,temp:temperatue} =person.location;
console.log()