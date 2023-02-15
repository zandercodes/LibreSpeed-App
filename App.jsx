import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppReady] = useState(false);

  useEffect(() => {
    setAppReady(true);
  }, []);

  const onLayoutRoot = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider
      onLayout={onLayoutRoot}
    >
      <View />
    </SafeAreaProvider>
  );
}
