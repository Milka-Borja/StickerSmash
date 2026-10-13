# StickerSmash

Aplicación móvil para elegir una foto, añadirle stickers y guardar el resultado. Está desarrollada con Expo, React Native y TypeScript.

## Requisitos

- Node.js
- npm

## Iniciar el proyecto

Instala las dependencias:

```bash
npm install
```

Inicia Expo:

```bash
npx expo start
```

Abre la aplicación con Expo Go, un emulador o un dispositivo conectado. Para iniciar directamente en web, ejecuta:

```bash
npm run web
```

## Uso

1. Selecciona una foto o continúa con la imagen de ejemplo.
2. Añade un sticker y arrástralo para ubicarlo. Tócalo dos veces para cambiar su tamaño.
3. Guarda la imagen o reinicia la edición.

## Estructura

- `src/app/`: pantallas y navegación.
- `src/components/`: componentes reutilizables de la interfaz.
- `src/constants/`: valores compartidos, incluidos los colores de la aplicación.
- `assets/`: imágenes y otros recursos.
