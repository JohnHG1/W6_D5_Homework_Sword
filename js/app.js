document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form')
    form.addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function (event){
  event.preventDefault()

  const swordDirectory = document.querySelector('#sword_directory')
  const newSword = document.createElement('li')

  const newType = document.createElement('h3');
  const newPeriod = document.createElement('h3');
  const newSchool = document.createElement('h3');
  const newSmith = document.createElement('h2');

  newType.textContent = `${event.target.type.value}`
  newPeriod.textContent = `${event.target.period.value}`
  newSchool.textContent = `${event.target.school.value}`
  newSmith.textContent = `${event.target.smith.value}`

  newSword.appendChild(newType);
  newSword.appendChild(newPeriod);
  newSword.appendChild(newSchool);
  newSword.appendChild(newSmith);

  swordDirectory.appendChild(newSword);
  this.reset()
};
