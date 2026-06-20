import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Set to your repository name if deploying to https://<USERNAME>.github.io/<REPO>/
});
