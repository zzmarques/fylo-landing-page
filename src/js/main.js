const email = () => {
    const btn = document.querySelector('#btn-email');
    const email =  document.querySelector('input#e-mail');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const verificacao = () => {
        const newSpan = {
            error1: `<span class="erro">Preencha o campo vazio</span>`,
            error2: `<span class="erro">Insira um endereço de e-mail válido</span>`
        };
        
        const span = document.querySelector('span.erro');

        if(span) {
            return
        } 

        if(email.value === '') {
            email.insertAdjacentHTML('afterend', newSpan.error1)
        } else if (!regex.test(email.value)) {
            email.insertAdjacentHTML('afterend',newSpan.error2)
        } else if (regex.test(email.value) && email.value !== '') { 

        }
        
    }

    const sla = () => {
        const span = document.querySelector('span.erro');
        if(span) {
            span.remove()
            
        }
    }

    btn.addEventListener('click', verificacao);

    email.addEventListener('change', sla)

    
}

email();