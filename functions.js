//Create an array containing the names of all items in the inventory maximum of 10.
const fruitarr=["Apples","Banana","Lemons","Cooking oil","Flour","Toiletries","Spices","Onions"];

//Create a separate array with the corresponding stock quantities of each item maximum of 10.
 const fruitquantity=[30,40,45,50,120,200,230,200];

 //Write a function to add a new item to the inventory, updating both arrays.
// function inventory(){
//     let items=[
//         {
//             name:"arr"
//         },
//         {
//            name:"num" 
//         }
//     ]

//     const add = (name) => {
// 	  const array = items.filter(item => item.name === name)
// 	  if (array.length === 0) {
// 	    items.push({name: name})
// 	  }
// 	}


// }
// console.log(inventory());

// function inventory(arr,num){
//     let a=arr.push("pawpaw")
//     console.log(arr);
//     let b=num.push(40)
//     console.log(num);

// }
// inventory(arr,num)

function inventory(arr,quantity){
    if(fruitarr.length>=10){
        console.log("past quantity")
    }
    else{
       fruitarr.push(arr) 
       fruitquantity.push(quantity)
       console.log(`I have added ${arr} and it is of this quantity ${quantity}`);
    }
    
}
inventory("Pawpaw", 250)
inventory("Melon",150)
console.log(fruitarr);
console.log(fruitquantity);
//Write a function to update the stock quantity of an existing item.
function update(fruitquantity){
    //let h = arr.indexOf
   fruitquantity[1]=60
   console.log(fruitquantity)

//     let y=0;
//    for(let x=0;x<num.length ;x++){
//         return x
//     }
//     console.log(update(num));

   }

update(fruitquantity);



//Write a function to calculate the total number of items in the inventory.
function calculate(fruitquantity){
    let sum=0;
    // for(let i=0;i<num.length;i++){
    //  sum+=num[i];
    // }
    // console.log(sum);
    fruitquantity.forEach(element => {
        sum+=element
    });
    console.log(sum)
}
calculate(fruitquantity)


//Write a function to find the item with the lowest stock quantity.
let min = Math.min(...fruitquantity)
console.log(min,"Apples");
function find(){
     for(let v=0;v<fruitquantity.length;v++){
        min=Math.min(min,fruitquantity[v])
     }
}
find()