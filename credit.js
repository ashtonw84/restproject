
let cardnum = 0;
$("#outbtn").click(function(){
    cardnum = $('#cardin').val()
    console.log(cardnum)
    localStorage.setItem('cardnum', cardnum)
})
$('#secnum').change(function(){
    let num = $('#secnum').val()
    localStorage.setItem('secnum', num)
})

$('#monthin').change(function(){
    let mon = $('#monthin').val()
    localStorage.setItem('expmonth', mon)
})

$('#yearin').change(function(){
    let year = $('#yearin').val()
    localStorage.setItem('expyear', year)
})