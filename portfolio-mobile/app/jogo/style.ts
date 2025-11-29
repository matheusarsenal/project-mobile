import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  voltarBtn: {
    marginBottom: 24,
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 2,
  },

  voltarTexto: {
    fontSize: 18,
    color: "#2563eb",
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: -30,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
    maxWidth: 320,
  },

  box: {
    backgroundColor: "#e2e8f0",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 14,
    maxWidth: 340,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },

  boxText: {
    fontSize: 15,
    color: "#334155",
    textAlign: "center",
    lineHeight: 20,
  },
});
