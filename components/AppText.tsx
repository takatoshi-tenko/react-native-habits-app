import { StyleSheet, Text, type TextProps } from "react-native";

export type AppTextProps = TextProps & {
  center?: boolean;
  size?: "default" | "heading" | "subheading";
  bold?: boolean;
};

export function AppText({
  style,
  center,
  size = "default",
  bold,
  ...rest
}: AppTextProps) {
  return (
    <Text
      style={[
        size === "default" ? styles.default : undefined,
        size === "heading" ? styles.heading : undefined,
        size === "subheading" ? styles.subheading : undefined,
        bold ? styles.bold : undefined,
        center ? styles.center : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  heading: {
    fontSize: 32,
    lineHeight: 40,
  },
  subheading: {
    fontSize: 20,
    lineHeight: 28,
  },
  bold: {
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
});
