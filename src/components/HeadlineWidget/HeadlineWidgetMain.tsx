import { useState } from "react";
import Controls from "./Controls";
import HeadlineWidget from "./HeadlineWidget";

const HeadlineWidgetMain = () => {
  const [headline, setHeadline] = useState("Creating Headline Widget");

  const [settings, setSettings] = useState({
    fontSize: 48,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    gradient: false,
    gradientDirection: "to right",
    gradientColors: ["#ff00ff", "#00ffff"],
  });
  return (
    <div>
      <div className="min-h-screen bg-gray-500 flex items-center justify-center p-6 gap-6">
        <HeadlineWidget text={headline} settings={settings} />
        <Controls
          headline={headline}
          setHeadline={setHeadline}
          settings={settings}
          setSettings={setSettings}
        />
      </div>
    </div>
  );
};

export default HeadlineWidgetMain;
