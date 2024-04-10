import react from "@vitejs/plugin-react";
import { PluginOption } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react()] as PluginOption[],
    test: {
        environment: "jsdom",
    },
});
