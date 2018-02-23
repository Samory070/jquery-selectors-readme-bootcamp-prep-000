// declare your functions here...

$('div')
$('img')
$('.pics')
$('#baby-ninja')
$('ul li')
$('div img:first-child')
$("img[alt='the beatles making faces']")
$('div:last')

function paragraphSelector() {
  const p = $('p')
  console.log(p)
}

function lastImageSelector() {
  const img = $('img:last')
  console.log(img)
}

function ninjaBabySelector() {
  const baby = $('#baby-ninja')
  console.log(baby)
}

function divSelector() {
  const div = $('.pics')
  console.log(div)
}

function firstListItem(){
  const item = $('ul#pic-list li:first-child')
  console.log(item)
}
