document.querySelectorAll('.faq__question').forEach(button => {
    button.addEventListener('click', () => {
        const faq__answer = button.nextElementSibling

        button.classList.toggle('faq__question--active')

        if (button.classList.contains('faq__question--active')) {
            faq__answer.classList.toggle('faq__answer--active')
        } else {
            faq__answer.classList.toggle('faq__answer--active')
        }
    })
})