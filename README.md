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
*Yo como usuario quiero:* Obtener información sobre cómo usar la APP.

> **Historia 2**  
*Yo como usuario quiero:* Ingresar dato de la tarjeta a validar.

> **Historia 3**  
*Yo como usuario quiero:* Obtener mensaje con la información detallada.

## 3. Diseño :sparkles:

### Prototipo de baja fidelidad

![Sitemap] (./sitemap.png)

### Prototipo en Figma

![Diseño-final] (./images/Group1.png)

## 4. Tecnologías empleadas :hammer:

- [ ] [HTML:](https://developer.mozilla.org/es/docs/Web/HTML) Siguiendo las reglas del HTML semántico se estructuró con un `header` que contiene el logo y barra de navegación, el `main` para englobar el contenido principal y en el `footer` se detalla los derechos de autor y barra de navegación.

- [ ] [CSS:](https://developer.mozilla.org/es/docs/Web/CSS) Usada para definir el estilo visual del proyecto.

- [ ] [Javascript:](https://developer.mozilla.org/es/docs/Web/JavaScript) Para dar la funcionalidad a la aplicación en donde se crearon las siguientes funciones:

> - `function startApp()` Para verificar cuando el documento está cargado.
> - `function validateForm()` Para validar que los caracteres introducidos por el usuario sean exclusivamente números.
> - `function disabledBtn()` Para desabilitar el botón y que el usuario instroduzca los datos correctamente.
> - `isValid()` Para aplicar el algoritmo luhn en el número de tarjeta introducido por el usuario.
> - `maskify()` Para ocultar los números de la tarjeta a exepción de los últimos 4 números.

- [ ]  [Jest:](https://jestjs.io/docs/es-ES/getting-started) Framework para realizar los testing unitarios.

- [ ]  [Eslint:](https://jestjs.io/docs/es-ES/getting-started) Herramienta de linting para analizar el codigo en busca de errores.

## 4.Testing :wrench:


## 5. Autores
- Aura Margarita Zambrano Méndez :information_desk_person:  
Cohorte 15 de Lima en Laboratoria :hearts:
---
