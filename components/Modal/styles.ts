import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0.5,0.5,0.5,0.5)",
    padding: 16,
  },
  content: {
    minWidth: 260,
    margin: 8,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  close: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  footer: {
    marginTop: 8,
    gap: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default styles;