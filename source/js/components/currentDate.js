let currentTime = new Date();
let currentHour = currentTime.getHours();
let date = new Date();

if (currentHour >= 0 && currentHour < 18) {
  date.setDate(date.getDate());
} else {
  date.setDate(date.getDate() + 1);
}

let year = date.getFullYear();
let month = getUkrainianMonth(date.getMonth());
let day = date.getDate();

let formattedDate = day + " " + month;

document.querySelectorAll('.date').forEach(function(item){
  item.innerText = formattedDate
})

function getUkrainianMonth(monthIndex) {
  let months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня"
  ];

  return months[monthIndex];
}
