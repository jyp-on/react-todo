import TodoItem from "@/components/todos/TodoItem"

const TodoBody = ({todos}) => {
  return (
    <ul className="px-0 my-8">
      {/* {li태그를 todos 배열의 요소만큼 렌더링 } */}
     {todos.map((todo)=><TodoItem key={todo.id} title={todo.title} summary={todo.summary} category={todo.category} /> )}
    </ul>
  )
}

export default TodoBody;