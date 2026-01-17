import { defineConfig } from "tinacms";

// Tato konfigurace používá Environment Variables pro bezpečnost
// Ujistěte se, že ve Vercelu máte nastaveno TINA_PUBLIC_CLIENT_ID a TINA_TOKEN
const branch = process.env.TINA_BRANCH || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID, // Načte se z Vercelu
  token: process.env.TINA_TOKEN,               // Načte se z Vercelu
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
          {
            type: "string",
            name: "title",
            label: "Nadpis webu",
          },
          {
            type: "string",
            name: "description",
            label: "Popis podniku",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Hlavní obrázek",
          },
        ],
      },
    ],
  },
});
