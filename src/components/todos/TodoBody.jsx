import TodoItem from "@/components/todos/TodoItem"

const TodoBody = ({todos, onUpdate, onDelete}) => {
  return (
    <ul className="px-0 my-8">
      {/* {li태그를 todos 배열의 요소만큼 렌더링 } */}
     {todos.map((todo)=><TodoItem todo={todo} key={todo.id} onUpdate={onUpdate} onDelete={onDelete}/> )}
    </ul>
  )
}

export default TodoBody;