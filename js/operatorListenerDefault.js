    setInterval(function(){

        document.getElementById("currentThrowNumber").innerHTML = localStorage.getItem("throw_number");

    	if(localStorage.getItem("status") == "open")
    	{
      //       document.getElementById("startNewThrowButton").style.display = "none";
    		// document.getElementById("openTimerButton").style.display = "none";
    		// document.getElementById("lastCallTimerButton").style.display = "none";
	    	// document.getElementById("resetLastCallTimerButton").style.display = "none";
	    	// document.getElementById("backToOpenButton").style.display = "none";


            document.getElementById("resetOpenTimerButton").style.display = "block";


    	}


        
    	if(localStorage.getItem("status") == "openHold")
    	{
      //       document.getElementById("startNewThrowButton").style.display = "none";
    		// document.getElementById("resetOpenTimerButton").style.display = "none";
    		// document.getElementById("lastCallTimerButton").style.display = "none";
	    	// document.getElementById("resetLastCallTimerButton").style.display = "none";
	    	// document.getElementById("backToOpenButton").style.display = "none";
            // hideButtons();

            document.getElementById("openTimerButton").style.display = "block";
    	}

	    // if(localStorage.getItem("isStartCalledOnce") == "false"){
	    //   // document.getElementById("openPauseButton").style.display = "none";
	    //   // document.getElementById("openResumeButton").style.display = "none";
     //        hideButtons();
	    // }

	    if(localStorage.getItem("isStartCalledOnce") == "true" && localStorage.getItem("status") == "open")
        {

	    	if(localStorage.getItem("openPause") == "true"){
                hideButtons();
		      // document.getElementById("openPauseButton").style.display = "none";
		      document.getElementById("openResumeButton").style.display = "block";
	    	}
	    	else
	    	{
                hideButtons();
		        document.getElementById("openPauseButton").style.display = "block";
		      // document.getElementById("openResumeButton").style.display = "none";
	    	}
	    }

        // IF AUTOMATIC MODE IS ON LAST CALL IS DONE WHEN OPEN TIMER HITS ZERO
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



	    //LAST CALL HERE
    	if(localStorage.getItem("status") == "lastcall")
    	{
    		// document.getElementById("openTimerButton").style.display = "none";
    		// document.getElementById("resetOpenTimerButton").style.display = "none";
		    // document.getElementById("openPauseButton").style.display = "none";
		    // document.getElementById("openResumeButton").style.display = "none";
                hideButtons();



    		if(localStorage.getItem("isLastCallCalledOnce") == "false")
    		{

                hideButtons();
    			document.getElementById("lastCallTimerButton").style.display = "block";
	    		// document.getElementById("resetLastCallTimerButton").style.display = "none";
	    		document.getElementById("backToOpenButton").style.display = "block";
    		}
    		else
    		{
    			// document.getElementById("lastCallTimerButton").style.display = "none";
                hideButtons();
	    		document.getElementById("resetLastCallTimerButton").style.display = "block";
	    		document.getElementById("backToOpenButton").style.display = "block";
    		}

    	}

    	if(localStorage.getItem("status") == "lastCallHold")
    	{

            hideButtons();
    		document.getElementById("lastCallTimerButton").style.display = "block";
            document.getElementById("backToOpenButton").style.display = "block";
    		// document.getElementById("resetLastCallTimerButton").style.display = "none";
    	}


	    // if(localStorage.getItem("isLastCallCalledOnce") == "false")
     //    {
	    //   // document.getElementById("lastCallPauseButton").style.display = "none";
	    //   // document.getElementById("lastCallResumeButton").style.display = "none";
     //      hideButtons();
	    // }

	    if(localStorage.getItem("isLastCallCalledOnce") == "true" && localStorage.getItem("status") == "lastcall"){

	    	if(localStorage.getItem("lastCallPause") == "true"){
		      // document.getElementById("lastCallPauseButton").style.display = "none";
              hideButtons();
		      document.getElementById("lastCallResumeButton").style.display = "block";
	    	}
	    	else
	    	{
              hideButtons();
		      document.getElementById("lastCallPauseButton").style.display = "block";
		      // document.getElementById("lastCallResumeButton").style.display = "none";
	    	}
	    }



        //IF LAST CALL COUNTER HITS ZERO


        // IF AUTOMATIC MODE IS ON LAST CALL IS DONE WHEN OPEN TIMER HITS ZERO
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


	    //SHUFFLING HERE
    	if(localStorage.getItem("status") == "toShuffle" || localStorage.getItem("status") == "shuffling")
    	{
            // document.getElementById("backToOpenButton").style.display = "none";
            // document.getElementById("lastCallTimerButton").style.display = "none";
            // document.getElementById("resetLastCallTimerButton").style.display = "none";
            // document.getElementById("lastCallPauseButton").style.display = "none";
            // document.getElementById("lastCallResumeButton").style.display = "none";

            hideButtons();

            document.getElementById("startShuffleButton").style.display = "block";
    		document.getElementById("stopShuffleButton").style.display = "block";
            document.getElementById("backToLastCallButton").style.display = "block";
    	}

    	if(localStorage.getItem("shuffle") == "true" && localStorage.getItem("status") == "shuffling")
    	{
    		// document.getElementById("startShuffleButton").style.display = "none";


            hideButtons();
    		document.getElementById("stopShuffleButton").style.display = "block";
            document.getElementById("declareWinnerButton").style.display = "block";
            document.getElementById("backToLastCallButton").style.display = "block";
    	}


    	if(localStorage.getItem("shuffle") == "false" && localStorage.getItem("status") == "shufflingStop")
    	{

            hideButtons();
    		document.getElementById("startShuffleButton").style.display = "block";
    		// document.getElementById("stopShuffleButton").style.display = "none";
            document.getElementById("declareWinnerButton").style.display = "block";
            document.getElementById("backToLastCallButton").style.display = "block";
    	}


        if(localStorage.getItem("shuffle") == "false" && localStorage.getItem("status") == "declaration")
        {
            // document.getElementById("startShuffleButton").style.display = "none";
            // document.getElementById("stopShuffleButton").style.display = "none";
            // document.getElementById("declareWinnerButton").style.display = "none";
            // document.getElementById("backToLastCallButton").style.display = "none";

            hideButtons();

            document.getElementById("winnerButtonRed").style.display = "block";
            document.getElementById("winnerButtonBlue").style.display = "block";
            document.getElementById("winnerButtonYellow").style.display = "block";
            document.getElementById("winnerButtonCancel").style.display = "block";
        }


        if(localStorage.getItem("status") == "declared")
        {
            // document.getElementById("backToLastCallButton").style.display = "none";
            // document.getElementById("winnerButtonRed").style.display = "none";
            // document.getElementById("winnerButtonBlue").style.display = "none";
            // document.getElementById("winnerButtonYellow").style.display = "none";
            // document.getElementById("winnerButtonCancel").style.display = "none";

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
    }