export class Resultado{
    constructor(peso, altura){
        this.peso = peso;
        this.altura = altura;

        if( this.altura === 0 || this.peso === 0){
            this.imc = 0
        } else {
            this.imc = peso/(altura * altura);
        }
    }
}
