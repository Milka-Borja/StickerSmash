import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import colors from '@/constants/colors';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'danger';
};

export default function IconButton({ icon, label, onPress, variant = 'primary' }: Props) {
  const color = variant === 'danger' ? colors.epnRed : colors.epnBlue;

  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={color} />
      <Text style={[styles.iconButtonLabel, { color }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    marginTop: 12,
    fontWeight: '500',
  },
});
