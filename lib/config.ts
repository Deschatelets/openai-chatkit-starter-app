import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    icon: "circle-question",
    label: "Comment ça fonctionne?",
    prompt: "Comment ça fonctionne?",
  },
];

export const PLACEHOLDER_INPUT = "Aa";

export const GREETING = "Comment puis-je t'aider aujourd'hui?";

export const COMPOSER_TOOLS = [
  {
    id: "search_docs",
    label: "Search docs",
    shortLabel: "Docs",
    placeholderOverride: "Search documentation",
    icon: "book-open" as const,
    pinned: false,
  },
];

export const ATTACHMENT_CONFIG = {
  enabled: true,
  maxCount: 5,
  maxSize: 10485760, // 10MB
};

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  radius: "round",
  density: "normal",
  color: {
    grayscale: {
      hue: 0,
      tint: 3,
      shade: 1,
    },
    accent: {
      primary: "#ff9981",
      level: 1,
    },
    surface: {
      background: theme === "dark" ? "#1a1a1a" : "#f9f3f1",
      foreground: theme === "dark" ? "#2a2a2a" : "#ffffff",
    },
  },
  typography: {
    baseSize: 15,
    fontFamily:
      '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
    fontSources: [
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
        weight: 400,
        style: "normal",
        display: "swap",
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Medium.woff2",
        weight: 500,
        style: "normal",
        display: "swap",
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-SemiBold.woff2",
        weight: 600,
        style: "normal",
        display: "swap",
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Bold.woff2",
        weight: 700,
        style: "normal",
        display: "swap",
      },
    ],
  },
});