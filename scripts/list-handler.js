const $selectorContainers = document.getElementsByClassName('selector-container')
const $selectors = document.getElementsByClassName('selector-item')

for (const selectorContainer of $selectorContainers) {
  selectorContainer.addEventListener('click', function (e) {
    for (const selector of $selectors) {
      selector.classList.remove('active')
    }
    const $infoBoxes = selectorContainer.getElementsByClassName('info-container')
    e.target.closest('.selector-item').classList.add('active')
    const course = e.target.closest('.selector-item').dataset.course
    for (const box of $infoBoxes) {
      box.classList.remove('show')
      box.classList.add('hidden')
    }
    const infoBox = document.querySelector(`.info-container[data-course="${course}"]`)
    infoBox.classList.remove('hidden')
    infoBox.classList.add('show')
  })
}