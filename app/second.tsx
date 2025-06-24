import { AppText } from "@/components/AppText";
import { View } from "react-native";

export default function SecondScreen() {
  return (
    <View className="justify-center p-4 flex-1">
      <AppText center size="heading" bold>
        Second Screen
      </AppText>
    </View>
  );
}
