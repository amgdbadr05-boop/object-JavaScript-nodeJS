const ps = require("prompt-sync");
const prompt = ps();
/*
// level one : 

//Q 1 :
let student = {
    name : "Amgad",
    age : 19,
    major : "Informatics Engineering",
}
console.log(student);

// Q 2 :
let pro = {
    name : "Laptop",
    price : "500$",
    stock : 10,
}
pro.price = "1000$";
pro.stock += 5;
console.log(pro);

// Q 3 :
let user = {
    userName : "Admin",
    email : "admin@gmail.com",
    isActive : true,
}
delete user.email;
console.log(user);

// Q 4 : 
let book = {
    title : "Assassin's Creed (Unity)",
    Published : "2014",
    author : " Oliver Bowden",
}
function getPro(object, key){
    return object[key];
}
console.log(`name : ` + getPro(book, "title"));
console.log(`date of Published : `+getPro(book, "Published"));
console.log(`author : `+getPro(book, "author"));


// level two : 

// Q 1 : 
let hieght = Number(prompt("Eter the hieght of rectangle : "));
let width = Number(prompt("Eter the width of rectangle : "));
let rectangle = {
    hieght,
    width,

    getArea : function (){
        return this.hieght * this.width;
    },


    getPerimeter : function(){
        return 2 * (this.hieght + this.width);
    }
}
console.log(`
area of rectangle is ${rectangle.getArea()}
perimeter of rectangle is ${rectangle.getPerimeter()}
`)


// Q 2 :
let account = {
    owner : "Amgad",
    balance : 1000,

    deposit : function(amount){
        if (amount <= 0){
            console.log(`the deposit must be more than zero`);
            return;
        }
        this.balance += amount;
        console.log(`the depsit ${amount} and the balance is ${this.balance}`);
    },

    withdrow : function(amount){
        if (amount <= 0){
            console.log(`the withdrow must be more than zero`);
            return;
        }
        if (amount > this.balance){
            console.log(`Sorry, your blanace not enough`);
        }
        this.balance -= amount;
        console.log(`withdrow ${amount} your current balance is ${this.balance}`)
    }
}
account.deposit(800);
account.withdrow(50000);



// Q 3 :
let employee = {
    name : "Omar",
    address : {
        city : "Sukabumi",
        street : "Sukabumi street",
        postelCode : 12345,
    }
}
employee.address.city = "Jakarta";
console.log(employee);



// Q 4 :
let order = {
    dvices : [
        {
        name : "Hub",
        price : 45000,
        quantity : 30,
        },
        {
            name : "USP wifi Adebtar",
            price : 75000,
            quantity : 20,
        },
        {
            name : "switch",
            price : 30000,
            quantity : 5,
        },
    ],
    clacTotal : function(){
        let total = 0;
        for (let i = 0; i < this.dvices.length; i++){
            let dv = this.dvices[i];
            total += dv.price * dv.quantity
        }
        return total;
    }
};
console.log(`the total is ${order.clacTotal()} Rp`);
    


//leval 3 :

// Q 1 : 
let items = [
    {
        name : "pen",
        price : 14000,
        stock : 6,
    },
    {
        name : "notebook",
        price : 20000,
        stock : 5,
    },
    {
        name : "book",
        price : 50000,
        stock : 3,
    },
];

let totalValu = 0;
let lowStock = [ ];

for (let i = 0; i < items.length; i++){
    let x = items[i];

    totalValu += x.price * x.stock;

    if (x.stock < 5){
        lowStock.push(x.name);
    }
}

console.log(`total is : ${totalValu}`);
console.log(`low stock is : `, lowStock);

*/

// Q 2 :
let student = [
    {
        name : "Amgad",
        major : "informatics enginnering",
    },
    {
        name : "Mohammed",
        major : "mathmatics",
    },
    {
        name : "Ali",
        major : "civil engineering",
    },
    {
        name : "Omar",
        major : "informatics enginnering",
    },
    {
        name : "Ahmed",
        major : "science",
    },
]
function groubStudent(list){
    let res = {};

    for (let a = 0; a < list.lenght; a++){
        let student = list[i];
        let major = student.major;

        if (!res[major]){
            res[major]= [];
        }

        res[major].push(student);
    }

    return res;
};

let groub = groubStudent(student);

console.log(groub);