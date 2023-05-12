$(".credit").hide();
$(".cash").hide();

$('#namein').change(function(){
    let name = $('#namein').val()
    console.log(name)
    localStorage.setItem('name', name)
})
$('#namein2').change(function(){
    let name = $('#namein2').val()
    console.log(name)
    localStorage.setItem('name', name)
})

$('#select').change(function(){
    if($('select').val() == 'cash'){
        $(".credit").hide();
        $(".cash").show();
        localStorage.setItem('methood', 'cash')
    }
    if($('select').val() == 'credit'){
        $(".credit").show();
        $(".cash").hide();
        localStorage.setItem('methood', 'credit')
    }
})

