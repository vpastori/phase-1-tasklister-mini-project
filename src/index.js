document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('input[type="text"]');
    handleInput(input.value);
  })
});

function handleInput(input){
  let p = document.createElement('p')
  p.textContent = input
  document.querySelector('#tasks').appendChild(p)
}