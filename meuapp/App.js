import { StyleSheet, Text, View } from 'react-native';
import Prime from './src/Telas/Prime';

export default function App() {
  return (
    <>
      <View>
        <Prime />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
