function dobrar(numero){

    dobro = numero + numero
    return(dobro)
}

function elevar(num1, num2){
    total = num1 ** num2
    return(total)
}

function reordenar(num1, num2){
    f = num2 % 10 
    g = parseInt(num1 / 10)
    g *= 10

    final = g + f
    return(final)
}

function avaliar(lista, letra){
    if(letra == "a"){
        soma = 0
        for(i in lista){
            soma += lista[i]
        }
        var media = soma/3
    }else if(letra == "p"){
        for(i in lista){
            c2 = lista[0] * 5
            t2 = lista[1] * 3
            d2 = lista[2] * 2

            var media = (c2 + t2 + d2)/10
        }
    }

    return(media)
}

function calcular(primeiro, segundo, opera){
    if(opera == "-"){
        valor = primeiro - segundo
        return("a subtração entre "+(primeiro)+" e "+(segundo)+" é igual a "+(valor))
    }else if(opera == "+"){
        valor = primeiro + segundo
        return("a soma entre "+(primeiro)+" e "+(segundo)+" é igual a "+(valor))
    }else if(opera == "/"){
        valor = primeiro / segundo
        return("a divisão entre "+(primeiro)+" e "+(segundo)+" é igual a "+(valor))
    }else if(opera == "*"){
        valor = primeiro * segundo
        return("a multiplicação entre "+(primeiro)+" e "+(segundo)+" é igual a "+(valor))
    }

    
}

function natal(dias){
    if(dias < 30){
        alert("Oba, quase ferias!")
    }else if(dias == 30){
        alert("falta muito para o natal, mas está quase chegando as ferias")
    }else if(dias > 30){
        alert("Ainda falta muito para o natal")
    }
}

function ultima(){
    alert("Ufa, esse foi o ultimo exercicio")
}

function trote(){
    alert("fui trolado")
}

function contarnumeros(num){
    return(num.length)
}

function reverter(num){
    inverter = num.split('').reverse().join('')
    return(inverter)
}

function jogar(){
    let numero = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
    return(numero)
}

function data(num){
    separar = num.split('/')

     for(i in separar){
         if(separar[1] == "01"){
            separar[1] = "Janeiro"
         }else if(separar[1] == "02"){
            separar[1] = "Fevereiro"
         }else if(separar[1] == "03"){
            separar[1] = "Março"
         }else if(separar[1] == "04"){
            separar[1] = "Abril"
         }else if(separar[1] == "05"){
            separar[1] = "Maio"
         }else if(separar[1] == "06"){
            separar[1] = "Junho"
         }else if(separar[1] == "07"){
            separar[1] = "Julho"
         }else if(separar[1] == "08"){
            separar[1] = "Agosto"
         }else if(separar[1] == "09"){
            separar[1] = "Setembro"
         }else if(separar[1] == "10"){
            separar[1] = "Outubro"
         }else if(separar[1] == "11"){
            separar[1] = "Novembro"
         }else if(separar[1] == "12"){
            separar[1] = "Desembro"
         }
     }
     

    return((separar[0])+" de "+(separar[1]+" de "+(separar[2])))
}

function anagrama(palavra){
    
    separar = palavra.split('')
    nova = []
    
    for(i in separar){
        num = palavra.length
        tira = (Math.floor(Math.random() * ((num) - 0 + 1)) + 0)
        nova.push(separar[tira])
        separar.splice(separar.indexOf(tira), -1);
    }

    return(nova.join(''))

}

function bhaskara(a, b, c) {
    var discriminante = (b * b) - (4 * a * c);

    var raizDiscriminante = Math.sqrt(discriminante);

    var bhas1 = ((-b) + raizDiscriminante) / (2 * a);
    var bhas2 = ((-b) - raizDiscriminante) / (2 * a);

    return("os valores são: "+(bhas1)+" e "+(bhas2))
}

function pitagoras(cat1, cat2) {
    var pri = cat1 * cat1
    var seg = cat2 * cat2

    var hip = Math.sqrt(pri + seg)

    return("a hipotenusa é igual a "+(hip))
}