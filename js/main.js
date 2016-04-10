var deadline = 'June 25 2016 09:00:00 GMT-07:00';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
var timeInterval;
function initializeClock(id){

  var timeInterval = setInterval(updateClock, 1000);
}
function updateClock(){
  var t = getTimeRemaining(deadline);
  var clock = $('.clock-div');
  var daysSpan = clock.find('.days');
  var hoursSpan = clock.find('.hours');
  var minutesSpan = clock.find('.minutes');
  var secondsSpan = clock.find('.seconds');

  daysSpan.html(('0' + t.days).slice(-2));
  hoursSpan.html(('0' + t.hours).slice(-2));
  minutesSpan.html(('0' + t.minutes).slice(-2));
  secondsSpan.html(('0' + t.seconds).slice(-2));
  if(t.total<=0){
    clearInterval(timeInterval);
  }
}
updateClock();
initializeClock('clock-div');
