import { Button } from "@/components/button";
import { Link, router } from "expo-router";
import {
  Alert,
  ScrollView,
  Text,
  View,
} from "react-native";

import { styles } from "./style";

export default function Home() {
  function hangmanMessage() {
    Alert.alert(
      "Adivinhe o piloto canpeão!",
      "- Clique ENTER para chutar uma letra\n- Apenas 5 tentativas\n",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Começar",
          onPress: () => router.push("./jdf"),
        },
      ]
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Home}>

        <Text style={styles.title}>Matheus Fabiano Barbosa Aguiar</Text>

        <Text style={styles.description}>
          Estudante de Ciencias da Computação Unicap – 5º período{"\n"}21 anos{"\n"}
        </Text>

        {/* FRASE */}
        <Text style={styles.quote}>
          "penso, logo existo" - rene descartes"{" "}
          <Text style={styles.sup}>1637</Text>
        </Text>

        {/* BIOGRAFIA */}
        <View style={styles.segment}>
          <Text style={styles.chapter}>• Biografia •</Text>
          <Text style={styles.box}>
            Desde de pequeno sempre tive uma alta relação com computadores,desde
            jogos de computadores a estudos pessaois, me fizeram adentrar na computação, minha maior
            paixão direta e a area de dados ligada ao aprebdizado de maquina(machine learning.)
          </Text>
        </View>

        {/* SKILLS */}
        <View style={styles.segment}>
          <Text style={styles.chapter}>• hard skills •</Text>
          <Text style={styles.box}>
            - Programação em python SQL, C e R{"\n"}
            - Pacote Office: Word, Excel, Power Point, power Bl{"\n"}
            - Fluencia em espanhol e ingles avançado{"\n"}
            - Frameworks:django, react, js, angular{"\n"}
            - IDE para arduino:Tinkercad, arduino{"\n"}
          </Text>
        </View>

        {/* EXPERIÊNCIAS */}
        <View style={styles.segment}>
          <Text style={styles.chapter}>• Experiência e Conquistas •</Text>
          <Text style={styles.box}>
            - monitoria de fundamentos de hardware{"\n"}
            - power bi - ibm{"\n"}
            - introdução a IA - even3 {"\n"}
            - Participação em projetos de extenção,Biblioteca Comunitária Caranguejo
            Tabaiares e ong partilhar{"\n"}
          </Text>
        </View>

        {/* INTERESSES */}
        <View style={styles.segment}>
          <Text style={styles.chapter}>• anbito profissional •</Text>
          <Text style={styles.box}>
            - area de ciencia de dados {"\n"}
            - area de inteligencia artificial focado em machine learning {"\n"}
            
          </Text>
        </View>

        {/* LINKS */}
        <View style={styles.segment}>
          <Text style={styles.chapter}>• Referências •</Text>

          <View style={styles.groupLinks}>
            <Link
              href="https://www.linkedin.com/in/matheus-fabiano-barbosa-aguiar-143626290/"
              style={styles.hyperlink}
            >
              Linkedin
            </Link>

            <Link
              href="https://github.com/matheusarsenal"
              style={styles.hyperlink}
            >
              GitHub
            </Link>


            <Link
              href="https://www.youtube.com/@matheusbarbosaaguiar11"
              style={styles.hyperlink}
            >
              YouTube
            </Link>
          </View>
        </View>

        {/* JOGO */}
        <Button title="Jogo da Forca" onPress={hangmanMessage} />
      </View>
    </ScrollView>
  );
}
