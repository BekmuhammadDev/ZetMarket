import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/components/ui/index.tsx"),
      "@charts": path.resolve(__dirname, "./src/components/charts/index.tsx"),
      "@utils": path.resolve(__dirname, "./src/utils/index.ts"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@router": path.resolve(__dirname, "./src/router/index.tsx"),
      "@pages": path.resolve(__dirname, "./src/pages/index.tsx"),
      "@layouts": path.resolve(__dirname, "src/app/index.tsx"),
      "@ttype": path.resolve(__dirname, "./src/types/index.ts"),
      "@constants": path.resolve(__dirname, "./src/constants/index.data"),
      "@store": path.resolve(__dirname, "./src/stores/store.ts"),
      "@stores": path.resolve(__dirname, "./src/stores/index.ts"),

      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
      "@assets": path.resolve(__dirname, "./src/assets/*"),
      "@theme": path.resolve(__dirname, "./src/theme/index.ts*"),

    } as AliasOptions
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
});