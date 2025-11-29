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
      "Adivinhe o piloto!",
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
          Estudante de Ciencias da omputação Unicap – 5º período{"\n"}21 anos{"\n"}
        </Text>

        {/* FRASE */}
        <Text style={styles.quote}>
          "{" "}
          <Text style={styles.sup}>23 a.C</Text>
        </Text>

        {/* BIOGRAFIA */}
        <View style={styles.segment}>
          <Text style={styles.chapter}>• Biografia •</Text>
          <Text style={styles.box}>
            Durante minha infância e adolescência, sempre gostei de videogames,
            passando tardes jogando e criando inspirações artísticas através
            disso. Apesar de algumas dificuldades, sempre mantive boas notas,
            principalmente em Matemática e Inglês.  
            Ao ingressar na faculdade, os impactos da pandemia dificultaram
            minha rotina, mas sigo firme na jornada para concluir C3 e entrar
            no mercado profissional.
          </Text>
        </View>

        {/* CAPACIDADES */}
        <View style={styles.segment}>
          <Text style={styles.chapter}>• Capacidades •</Text>
          <Text style={styles.box}>
            - Programação em C e Java{"\n"}
            - Conhecimento básico em HTML/CSS{"\n"}
            - Fluência em inglês{"\n"}
            - Trabalho em equipe{"\n"}
          </Text>
        </View>

        {/* EXPERIÊNCIAS */}
        <View style={styles.segment}>
          <Text style={styles.chapter}>• Experiência e Conquistas •</Text>
          <Text style={styles.box}>
            - Ensino Médio completo e Ensino Superior em andamento{"\n"}
            - 175 pontos no FCE — Cambridge (2019){"\n"}
            - Participação em projeto na Biblioteca Comunitária Caranguejo
            Tabaiares{"\n"}
          </Text>
        </View>

        {/* INTERESSES */}
        <View style={styles.segment}>
          <Text style={styles.chapter}>• anbito profissional •</Text>
          <Text style={styles.box}>
            
          </Text>
        </View>

        {/* LINKS */}
        <View style={styles.segment}>
          <Text style={styles.chapter}>• Referências •</Text>

          <View style={styles.groupLinks}>
            <Link
              href=""
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
