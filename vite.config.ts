import {sentryVitePlugin} from "@sentry/vite-plugin";
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        UnoCSS(),
        // svgLoader(),
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // 指定symbolId格式
            symbolId: 'icon-[name]',

            svgoOptions: {
                plugins: [
                    {
                        name: "removeAttrs",
                        params: {
                            attrs: "fill"
                        }
                    }
                ]
            },
        }),
        sentryVitePlugin({
            org: "coderlzw",
            project: "javascript-vue"
        })],
    build: {
        target: 'esnext',
        sourcemap: true
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    server: {
        host: '0.0.0.0'
    }
})
