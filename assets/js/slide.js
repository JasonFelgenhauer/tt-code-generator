const nextSlide = (id, idtwo) => {
    $(id).animate({ left: '-100%'}, 1000, () => {
        $(idtwo).animate({ left: '0'}, 1000)
    });
}
const previousSlide = (id, idtwo) => {
    $(id).animate({ left: '100%'}, 1000, () => {
        $(idtwo).animate({ left: '0'}, 1000)
    });
}

const nextArray = ['#header', '#about', '#cssgradient', '#htmlcssjs', '#getwaves', '#blobmaker', '#imageslidermaker'];

$('button').click((element) => {
    let elementId      = element.target.id;
    let nextOrPrevious = elementId.split('_');
    
    let numberForArray  = parseInt(nextOrPrevious[1])
    let nextSlideId     = nextArray[numberForArray + 1];
    let currentSlide    = nextArray[numberForArray];
    let previousSlideId = nextArray[numberForArray - 1];

    if(nextOrPrevious[0] === 'next'){
        nextSlide(currentSlide, nextSlideId);
    }else if(nextOrPrevious[0] === 'previous'){
        previousSlide(currentSlide, previousSlideId)
    }
})