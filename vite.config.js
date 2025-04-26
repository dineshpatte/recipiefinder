import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      "68a4-2401-4900-6578-62a2-1c99-49ab-7f19-82f6.ngrok-free.app",
      // You can add more hosts here if needed
    ],
  },
});
// vite.config.js
