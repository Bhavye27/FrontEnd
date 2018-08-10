//array to hold all cards
var cards = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-bomb", "fa-leaf", "fa-bicycle"];

var timer;
var timers;
var openCard = [];
var card1;
var ids = [];
var moves = 0;
var p = 0;
var co = 0;
var timeElapsed = 0;
var minElapsed = 0;
var star;

initial_fun();
$(document).ready(function() {
    card1 = $(".card");
    for (k = 0; k < card1.length; k++) {
        card1[k].onclick = open;
    }
});

//initial function
function initial_fun() {
    $('#scorecard').css('display', 'none');
    for (var i = 0; i < 2; i++) {
        cards = shuffle(cards);
        for (var j = 0; j < 8; j++) {
            create_card(cards[j]);
        }
    }
    $('.restart').on('click', function() {
        location.reload();
    });
}


function open() {
    //incrementing moves
    moves = moves + 1;
    //starting timer
    if (moves == 1) {
        timer = setInterval(function() {
            if (timeElapsed == 59) {
                timeElapsed = timeElapsed - 60;
            }

            timeElapsed += 1;

            $('.timer').html(" " + timeElapsed);
        }, 1000);
    }
    if (moves == 1) {
        timers = setInterval(function() {
            minElapsed += 1;
            $('.timers').html(" " + minElapsed);
        }, 60000);
    }

    if (moves % 2 == 0) {
        document.getElementById("moves").innerHTML = moves / 2;
    }
    //star ratings according to number of moves
    if (moves <= 16) {
        star = '<li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></li>';

    } else if (moves > 16 && moves < 20) {
        star = '<li><i class="fa fa-star"></i><i class="fa fa-star"></i></li>';

    } else {
        star = '<li><i class="fa fa-star"></i></li>';

    }
    document.getElementById("stars").innerHTML = star;
    this.classList.add("open", "show");
    openCard.push(this);
    var x = document.getElementsByTagName("i")[0].getAttribute("id");
    this.onclick = null;
    if (openCard.length == 2) {

        match();
    }

}

//card creating function
function create_card(randomcard) {
    p++;
    var loc = document.getElementsByClassName("deck");
    var z = document.createElement("li");
    z.setAttribute("class", "card")
    loc[0].appendChild(z);
    var y = document.createElement("i");
    y.setAttribute("class", "fa " + randomcard);
    y.setAttribute("id", p);
    z.appendChild(y);
}

//card matching function
function match() {


    if (openCard[0].firstChild.classList.value == openCard[1].firstChild.classList.value) {
        openCard[0].style.pointerEvents = 'none';
        openCard[1].style.pointerEvents = 'none';
        co++;
        openCard = [];
        if (co == 8) {
            setTimeout(function() {
                end();
            }, 1000);
        }


    } else {
        setTimeout(function() {
            openCard[0].onclick = open;
            openCard[1].onclick = open;
            //enable();
            openCard[0].classList.remove("open", "show");
            openCard[1].classList.remove("open", "show");
            openCard = [];
        }, 200);
    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function end() {

    $('#deckContainer').css('display', 'none');
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            location.reload();
        }
    }

    var b = document.getElementById('scorecard');
    document.getElementById('scorecard').setAttribute("style", "text-align : center ; font-weight : bold; font-size : 20px");
    var a = document.createElement("p");
    a.innerHTML = "Moves- " + moves / 2;
    b.appendChild(a);

    var e = document.createElement("p");
    e.innerHTML = "Time- " + minElapsed + " mins : " + timeElapsed + " secs";
    b.appendChild(e);

    var c = document.createElement("p");
    c.innerHTML = star;
    b.appendChild(c);
}