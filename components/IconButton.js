import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.iconButtonContainer}> 

      <Ionicons name={icon} size={24} color={color} />
      </View>
    </Pressable>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  iconButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
  },
});
