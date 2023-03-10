import React, { useState } from "react";
import { FlatList, StyleSheet,Text, TextInput, View, Pressable, SafeAreaView, ScrollView, Alert,} from "react-native";

const App = () => {
  const [matEncontrada, setMatEncontrada] = useState("");
  const [matIngresada, setMatIngresada] = useState("");

  const materiaData = [
    { key: "Matematicas" },
    { key: "Español" },
    { key: "Historia" },
    { key: "Ingles" },
    { key: "Quimica" },
    { key: "Administracios" },
    { key: "BD" },
    { key: "Progrmacion Web" },
    { key: "Ciencias Naturales" },
    { key: "Computacion" },
  ];

  const cambioMateria = (value) => {
    setMatIngresada(value);
  };

 
  const Click = () => {
    
    const nuevaMateria = materiaData.filter(
      (materia) => materia.key === matIngresada
    );
    console.log(matIngresada);
    if (nuevaMateria.length > 0) {
      const { key } = nuevaMateria[0];
      setMatEncontrada(key);
    } else {
      Alert.alert("Error:", `al buscar esta materia ${matIngresada} `, [
        {
          text: "volver",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Vale", onPress: () => console.log("Vale Pressed") },
      ]);
    }
  };



  const Titulo = (props) => {
    const { title, titlestyles, headerStyles } = props;
    return (
      <View style={headerStyles}>
        <Text style={titlestyles}>{title}</Text>
      </View>
    );
  };

  const Materia = (props) => {
    const { encontrado, nombre } = props;

    return (
      <View
        style={
          encontrado
            ? styles.itemEncontrado
            : styles.itemNoEncontrado        }
      >
        <Text style={styles.titleInput}>{nombre}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Titulo
        titlestyles={styles.title}
        headerStyles={styles.headerStyles}
        title="*BUSCADOR*"
        color = "#20b2aa"
      />

<View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={Click}>
          <Text style={styles.text}>BUSCAR</Text>
        </Pressable>
      </View>

      <View>
        <TextInput
          onChangeText={(value) => {
            cambioMateria(value);
          }}
          style={styles.textInput}
          placeholder="Materia a Buscar"
        />
      </View>

      

      <ScrollView showsVerticalScrollIndicator={true}>
        <SafeAreaView style={styles.flatlistContainer}>
          <FlatList
            data={materiaData}
            renderItem={({ item }) => (
              <Materia
                encontrado={item.key === matEncontrada ? true : false}
                nombre={item.key}
              />
            )}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingLeft: 30,
    paddingRight: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    textAlign: "center",
    color: "#20b2aa",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Cochin"
  },
  headerStyles: {
    //backgroundColor: "black",
    padding: 15,
    marginTop: 5,
    marginBottom: 15,
    //color: `black`
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    minWidth: 200,
    marginTop: 15,
    borderRadius: 10,
    textAlign: "center",
    //justifyContent: "center",
    padding: 10,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "lightseagreen",
    width: "60%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  flatlistContainer: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  itemNoEncontrado: {
    borderColor: "black",
    borderWidth: 3,
    textAlign: "center",
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#48d1cc",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemEncontrado: {
    borderColor: "blue",
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#c71585",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleInput: {
    fontSize: 20,
    color: "white",
  },
});
export default App;