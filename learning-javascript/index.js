function unitConvert(valNum) {
    //   conversion of meters to feet | feet to meters
     document.getElementById("outputMeters1").innerHTML = Math.round(valNum * 3.281 *100) /100; 
   
        
      document.getElementById("outputMeters3").innerHTML = Math.round(valNum / 3.281 * 100) / 100; 
      
     
  
      
    //   conversion of litere to gallons | gallons to liters
     document.getElementById("outputLiters1").innerHTML = Math.round(valNum / 3.785 * 100) / 100;
      document.getElementById("outputLiters3").innerHTML = Math.round(valNum * 3.785 * 100) / 100;
      
    //   conversion of kilos to pounds | pounds to kilos
       document.getElementById("outputKilos1").innerHTML = Math.round(valNum * 2.205 * 100) / 100;
      document.getElementById("outputKilos3").innerHTML = Math.round(valNum / 2.205 * 100) / 100;
      
        
 }