function startOpenTimer(){

  localStorage.setItem("mode", "automatic");

  localStorage.setItem("lastcallCounter", 30);
  localStorage.setItem("status", 'open');
  localStorage.setItem("isLastCallCalledOnce", "false");
  localStorage.setItem("isShuffleCalledOnce", "false");
  localStorage.setItem("isWinnerAnnounced", "false");
  localStorage.setItem("isRefreshedOnce", "false");
  localStorage.setItem("isStartCalledOnce", "true");
  localStorage.setItem("openPause", 'false');

  var speaking_ms = "00:00:15";
  var speaking_ms_arr = speaking_ms.split(":");
  var speaking_time_min_sec = (+speaking_ms_arr[0]) * 60 * 60 + (+speaking_ms_arr[1]) * 60 + (+speaking_ms_arr[2]);
  var speaking_time_min_sec = parseInt(speaking_time_min_sec) + 1;

  var speaking_value;

  if (localStorage.getItem("openCounter")) {
      if (localStorage.getItem("openCounter") <= 0) {
          speaking_value = speaking_time_min_sec;
      } else {
          speaking_value = localStorage.getItem("openCounter");
      }
  } else {
      speaking_value = speaking_time_min_sec;
  }

  var speaking_counter = function() {
      if (speaking_value <= 0) {
          localStorage.setItem("openCounter", speaking_time_min_sec);
      } else {
          speaking_value = parseInt(speaking_value) - 1;
          localStorage.setItem("openCounter", speaking_value);
      }
      if (speaking_value == 0) {
          localStorage.setItem("openCounter", speaking_value);
          localStorage.setItem("status", "lastcall");
          setTimeout(function() {
              clearInterval(interval);
          }, 1000);
      }

  };

  var interval = setInterval(function() {
      speaking_counter();
  }, 1000);

  var Clock = {
      pause: function() {
              clearInterval(interval);
              interval = null;
              localStorage.setItem("openPause", "true");
          },

          resume: function() {
              if (!interval) interval = setInterval(speaking_counter, 1000);
              localStorage.setItem("openPause", "false");
          }
  };

    document.getElementById('openPauseButton').onclick = Clock.pause;
    document.getElementById('openResumeButton').onclick = Clock.resume;

  }



function resetOpenTimer(){
  localStorage.setItem("lastcallCounter", 30);
  localStorage.setItem("openCounter", 15);


  // localStorage.setItem("lastcallCounter", 30);
  // localStorage.setItem("openCounter", 15);
  localStorage.setItem("status", 'openHold');
  localStorage.setItem("isLastCallCalledOnce", "false");
  localStorage.setItem("isShuffleCalledOnce", "false");
  localStorage.setItem("isWinnerAnnounced", "false");
  localStorage.setItem("isRefreshedOnce", "false");
  localStorage.setItem("isStartCalledOnce", "false");

  document.getElementById("openPauseButton").click();

}


  function startLastCallTimer (){

    localStorage.setItem("status", "lastcall");
    localStorage.setItem("lastCallPause","false");
    localStorage.setItem("isLastCallCalledOnce", "true");
    localStorage.setItem("startCounter", 0);

    var speaking_ms = "00:00:30";
    var speaking_ms_arr = speaking_ms.split(":");
    var speaking_time_min_sec = (+speaking_ms_arr[0]) * 60 * 60 + (+speaking_ms_arr[1]) * 60 + (+speaking_ms_arr[2]);
    var speaking_time_min_sec = parseInt(speaking_time_min_sec) + 1;

    var speaking_value;

    if (localStorage.getItem("lastcallCounter")) {
        if (localStorage.getItem("lastcallCounter") <= 0) {
            speaking_value = speaking_time_min_sec;
        } else {
            speaking_value = localStorage.getItem("lastcallCounter");
        }
    } else {
        speaking_value = speaking_time_min_sec;
    }

    var lastcallCounter = function() {
        if (speaking_value <= 0) {
            localStorage.setItem("lastcallCounter", speaking_time_min_sec);
        } else {
            speaking_value = parseInt(speaking_value) - 1;
            localStorage.setItem("lastcallCounter", speaking_value);
        }
        if (speaking_value == 0) {
            localStorage.setItem("lastcallCounter", speaking_value);


            if(localStorage.getItem("mode") == "automatic")
              localStorage.setItem("status", "shuffling");
            else
              localStorage.setItem("status", "toShuffle");




            setTimeout(function() {
                clearInterval(interval);
            }, 1000);
        }

    };

    var interval = setInterval(function() {
        lastcallCounter();
    }, 1000);

    var Clock = {
        pause: function() {
                clearInterval(interval);
                interval = null;
                localStorage.setItem("lastCallPause", "true");
            },

            resume: function() {
                if (!interval) interval = setInterval(lastcallCounter, 1000);
                localStorage.setItem("lastCallPause", "false");

            }
    };


      document.getElementById('lastCallPauseButton').onclick = Clock.pause;
      document.getElementById('lastCallResumeButton').onclick = Clock.resume;

  }

  function resetLastCallTimer()
  {
    localStorage.setItem("status", "lastCallHold");
    localStorage.setItem("isLastCallCalledOnce", "false");
    localStorage.setItem("lastcallCounter", 30);
    document.getElementById("lastCallPauseButton").click();

  }

  function backToOpen()
  {

    document.getElementById("openPauseButton").click();
    document.getElementById("lastCallPauseButton").click();

    for (let i = 1; i < 37; i++) {
      var blockNumber = "block"+i;
      localStorage.setItem(blockNumber, "white");
    }

    // localStorage.setItem("lastcallCounter", 1);
    // localStorage.setItem("openCounter", 1);


    localStorage.setItem("lastcallCounter", 30);
    localStorage.setItem("openCounter", 15);
    localStorage.setItem("status", 'openHold');
    localStorage.setItem("isLastCallCalledOnce", "false");
    localStorage.setItem("isShuffleCalledOnce", "false");
    localStorage.setItem("isWinnerAnnounced", "false");
    localStorage.setItem("isRefreshedOnce", "false");
    localStorage.setItem("isStartCalledOnce", "false");


  }



  function startShuffleTimer (){

    var speaking_ms = "00:00:10";
    var speaking_ms_arr = speaking_ms.split(":");
    var speaking_time_min_sec = (+speaking_ms_arr[0]) * 60 * 60 + (+speaking_ms_arr[1]) * 60 + (+speaking_ms_arr[2]);
    var speaking_time_min_sec = parseInt(speaking_time_min_sec) + 1;

    var speaking_value;

    if (localStorage.getItem("shuffleDurationCounter")) {
        if (localStorage.getItem("shuffleDurationCounter") <= 0) {
            speaking_value = speaking_time_min_sec;
        } else {
            speaking_value = localStorage.getItem("shuffleDurationCounter");
        }
    } else {
        speaking_value = speaking_time_min_sec;
    }

    var shuffleDurationCounter = function() {
        if (speaking_value <= 0) {
            localStorage.setItem("shuffleDurationCounter", speaking_time_min_sec);
        } else {
            speaking_value = parseInt(speaking_value) - 1;
            localStorage.setItem("shuffleDurationCounter", speaking_value);
        }
        if (speaking_value == 0) {
            localStorage.setItem("status", "declaration");
            localStorage.setItem("shuffleDurationCounter", speaking_value);
            setTimeout(function() {
                clearInterval(interval);
            }, 1000);
        }

    };

    var interval = setInterval(function() {
        shuffleDurationCounter();
    }, 1000);


    var Clock = {
        pause: function() {
                clearInterval(interval);
                interval = null;
                localStorage.setItem("shufflePause", "true");
            },

            resume: function() {
                if (!interval) interval = setInterval(lastcallCounter, 1000);
                localStorage.setItem("shufflePause", "false");

            }
    };


      // document.getElementById('stopShuffleButton').onclick = Clock.pause;
      document.getElementById('shufflePauseButton').onclick = Clock.pause;
      // document.getElementById('shuffleResumeButton').onclick = Clock.resume;


  }



function backToLastCall()
{

    document.getElementById("shufflePauseButton").click();


    localStorage.setItem("status", 'lastcall');
    localStorage.setItem("lastcallCounter", 30);
    localStorage.setItem("openCounter", 15);
    localStorage.setItem("shuffle", "true");
    localStorage.setItem("isLastCallCalledOnce", "false");
    localStorage.setItem("isShuffleCalledOnce", "false");
    localStorage.setItem("isWinnerAnnounced", "false");
    localStorage.setItem("isRefreshedOnce", "false");
    localStorage.setItem("isStartCalledOnce", "false");

}

// function _(el){
//     return document.getElementById(el);
// }
