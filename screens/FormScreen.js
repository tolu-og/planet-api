import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const FormScreen = () => {
  const [text, setText] = useState("");
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { label: "Milky Way", value: "milky-way" },
    { label: "Mars", value: "mars", parent: "milky-way" },
    { label: "Pluto", value: "pluto", parent: "milky-way" },

    { label: "Gliese", value: "gliese" },
    { label: "Gliese 667Cc", value: "gliese-667Cc", parent: "gliese" },
    { label: "Kepler-22b", value: "kepler-22b", parent: "gliese" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Character Form</Text>
      <View className="items-center">
        <TextInput
          className="text-center"
          placeholder="Enter Character Name"
          style={styles.inputStyle}
          onChangeText={setText}
          value={text}
        />

        <TextInput
          className="text-center"
          style={styles.inputAge}
          onChangeText={setAge}
          value={age}
          placeholder="Enter age"
          keyboardType="numeric"
        />
        <DropDownPicker
          style={styles.picker}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 48,
  },
  formLabel: {
    marginTop: 30,
    margin: 40,
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#3B0087",
  },
  button: {
    backgroundColor: "rgba(59, 0, 135, 0.1)",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "#3B0087",
    fontWeight: "700",
    fontSize: 16,
  },
  inputAge: {
    borderRadius: 10,
    width: 330,
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "rgba(59, 0, 135, 0.1)",
  },
  picker: {
    borderRadius: 10,
    marginLeft: 25,
    width: 330,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "rgba(59, 0, 135, 0.1)",
  },
  inputStyle: {
    width: 330,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "rgba(59, 0, 135, 0.1)",
  },
  formText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
  },
});

export default FormScreen;
