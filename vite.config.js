import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginCdn from 'vite-plugin-cdn';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // VitePluginCdn({
    //   esm: true,
    //   modules: [
    //     {
    //       name: 'aframe',
    //       url: 'https://aframe.io/releases/1.2.0/aframe.min.js'
    //     }
    //   ]
    // }),
    // importToCDN({
    //   modules: [
    //     {
    //       name: 'aframe',
    //       var: 'AFrame',
    //       path: 'https://aframe.io/releases/1.2.0/aframe.min.js'
    //     }
    //   ]
    // })
  ],
  resolve: {
    alias: {
      'aframe': 'https://aframe.io/releases/1.2.0/aframe.min.js'
    }
  },
  transforms: [
    {
      test: ({ path }) => path.endsWith('.html'),
      transform({ code }) {
        return `export default ${JSON.stringify(code)}`
      }
    }
  ]
  // build: {
  //   rollupOptions: {
  //     external: ['aframe'],
  //   }
  // }
})
