


const button = document.querySelector('button');


button.addEventListener('click', () => {
    
    /*const id = this.getAttribute('data-id');*/
    const id = button.getAttribute('data-id');

    /*LLamar a un servicio para actualizar si me gusta */
    // toggleLike(id) //por ejemplo

    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        button.innerText = 'Me gusta';
    }else {
        button.classList.add('liked');
        button.innerText = 'Quitar me gusta';
    }
});