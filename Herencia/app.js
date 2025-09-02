/*
--Herencia--
permite reutilizar codigo creado a clases hijas
apartot de una clase padre

*/

class animal {
    constructor(nombre) {
        this.nombre = nombre;
        
    }

    sonar() {
        prompt(`${this.nombre} hace un sonido!`);
    }
}

class perro extends animal {
    constructor(ladra){
        super(ladra);
    }

sonar(){
    prompt(`${this.nombre}, cual es el perro que hace sonido!`);

}

}
class gato extends animal {
    constructor(nombre){
        super(nombre);
        this.ronronea=true;
    }

sonar(){
    prompt(`${this.nombre} maulla!`);
    prompt(`el gato roronea: ? ${this.ronronea} ronronea!`);
}
}

const perro1 = new perro("firulais");
perro1.sonar();

const gato1 = new gato("simona");
perro1.sonar();
