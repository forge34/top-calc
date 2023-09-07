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

clear.onclick = () =>{ input.value = '' , arr = []}
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
}

function addNumber(n){
    input.value += n
}

function operator(e){

    let after_op = input.value.slice(input.value.indexOf(arr[1]) + 2)

    if (isNaN(input.value)){

        if (isNaN(after_op)){

        }
        else {
            calculate()
            console.log('here')
            input.value += ` ${e} `
            arr[1] = e
        }
    }

    else {
        console.log('else')
        arr[0] = input.value
        arr[1] = e

        input.value += ` ${e} `
    }
}

for (let i = 0; i < btns.length; i++) {
    const element = btns[i];

    element.addEventListener('click' ,() => {
        operator(element.textContent)

    })
}

