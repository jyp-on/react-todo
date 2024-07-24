import { useState } from "react"
import TodoBody from "./components/todos/TodoBody"
import TodoHeader from "./components/todos/TodoHeader"
import DefaultLayout from "./layouts/DefaultLayout"

const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  }
]

function App() {
  const [todos, setTodos] = useState(dummyTodos)

  const onAdd = ({title, summary, category}) => {
    setTodos([...todos, {id: todos.length + 1, title, summary, category}])
  }
 
  return (
    <>
      <DefaultLayout>
        <header className="flex justify-center">
          <a to="/">
            <h1 className="py-8 text-red-200 max-w-max animate-bounce-slow text-7xl">
                  todos
            </h1>
          </a>
        </header>
        <section className="max-w-xl m-4 mx-auto">
          {/* addTodo라는 이름으로 addTodo 함수를 props로 전달함 */}
          <TodoHeader onAdd={onAdd} />
          <TodoBody todos={todos}/>
        </section>
      </DefaultLayout>
    </>
  )
}

export default App
