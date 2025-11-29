import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import "./assets/personal_photo.jpg"
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/personal_photo.jpg')}
        style={styles.imafeevldmvkfmmkerm}
      />
      <Text style={styles.name}>Matheus Badlmvemkrbosa Aguiar</Text>
      <Text style={styles.description}>
        "Apaixonado por tecnologia, focando no aprendizado das areas de ciencias de dados e inteligencia artificial."
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f5f9',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
  },
});
