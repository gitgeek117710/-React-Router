import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const repoName = '-React-Router'; // e.g., 'sublocations-react'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 👈 Important for GitHub Pages
})
