  if(localStorage.getItem("lastcallCounter") == null)
  localStorage.setItem("lastcallCounter", 30)
  	 // localStorage.setItem("lastcallCounter", 1)

  if(localStorage.getItem("status") == null)
  	 localStorage.setItem("status", 'openHold')

  if(localStorage.getItem("isLastCallCalledOnce") == null)
  	 localStorage.setItem("isLastCallCalledOnce", "false")

  if(localStorage.getItem("isShuffleCalledOnce") == null)
  	 localStorage.setItem("isShuffleCalledOnce", "false")

  if(localStorage.getItem("isWinnerAnnounced") == null)
  	 localStorage.setItem("isWinnerAnnounced", "false")

  if(localStorage.getItem("isRefreshedOnce") == null)
  	 localStorage.setItem("isRefreshedOnce", "false")

  if(localStorage.getItem("isStartCalledOnce") == null)
  	 localStorage.setItem("isStartCalledOnce", "true")

  if(localStorage.getItem("openPause") == null)
  	 localStorage.setItem("openPause", 'false')
