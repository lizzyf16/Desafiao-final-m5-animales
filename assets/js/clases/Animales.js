export default class Animal{
    #nombre;
    #edad;
    #imagen;
    #comentario;
    #sonido;

    constructor(nombre, edad, comentario, imagen, sonido){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#imagen = imagen;
        this.#comentario = comentario;
        this.#sonido = sonido;
    }

    //métodos getter
    get nombre(){
        return this.#nombre;
    }
    get edad(){
        return this.#edad;
    }
    get img(){
        return this.#imagen;
    }
    get comentario(){
        return this.#comentario;
    }
    get sonido(){
        return this.#sonido;
    }

    set comentario(nuevoComentario){
        this.#comentario = nuevoComentario;
        return this.#comentario;
    }
}