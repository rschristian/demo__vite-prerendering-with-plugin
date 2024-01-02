import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { PrerenderPlugin } from './prerender.js'



// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        PrerenderPlugin({
            renderTarget: '#app',
            prerenderScript: resolve('./src/main.js')
        })
    ],
})
