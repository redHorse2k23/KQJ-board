    var usedBlocks = [];

    var shuffleSpeed = localStorage.getItem("shuffleSpeed");
    var speed = shuffleSpeed> 0 && shuffleSpeed!=null ? shuffleSpeed  : 500;


    var _interval = setInterval(function(){

        if(localStorage.getItem("initiateNewThrow") == "true")
        {
          window.location.reload();
          localStorage.setItem("initiateNewThrow", "false");
        }
        else{}

      	_("openTimerText").innerHTML = localStorage.getItem("openCounter");
        _("lastCallTimerText").innerHTML = localStorage.getItem("lastcallCounter");
        _("winnerText").innerHTML = localStorage.getItem("winner");

      	if(localStorage.getItem("status") == "open")
      	{
      		_("openCounterDiv").style.display = "block";
      		_("lastCallCounterDiv").style.display = "none";
      	}


        if(localStorage.getItem("status") == "openHold")
        {
            _("openCounterDiv").style.display = "block";
            _("lastCallCounterDiv").style.display = "none";
        }



      	if(localStorage.getItem("status") == "lastcall")
      	{
      		_("openCounterDiv").style.display = "none";
      		_("lastCallCounterDiv").style.display = "block";
        }

        if(localStorage.lastcallCounter > 10){
          for (let i = 1; i < 4; i++) {
              var blockNumber = "_block"+i;
            _(blockNumber).style.background = "#c7c7c7";
            _(blockNumber).getElementsByClassName('contents')[0].innerHTML = "";
          }
            _("lastCallHeaderText").style.color = "white";
            _("lastCallHeaderText").parentElement.style.background = "";
            _("lastCallHeaderText").parentElement.style.boxShadow = "";
            _("lastCallHeaderText").parentElement.style.border = "";
            _("lastCallTimerText").style.color = "rgb(239 29 19 / 86%)";
        }


        // if(localStorage.getItem("lastcallCounter") > 10)
        // {
        //      for (let i = 1; i < 4; i++) {
        //       var blockNumber = "_block"+i;
        //       _(blockNumber).style.background = "#c7c7c7";
        //       _(blockNumber).getElementsByClassName('contents')[0].innerHTML = "";
        //     }
        // }


        if(localStorage.getItem("lastcallCounter") <= 10)
        {
          lct = localStorage.lastcallCounter;

          if(lct % 2){
            _("lastCallHeaderText").style.color = "white";
            _("lastCallHeaderText").parentElement.style.background = "rgb(221 68 68 / 98%)";
          }else{
            _("lastCallHeaderText").style.color = "rgb(221 68 68 / 98%)";
            _("lastCallHeaderText").parentElement.style.background = "white";
          }

          _("lastCallHeaderText").parentElement.style.boxShadow = "3px 4px 11px 0px #0000008c";
          _("lastCallHeaderText").parentElement.style.border = "5px solid white";
          _("lastCallTimerText").style.color = "white";

            loopDefaultBlocks();

        }


        if(localStorage.getItem("lastcallCounter") == 0)
        {
            _("openCounterDiv").style.display = "none";
            _("lastCallCounterDiv").style.display = "none";
            _("lastCallHeaderText").style.color = "";
        }


        if(localStorage.getItem("shuffleDurationCounter") == 0)
        {
            localStorage.setItem("shuffle","false");
        }
        else
        {}

        if(localStorage.getItem("status") == "toShuffle")
        {
            loopDefaultBlocks();
        }

        //This function is called when shuffling
        if (localStorage.getItem("status") == "shuffling"){

            if(localStorage.getItem("changeInShuffle") == "true")
            {
              localStorage.setItem("changeInShuffle","false");
              // window.location.reload();
            }
            else
            {
              if(localStorage.getItem("shuffle") == "true")
              {
                randomColorAvailable=3;
                usedBlocks = [];
                _color = randomColor();
                localStorage.setItem("_color",JSON.stringify(_color));
                _("_block1").style.background = _color[0][0];
                _("_block1").getElementsByClassName('contents')[0].innerHTML = _color[0][1];
                _("_block2").style.background = _color[1][0];
                _("_block2").getElementsByClassName('contents')[0].innerHTML = _color[1][1];
                _("_block3").style.background = _color[2][0];
                _("_block3").getElementsByClassName('contents')[0].innerHTML = _color[2][1];
              }
            }
        }

        if(localStorage.getItem("status") == "declaration" || localStorage.getItem("status") == "shufflingStop")
          {
            c = JSON.parse(localStorage.getItem("_color"));
            _("_block1").style.background = c[0][0];
            _("_block1").getElementsByClassName('contents')[0].innerHTML = c[0][1];
            _("_block2").style.background = c[1][0];
            _("_block2").getElementsByClassName('contents')[0].innerHTML = c[1][1];
            _("_block3").style.background = c[2][0];
            _("_block3").getElementsByClassName('contents')[0].innerHTML = c[2][1];
          }

        if(localStorage.getItem("status") == "declared")
        {

          if(localStorage.getItem("winner") == "red")
          {
            winnerBg("#EA0606");
            _("declareWinBanner").style.background = "rgb(100 9 0 / 80%)";
            _("declareWinnerDiv").style.display = "block";
            _("declareCancelDiv").style.display = "none";
          }

          if(localStorage.getItem("winner") == "blue")
          {
            winnerBg("#061CF3");
            _("declareWinBanner").style.background = "rgb(2 0 36 / 80%)";
            _("declareWinnerDiv").style.display = "block";
            _("declareCancelDiv").style.display = "none";
          }

          if(localStorage.getItem("winner") == "yellow")
          {
            winnerBg("#F1D806");
            _("declareWinBanner").style.background = "rgb(213 98 0 / 82%)";
            _("declareWinnerDiv").style.display = "block";
            _("declareCancelDiv").style.display = "none";
          }

          if(localStorage.getItem("winner") == "cancel")
          {
            winnerBg("gray");
            _("declareWinBanner").style.background = "rgb(64 62 60 / 82%)";
            document.getElementById("declareWinnerDiv").style.display = "none";
            document.getElementById("declareCancelDiv").style.display = "block";
          }

        }
    },  200);

    function winnerBg(color){
      block = document.getElementsByClassName("tb_block");
      for (let i = 0; i < block.length; i++){
          block[i].getElementsByClassName('contents')[0].innerHTML = "";
          block[i].style.background = color;
      }
      return;
    }

    function loopDefaultBlocks()
    {
          _("_block1").style.background = "#EA0606";
          _("_block1").getElementsByClassName('contents')[0].innerHTML = "";
          _("_block2").style.background = "#061CF3";
          _("_block2").getElementsByClassName('contents')[0].innerHTML = "";
          _("_block3").style.background = "#F1D806";
          _("_block3").getElementsByClassName('contents')[0].innerHTML = "";
          return;
    }

    function _(el){
        return document.getElementById(el);
    }
