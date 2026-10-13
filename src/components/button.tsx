import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '@/constants/colors';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer, styles.primaryButtonContainer]}>
        <Pressable style={[styles.button, styles.primaryButton]} onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color={colors.epnBlue} style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, styles.primaryButtonLabel]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={[styles.button, styles.secondaryButton]} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  primaryButtonContainer: {
    borderWidth: 2,
    borderColor: colors.epnBlue,
    borderRadius: 18,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: colors.white,
    borderRadius: 12,
  },
  secondaryButton: {
    backgroundColor: colors.epnBlue,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 16,
  },
  primaryButtonLabel: {
    color: colors.epnBlue,
  },
});
