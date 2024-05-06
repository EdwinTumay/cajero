class Billete {
    constructor(v, c)
    {
        this.image = new Image();
        this.valor = v;
        this.cantidad = c;
        this.image.src = imagenes[this.valor];
    }
    mostrar(){
        document.body.appendChild(this.image);
    }
}

var imagenes =[];
imagenes["100"] = "b100.png";
imagenes["50"] = "b50.png";
imagenes["20"] = "b20.png";
imagenes["10"] = "b10.png";
imagenes["josh"] = "josh";


function entregarDinero()
{
    var dibujado =[];
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    if(total >= dinero)
    {
        for(bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else 
            {
                papeles = div;
            }
           bi.cantidad = bi.cantidad-papeles;
           for(var i = 0; i < papeles; i++)
           {
               dibujando.push ( new Billete(bi.valor, 1));
           }
           dinero-= (bi.valor * papeles);
        }
    }
    if( dinero == 0)
    {   resultado.innerHTML += "se ha retirado: <br />"; 
        for(var e of dibujado){
        resultado.innerHTML += "<img src=" + e.imagen.scr + "/>"
        }
    
    resultado.innerHTML += "<hr/>";
    contar();
    }
    else
    {
        resultado.innerHTML += "no tengo los billetes para esa suma <hr />";
    }
    }      
    else
    {
     resultado.innerHTML += " soy un cajero pobre y no tengo <hr />";
    }
}
function contar()
{
    total = 0;
    for ( var tot of caja)
    {
        total = total + tot.valor * tot.cantidad;
    }
    console.log(total);
}

var caja = [];
caja.push( new Billete("100", 10) );
caja.push( new Billete("50", 20) );
caja.push( new Billete("20", 50) );
caja.push( new Billete("10", 100) );
contar();

var div = 0;
var papeles =0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

 