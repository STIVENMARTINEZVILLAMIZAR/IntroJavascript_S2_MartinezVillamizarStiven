

class usuario{
    #password; //propiedad
    constructor(usuario, password){
        this.usuario = usuario;
        this.email = email;
        this.#password = password;
    }
}

class persona{
    /* 
    persona{
        nombre:"";
        edad:""
    }
*/

//Atributos
#nombre; //propiedad privado
#edad; //propiedad privado

//constructor compuesto
constructor(nombre, edad){
    this.#nombre = nombre;
    this.#edad = edad;
}


//constructor vacio
constructor() {}

getNombre(){
    return this.#nombre;

}

setNombre(nombre){
    this.#nombre = nombre;

}
}