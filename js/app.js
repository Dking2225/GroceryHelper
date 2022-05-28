
const list1 = document.querySelector('.middle__lstBtn1'); 
const content = document.querySelector('.middle__content');
const plus = document.querySelector('.middle__plus');

let contentArr = [];
let counter = 0; 
let numbers = [];
let value  = []; 

if (numbers.length == 0){
    console.log('fill with 0');
    numbers = new Array(100).fill(0);
}

list1.addEventListener('click', function(){
    content.style.opacity = 1; 
});

plus.addEventListener('click', function(){
    console.log('plus clicked to add item');
    content.style.opacity = 1; 

    contentArr.push(` 
    <div class="middle__list1" data-id= "${counter}">
        <div class="middle__column">
            <input class="middle__product" type="text">
        </div>
        <div class="middle__column">
            <div class="middle__btnContainer">
                <button class="middle__decrease">-</button>
                <input class="middle__quantity" value = "${numbers[counter]}" type="text" >
                <button class="middle__increase">+</button>
            </div>
        
        </div>
        <div class="middle__column">
            <input class="middle__price" type="text">
        </div>
    
    </div>`);
    
    content.innerHTML = contentArr.join(" "); 

    counter++; 
    //these are created after this line so must stay here
    const quantity = document.querySelectorAll('.middle__quantity'); 
    const increase = document.querySelectorAll('.middle__increase');
    const decrease = document.querySelectorAll('.middle__decrease');
    
    
    inc(increase, numbers, quantity);
    // dec(decrease, numbers, quantity);
    
    checkUserInput(quantity,numbers, value);
    value = updateVals(quantity, numbers, value, increase, decrease);

   

    
});

function updateVals(quantity, numbers, value, increase, decrease){
    for (let i = 0; i<increase.length; i++){//increase.length = 0 is the increase btn0 
        
        quantity[i].setAttribute('value', numbers[i]);
        value = quantity[i].value; 
 
        console.log('update vals');
    }
    return value; 
}

function checkUserInput(quantity, numbers, value){
    
        for(let i = 0; i<quantity.length; i++){
            quantity[i].addEventListener("keypress", function (event){
                if(event.key === "Enter") {
                    
                    value = quantity[i].value;//gets value inputted
                    numbers[i] = parseInt(value);//converts it to int
                    // value = quantity[i].getAttribute('value');//
                    quantity[i].setAttribute('value', value);
                    
                    console.log('checkUserInput ' + quantity[i].getAttribute('value')); 
                }
                
                
            });

        }

    
}


function inc(increase, numbers, quantity, value){
    for (let i = 0; i<increase.length; i++){//increase.length = 0 is the increase btn0 
        
        // console.log(increase);
        increase[i].addEventListener('click', function(){
            // checkUserInput(quantity,numbers, value, increase);
            console.log('increase'); 
            value = numbers[i]+ 1; 
            numbers[i] = value; 
            
            quantity[i].setAttribute('value', value);

        
            // quantity[i].setAttribute('value', numbers[i]); 
            

        });
    }
    
}



// function dec(decrease, numbers, quantity, value){
//     for (let i = 0; i<decrease.length; i++){//increase.length = 0 is the increase btn0 
        
//         decrease[i].addEventListener('click', function(){
//             value = quantity[i].getAttribute('value');
//             value = numbers[i]- 1; 
//             numbers[i] = value; 

//             quantity[i].setAttribute('value', value);

//             quantity[i].setAttribute('value', numbers[i]);

            

//         });
//     }
    
// }


//document.getElementById("myDIV").style.display = "none"; 