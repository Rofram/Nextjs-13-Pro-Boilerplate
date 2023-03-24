import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  webpackFinal: async config => {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test
      if (!test) return false
      return test.test('.svg');
    }) as { [key: string]: any }
    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  },
  docs: {
    autodocs: true
  }
};

export default config;