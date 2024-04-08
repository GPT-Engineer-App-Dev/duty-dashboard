import { useState } from "react";
import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleCompleteTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Box maxWidth="500px" mx="auto">
      <Header />
      <VStack spacing={4} align="stretch">
        <Box display="flex">
          <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" mr={4} />
          <Button onClick={handleAddTodo} colorScheme="blue" leftIcon={<FaPlus />}>
            Add
          </Button>
        </Box>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onComplete={handleCompleteTodo} onDelete={handleDeleteTodo} />
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
