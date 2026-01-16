import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID, // Získáš později na tina.io
  token: process.env.TINA_TOKEN,    // Získáš později na tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Domovská stránka",
        path: "content",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Nadpis webu" },
          { type: "string", name: "description", label: "Popis podniku", ui: { component: "textarea" } },
          { type: "image", name: "image", label: "Hlavní obrázek" },
        ],
      },
    ],
  },

});
