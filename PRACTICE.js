//let age=25;
//let year=2022;
//console.log(age,year);

//age=30;
//console.log(age);

/*const score=100;                             //since its of const form we cant change it anymore//
console.log(score);//

/*score=110;                                   //will show error//
console.log(score);*/

/*let firstname='Soumyajit';
let lastname='Ghosh';

let fullname=firstname+' '+lastname;
console.log(fullname);

console.log(fullname[2]);

console.log(fullname.length);

console.log(fullname.toUpperCase());

console.log(fullname.toLowerCase());

//let result=fullname.lastIndexOf();

//let result=fullname.slice(2,5);

//let result=fullname.substring(4,10);
//CONCATENATION//
let end=fullname.replace('m','X');
console.log(end);

/*const title='Best reads of 2022';
const likes=30;
const author='Mario';
let end1= 'The book called'+' '+title+' '+'by'+' '+author+' '+'has'+' '+likes+' '+'likes';

console.log(end1);*/

//TEMPLATE String way//
/*let result01=`the blog called${title} by ${author} has ${likes}`;
console.log(result01);
//creating html template//
let html=`
    <h2>${title}</h2>
    <p>by ${author}</p>
    <span>this blog has ${likes}</>`;

console.log(html); */

/*let random= ['sg' , 'mf' , 'ti' , 69 , 108 ];
console.log(random);

let results=random.concat(['milf','horny']);
console.log(results);

let result001=results.push('ken');
console.log(result001);

result00=results.pop();
console.log(result00);                                           //pops out ken//

let age=null;
console.log(age,age+4,`the${age}`);

let email=soumyajit.ghosh0907@gmail.com;                         // returns value true//
let resutl=email.includes('@');
console.log(resutl);*/

/*const list=document.querySelector('.output ul');                 //first letter capital//
let cities=['mumBai','DelHi','koLkaTa','PuNe'];

for(let i=0;i<cities.length;i++){
    let lowerCasecity=cities[i].toLowerCase();
    let firstAlphabet=lowerCasecity.slice(0,1);
    lowerCasecity=lowerCasecity.replace(firstAlphabet,firstAlphabet.toUpperCase());
    let listItem=document.createElement('li');
    listItem.textContent=lowerCasecity;
    list.appendChild(listItem);
}*/


/*OBJECTS*/
/*let lecture=10;
let section=3;
let title='javascript';

const course={lecture:10,
            section:3,
            title:'javascript',
            notes:{
                introduction:"welcome to javascript"
            },
            enroll(){
                console.log('you are successfully enrolled');
            }
        };
course.enroll();
console.log(course)
/*function enroll(){
    console.log('you are successfully enrolled');
}*/






const product={
    itemname:'flower',
    price:50,
    discount:20,
    itemcode:'F40',
}

function createproduct(name,price,discount,itemcode){
    return{
        itemname:name,
        price:price,
        discount:discount,
        itemcode:itemcode,
    }
}

const football=createproduct('football',69,25,'F30');

function Product(name,price,discount,itemcode){
    this.itemname=name;
    this.price=price;
    this.discount=discount;
    this.itemcode=itemcode;
    this.discountValue=function(){
        return price*discount/100;
    }
}

const mobile=new Product('iPhone',69000,15,'L91');

