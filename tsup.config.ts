import { defineConfig } from "tsup";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
	clean: true,
	dts: true,
	entry: ["src/index.ts"],
	format: ["esm", "cjs", "iife"],
	minify: isProduction,
	skipNodeModulesBundle: true,
	sourcemap: true,
	tsconfig: "./tsconfig.json",
	keepNames: true,
	globalName: "PampamilyangDevs",
	esbuildPlugins: [NodeModulesPolyfillPlugin()]
});
