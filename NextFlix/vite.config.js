import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import flowbiteReact from "flowbite-react/plugin/vite";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), flowbiteReact()],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@img': path.resolve(__dirname, 'src/assets/img/'),
        '@ui': path.resolve(__dirname, 'src/components/ui'),
        '@features': path.resolve(__dirname, 'src/components/features'),
        '@views': path.resolve(__dirname, 'src/views/'),
        '@styles': path.resolve(__dirname, 'src/assets/styles/'),
        '@auth': path.resolve(__dirname, 'src/components/Auth/'),
        '@services': path.resolve(__dirname, 'src/services/'),
        '@themes': path.resolve(__dirname, 'src/themes/')
    }
  },
})
