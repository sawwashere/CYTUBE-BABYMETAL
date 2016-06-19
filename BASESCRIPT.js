/*!
**|   XaeMae Sequenced Module Loader
**|   
**@preserve
*/
// -- Channel Namespace --
if (!this[CHANNEL.name])
    this[CHANNEL.name] = {};
// -- The Module Library
window[CHANNEL.name].sequenceList = {
	'layout':      { active: 1, rank: -1, url: "//googledrive.com/host/0ByK1ansfeYuRRlBweDRkSUZONWc/Custom.js",              callback: true },
    'channel':      { active: 1, rank: -1, url: "//googledrive.com/host/0ByK1ansfeYuRRlBweDRkSUZONWc/enhanced.js",              callback: true },
    'Xaekai Modules':      { active: 1, rank: -1, url: "//googledrive.com/host/0ByK1ansfeYuRRlBweDRkSUZONWc/XaekaiModules.js",              callback: true },
};

window[CHANNEL.name].sequencePrev = window[CHANNEL.name].sequencePrev || "";
window[CHANNEL.name].sequenceState = window[CHANNEL.name].sequenceState || 0;
window[CHANNEL.name].sequenceIndex = Object.keys(window[CHANNEL.name].sequenceList)

window[CHANNEL.name].sequencerLoader = function (){
    // After first run we curry the previous modules callback
    // This is mainly used to reassign variables in modules/scripts that don't use module options
    if(window[CHANNEL.name].sequencePrev){
        setTimeout(window[CHANNEL.name].sequenceList[window[CHANNEL.name].sequencePrev].callback, 0)
        window[CHANNEL.name].sequencePrev = "";
    }

    if(window[CHANNEL.name].sequenceState >= window[CHANNEL.name].sequenceIndex.length){
        return (function(){ console.log("Xaekai's Script Sequencer: Loading Complete.") })()
    }

    var currKey = window[CHANNEL.name].sequenceIndex[window[CHANNEL.name].sequenceState];
    if(window[CHANNEL.name].sequenceState < window[CHANNEL.name].sequenceIndex.length){
        if(window[CHANNEL.name].sequenceList[currKey].active
            && window[CHANNEL.name].sequenceList[currKey].rank <= CLIENT.rank
        ){
            console.log("Xaekai's Script Sequencer: Loading " + currKey);
            window[CHANNEL.name].sequencePrev = currKey;
            window[CHANNEL.name].sequenceState++;
            $.getScript(window[CHANNEL.name].sequenceList[currKey].url, window[CHANNEL.name].sequencerLoader)
        } else {
            window[CHANNEL.name].sequenceState++;
            window[CHANNEL.name].sequencerLoader()
        }
    }
};window[CHANNEL.name].sequencerLoader()

$('head').append("<link rel='stylesheet' href='//googledrive.com/host/0ByK1ansfeYuRRlBweDRkSUZONWc/base.css' />");
$('head').append("<link rel='stylesheet' href='//googledrive.com/host/0ByK1ansfeYuRRlBweDRkSUZONWc/theme.css' />");
$(".navbar-brand").text("South Park");

CountDownTimer('09/14/2016 10:00 PM', 'countdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days + ':';
        document.getElementById(id).innerHTML += hours + ':';
        document.getElementById(id).innerHTML += minutes + ':';
        document.getElementById(id).innerHTML += seconds + '';
    }

    timer = setInterval(showRemaining, 1000);
}
