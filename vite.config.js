import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000 // Change this value to your desired chunk size warning limit
  }
});