    setInterval(function(){

        document.getElementById("currentThrowNumber").innerHTML = localStorage.getItem("throw_number");
        document.getElementById("shuffleHeaderText").innerHTML = localStorage.getItem("shuffleDurationCounter");

    	if(localStorage.getItem("status") == "open")
    	{

            hideButtons();
           
            document.getElementById("resetOpenTimerButton").style.display = "block";

            if(localStorage.getItem("isStartCalledOnce") == "true")
            {
                if(localStorage.getItem("openPause") == "true"){
                    document.getElementById("openResumeButton").style.display = "block";
                }
                else
                {
                    document.getElementById("openPauseButton").style.display = "block";
                }
            }
    	}


    	if(localStorage.getItem("status") == "openHold")
    	{
            hideButtons();
            document.getElementById("openTimerButton").style.display = "block";
    	}



        //// IF AUTOMATIC MODE IS ON LAST CALL IS DONE WHEN OPEN TIMER HITS ZERO
        if(localStorage.getItem("status") == "lastcall" && localStorage.getItem("openCounter") == 0  && localStorage.getItem("mode") == "automatic")
        {
            if(localStorage.getItem("isLastCallCalledOnce") == "false")
            {
                document.getElementById("lastCallTimerButton").click();
                localStorage.setItem("isLastCallCalledOnce", "true");
            }
            else
            {

            }
        }



	    ////LAST CALL HERE
    	if(localStorage.getItem("status") == "lastcall")
    	{

            hideButtons();

    		if(localStorage.getItem("isLastCallCalledOnce") == "false")
    		{
    			document.getElementById("lastCallTimerButton").style.display = "block";
	    		document.getElementById("backToOpenButton").style.display = "block";
    		}
    		else
    		{
	    		document.getElementById("resetLastCallTimerButton").style.display = "block";
	    		document.getElementById("backToOpenButton").style.display = "block";

                if(localStorage.getItem("lastCallPause") == "true")
                  document.getElementById("lastCallResumeButton").style.display = "block";
                else
                  document.getElementById("lastCallPauseButton").style.display = "block";

    		}

    	}

    	if(localStorage.getItem("status") == "lastCallHold")
    	{

            hideButtons();
    		document.getElementById("lastCallTimerButton").style.display = "block";
            document.getElementById("backToOpenButton").style.display = "block";
    	}



         ////IF LAST CALL COUNTER HITS ZERO
         //// IF AUTOMATIC MODE IS ON LAST CALL IS DONE WHEN OPEN TIMER HITS ZERO
        if(localStorage.getItem("status") == "shuffling" && localStorage.getItem("lastcallCounter") == 0  && localStorage.getItem("mode") == "automatic")
        {
            if(localStorage.getItem("isShuffleCalledOnce") == "false")
            {
                document.getElementById("startShuffleButton").click();
                localStorage.setItem("isShuffleCalledOnce", "true");
            }
            else
            {

            }
        }

        ////SHUFFLING HERE
        if(localStorage.getItem("status") == "toShuffle")
        {
            hideButtons();
            document.getElementById("startShuffleButton").style.display = "block";
            document.getElementById("declareWinnerButton").style.display = "block";
            document.getElementById("backToLastCallButton").style.display = "block";
        }


        if(localStorage.getItem("status") == "shuffling")
        {
            hideButtons();
            document.getElementById("shuffleTextContainer").style.display = "inline";
            document.getElementById("stopShuffleButton").style.display = "block";
            document.getElementById("declareWinnerButton").style.display = "block";
            document.getElementById("backToLastCallButton").style.display = "block";
        }


    	if(localStorage.getItem("status") == "shufflingStop")
    	{
            hideButtons();
    		document.getElementById("startShuffleButton").style.display = "block";
            document.getElementById("declareWinnerButton").style.display = "block";
            document.getElementById("backToLastCallButton").style.display = "block";
    	}



        //DECLARATION HERE
        if(localStorage.getItem("status") == "declaration")
        {
            hideButtons();
            document.getElementById("winnerButtonRed").style.display = "block";
            document.getElementById("winnerButtonBlue").style.display = "block";
            document.getElementById("winnerButtonYellow").style.display = "block";
            document.getElementById("winnerButtonCancel").style.display = "block";
        }


        if(localStorage.getItem("status") == "declared")
        {
            hideButtons();
            document.getElementById("startNewThrowButton").style.display = "block";
        }


    },  200);




    function hideButtons ()
    {
         document.getElementById("openTimerButton").style.display = "none";
         document.getElementById("resetOpenTimerButton").style.display = "none";
         document.getElementById("openPauseButton").style.display = "none";
         document.getElementById("openResumeButton").style.display  = "none";
         document.getElementById("lastCallTimerButton").style.display = "none";
         document.getElementById("resetLastCallTimerButton").style.display = "none";
         document.getElementById("backToOpenButton").style.display = "none";
         document.getElementById("lastCallPauseButton").style.display = "none";
         document.getElementById("lastCallResumeButton").style.display = "none";
         document.getElementById("startShuffleButton").style.display = "none";
         document.getElementById("stopShuffleButton").style.display = "none";
         document.getElementById("declareWinnerButton").style.display = "none";
         document.getElementById("backToLastCallButton").style.display = "none";
         document.getElementById("shufflePauseButton").style.display = "none";
         document.getElementById("winnerButtonRed").style.display = "none";
         document.getElementById("winnerButtonBlue").style.display = "none";
         document.getElementById("winnerButtonYellow").style.display = "none";
         document.getElementById("winnerButtonCancel").style.display = "none";
         document.getElementById("startNewThrowButton").style.display = "none";
         document.getElementById("shuffleTextContainer").style.display = "none";

    }