const input = document.getElementById("input")

function clickEnter() {
  input.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (event.keyCode === 13) {
      document.getElementById("button").click()
    }
  })
}

clickEnter()

function reverseString(str) {
  return str.split("").reverse().join("")
}

function check() {
  const value = input.value
  const reverse = reverseString(value)

  if(value === reverse) {
    alert("P A L I N D R O M E")
  } else {
    alert("Not today!")
  }
}