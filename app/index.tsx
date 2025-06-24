import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button, View } from "react-native";

export default function IndexScreen() {
  return (
    <View className="justify-center p-4 flex-1">
      <AppText center size="heading" bold>
        Index Screen
      </AppText>
      <Link href="/second" push asChild>
        <Button title="Push to /second" />
      </Link>
    </View>
  );
}
