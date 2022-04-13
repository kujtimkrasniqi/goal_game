import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal } from 'react-native'; //components

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  //arguments
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoal = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  const CancelGoal = () => {
    props.onCancel();
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        
        <TextInput placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}>
        </TextInput>

        <View style={styles.ButtonStyle}>
          <View style={styles.Button}>
            <Button title='Cancel' color="red" onPress={CancelGoal}></Button>
          </View>
          <View style={styles.Button}>
            <Button title="Add" onPress={addGoal}></Button>
          </View>
        </View>

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  ButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
  },
  Button: {
    width: '56%'
  }
});

export default GoalInput;