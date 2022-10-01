function gerarSenha() {
    let comprimento = 0, letrasMaisculas = 0, letrasMinusculas = 0, numeros = 0, simbolos = 0, flagForca = 0;
    let sorteio = '', senha = ''; 
    
    if (document.getElementById("comprimentoSenha").value != 0) { 
        comprimento = document.getElementById("comprimentoSenha").value; 
    }
    if (document.getElementById("maiuscula").checked) { 
        letrasMaisculas = 1; 
        sorteio += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        flagForca ++
    }
    if (document.getElementById("minuscula").checked) { 
        letrasMinusculas = 1; 
        sorteio += 'abcdefghijklmnopqrstuvwxyz'
        flagForca ++
    }
    if (document.getElementById("numero").checked) { 
        numeros = 1; 
        sorteio += '0123456789'
        flagForca ++
    }
    if (document.getElementById("simbolo").checked) { 
        simbolos = 1; 
        sorteio += '!@#$%&*'
        flagForca ++
    }

    if(comprimento > 0){
        if (letrasMaisculas != 0 || letrasMinusculas != 0 || numeros != 0 || simbolos != 0) {
            
            for (let i = 0; i < comprimento; i++) {
                senha += sorteio.charAt(Math.floor(Math.random() * sorteio.length));
            }

            document.getElementById("senha").value = senha
            document.getElementById("btnMostrar").innerHTML = `<img src="img/lock.svg">`
            //document.getElementById("senha").type = "password"
            flagMostraSenha = 0
            
            //MOSTRA FORÇA DA SENHA
            if (comprimento < 8) {
                document.getElementById("forca").innerHTML = `Força da Senha: Fraca`
                document.getElementById("forca").style.color = 'red'
            } else if(comprimento >= 8 && comprimento < 12){
                if (flagForca == 1) {
                    document.getElementById("forca").innerHTML = `Força da Senha: Fraca`
                    document.getElementById("forca").style.color = 'red'
                } else if (flagForca == 2) {
                    document.getElementById("forca").innerHTML = `Força da Senha: Média`
                    document.getElementById("forca").style.color = 'orange'
                } else if (flagForca > 2) {
                    document.getElementById("forca").innerHTML = `Força da Senha: Boa`
                    document.getElementById("forca").style.color = 'green'
                }
            } else if (comprimento >= 12) {
                if (flagForca == 1) {
                    document.getElementById("forca").innerHTML = `Força da Senha: Média`
                    document.getElementById("forca").style.color = 'orange'
                } else if (flagForca == 2) {
                    document.getElementById("forca").innerHTML = `Força da Senha: Boa`
                    document.getElementById("forca").style.color = 'green'
                } else if (flagForca > 2) {
                    document.getElementById("forca").innerHTML = `Força da Senha: Ótima`
                    document.getElementById("forca").style.color = 'blue'
                }
            }

        } else {
            elemento = document.getElementsByClassName("opcao");
            
            for (let i = 1; i < elemento.length; i++) {
                elemento[i].style.borderBottom = "2px solid red"
            
            }
            setTimeout(mudaCorCheck, 3000)
            senha = 'selecione uma característica'
            document.getElementById("senha").type = "text"
            document.getElementById("forca").innerHTML = ''
        }

    } else {
        elemento = document.getElementById("divComprimento");
        elemento.style.borderBottom = "2px solid red"
        setTimeout(mudaCorInput, 3000)
        senha = 'Selecione o comprimento'
        document.getElementById("senha").type = "text"
        document.getElementById("forca").innerHTML = ''
    }

    document.getElementById("senha").value = senha
}

function mudaCorInput() {
    elemento = document.getElementById('divComprimento');
    elemento.style.borderBottom = "none"
}

function mudaCorCheck() {
        elemento = document.getElementsByClassName('opcao');
        
        for (let i = 1; i < elemento.length; i++) {
            elemento[i].style.borderBottom = "none"
        }
    
}

let flagMostraSenha = 0
function mostraSenha() {
    if (flagMostraSenha == 0) {
        document.getElementById("btnMostrar").innerHTML = `<img src="img/unlock.svg">`
        document.getElementById("senha").type = "text"
        flagMostraSenha = 1
    } else {
        document.getElementById("btnMostrar").innerHTML = `<img src="img/lock.svg">`
        document.getElementById("senha").type = "password"
        flagMostraSenha = 0
    }
}


function copiarSenha() {
    let senha = document.getElementById("senha")
    senha.select();
    senha.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

