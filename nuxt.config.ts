import { resolve } from "node:path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@hebilicious/authjs-nuxt"],
  runtimeConfig: {
    authJs: {
      secret: "secret1234567890", // You can generate one with `openssl rand -base64 32`
    },
    public: {
      authJs: {
        baseUrl: "http://localhost:3000", // The base URL is used for the Origin Check in prod only
        verifyClientOnEveryRequest: true, // whether to hit the /auth/session endpoint on every client request
        guestRedirectTo: "/login",
      },
    },
  },
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie"),
    jose: resolve(__dirname, "node_modules/jose/dist/browser/index.js"),
    "@panva/hkdf": resolve(
      __dirname,
      "node_modules/@panva/hkdf/dist/web/index.js"
    ),
  },
});
