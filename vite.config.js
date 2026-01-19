import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Definimos la carpeta donde está tu index.html como la "raíz" del proyecto para Vite
  root: 'public/view/html', 
  base: '/',
  build: {
    // Le decimos que guarde el resultado en una carpeta 'dist' en la raíz real del proyecto
    outDir: resolve(__dirname, 'dist'),
    // Limpia la carpeta dist antes de cada build
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/view/html/index.html'),
      },
    },
  },
  // Si tus assets (imágenes, css) están en otra carpeta, podrías necesitar esto:
  publicDir: resolve(__dirname, 'public'), 
});