import { Checkbox, IconButton, HStack, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, onComplete, onDelete }) => {
  return (
    <HStack spacing={4}>
      <Checkbox isChecked={todo.completed} onChange={() => onComplete(todo.id)} />
      <Text textDecoration={todo.completed ? "line-through" : "none"} flexGrow={1}>
        {todo.text}
      </Text>
      <IconButton icon={<FaTrash />} onClick={() => onDelete(todo.id)} />
    </HStack>
  );
};

export default TodoItem;
