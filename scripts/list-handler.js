// Gather all selector containers
const $selectorContainers = document.getElementsByClassName('selector-container')
const $selectors = document.getElementsByClassName('selector-item')

// Add an event listener to each selector container
for (const selectorContainer of $selectorContainers) {
  selectorContainer.addEventListener('click', function (e) {
    for (const selector of $selectors) {
      selector.classList.remove('active')
    }
    // find the selector item that was clicked on
    e.target.closest('.selector-item').classList.add('active')

    // get the course data for the selector
    const course = e.target.closest('.selector-item').dataset.course
    const $infoBoxes = document.getElementsByClassName('info-container')

    //set all boxes to invisible
    for (let box of $infoBoxes) {
      box.classList.remove('show')
      box.classList.add('hidden')
    }

    // find the box that corresponds to the data type
    const infoBox = document.querySelector(`.info-container[data-course="${course}"]`)
    infoBox.classList.remove('hidden')
    infoBox.classList.add('show')
  })
}