//Task 1.
let input = document.getElementById('inputName');
let span1 = document.getElementById('text1');
function task1() {
    if (isNaN(input.value)) {
        span1.textContent = "Should be a number";
    } else {
        span1.textContent = "Hello " + input.value;
    }

}

//Task 2
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let span2 = document.getElementById('text2');
function task2() {
    if (password1.value == password2.value) {
        span2.textContent = 'Equal';
    } else {
        span2.textContent = 'Not equal';
    }
}

//Task 3
let span3 = document.getElementById('random');
function task3() {
    span3.textContent = Math.floor(Math.random() * 10000);
}