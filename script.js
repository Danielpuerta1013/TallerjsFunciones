var bandera=true
while (bandera) {
    console.log("menu taller")
    console.log("1. calcular salario")
    console.log("2. numeros pares")
    console.log("3. calculadora")
    console.log("4. pedir datos")
    console.log("5. tabla multiplicar")
    console.log("6. calcular area, perimetro, area y perimetro")
    console.log("7. salir")
    var opcionMenu=Number(prompt("ingrese la opcion deseada"))
    if (opcionMenu===1) {
        console.log("bienvenido a la calculadora de salario")
        let valorHora=Number(prompt("ingrese el valor de la hora"))
        let cantidadHoras=Number(prompt("ingrese la cantidad de horas trabajadas"))
        let resultado=calcularSalario(valorHora,cantidadHoras)
        console.log("su salario es de: "+resultado)
    } else if(opcionMenu===2) {
        let m=Number(prompt("ingrese el numero 1 "))
        let n=Number(prompt("ingrese el numero 2"))
        mostrarPares(n,m)

    } else if(opcionMenu===3){
        let bandera2=true
        while (bandera2) {
            console.log("1. suma")
            console.log("2. resta")
            console.log("3. multiplicacion")
            console.log("4. division")
            console.log("5. salir")
            var opcionMenu2=Number(prompt("ingrese la opcion deseada"))
            if (opcionMenu2===1) {
                let numero1=Number(prompt("ingrese el primer numero"))
                let numero2=Number(prompt("ingrese el segundo numero"))
                let resultado=suma(numero1,numero2)
                console.log("el resultado es: "+resultado)
            }else if (opcionMenu2===2) {
                let numero1=Number(prompt("ingrese el primer numero"))
                let numero2=Number(prompt("ingrese el segundo numero"))
                let resultado=resta(numero1,numero2)
                console.log("el resultado es: "+resultado)
            }else if (opcionMenu2===3) {
                let numero1=Number(prompt("ingrese el primer numero"))
                let numero2=Number(prompt("ingrese el segundo numero"))
                let resultado=multiplicacion(numero1,numero2)
                console.log("el resultado es: "+resultado)
            }else if (opcionMenu2===4) {
                let numero1=Number(prompt("ingrese el primer numero"))
                let numero2=Number(prompt("ingrese el segundo numero"))
                let resultado=division(numero1,numero2)
                console.log("el resultado es: "+resultado)
            } else if (opcionMenu2===5) {
                console.log("Volviendo al menu anterior")
                bandera2=false
            } else{
                console.log("Opcion incorrecta")
            }      

            
        }


    } else if (opcionMenu===4){
        var nombre=pedirNombre()
        var apellido=pedirApellido()
        var edad=pedirEdad()
        var cargo=pedirCargo()
        concatedora(edad,nombre,apellido,cargo)

    } else if(opcionMenu===5){
        var x=Number(prompt("ingrese el numero que quiera ver la tabla"))
        tablaMultiplicar(x)
    } else if(opcionMenu===6){
        bandera3=true
        var base=Number(prompt("ingrese el valor de la base"))
        var altura=Number(prompt("ingrese el valor de la altura"))

        while (bandera3) {
            console.log("1.area")
            console.log("2.perimetro")
            console.log("3.area y perimetro")
            var opcionMenu3=
        }

    }else if(opcionMenu===7){
        console.log("Hasta luego")
        bandera=false     


    }else{
        console.log("opcion incorrecta")
        
    }
}
function calcularSalario(cantidadHoras,valorHora) {
    return (cantidadHoras*valorHora)
}
function mostrarPares(n,m) {
    if (n>m) {
        for (let i = m; i <=n; i++) {
            if (i%2===0) {
                console.log(i)
            }
            
        }
    }else if(m>n){
        for (let i = n; i <=m; i++) {
            if (i%2===0) {
                console.log(i)
            }
            
        }

    }else{
        console.log("numeros iguales")
    }
}

function suma(x,y) {
    let resultado=x+y
    return resultado
    
}
function resta (x,y) {
    let resultado=x-y
    return resultado
    
}

function multiplicacion (x,y) {
    let resultado=x*y
    return resultado
    
}
function division (numero1,numero2) {
    if (numero2===0) {
        console.log("el numero 2 no puede ser 0")
    }else{
        return (numero1/numero2)
    }
    
}
function pedirNombre(){
    nombre=prompt("ingrese su nombre")
    return nombre
}
function pedirCargo(){
    cargo=prompt("ingrese su cargo")
    return cargo
}
function pedirEdad(){
     edad=prompt("ingrese su edad")
    return edad
}
function pedirApellido(){
    apellido=prompt("ingrese su apellido")
    return apellido
}
function concatedora(edad,nombre,apellido,cargo){
    console.log("sus datos son: ")
    console.log("nombre: "+nombre)
    console.log("apellido: "+apellido)
    console.log("edad: "+edad)
    console.log("cargo: "+cargo)

}
function tablaMultiplicar(x) {
    for (let index = 1; index <= 10; index++) {
        console.log(x+"x"+index+"= "+(x*index))
        
    }
}
function AreaTriangulo(base,altura) {
    var resultado=(base*altura)/2
}
function perimetroTriangulo(base,altura) {
    hipotenusa=Math.sqrt(base**2 + altura**2);
}
function AreaCuadrado(params) {
    
}
function perimetroCuadrado(params) {
    
}