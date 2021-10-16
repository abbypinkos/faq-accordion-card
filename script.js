document.querySelectorAll('.faq__text-question').forEach(button => {
    button.addEventListener('click', () => {
        const faq__answer = button.nextElementSibling

        button.classList.toggle('faq__text-question--active')

        if (button.classList.contains('faq__text-question--active')) {
            faq__answer.classList.toggle('faq__text-answer--active')
        } else {
            faq__answer.classList.toggle('faq__text-answer--active')
        }
    })

    const block = document.querySelector('.faq__image-desktop-block')

    button.addEventListener('mouseover', () => {
        block.classList.remove('faq__image-desktop-block--inactive')
        block.classList.add('faq__image-desktop-block--active')
    })

    button.addEventListener('mouseout', () => {
        block.classList.remove('faq__image-desktop-block--active')
        block.classList.add('faq__image-desktop-block--inactive')
    })
})