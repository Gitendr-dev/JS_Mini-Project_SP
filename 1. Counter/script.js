let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let counter_value = document.querySelector("#counter-value");
let changeBy = document.querySelector("#changeBy #count");
let reset = document.querySelector("#reset");

let changeBy_num = 1;

let counter_num = Number(counter_value.textContent);

increment.addEventListener("click", ()=>{
    counter_num = counter_num + changeBy_num;
    counter_value.textContent = counter_num;
    
})

decrement.addEventListener("click", ()=>{
    counter_num = counter_num - changeBy_num;
    counter_value.textContent = counter_num;
    
})

changeBy.addEventListener("input", ()=>{
    changeBy_num = Number(changeBy.valueAsNumber);
})

reset.addEventListener("click", ()=>{
    counter_value.textContent = 0;
    counter_num = 0;
})
