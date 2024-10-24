function updateDateTime() {
  const today = new Date();
  const days = today.getDate();
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  console.log(today);
  console.log(days);
  console.log(minutes);
  
  
  const dateUserInterface = document.querySelectorAll('.timer_block h3')[0];
  const dateUserInterface2 = document.querySelectorAll('.timer_block h3')[1];
  const dateUserInterface3 = document.querySelectorAll('.timer_block h3')[2];
  const dateUserInterface4 = document.querySelectorAll('.timer_block h3')[3];
  const dateUserInterface5 = document.querySelectorAll('.timer_block h3')[4];
  const dateUserInterface6 = document.querySelectorAll('.timer_block h3')[5];
  console.log(dateUserInterface);
  dateUserInterface.innerHTML = `${days}`
  dateUserInterface2.innerHTML = `${hours}`
  dateUserInterface3.innerHTML = `${minutes}`
  dateUserInterface4.innerHTML = `${days}`
  dateUserInterface5.innerHTML = `${hours}`
  dateUserInterface6.innerHTML = `${minutes}`
}


updateDateTime();

setInterval(updateDateTime, 1000);
