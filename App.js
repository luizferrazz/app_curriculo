import * as React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#DCDCDC"}}>
      <Text style={{fontSize: 20, fontWeight: "bold", color: "green"}}>Luiz Augusto Ferraz</Text>
      <Image source={require("./assets/eumesmo.jpg")} style={{height: 400, width: 300, borderRadius: 10}}></Image>
      <Pressable
        onPress={() => navigation.navigate('Objetivo')}
        style={{backgroundColor: "green", height: 60, width: 100,margin: 10, justifyContent: "center", alignItems: "center", borderRadius: 10}}>
        <Text style={{color: "white", fontWeight: "bold", fontSize:15}}>Objetivo</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('HistoricoAcademico')}
        style={{backgroundColor: "green", height: 60, width: 130,margin: 10, justifyContent: "center", alignItems: "center", borderRadius: 10}}>
        <Text style={{color: "white", fontWeight: "bold", fontSize:15}}>Histórico Acadêmico</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('HardSkills')}
        style={{backgroundColor: "green", height: 60, width: 130,margin: 10, justifyContent: "center", alignItems: "center", borderRadius: 10}}>
        <Text style={{color: "white", fontWeight: "bold", fontSize:15}}>Hard Skills</Text>
      </Pressable>
    </View>
  );
}

function Objetivo() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Busco oportunidade de estágio na área de análise de dados com foco em soluções vinculadas à área da saúde</Text>
    </View>
  );
}

function HistoricoAcademico() {
  return (
    <View style={{backgroundColor: "green", height: 80, margin: 10, justifyContent: "center", alignItems: "center", borderRadius: 10}}>
      <Text style={{color: "white", fontWeight: "bold", fontSize:15}}>Cursos que fiz. onPress == Detalhes de cada curso</Text>
    </View>
  );
}

function HardSkills() {
  return (
    <View style={{backgroundColor: "green", height: 80, margin: 10, justifyContent: "center", alignItems: "center", borderRadius: 10}}>
      <Text style={{color: "white", fontWeight: "bold", fontSize:15}}>Lista com Hard Skills</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Objetivo" component={Objetivo} />
        <Stack.Screen name="HistoricoAcademico" component={HistoricoAcademico} />
        <Stack.Screen name="HardSkills" component={HardSkills} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
