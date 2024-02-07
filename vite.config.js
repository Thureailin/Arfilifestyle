import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //     https:{
  //       key:'./arfilifestyle_frontend.key',
  //       cert:'./www_arfilifestyle_com.crt'
  //     }
  // },
  plugins: [react()],
})
