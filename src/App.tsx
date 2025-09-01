import { useState } from "react";
import "./App.css";
import HeadlineWidget from "./components/HeadlineWidget/HeadlineWidget";
import Controls from "./components/HeadlineWidget/Controls";

function App() {
  const [headline, setHeadline] = useState("Your Awesome Headline 🚀");

  const [settings, setSettings] = useState({
    fontSize: 48,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    gradient: false,
    gradientDirection: "to right",
    gradientColors: ["#ff00ff", "#00ffff"],
  });

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 gap-6">
        <HeadlineWidget text={headline} settings={settings} />
        <Controls
          headline={headline}
          setHeadline={setHeadline}
          settings={settings}
          setSettings={setSettings}
        />
      </div>
    </>
  );
}

export default App;
