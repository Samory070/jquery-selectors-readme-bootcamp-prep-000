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
  const p = $('div .pics')
  return (p)
}

function lastImageSelector() {
  const img = $('img:last')
  return img
}

function ninjaBabySelector() {
  const baby = $('#baby-ninja')
  return baby
}

function divSelector() {
  const div = $('div')
  return div
}
