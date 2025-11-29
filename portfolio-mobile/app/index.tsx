import { Button } from "@/components/button";
import { Link, router } from "expo-router";
import { Alert, ScrollView, Text, View } from "react-native";
import { styles } from "./style";

export default function Home() {
  function hangmanMessage() {
    Alert.alert(
      "Adivinhe o piloto campeão!",
      "- Clique ENTER para chutar uma letra\n- Apenas 5 tentativas\n",
      [
        { text: "Cancelar" },
        { text: "Começar", onPress: () => router.push("./jdf") }
      ]
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Home}>

        <Text style={styles.title}>Matheus Fabiano Barbosa Aguiar</Text>

        <Text style={styles.description}>
          Estudante de Ciências da Computação – UNICAP – 5º período{"\n"}21 anos{"\n"}
        </Text>

        <Text style={styles.quote}>
          "Penso, logo existo" — René Descartes{" "}
          <Text style={styles.sup}>1637</Text>
        </Text>

        <View style={styles.segment}>
          <Text style={styles.chapter}>• Biografia •</Text>
          <Text style={styles.box}>
            Desde pequeno sempre tive uma forte relação com computadores. Jogos,
            curiosidade e estudos me levaram à computação. Minha principal área
            de interesse é ciência de dados e aprendizado de máquina.
          </Text>
        </View>

        <View style={styles.segment}>
          <Text style={styles.chapter}>• Hard Skills •</Text>
          <Text style={styles.box}>
            - Programação: Python, SQL, C, R{"\n"}
            - Office: Word, Excel, PowerPoint, Power BI{"\n"}
            - Idiomas: Espanhol fluente, Inglês avançado{"\n"}
            - Frameworks: Django, React, JS, Angular{"\n"}
            - Arduino: Tinkercad e IDE oficial{"\n"}
          </Text>
        </View>

        <View style={styles.segment}>
          <Text style={styles.chapter}>• Experiências e Conquistas •</Text>
          <Text style={styles.box}>
            - Monitoria de hardware{"\n"}
            - Power BI - IBM{"\n"}
            - Introdução à IA - Even3{"\n"}
            - Projetos de extensão: Biblioteca Comunitária Caranguejo
            Tabaiares e ONG Partilhar{"\n"}
          </Text>
        </View>

        <View style={styles.segment}>
          <Text style={styles.chapter}>• Âmbito profissional •</Text>
          <Text style={styles.box}>
            - Ciência de dados{"\n"}
            - Inteligência artificial focada em Machine Learning{"\n"}
          </Text>
        </View>

        <View style={styles.segment}>
          <Text style={styles.chapter}>• Referências •</Text>

          <View style={styles.groupLinks}>
            <Link href="https://www.linkedin.com/in/matheus-fabiano-barbosa-aguiar-143626290/" style={styles.hyperlink}>
              Linkedin
            </Link>

            <Link href="https://github.com/matheusarsenal" style={styles.hyperlink}>
              GitHub
            </Link>

            <Link href="https://www.youtube.com/@matheusbarbosaaguiar11" style={styles.hyperlink}>
              YouTube
            </Link>
          </View>
        </View>

        <Button title="Jogo da Forca" onPress={hangmanMessage} />
      </View>
    </ScrollView>
  );
}
