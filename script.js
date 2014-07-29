var colCount = 0;
var colWidth = 0;
var margin = 20;
var windowWidth = 0;
var cards = [];

function setUpCards() {
    windowWidth = $(window).width();
    colWidth = $('.card').outerWidth();
    colCount = Math.floor(windowWidth/(colWidth+margin));
    for(var i=0; i < colCount; i++) {
        cards.push(margin);
    }
    alert(cards);
}

function positionCards() {
    $('.card').each(function(){
        var min = Array.min(cards);
        var index = $.inArray(min, cards);
        var leftPos = margin+(index*(colWidth+margin));
        $(this).css({
            'left':leftPos+'px',
            'top':min+'px'
        });
        cards[index] = min+card.outerHeight()+margin;
    });
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};
