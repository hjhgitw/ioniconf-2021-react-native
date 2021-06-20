import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from './hooks/useColorScheme';
import { useLoadedAssets } from './hooks/useLoadedAssets';
import Navigation from './navigation';
import { setBreakPoints } from 'react-native-responsive-grid';

setBreakPoints({
  SMALL_Width: 375,
  MEDIUM_Width: 576,
  LARGE_Width: 1023,
  // XLARGE_Width: 1024+
  SMALL_Height: 667,
  MEDIUM_Height: 1023,
  LARGE_Height: 1365,
  // XLARGE_Height: 1366+
})

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
