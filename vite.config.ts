import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tosspayments-api-spec',
  plugins: [
    react(),
    tsconfigPaths(),
    createHtmlPlugin({
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        keepClosingSlash: true,
        collapseWhitespace: true,
        noNewlinesBeforeTagClose: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
      pages: [
        {
          filename: 'index.html',
          template: 'index.html',
        },
        {
          filename: '404.html',
          template: 'public/404.html',
        },
      ],
    }),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.indexOf('node_modules') != -1) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
  },
})
