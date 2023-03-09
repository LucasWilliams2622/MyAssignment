import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const KeyboardAwareScrollViewComponent = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.inner}>
        <Text style={styles.header}>Header</Text>
        <TextInput placeholder="Username" style={styles.textInput} />
        <View style={styles.btnContainer}>
          <TextInput placeholder="Username 1" style={styles.textInput} />
          <TextInput placeholder="Username 2" style={styles.textInput} />
          <TextInput placeholder="Username 3" style={styles.textInput} />
          <TextInput placeholder="Username 4" style={styles.textInput} />
          <TextInput placeholder="Username 5" style={styles.textInput} />
          <TextInput placeholder="Username 6" style={styles.textInput} />
          <TextInput placeholder="Username 7" style={styles.textInput} />
          <TextInput placeholder="Username 8" style={styles.textInput} />
          <TextInput placeholder="Username 9" style={styles.textInput} />
          <TextInput placeholder="Username 10" style={styles.textInput} />
          <TextInput placeholder="Username 11" style={styles.textInput} />
          <TextInput placeholder="Username 12" style={styles.textInput} />
          <TextInput placeholder="Username 13" style={styles.textInput} />
          <Button title="Submit" onPress={() => null} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
export default KeyboardAwareScrollViewComponent;