import { useState } from "react";
import { CollectInformation } from "./components/Form/CollectInformation";
import { VisualComponent } from "./components/VisualComponent/VisualComponent";

const App = () => {
  const [formData, setFormData] = useState({
    cant_personas: { cant: "yo" },
    color_tema: { color: "cieloColor" },
    logo_space: { src: undefined },
    name_web_space: { name: undefined },
    privacity_space: { privacity: "privado" },
    url_web_space: { url: undefined },
  });

  return (
    <div className="h-screen flex justify-between flex-wrap">
      <CollectInformation setFormData={setFormData} />
      <VisualComponent formData={formData} />
    </div>
  );
};

export default App;
