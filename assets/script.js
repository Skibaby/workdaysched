// Function to save the schedule for a specific hour
function saveSchedule(hourId) {
    const hourInput = document.getElementById(hourId);
    const schedule = hourInput.value;
    
    // Save the schedule in localStorage or send it to the server
    localStorage.setItem(hourId, schedule);
  }
  
  // Function to load the saved schedule for each hour
  function loadSchedule() {
    for (let i = 9; i <= 17; i++) {
      const hourId = `hour-${i}`;
      const hourInput = document.getElementById(hourId);
      const savedSchedule = localStorage.getItem(hourId);
      
      if (savedSchedule) {
        hourInput.value = savedSchedule;
      }
    }
  }
  


  //current hour in 24-hour time?
  $('.time-block').each(function(){
    var id = $(this)
  })
  // Call the loadSchedule function when the page is loaded
  window.addEventListener('load', loadSchedule);
  