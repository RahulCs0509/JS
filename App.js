// console.log("Java script file")
// var x = Math.random()
// console.log(x * 100000)
// console.log(x)
function display() {
    var x = Math.random() * (9999 - 1000) + 1000
    var otp = Math.floor(x)
    console.log(otp)
    var name = document.getElementById("name").value
    document.getElementById("div2").innerHTML = "Dear " + name + " your otp is " + otp
}