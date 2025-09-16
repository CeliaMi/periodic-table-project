# Collaborative Periodic Table Project


Bienvenidas al **Proyecto Colaborativo de la Tabla Periódica** 🌈🔬

Este repositorio es el punto de partida para un viaje muy especial: usar la **tabla periódica de los elementos** como excusa para hablar... de todo.  
Porque sí, aunque parezca solo una lista de símbolos y números, la tabla periódica **permite hablar de ciencia, historia, arte, salud, medioambiente, tecnología... ¡y mucho más!**

---

## ¿En qué consiste este proyecto?

Cada grupo de alumnas elegirá un **elemento químico** y creará un **repositorio propio**, donde desarrollará una web compuesta por **5 páginas**.

No es necesario seguir un enfoque estrictamente científico. La idea es explorar el elemento desde múltiples ángulos:

- 🧪 Su uso en la vida cotidiana  
- 🎨 Su presencia en el arte o el diseño  
- 🌍 Su impacto en el medioambiente  
- ⚛️ Curiosidades o datos históricos  
- 🧬 Su papel en el cuerpo humano...

¡El tema es tan amplio como ustedes quieran hacerlo!

---

## Estructura del proyecto 

Cada repositorio deberá contener al menos:

- Una **portada introductoria** del elemento  
- **4 páginas adicionales** que lo exploren desde diferentes perspectivas  
- **Diseño y estilo libres**  
- **Creatividad muy bienvenida** 🙌

---

## ¿Cómo participar?

1. Crea un repositorio nuevo con el nombre de tu elemento (por ejemplo: `carbono-project`)  
2. Diseña tu sitio con 5 páginas sobre el elemento  
3. Comparte el enlace del repositorio aquí, en este espacio colaborativo  
4. Explora los trabajos de tus compañeras, ¡y aprende de cada uno!

---

Este proyecto busca no solo aprender sobre química, sino también **conectar saberes**, **estimular la creatividad** y **trabajar en equipo**.


## Tecnologías y Requisitos Técnicos

Para desarrollar el proyecto, usaremos tecnologías web básicas:

- **HTML** – para estructurar el contenido (texto, imágenes, enlaces, etc.)  
- **CSS** – para diseñar y dar estilo a las páginas (colores, tipografías, disposición)  
- **JavaScript**  – para añadir interactividad (animaciones, botones, efectos, etc.)

## Botón para volver a la tabla periódica

Es impresdincibe que todos los proyectos tengan alojado en la parte superior izquierda un botón para poder volver a la tabla y continuar explorando el resto de proyectos

```html
<head>
    <!-- Cargar Font Awesome para los íconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>
        <a href="https://celiami.github.io/periodic-table-project/#table-section" class="home-button" title="Volver a la tabla periódica">
            <i class="fas fa-house"></i>
        </a>
</body>
```
```css
/* Home button styles */
.home-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    margin-left: 1rem;
    background-color: #FF4700;
    color: #ffffff;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.home-button i {
    font-size: 1rem;
}

.home-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.2);
    background-color: #e24000;
}

/* Mobile tweaks: keep size tappable */
@media screen and (max-width: 768px) {
    .home-button {
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }
    .home-button i {
        font-size: 1.1rem;
    }
}
```

### Recursos visuales y sonoros

- Las **imágenes, sonidos y vídeos** utilizados deben ser **libres de derechos**.  
- Podeís usar bancos como [Unsplash](https://unsplash.com), [Pixabay](https://pixabay.com) o [Freesound](https://freesound.org) para recursos gratuitos y libres.

### Publicación del proyecto

- El resultado final debe estar **subido a GitHub** y publicado mediante **GitHub Pages**.  
- Aseguraros de que el sitio esté accesible desde una URL pública para poder compartirlo con el resto del grupo y añadirlo más tarde a este repositorio

---


        
> Porque al final, todo lo que nos rodea está hecho de elementos...  
> ...y cada uno tiene su historia que contar.
