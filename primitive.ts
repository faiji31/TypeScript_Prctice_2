// Primitive types

let shopName: String = "rahim Store";
let TotalProducts:number = 100;
let isOpen:boolean = true;
let rating:null = null;
let discount: undefined = undefined;


// Non-Primitive Types : Array, Object

let ProductsNames:string[] = ["alu","chips","noodles"];
let prices:number[] = [100,20,40]


// oject

const products:{
    name:string,
    price:number,
    category: "grocery"| "meat",
    discount?:number   
    // optional ?: thakleo somsssa nai nah thakleo somssa nai

} = {
    name:"Rice",
    price: 100,
    category: "grocery"
}


// void type

function void1():void{
    console.log("liam")
}


function Totalprice(price:number, quantity:number):number{
    return price * quantity;
}
console.log(Totalprice(100, 5))

// rest operators

function totalcart(...prices:number[]):number{
    return prices.reduce((total,price)=>total + price,500)


}

// speread operator

const newproduct = [...ProductsNames,"oil"]
console.log(newproduct)


// destrcuturing

const buyer:{customername:string,address:string,ph:number} ={
    customername:"Liam",
    address:"dhaka",
    ph:190528911
}

const { customername, ph} = buyer;

console.log(customername,ph)

// Type Alias

type TProduct = {
    Pname: string,
    price: number,
    address:{
        city:string,
        thana:5000
    }
}

const product1:TProduct ={
    Pname:"rice",
    price:100,
    address:{
        city:"dhaka",
        thana:5000
    }
    
}

// Union Type

type TPayment ={
    method: "cash" | "card" | "mobile banking"
}


const payemnt1:TPayment={
    method:"cash"
}

console.log(payemnt1)

const payment2: TPayment={
    method:"mobile banking"
}
console.log(payment2)

// Intersection Type 

type TUser ={
    name:string
}
type TSeller = TUser & {
    sellerName:string
}

const seller1:TSeller={
    name:"liam",
    sellerName:"Rahim"
}
console.log(seller1)


// ternery,nullish,optional chainging


// ternery operatror
const stock = 0;
const ProductStatus = stock >0 ? "Avilable" : "Outof stock";