import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, AsyncStorage } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'

export default class App extends React.Component {
  state={
    todos : [{
      title : '리액트 공부하기',
      done : true,
    }, {
      title : '운전연수 받기',
      done : false,
    }],
    showModal: false,
  }

  componentWillMount() {
    AsyncStorage.getItem('@todo:state').then((state) => {
      this.setState(JSON.parse(state))
    })
  }
  save = () => {
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state))

  }
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        show = {() => {
          this.setState({ showModal : true})
        }}
      />
      <FlatList
        data = {this.state.todos}
        renderItem = {({item, index}) => {
          return(
            <TodoItem
              title = {item.title}
              done = {item.done}
              remove ={() => {
                this.setState({
                  todos : this.state.todos.filter((_, i) => i !== index)
                }, this.save)
              }}
              toggle = {() => {
                const newTodos = [...this.state.todos]
                newTodos[index].done = !newTodos[index].done
                this.setState({todos:newTodos}, this.save)
              }}
             /> 
          )
        }}
        keyExtractor ={(_, index) => {
          return `${index}`
        }} 
      />
      <TaskModal 
      isVisible={this.state.showModal} 
      add={(title) => {
        this.setState({
          todos: this.state.todos.concat({
            title : title,
            done : false,
          }),
          showModal: false,
        }, this.save)
      }}
      hide={() => {
        this.setState({ showModal : false})
      }}
      />
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  },
})
