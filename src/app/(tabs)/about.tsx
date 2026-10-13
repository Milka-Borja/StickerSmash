import { Text, View, StyleSheet } from 'react-native';
import colors from '@/constants/colors';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.epnBlue,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
