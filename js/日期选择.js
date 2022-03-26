var t = document.querySelector('.total')
var moeny = document.querySelectorAll('.money')
var inp = document.querySelectorAll('input') //获取输入框对象
var price = document.querySelectorAll('.price') //获取单价
function total() {
    var sum = 0
    for (var i = 0; i < moeny.length; i++) {
        sum = sum + parseFloat(moeny[i].innerText)
    }
    t.innerText = sum
}
total()

function add(num) { // 点第几个+
    inp[num].value++ //点击+后，对应的输入框value+1
    var sum = parseFloat(price[num].innerText) * inp[num].value
    moeny[num].innerText = sum
    total()
}

function minus(num) {
    inp[num].value-- //点击-后，对应的输入框value-1
    if (inp[num].value < 1) {
        inp[num].value = 1
    }
    var sum = parseFloat(price[num].innerText) * inp[num].value
    moeny[num].innerText = sum
    total()
}