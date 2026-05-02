// routes.ts
import { Route } from "next";

export const routes = {

  landing: {
    root: "/" as Route,
    about: "/about" as Route,
    contact: "/contact" as Route,
    blogs: "/blogs" as Route,
    services: "/services" as Route
  },

  error: "/error" as Route,

};