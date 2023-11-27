export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export type AppMode = "production" | "development";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: AppMode;
  analyzer?: boolean;
  platform: BuildPlatform;
}
