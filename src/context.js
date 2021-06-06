import { createContext } from "react";

const MyContext = createContext({
  formData: {
    cant_personas: { cant: "yo" },
    color_tema: { color: "cieloColor" },
    logo_space: { src: undefined },
    name_web_space: { name: undefined },
    privacity_space: { privacity: "privado" },
    url_web_space: { url: undefined },
  },
});

export default MyContext;
