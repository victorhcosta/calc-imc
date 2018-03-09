import Vue from 'vue'
import {Resultado} from './resultado'

var listaIMC = [];

new Vue({
    el: '#app',
    data: {
        resultado: new Resultado(0, 0)
    },
    methods: {
        calcIMC: function () {
            this.resultado.imc = this.resultado.peso/(this.resultado.altura * this.resultado.altura);
        }
    }
});

//        this.total = this.peso/(this.altura * this.altura);

