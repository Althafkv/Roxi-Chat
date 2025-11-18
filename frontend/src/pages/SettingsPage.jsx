import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  const navigate = useNavigate();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-base-200 hover:bg-base-200/70 transition-colors text-sm w-max cursor-pointer btn btn-sm"
        >
          <ArrowLeft className="size-4" />
          Back
        </button>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
              `}
              onClick={() => setTheme(t)}
            >
              <div
                className="relative h-8 w-full rounded-md overflow-hidden cursor-pointer"
                data-theme={t}
              ></div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
};
export default SettingsPage;
