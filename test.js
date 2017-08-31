/**
 * Created by svend on 26/08/2017.
 */

var ArrayOfPages = ['One', 'Two', 'Three', 'Four', 'Five'];


var makeTheRightOneActiveWhenThePageStart = function () {
    var url = window.location.href;
    for (var i = 0; i < ArrayOfPages.length; i++){
        var newUrl = ArrayOfPages[i] + '.html';
        if (url.indexOf(newUrl) > 1){
            var newI = i + 1;
            $("a:contains("+ newI + ")").parent().addClass('active');
        }
  }
};

var makeTheRightOneActive = function () {
  var $selector = $(this);
  var getClass = $selector.attr('class');
  var getHTML = $selector.html();
  var whatTheSetTrue;
  switch (getClass){
      case 'prev':
          whatTheSetTrue = getTheRightOneActiveWhenPressPrevOrNext('prev',getHTML);
          break;
      case 'next':
          whatTheSetTrue = getTheRightOneActiveWhenPressPrevOrNext('next',getHTML);
          break;
      default:
          whatTheSetTrue = getTheRightOneActiveWhenPressPrevOrNext('',getHTML);
          break;
  }
  window.open(whatTheSetTrue + '.html', '_self', false)
};

var getTheRightOneActiveWhenPressPrevOrNext = function (whatMethode,whichNumber) {
    var whatPageAreYouOn = $('.active').children().html();
    var whatCurrentPlaceAreYouOn = findAtWhichPlaceYouAreInTheArray(whatPageAreYouOn);
    var newPlace;
    switch (whatMethode){
        case 'next':
            newPlace = whatCurrentPlaceAreYouOn + 1;
            if (newPlace === 5){
                newPlace = 4;
            }
            break;
        case 'prev':
            newPlace = whatCurrentPlaceAreYouOn - 1;
            if (newPlace === -1){
                newPlace = 0;
            }
            break;
        default:
            newPlace = findAtWhichPlaceYouAreInTheArray(whichNumber);
            break;
    }
    return ArrayOfPages[newPlace]
};

var findAtWhichPlaceYouAreInTheArray = function (whatPageAreYouOn) {
    whatPageAreYouOn = parseInt(whatPageAreYouOn);
    return whatPageAreYouOn - 1;
};

var init = function () {
    makeTheRightOneActiveWhenThePageStart();
    $('.container .pagination a').on('click',makeTheRightOneActive);
};
$(document).ready(init());


