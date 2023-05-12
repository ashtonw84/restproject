let total = 0
let aces = 0
let comptot = 0
let compace = 0
let money = 100
let bet = 0
$('#hitMe').hide()
$('#hold').hide() 
$('#rest').hide()


function playDraw(){
    let suit = Math.floor(Math.random() * 4) + 1
    //1-clubs 2-diamonds 3-hearts 4-spades
    let number = Math.floor(Math.random() * 13) + 1
    console.log('hey')
    if(suit == 1){
        if(number == 1){
            $('#playhand').append('<img src="../img/clubs/aceClubs.png" alt="aceClubs" class="playcard">')
            aces += 1
            total += 11
        }
        if(number == 2){
            $('#playhand').append('<img src="../img/clubs/twoClubs.png" alt="aceClubs" class="playcard">')
            total += 2
        }
        if(number == 3){
            $('#playhand').append('<img src="../img/clubs/threeClubs.png" alt="aceClubs" class="playcard">')
            total += 3
        }
        if(number == 4){
            $('#playhand').append('<img src="../img/clubs/fourClubs.png" alt="aceClubs" class="playcard">')
            total += 4
        }
        if(number == 5){
            $('#playhand').append('<img src="../img/clubs/fiveClubs.png" alt="aceClubs" class="playcard">')
            total += 5
        }
        if(number == 6){
            $('#playhand').append('<img src="../img/clubs/sixClubs.png" alt="aceClubs" class="playcard">')
            total += 6
        }
        if(number == 7){
            $('#playhand').append('<img src="../img/clubs/sevenClubs.png" alt="aceClubs" class="playcard">')
            total += 7
        }
        if(number == 8){
            $('#playhand').append('<img src="../img/clubs/eightClubs.png" alt="aceClubs" class="playcard">')
            total += 8
        }
        if(number == 9){
            $('#playhand').append('<img src="../img/clubs/nineClubs.png" alt="aceClubs" class="playcard">')
            total += 9
        }
        if(number == 10){
            $('#playhand').append('<img src="../img/clubs/tenClubs.png" alt="aceClubs" class="playcard">')
            total += 10
        }
        if(number == 11){
            $('#playhand').append('<img src="../img/clubs/jackClubs.png" alt="aceClubs" class="playcard">')
            total += 10
        }
        if(number == 12){
            $('#playhand').append('<img src="../img/clubs/queenClubs.png" alt="aceClubs" class="playcard">')
            total += 10
        }
        if(number == 13){
            $('#playhand').append('<img src="../img/clubs/kingClubs.png" alt="aceClubs" class="playcard">')
            total += 10
        }
    }
    if(suit == 2){
        if(number == 1){
            $('#playhand').append('<img src="../img/diamonds/aceDiamonds.png" alt="aceDia" class="playcard">')
            aces += 1
            total += 11
        }
        if(number == 2){
            $('#playhand').append('<img src="../img/diamonds/twoDiamonds.png" alt="twoDia" class="playcard">')
            total += 2
        }
        if(number == 3){
            $('#playhand').append('<img src="../img/diamonds/threeDiamonds.png" alt="twoDia" class="playcard">')
            total += 3
        }
        if(number == 4){
            $('#playhand').append('<img src="../img/diamonds/fourDiamonds.png" alt="twoDia" class="playcard">')
            total += 4
        }
        if(number == 5){
            $('#playhand').append('<img src="../img/diamonds/fiveDiamonds.png" alt="twoDia" class="playcard">')
            total += 5
        }
        if(number == 6){
            $('#playhand').append('<img src="../img/diamonds/sixDiamonds.png" alt="twoDia" class="playcard">')
            total += 6
        }
        if(number == 7){
            $('#playhand').append('<img src="../img/diamonds/sevenDiamonds.png" alt="twoDia" class="playcard">')
            total += 7
        }
        if(number == 8){
            $('#playhand').append('<img src="../img/diamonds/eightDiamonds.png" alt="twoDia" class="playcard">')
            total += 8
        }
        if(number == 9){
            $('#playhand').append('<img src="../img/diamonds/nineDiamonds.png" alt="twoDia" class="playcard">')
            total += 9
        }
        if(number == 10){
            $('#playhand').append('<img src="../img/diamonds/tenDiamonds.png" alt="twoDia" class="playcard">')
            total += 10
        }
        if(number == 11){
            $('#playhand').append('<img src="../img/diamonds/jackDiamonds.png" alt="twoDia" class="playcard">')
            total += 10
        }
        if(number == 12){
            $('#playhand').append('<img src="../img/diamonds/queenDiamonds.png" alt="twoDia" class="playcard">')
            total += 10
        }
        if(number == 13){
            $('#playhand').append('<img src="../img/diamonds/KingDiamonds.png" alt="twoDia" class="playcard">')
            total += 10
        }
    }
    if(suit == 3){
        if(number == 1){
            $('#playhand').append('<img src="../img/hearts/aceHearts.png" class="playcard">')
            aces += 1
            total += 11
        }
        if(number == 2){
            $('#playhand').append('<img src="../img/hearts/twoHearts.png" class="playcard">')
            total += 2
        }
        if(number == 3){
            $('#playhand').append('<img src="../img/hearts/threeHearts.png" class="playcard">')
            total += 3
        }
        if(number == 4){
            $('#playhand').append('<img src="../img/hearts/fourHearts.png" class="playcard">')
            total += 4
        }
        if(number == 5){
            $('#playhand').append('<img src="../img/hearts/fiveHearts.png" class="playcard">')
            total += 5
        }
        if(number == 6){
            $('#playhand').append('<img src="../img/hearts/sixHearts.png" class="playcard">')
            total += 6
        }
        if(number == 7){
            $('#playhand').append('<img src="../img/hearts/sevenHearts.png" class="playcard">')
            total += 7
        }
        if(number == 8){
            $('#playhand').append('<img src="../img/hearts/eightHearts.png" class="playcard">')
            total += 8
        }
        if(number == 9){
            $('#playhand').append('<img src="../img/hearts/nineHearts.png" class="playcard">')
            total += 9
        }
        if(number == 10){
            $('#playhand').append('<img src="../img/hearts/tenHearts.png" class="playcard">')
            total += 10
        }
        if(number == 11){
            $('#playhand').append('<img src="../img/hearts/jackHearts.png" class="playcard">')
            total += 10
        }
        if(number == 12){
            $('#playhand').append('<img src="../img/hearts/queenHearts.png" class="playcard">')
            total += 10
        }
        if(number == 13){
            $('#playhand').append('<img src="../img/hearts/kingHearts.png" class="playcard">')
            total += 10
        }
    }
    if(suit == 4){
        if(number == 1){
            $('#playhand').append('<img src="../img/spades/aceSpades.png" class="playcard">')
            aces += 1
            total += 11
        }
        if(number == 2){
            $('#playhand').append('<img src="../img/spades/twoSpades.png" class="playcard">')
            total += 2
        }
        if(number == 3){
            $('#playhand').append('<img src="../img/spades/threeSpades.png" class="playcard">')
            total += 3
        }
        if(number == 4){
            $('#playhand').append('<img src="../img/spades/fourSpades.png" class="playcard">')
            total += 4
        }
        if(number == 5){
            $('#playhand').append('<img src="../img/spades/fiveSpades.png" class="playcard">')
            total += 5
        }
        if(number == 6){
            $('#playhand').append('<img src="../img/spades/sixSpades.png" class="playcard">')
            total += 6
        }
        if(number == 7){
            $('#playhand').append('<img src="../img/spades/sevenSpades.png" class="playcard">')
            total += 7
        }
        if(number == 8){
            $('#playhand').append('<img src="../img/spades/eightSpades.png" class="playcard">')
            total += 8
        }
        if(number == 9){
            $('#playhand').append('<img src="../img/spades/nineSpades.png" class="playcard">')
            total += 9
        }
        if(number == 10){
            $('#playhand').append('<img src="../img/spades/tenSpades.png" class="playcard">')
            total += 10
        }
        if(number == 11){
            $('#playhand').append('<img src="../img/spades/jackSpades.png" class="playcard">')
            total += 10
        }
        if(number == 12){
            $('#playhand').append('<img src="../img/spades/queenSpades.png" class="playcard">')
            total += 10
        }
        if(number == 13){
            $('#playhand').append('<img src="../img/spades/kingSpades.png" class="playcard">')
            total += 10
        }
    }
    if(total > 21){
        if(aces >= 1){
            aces -= 1
            total -= 10
            if(aces < 1 && total > 21){
                $('#wintext').text('You Busted With a Score of :' + total)
                $('#hitMe').hide()
                $('#hold').hide()
                $('#bet1').show()
                $('#bet5').show()
                $('#bet10').show()
                bet = 0
            }
        }else{
            $('#wintext').text('You Busted With a Score of :' + total)
            $('#hitMe').hide()
            $('#hold').hide()
            $('#bet1').show()
            $('#bet5').show()
            $('#bet10').show()
            bet = 0
        }
    }
    $('#pcount').text('Current Score:' + total)
    $('#betcount').text('$'+ bet)
    $('#moncount').text('Total Money: $'+ money)
}

function compDraw(){
    let suit = Math.floor(Math.random() * 4) + 1
    //1-clubs 2-diamonds 3-hearts 4-spades
    let number = Math.floor(Math.random() * 13) + 1 
    if(suit == 1){
        if(number == 1){
            $('#comphand').append('<img src="../img/clubs/aceClubs.png" class="playcard">')
            compace += 1
            comptot += 11
        }
        if(number == 2){
            $('#comphand').append('<img src="../img/clubs/twoClubs.png" class="playcard">')
            comptot += 2
        }
        if(number == 3){
            $('#comphand').append('<img src="../img/clubs/threeClubs.png" class="playcard">')
            comptot += 3
        }
        if(number == 4){
            $('#comphand').append('<img src="../img/clubs/fourClubs.png" class="playcard">')
            comptot += 4
        }
        if(number == 5){
            $('#comphand').append('<img src="../img/clubs/fiveClubs.png" class="playcard">')
            comptot += 5
        }
        if(number == 6){
            $('#comphand').append('<img src="../img/clubs/sixClubs.png" class="playcard">')
            comptot += 6
        }
        if(number == 7){
            $('#comphand').append('<img src="../img/clubs/sevenClubs.png" class="playcard">')
            comptot += 7
        }
        if(number == 8){
            $('#comphand').append('<img src="../img/clubs/eightClubs.png" class="playcard">')
            comptot += 8
        }
        if(number == 9){
            $('#comphand').append('<img src="../img/clubs/nineClubs.png" class="playcard">')
            comptot += 9
        }
        if(number == 10){
            $('#comphand').append('<img src="../img/clubs/tenClubs.png" class="playcard">')
            comptot += 10
        }
        if(number == 11){
            $('#comphand').append('<img src="../img/clubs/jackClubs.png" class="playcard">')
            comptot += 10
        }
        if(number == 12){
            $('#comphand').append('<img src="../img/clubs/queenClubs.png" class="playcard">')
            comptot += 10
        }
        if(number == 13){
            $('#comphand').append('<img src="../img/clubs/kingClubs.png" class="playcard">')
            comptot += 10
        }
    }
    if(suit == 2){
        if(number == 1){
            $('#comphand').append('<img src="../img/diamonds/aceDiamonds.png" class="playcard">')
            compace += 1
            comptot += 11
        }
        if(number == 2){
            $('#comphand').append('<img src="../img/diamonds/twoDiamonds.png" class="playcard">')
            comptot += 2
        }
        if(number == 3){
            $('#comphand').append('<img src="../img/diamonds/threeDiamonds.png" class="playcard">')
            comptot += 3
        }
        if(number == 4){
            $('#comphand').append('<img src="../img/diamonds/fourDiamonds.png" class="playcard">')
            comptot += 4
        }
        if(number == 5){
            $('#comphand').append('<img src="../img/diamonds/fiveDiamonds.png" class="playcard">')
            comptot += 5
        }
        if(number == 6){
            $('#comphand').append('<img src="../img/diamonds/sixDiamonds.png" class="playcard">')
            comptot += 6
        }
        if(number == 7){
            $('#comphand').append('<img src="../img/diamonds/sevenDiamonds.png" class="playcard">')
            comptot += 7
        }
        if(number == 8){
            $('#comphand').append('<img src="../img/diamonds/eightDiamonds.png" class="playcard">')
            comptot += 8
        }
        if(number == 9){
            $('#comphand').append('<img src="../img/diamonds/nineDiamonds.png" class="playcard">')
            comptot += 9
        }
        if(number == 10){
            $('#comphand').append('<img src="../img/diamonds/tenDiamonds.png" class="playcard">')
            comptot += 10
        }
        if(number == 11){
            $('#comphand').append('<img src="../img/diamonds/jackDiamonds.png" class="playcard">')
            comptot += 10
        }
        if(number == 12){
            $('#comphand').append('<img src="../img/diamonds/queenDiamonds.png" class="playcard">')
            comptot += 10
        }
        if(number == 13){
            $('#comphand').append('<img src="../img/diamonds/kingDiamonds.png" class="playcard">')
            comptot += 10
        }
    }
    if(suit == 3){
        if(number == 1){
            $('#comphand').append('<img src="../img/hearts/aceHearts.png" class="playcard">')
            compace += 1
            comptot += 11
        }
        if(number == 2){
            $('#comphand').append('<img src="../img/hearts/twoHearts.png" class="playcard">')
            comptot += 2
        }
        if(number == 3){
            $('#comphand').append('<img src="../img/hearts/threeHearts.png" class="playcard">')
            comptot += 3
        }
        if(number == 4){
            $('#comphand').append('<img src="../img/hearts/fourHearts.png" class="playcard">')
            comptot += 4
        }
        if(number == 5){
            $('#comphand').append('<img src="../img/hearts/fiveHearts.png" class="playcard">')
            comptot += 5
        }
        if(number == 6){
            $('#comphand').append('<img src="../img/hearts/sixHearts.png" class="playcard">')
            comptot += 6
        }
        if(number == 7){
            $('#comphand').append('<img src="../img/hearts/sevenHearts.png" class="playcard">')
            comptot += 7
        }
        if(number == 8){
            $('#comphand').append('<img src="../img/hearts/eightHearts.png" class="playcard">')
            comptot += 8
        }
        if(number == 9){
            $('#comphand').append('<img src="../img/hearts/nineHearts.png" class="playcard">')
            comptot += 9
        }
        if(number == 10){
            $('#comphand').append('<img src="../img/hearts/tenHearts.png" class="playcard">')
            comptot += 10
        }
        if(number == 11){
            $('#comphand').append('<img src="../img/hearts/jackHearts.png" class="playcard">')
            comptot += 10
        }
        if(number == 12){
            $('#comphand').append('<img src="../img/hearts/queenHearts.png" class="playcard">')
            comptot += 10
        }
        if(number == 13){
            $('#comphand').append('<img src="../img/hearts/kingHearts.png" class="playcard">')
            comptot += 10
        }
    }
    if(suit == 4){
        if(number == 1){
            $('#comphand').append('<img src="../img/spades/aceSpades.png" class="playcard">')
            compace += 1
            comptot += 11
        }
        if(number == 2){
            $('#comphand').append('<img src="../img/spades/twoSpades.png" class="playcard">')
            comptot += 2
        }
        if(number == 3){
            $('#comphand').append('<img src="../img/spades/threeSpades.png" class="playcard">')
            comptot += 3
        }
        if(number == 4){
            $('#comphand').append('<img src="../img/spades/fourSpades.png" class="playcard">')
            comptot += 4
        }
        if(number == 5){
            $('#comphand').append('<img src="../img/spades/fiveSpades.png" class="playcard">')
            comptot += 5
        }
        if(number == 6){
            $('#comphand').append('<img src="../img/spades/sixSpades.png" class="playcard">')
            comptot += 6
        }
        if(number == 7){
            $('#comphand').append('<img src="../img/spades/sevenSpades.png" class="playcard">')
            comptot += 7
        }
        if(number == 8){
            $('#comphand').append('<img src="../img/spades/eightSpades.png" class="playcard">')
            comptot += 8
        }
        if(number == 9){
            $('#comphand').append('<img src="../img/spades/nineSpades.png" class="playcard">')
            comptot += 9
        }
        if(number == 10){
            $('#comphand').append('<img src="../img/spades/tenSpades.png" class="playcard">')
            comptot += 10
        }
        if(number == 11){
            $('#comphand').append('<img src="../img/spades/jackSpades.png" class="playcard">')
            comptot += 10
        }
        if(number == 12){
            $('#comphand').append('<img src="../img/spades/queenSpades.png" class="playcard">')
            comptot += 10
        }
        if(number == 13){
            $('#comphand').append('<img src="../img/spades/kingSpades.png" class="playcard">')
            comptot += 10
        }
    }
    if(comptot > 21){
        if(compace >= 1){
            compace -= 1
            comptot -= 10
            if(compace < 1 && comptot > 21){
                $('#wintext').text('The Dealer Busted With a total of :' + comptot + 'YOU WIN')
            }
        }else{
            $('#wintext').text('The Dealer Busted With a total of :' + comptot + 'YOU WIN')
        }
    }
}

function compturn(){
    let over = false
    $('.cardBack').remove()
    while(over ==  false){
        compDraw()
        if(comptot >= 16){
            over = true
        }
    }
    if(total > comptot || comptot > 21){
        $('#wintext').text("You Beat the Dealer's Score of:" + comptot + " With a Score of: " + total + ". YOU WIN!")
        money += (bet)*2
        bet = 0
        if(comptot > 21){
            $('#wintext').text('The Dealer Busted With: ' + comptot + ' YOU WIN')
        }
    }else if(total == comptot){
        $('#wintext').text("You Tied With the Dealer at:"+ total)
        money += bet
        bet = 0
    }else if(total < comptot){
        $('#wintext').text("YOU LOSE! The Dealer beat your score with: " + comptot )
        bet = 0
    }
    $('#betcount').text('$'+ bet)
    $('#moncount').text('Total Money: $'+ money)
    
    $('#bet1').show()
    $('#bet5').show()
    $('#bet10').show()

}

$('#hitMe').click(function(){
    playDraw()
})
$('#newHand').click(function(){
    if(bet > 0){
        total = 0
        comptot = 0
        compace = 0
        aces = 0
        $('#playhand').empty()
        $('#comphand').empty()
        $('#wintext').text('')
        playDraw()
        playDraw()
        $('#comphand').append('<img src="../img/backCard.png" class="cardBack">')
        compDraw()
        $('#hitMe').show()
        $('#hold').show()
        $('#bet1').hide()
        $('#bet5').hide()
        $('#bet10').hide()
    }else{
        alert("Make a bet before starting new hand!")
    }
})
$('#hold').click(function(){
    $('#hitMe').hide()
    $('#hold').hide() 
    compturn() 
})

$('#bet1').click(function(){
    if((money -1) >= 0){
        bet ++
        money --
        $('#betcount').text('Current Bet: $'+ bet)
        $('#moncount').text('Total Money: $'+ money)
    }else{
        alert('Not Enough Money. YOU LOSE')
        if(bet == 0){
            $('#rest').show()
        }
    }
})
$('#bet5').click(function(){
    if((money -5) >= 0){
        bet += 5
        money -= 5
        $('#betcount').text('Current Bet: $'+ bet)
        $('#moncount').text('Total Money: $'+ money)
    }else{
        alert('Not Enough Money.')
    }
})
$('#bet10').click(function(){
    if((money -10) >= 0){
        bet += 10
        money -= 10
        $('#betcount').text('Current Bet: $'+ bet)
        $('#moncount').text('Total Money: $'+ money)
    }else{
        alert('Not Enough Money.')
    }
})
$('#rest').click(function(){
    console.log('ur mom')
    $('#playhand').empty()
    $('#comphand').empty()
    bet = 0
    money = 100
    total = 0
    $('#hitMe').hide()
    $('#hold').hide()
    
    $('#bet1').show()
    $('#bet5').show()
    $('#bet10').show()

    $('#betcount').text('$'+ bet)
    $('#moncount').text('Total Money: $'+ money)
    $('#rest').hide()

    $('#wintext').text('')
    $('#pcount').text('Current Score:' + total)
})