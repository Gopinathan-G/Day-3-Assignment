var n = prompt("Enter a number to find odd or even", "Type your number here");
n = parseInt(n);
if (isNaN(n))
{
console.log("Please Enter a Number");
}
else if (n == 0)
{
console.log("The number is zero");
}
else if (n%2)
{
console.log("The number is odd");
}
else
{
console.log("The number is even");
}