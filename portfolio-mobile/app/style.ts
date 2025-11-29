import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  Home: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    gap: 16,
    backgroundColor: "#fff",
  },

  title: {
    width: "90%",
    fontSize: 32,
    fontWeight: "bold",
    color: "#6a006f",
    backgroundColor: "#ffb6d5",
    textAlign: "center",
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#d12f7a",
    elevation: 3,
  },

  description: {
    width: "90%",
    fontSize: 16,
    color: "#6a006f",
    backgroundColor: "#ffcee3",
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#d12f7a",
    elevation: 2,
  },

  portrait: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#ffe6ee",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#5b9ed8",
    borderWidth: 3,
    elevation: 4,
    marginBottom: 20,
  },

  picture: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  quote: {
    fontSize: 18,
    color: "#6a006f",
    fontStyle: "italic",
    textDecorationLine: "underline",
    marginBottom: 20,
  },

  sup: {
    fontSize: 12,
    textAlignVertical: "top",
  },

  segment: {
    width: "85%",
    backgroundColor: "#ffcee3",
    padding: 16,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#d12f7a",
    alignItems: "center",
    elevation: 3,
    marginBottom: 16,
  },

  chapter: {
    width: "85%",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 8,
    color: "#6a006f",
    fontWeight: "bold",
  },

  box: {
    width: "85%",
    backgroundColor: "#ffd9eb",
    padding: 12,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#d12f7a",
    fontSize: 16,
    color: "#6a006f",
    elevation: 2,
    marginBottom: 16,
  },

  groupLinks: {
    flexDirection: "row",
    flexWrap:
