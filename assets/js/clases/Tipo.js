import Animales from "./Animales.js";

export default class Tipos extends Animales{
    constructor(nombre, edad, comentario, imagen, sonido){
        super(nombre, edad, comentario, imagen, sonido);
    }
}