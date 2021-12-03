/*
 * @Author: pengqiang
 * @Date: 2021-12-01 10:26:25
 * @LastEditors: pengqiang
 * @LastEditTime: 2021-12-03 15:52:32
 * @Description: file content
 */
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/js/[name]-[hash].js`,
        chunkFileNames: `assets/js/[name]-[hash].js`,
        assetFileNames: `assets/[ext]/[name]-[hash].[ext]`
      }
    }
  },
  plugins: [svelte({
    preprocess: sveltePreprocess()
  })],
  resolve: {
    extensions: ['.js', '.svelte', '.scss'],
    alias: [
      // { find: '@', replacement: path.resolve(__dirname, 'src') },
      // { find: '~', replacement: path.resolve(__dirname, 'src', 'lib') }
    ]
  }
})
