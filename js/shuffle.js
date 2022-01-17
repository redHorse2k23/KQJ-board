    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor()
    {
      let randomColors = [];
       do{
        var computerResponse = getRandomInt(1, 3);

        if(!usedBlocks.includes(computerResponse))
        {

          var blockNumber = "_block"+computerResponse;
          switch (computerResponse) {
            case 1:
              randomColors.push(['#EA0606','K']);
              break;
            case 2:
              randomColors.push(['#061CF3','Q']);
              break;
            case 3:
              randomColors.push(['#F1D806','J']);
              break;
          }
          randomColorAvailable--;
          usedBlocks.push(computerResponse);
        }

      }while(randomColorAvailable > 0)
      return randomColors;
    }
