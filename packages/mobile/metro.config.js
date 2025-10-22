// packages/mobile/metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../../');

const config = getDefaultConfig(projectRoot);

// Treat the mobile folder as the Metro project root
config.projectRoot = projectRoot;

// Only watch 'core' explicitly. Avoid watching 'web' or 'functions'.
config.watchFolders = [path.resolve(workspaceRoot, 'packages/core')];

// Force Metro to resolve React/React Native from the hoisted root 'node_modules'
config.resolver.nodeModulesPaths = [
  path.resolve(workspaceRoot, 'node_modules'),
  path.resolve(projectRoot, 'node_modules'),
];

config.resolver.extraNodeModules = {
  react: path.resolve(workspaceRoot, 'node_modules/react'),
  'react-dom': path.resolve(workspaceRoot, 'node_modules/react-dom'),
  'react-native': path.resolve(workspaceRoot, 'node_modules/react-native'),
};

module.exports = config;
