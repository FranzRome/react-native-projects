import { Button } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, color } from 'react-native-reanimated';

export default function App() {
  const offset = useSharedValue(0);

  const moveRandom = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  return (
    <>
      <Animated.View style={[{ width: 100, height: 100, backgroundColor: 'black' }, moveRandom]} />
      <Button
        onPress={() => {
          offset.value = withSpring(Math.random());
        }}
        title="Move"
      />
    </>
  );
}