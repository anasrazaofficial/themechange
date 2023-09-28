const buttons = document.querySelectorAll('#button')
buttons.forEach(button => {
    document.addEventListener("click", (e) => {
        if (e.target.className === 'gray') {
            document.querySelector('body').style.backgroundColor = 'gray'
        } else if (e.target.className === 'yellow') {
            document.querySelector('body').style.backgroundColor = 'yellow'
        } else if (e.target.className === 'green') {
            document.querySelector('body').style.backgroundColor = 'green'
        } else if (e.target.className === 'blue') {
            document.querySelector('body').style.backgroundColor = 'blue'
        }
    })
})