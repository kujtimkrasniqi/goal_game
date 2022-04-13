import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native'; //components
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  //List goals
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  //function
  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0)
    {
      return;
    }
          //add in courseGoals, values that we get from enteredGoal
          //key = id
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}]);
    setIsAddModal(false); //set Modal to false after we add the goal
  };

  const removeGoal = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    })
  };

  const CancelGoad = () => {
    setIsAddModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add new Goal' onPress={() => setIsAddModal(true)}></Button>
      <GoalInput visible={isAddModal} onAddGoal={addGoalHandler} onCancel={CancelGoad}></GoalInput>

      <FlatList 
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoal} item={itemData.item.value}></GoalItem>}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
