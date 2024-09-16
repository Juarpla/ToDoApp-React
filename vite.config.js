import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// base: "https://juarpla.github.io/todapp-react/" for gh-pages branch
export default defineConfig({
  plugins: [react()],
  base: "/dist/",
});
