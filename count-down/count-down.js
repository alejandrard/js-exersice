function tick() {

       var seconds = 60;
       
       var stopDate = new Date(document.getElementById('stop-date').innerHTML).getTime();
       var today = new Date().getTime();

       var timeDiff  = Math.abs(stopDate - today);
       //Get Days left
       var mil_daysLeft = timeDiff /(1000 * 3600 * 24);
       var daysLeft  = Math.floor(mil_daysLeft);
       //Get hours left
       var mil_hoursLeft = (mil_daysLeft - daysLeft) * 24;
       var hoursLeft = Math.floor(mil_hoursLeft);
       //Get minutes left
       var mil_minLeft = (mil_hoursLeft - hoursLeft) * 60;
       var minsLeft  = Math.floor(mil_minLeft);
       //Get seconds left
       var mil_secLeft   = (mil_minLeft - minsLeft) * 60;
       var secLeft   = Math.floor(mil_secLeft);

       //Dispaly
       document.getElementById('countdown-day').innerHTML = daysLeft;
       document.getElementById('countdown-hours').innerHTML = hoursLeft;
       document.getElementById('countdown-mins').innerHTML = minsLeft;
       document.getElementById('countdown-sec').innerHTML = secLeft;

    } 
     
    var countdownTimer = setInterval('tick()', 1000);
    