import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { buildBabelLoader } from "./babel/buildBabelLoader";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const cssLoaderModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash]:base64:8",
      },
    },
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgrLoader = {
    test: /\.svg$/i,
    use: ["@svgr/webpack"],
  };

  const SCSSLoader = {
    // Порядок постановки лоадеров имеет значение
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  // const TSLoader = {
  //   // if !Typescript use babel-loader
  //   test: /\.tsx?$/,
  //   use: "ts-loader",
  //   exclude: /node_modules/,
  // };

  const babelLoader = buildBabelLoader(options);

  const TSLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  return [SCSSLoader /*TSLoader*/, , assetLoader, svgrLoader, babelLoader];
}
