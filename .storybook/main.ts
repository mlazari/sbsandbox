import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: async (config, { _configType }) => {
    config = ({
      // Make whatever fine-grained changes you need
      ...config,
      module: {
        ...(config.module || {}),
        rules: [
          ...(config.module.rules || []),
          {
            test: /\.m?[jt]sx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
    });
    // Replace the export-order-loader from @storybook/builder-webpack5 with ./loaders/export-order-loader
    config.module.rules.forEach((rule) => {
      rule?.use?.forEach?.((u) => {
        if (String(u?.loader)?.includes?.('export-order-loader')) {
          u.loader = require.resolve('./loaders/export-order-loader');
        }
      });
    });
    return config;
  },
};
export default config;
