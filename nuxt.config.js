export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "auth0-test",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["normalize.css", "@/assets/main.css"],
  /*
   ** Modules
   */
  modules: [
    // axios is required by @nuxtjs/auth
    "@nuxtjs/axios",
    // https://auth.nuxtjs.org
    "@nuxtjs/auth",
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/auth/login",
            method: "post",
            propertyName: "token",
          },
          logout: { url: "/api/auth/logout", method: "post" },
          user: false,
        },
        // tokenRequired: true,
        tokenType: "Bearer",
        // globalToken: true,
        // autoFetchUser: true
      },
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID,
      },
    },
    redirect: {
      login: "/", // redirect user when not connected
      callback: "/auth/signed-in",
    },
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/auth/login", method: "post", propertyName: "token" },
          logout: { url: "/auth/logout", method: "post" },
          user: false,
        },
        // tokenRequired: true,
        tokenType: "Bearer",
        // globalToken: true,
        // autoFetchUser: true
      },
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID,
      },
    },
    redirect: {
      login: "/", // redirect user when not connected
      callback: "/auth/signed-in",
    },
  },
  build: {
    // For stormkit.io
    publicPath: process.env.PUBLIC_PATH,
  },
};
