import type { IControlProps } from "../types/controls.types";

export default function Controls({
  headline,
  setHeadline,
  settings,
  setSettings,
}: IControlProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-xl space-y-4">
      {/* Headline Text */}
      <div>
        <label className="block text-sm font-medium">Headline Text</label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="mt-1 w-full border rounded p-2"
        />
      </div>

      {/* Font Size */}
      <div>
        <label className="block text-sm font-medium">
          Font Size ({settings.fontSize}px)
        </label>
        <input
          type="range"
          min="16"
          max="96"
          value={settings.fontSize}
          onChange={(e) =>
            setSettings({ ...settings, fontSize: +e.target.value })
          }
          className="w-full"
        />
      </div>

      {/* Gradient Toggle */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={settings.gradient}
          onChange={(e) =>
            setSettings({ ...settings, gradient: e.target.checked })
          }
        />
        <span className="text-sm">Enable Gradient</span>
      </div>

      {settings.gradient && (
        <div className="flex flex-col gap-2">
          <label className="text-sm">Gradient Colors</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={settings.gradientColors[0]}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  gradientColors: [e.target.value, settings.gradientColors[1]],
                })
              }
            />
            <input
              type="color"
              value={settings.gradientColors[1]}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  gradientColors: [settings.gradientColors[0], e.target.value],
                })
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
