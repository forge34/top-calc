let btns = document.querySelectorAll('.operator')
let input = document.querySelector('.input-field')
let clear = document.querySelector('.clear')
let numbers = document.querySelectorAll('.number')
let calc = document.querySelector('.calculate')
let arr = []
arr[1] = null


for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    element.addEventListener('click' ,() =>  addNumber(element.textContent))
    
}

clear.onclick = () => input.value = ''
calc.onclick = () => calculate()

function calculate(){

    n1 = Number(arr[0])
    n2 = Number(input.value.slice(input.value.indexOf(arr[1])+2))

    console.log(n1 , n2)

    sum = 0
    switch (arr[1]){
        case '+': sum = n1 + n2
             break;
        case '/': sum = n1 / n2
             break;
        case '-': sum = n1 - n2
             break;
        case 'x': sum = n1 * n2
             break;
    }

    input.value = sum

    arr[0] = sum
    return sum
}

function addNumber(n){
    input.value += n
}

let operators = ['=' , '+' ,'x', '-' , '/']
function operator(e){

    let after_op = input.value.slice(input.value.indexOf(arr[1]) + 2)

    if (isNaN( after_op)){

        arr[2] = after_op

        input.value = `${calculate()} ${e} `
    }
    else {

        arr[0] = input.value
        arr[1] = e
        input.value += ` ${e} `
    }

    console.log(arr)
 
}

for (let i = 0; i < btns.length; i++) {
    const element = btns[i];

    element.addEventListener('click' ,() => {
        operator(element.textContent)

    })
}

