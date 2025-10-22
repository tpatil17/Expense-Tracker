// packages/mobile/app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';

// The layout wraps all routes; think of it as your root navigator
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="explore" options={{ title: 'Explore' }} />
    </Stack>
  );
}
