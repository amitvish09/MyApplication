import {Gesture, GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {useSharedValue} from 'react-native-reanimated';

export default function App() {
  const width = useSharedValue(100);
  const tap = Gesture.Tap();
  return (
    <GestureHandlerRootView style={{flex: 1}} gesture={tap}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
    </GestureHandlerRootView>
  );
}
