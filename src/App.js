import { CollectInformation } from "./components/Form/CollectInformation";
import { VisualComponent } from "./components/VisualComponent/VisualComponent";

const App = () => {
  return (
    <div className="h-screen flex justify-between">
      <CollectInformation/>
      <VisualComponent/>
    </div>
  );
};

export default App;
