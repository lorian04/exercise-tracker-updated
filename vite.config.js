import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: '/exercise-tracker-updated/',
  plugins: [react()]
});

