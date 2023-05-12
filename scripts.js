let total = 0
let tiptot = 0
let taxtot = 0
let fintot = 0
let tipPer = 0
let tipEnt = false
let namearr = localStorage.getItem('namelist').split(',')
let pricearr = localStorage.getItem('pricelist').split(',')
let qarr = localStorage.getItem('qlist').split(',')
let card = localStorage.getItem('cardnum')
let cen = []
let meth = localStorage.getItem('methood')
let name1 = localStorage.getItem('name')
console.log(localStorage)
$('#tiptex').hide()
$('.reviewform').hide()

if(meth == 'cash'){
    card = ''
    $('#cardtitle').hide()
}else if(meth == 'credit'){
    card = card.split('')
    console.log(card)
    for(let a = 0; a < card.length; a++){
        if( a <= 7){
        cen.push('*')
            if(a == 3 || a ==7 ){
                cen.push('-')
            }
        }else{
            cen.push(card[a])
        }
    }
    card = cen.join("")
}

$("#cardNum").text(card)

for(let i = 0; i <namearr.length; i++){
    let num = pricearr[i]
    num = num.split('')
    num.shift()
    num = num.join('')
    for(let q = 0; q < qarr[i]; q++){
        $('#itemlist').append('<tr><td>'+namearr[i]+'</td><td>'+pricearr[i]+'</td></tr>')
        total += Number(num)
        
    }
}
total = Math.round(total * 100) / 100
$('#itemlist').append('<tr><td class="rectot">Subtotal</td><td class="rectot" id ="subval">'+total+'</td></tr>')
taxtot = Math.round(total * 6)/100

tiptot = 0
fintot = total + tiptot + taxtot;
fintot = Math.round(fintot *100)/100
$("#taxval").text("$" + taxtot)
$("#fintot").text("$" + fintot)


$('#tipin').change(function () { 
    if(Number($('#tipin').val())>= 0){
        tipPer = Number($('#tipin').val())
        tiptot = total *(Number($('#tipin').val())/100)
        tiptot = Math.round(tiptot * 100) / 100
        fintot = total + tiptot + taxtot;
        fintot = Math.round(fintot *100)/100
        $("#tipDir").val(tiptot)
        $("#taxval").text("$" + taxtot)
        $("#fintot").text("$" + fintot)
        tipEnt = true
    }else{
        alert('please enter a valid tip amount')
    }
});

$('#tipDir').change(function(){
    if(Number($('#tipDir').val())>=0){
        tiptot = Number($('#tipDir').val())
        tipPer = Math.round((tiptot/total)*10000)/100
        tiptot = Math.round(tiptot * 100) / 100
        fintot = total + tiptot + taxtot;
        fintot = Math.round(fintot *100)/100
        $('#tipin').val(tipPer)
        $("#taxval").text("$" + taxtot)
        $("#fintot").text("$" + fintot)
        tipEnt = true
    }else{
        alert('please enter a valid tip amount')
    }
})

$('#cardname').text(name1)

$('#yesbtn').click(function(){
    if(tipEnt == false){
        tiptot = 0
        fintot = total + tiptot + taxtot;
        fintot = Math.round(fintot *100)/100
        $("#tipDir").val(tiptot)
        $("#taxval").text("$" + taxtot)
        $("#fintot").text("$" + fintot)
        tipEnt = true
    }
    if(meth == 'credit'){
        alert('Thank You For Your Purchase Have A Wonderful Day!')
    }else if(meth == 'cash'){
        alert('proceed to the front counter for checkout')
        alert('Have a Wonderful Day!')
    }
    $('#tipval').text('$'+tiptot)
    $('#tipin').hide()
    $('#tipspace').text('%' + tipPer)
    $('#ques').hide()
    $('.info').hide()
    $('.reviewform').show()

})

$('#revbtn').click(function(){
    if($('#starnum').val() <= 0 || $('#starnum').val() > 5){
        alert('Please Enter a  Valid Rating From 1-5')
    }else{
    let revname = name1 + ':review'
    let starname = revname + ':rating'
    let text = $('#revtext').val()
    let rate = $('#starnum').val()
    localStorage.setItem(revname, text)
    localStorage.setItem(starname, rate)
    localStorage.setItem('revcheck', true)
    $('.reviewform').hide()
    alert('Thank you for submitting your feedback. Have a Wonderful Day!')
    console.log(localStorage)
    }
})