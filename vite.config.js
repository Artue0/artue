import { defineConfig } from 'vite';

export default defineConfig({

  // Configure Vite to handle MP4/MOV files
  optimizeDeps: {
    include: ['**/*.mp4', '**/*.mov'],
  },

  build: {
    assetsInlineLimit: '0' // 2kb
  }
});
