/* global $, moment */


function convertDateToFromNow(index, text) {
  return moment(text).fromNow()
}

$(function () {
  var postDates = $('.post-date')

  postDates.text(convertDateToFromNow)

  postDates.hover(function handlerIn(event) {
    $(this).text(event.currentTarget.dataset.postDate)
  }, function handlerOut() {
    $(this).text(convertDateToFromNow)
  })
})
