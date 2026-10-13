---
name: diseno-epn
description: Define de forma estricta los lineamientos de diseño, paleta de colores oficial del escudo de la EPN, mapeo de componentes y restricciones (lo que está prohibido) para interfaces móviles en React Native y Expo. Usar para aplicar identidad visual institucional rigurosa.
---

# SKILL de Diseño e Identidad Visual 

Esta SKILL establece las normas obligatorias de diseño, la asignación exacta de colores por componente y las restricciones visuales para mantener la formalidad y el respeto a la identidad corporativa de la EPN.

---

## 1. Mapeo Estricto de Colores por Componente

Cada color oficial extraído del escudo institucional debe aplicarse únicamente en los elementos definidos a continuación:

* **Azul Institucional EPN (`#002D62` o `#003366`)**
  * **Dónde usarlo:**
    * Barras de navegación superiores (`headerStyle`).
    * Barras de pestañas activas (`tabBarActiveTintColor`) y sus iconos cuando estén seleccionados.
    * Bordes y textos de botones principales de acción primaria (ej. botón "Choose a photo").
    * Títulos principales, encabezados (`h1`, `h2`) y el logotipo o nombre de la aplicación en pantallas informativas.
* **Rojo Institucional EPN (`#D32F2F`)**
  * **Dónde usarlo:**
    * Botones o estados de alerta crítica (ej. cancelar, limpiar filtros o eliminar fotos).
    * Pequeños acentos visuales de llamada a la atención (Badges o indicadores de notificaciones).
* **Dorado / Amarillo Institucional (`#FBC02D` o `#FFB300`)**
  * **Dónde usarlo:**
    * Detalles ornamentales sutiles (simulando los engranajes del escudo).
    * Bordes activos de selección puntual (como el borde del botón flotante para añadir stickers). *Evitar saturar la pantalla con este color.*
* **Blanco Puro (`#FFFFFF`) y Grises Claros (`#F8F9FA` / `#F0F2F5`)**
  * **Dónde usarlo:**
    * **Blanco (`#FFFFFF`):** Fondo principal de todas las pantallas, tarjetas de contenido y el interior de los botones primarios para dar contraste limpio.
    * **Gris Claro (`#F8F9FA`):** Fondo de la barra inferior de pestañas (`tabBarStyle`) y contenedores secundarios o separadores sutiles.
    * **Texto secundario (`#333333`):** Cuerpo de textos, párrafos descriptivos y subtítulos para garantizar legibilidad.

---

## 2. Jerarquía Tipográfica

* **Títulos (Headings):** Fuente limpia, peso negrita (`Bold`), color Azul EPN (`#002D62`).
* **Cuerpo (Body):** Fuente sans-serif estándar, peso regular, color gris oscuro neutro (`#333333`). Nunca usar texto gris claro sobre fondo blanco para evitar problemas de accesibilidad.

---

## 3. Lo que está PROHIBIDO (Antipatrones de Diseño EPN)

Para preservar la imagen institucional de la EPN, se prohíben estrictamente las siguientes prácticas en el diseño de la interfaz:

* **NO usar colores chillones o neones** (como verdes limas, rosas fucsias o morados brillantes) que rompan con la sobriedad institucional.
* **NO abusar del color rojo o dorado** como fondos de pantalla completos; estos son estrictamente para acentos, bordes o detalles específicos.
* **NO dejar fondos oscuros por defecto** (como negros absolutos o grises oscuros tipo `#25292e` del tutorial original), a menos que se trate de un modo oscuro explícitamente configurado y aprobado bajo la paleta corporativa. La interfaz EPN debe ser predominantemente limpia, clara y formal (fondos blancos/grises claros).
* **NO mezclar tipografías informales o infantiles** (letras cursivas exageradas o estilos de historieta) en los títulos o textos de la app.
* **NO omitir el contraste:** Todo texto sobre un botón o fondo azul EPN debe ser obligatoriamente blanco (`#FFFFFF`) para asegurar la correcta lectura institucional.