//alert('hola');


function ageindays(){
    var birthyear = prompt('What year were you born...')
    var ageindays =(2020 -birthyear)*365;
    var h1= document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageindays + ' days old')
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1)
}

function reset(){
    document.getElementById('ageindays').remove();
}

function generateCat(){
    var image = document.createElement('img');
    var section = document.getElementById('cats');
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    section.appendChild(image);
}

function rpsGame(yourChoice){
    //console.log(yourchoice)
    var humanChoice, botChoice;

    humanChoice= yourChoice.id
    
    botChoice= numbertochoice(randomtorps());
    console.log('Computer choice:', botChoice)
    
    results = decideWinner(humanChoice, botChoice)
     console.log(results)
     
     message= finalMessage(results)
     console.log(message)
     rpsFrontend(yourChoice.id, botChoice, message)
}

function randomtorps(){
    return Math.floor(Math.random()*3);
}

function numbertochoice(number){
    return ['rock','paper','scissors'][number]
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase ={
        'rock':{'scissors':1, 'rock':0.5,'paper':0},
        'paper':{'scissors':0, 'rock':1,'paper':0.5},
        'scissors':{'scissors':0.5, 'rock':0,'paper':1}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
   
    return [yourScore, computerScore]
}

function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        return {'message': 'You lost!','color':'red'}
    } else if(yourScore===0.5){
        return {'message': 'You tied!','color':'yellow'}
    }else{
        return {'message': 'You won!', 'color':'green'}
    }
}

function rpsFrontend(humanImageChoice, botImageChoice,finalMessage){
    var imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML= "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px 0px rgba(37, 50, 233, 1)'>"
    messageDiv.innerHTML="<h1 style='color:" + finalMessage['color'] + "; font-size:60px; padding:30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML= "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px 0px red'>"

    humanDiv.setAttribute('id','imgHuman');
    messageDiv.setAttribute('id','message');
    botDiv.setAttribute('id','imgBot');

    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(botDiv)


}
function resetGame(){
    //  document.getElementById('imgHuman').remove();
    //  document.getElementById('message').remove();
    //  document.getElementById('imgBot').remove();

    location.reload();

     
   
    
}
