//запитати скільки років і визначити: дитина, підліток, дорослий чи пенсіонер
let age = prompt("How old are you?")
if (age <= 11) {
    alert('You are a child')
} else if (age <= 17) {
    alert('You are a teenager')
} else if (age <= 59) {
    alert('You are an adult')
} else if (age >= 60) {
    alert('You are an eldery person')
} else if (age >= 120) {
    alert('You entered your age incorrectly')
}

//вивести спецсимвол на число від 0 до 9
let numberFirst = prompt("Choose a number berween 0 to 9")
switch (+numberFirst) {
    case 1:
        alert('!');
        break;
    case 2:
        alert('@');
        break;
    case 3:
        alert('#');
        break;
    case 4:
        alert('$');
        break;
    case 5:
        alert('%');
        break;
    case 6:
        alert('^');
        break;
    case 7:
        alert('&');
        break;
    case 8:
        alert('*');
        break;
    case 9:
        alert('(');
        break;
    case 0:
        alert(')');
        break;
    default:
        alert('There is no symbol for this character');
}

//визначити чи є число паліндромом
let number = prompt("Enter a five-digit number");
let numberSplit = (""+number).split("");
if (numberSplit[0] === numberSplit[4], numberSplit[1] === numberSplit[3]) {
    alert(`Your number is a palindrome`);
} else {
    alert(`Your number is not a palindrome`);
}

//визначити суму до сплати зі знижкою
let amount = prompt("Enter your purchase amount");
if (amount < 200) {
    alert(`You have no discount. For payment: ${amount}`);
} else if (amount <= 300) {
    let discount = amount * 0.03;
    let finalAmount = amount - discount;
    alert(`For payment: ${finalAmount}`);
} else if (amount <= 500) {
    let discount = amount * 0.05;
    let finalAmount = amount - discount;
    alert(`For payment: ${finalAmount}`);
} else if (amount > 500) {
    let discount = amount * 0.07;
    let finalAmount = amount - discount;
    alert(`For payment: ${finalAmount}`);
} else {
    alert(`Enter your purchase amount`);
}

// зациклити виведення днів тижня 
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",];
let currDay = 0;
while (confirm(`${days[currDay]}. Do you want to see a next day?`)) {
    currDay = (currDay + 1) % days.length;
}