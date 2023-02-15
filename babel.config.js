/*
 * babel.config.js
 *
 * Created by Julian Zander on 2023/02/15
 * Copyright © 2023 ZanderCodes
 */
module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
