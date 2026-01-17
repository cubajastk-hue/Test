import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
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
        ],
      },
    ],
  },
});
