# Validator APP :credit_card:

## Índice :page_facing_up:

- [1. Resumen del proyecto](#1-resumen-del-proyecto)
- [2. Usuarios](#2-usuarios)
- [3. Diseño](#3-diseño)
- [4. Tecnologias](#4-tecnologias-empleadas)
- [5. Diseño final](#5-diseño-final)
- [6. Plan de acción](#6-plan-de-accion)

---

## 1. Resumen del proyecto :pencil:

Validator APP es una aplicación que permite verificar si los números de tarjeta de crédito o débito dados son válidos usando el Algoritmo de Luhn.

## 2. Usuarios :woman: :man:

Los usuarios de Validator APP son empresas que aceptan como método de pago tarjetas de crédito y necesitan tener seguridad que la tarjeta de su cliente es válida.

- [ ] **Historias de usuario**

> **Historia 1**  
*Yo como usuario quiero:* Obtener información sobre cómo usar la APP para realizar el proceso rápidamente.

> **Historia 2**  
*Yo como usuario quiero:* Ingresar datos de la tarjeta para obtener información sobre su validez.

> **Historia 3**  
*Yo como usuario quiero:* Obtener un mensaje con la información detallada para conocer el estatus de la tarjeta.

## 3. Diseño :sparkles:
### Uso de la aplicación  
- Se presenta una ventana con un input para ingresar los números de tarjeta de Crédito o Débito a validar.
- Presiona el botón de verificar y si los datos ingresados son correctos se mostrará una nueva ventana con los detalles de la operación.

### Prototipo de baja fidelidad
![sitemap](https://i.postimg.cc/N0vXRDWR/sitemap.png)

### Prototipo en Figma
![diseño final](https://i.postimg.cc/vmnpNYqp/Frame-1.png)


## 4. Tecnologías empleadas :hammer:

- [ ] [HTML:](https://developer.mozilla.org/es/docs/Web/HTML) Siguiendo las reglas del HTML semántico se estructuró con un `header` que contiene el logo y barra de navegación, el `main` para englobar el contenido principal y en el `footer` se detalla los derechos de autor y barra de navegación.

- [ ] [CSS:](https://developer.mozilla.org/es/docs/Web/CSS) Usada para definir el estilo visual del proyecto.

- [ ] [Javascript:](https://developer.mozilla.org/es/docs/Web/JavaScript) Para dar la funcionalidad a la aplicación en donde se crearon las siguientes funciones:

> - `function startApp()` Para verificar cuando el documento está cargado.
> - `function validateForm()` Para validar que los caracteres introducidos por el usuario sean exclusivamente números.
> - `function disabledBtn()` Para desabilitar el botón y que el usuario instroduzca los datos correctamente.
> - `isValid()` Para aplicar el algoritmo luhn en el número de tarjeta introducido por el usuario.
> - `maskify()` Para ocultar los números de la tarjeta a exepción de los últimos 4 números.
> - `franchiseCard()` Para mostrar a qué franquicia pertenece la tarjeta.


- [ ]  [Jest:](https://jestjs.io/docs/es-ES/getting-started) Framework para realizar los testing unitarios.

- [ ]  [Eslint:](https://jestjs.io/docs/es-ES/getting-started) Herramienta de linting para analizar el codigo en busca de errores.

## 5.Testing :wrench:
Se realizaron pruebas de validación con tarjetas de crédito y débito de diferentes marcas que permitieron conocer la validez o no de las mismas así como la franquicia a la cual pertenecen de la siguiente manera:

En el código siguiente verificamos un número de tarjeta válido el cual debería retornar <span style='color:blue; font-family:Cambria' >true</span>.
~~~
    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe(true);
    });
~~~
En un caso contrario al anterior, un número de tarjeta como el que sigue a continuación debería retornar <span style='color:red; font-family:Cambria'>false</span>.
~~~
    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid("1234567890")).toBe(false);
    });
~~~
Para verificar el tipo de marca de tarjeta de crédito realizamos la siguiente comprobación para diveros tipos de marca:
~~~
    it('debería retornar "Visa" para "4557880555458284"', () => {
      expect(validator.franchiseCard('4557880555458284')).toBe('Visa');
    });
~~~

## 6. Autores :information_desk_person:
- Aura Margarita Zambrano Méndez :information_desk_person:  
Cohorte 15 de Lima en Laboratoria :hearts:
---
