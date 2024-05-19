import { defineConfig } from 'vite';

export default defineConfig({

  optimizeDeps: {
    include: ['**/*.mp4', '**/*.mov'],
  },

  build: {
    assetsInlineLimit: '0',
    rollupOptions: {
      preserveEntrySignatures: false
      // input: {
      //   main: 'main.js',
      //   script: 'script.js'
      // }
    }
  }
});