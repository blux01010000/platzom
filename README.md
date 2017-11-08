# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de JavaScript](https;//platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online.

## Descripción del idioma

- Si la palabra termina en "ar", se le quitan esas dos letras
- Si la palabra inicia con "z", se le añade "pe" al final
- Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión del medio
- Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") //Program
platzom("Zorro")) //Zorrope
platzom("Zarpar")) //Zarppe
platzom("Abecedario")) //Abece-dario
platzom("sometemos")) //SoMeTeMoS
```

## Licencia

[MIT](https://opensource.org/licenses/MIT)