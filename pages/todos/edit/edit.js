import { getOneTodo } from "../../api/todos/[todoId]";

const TodoPage = ({todo}) => {
  return (
    <div>
      <h1>Todo Detail Page</h1>
      <h2>Title : {todo.title}</h2>
      <h2>Description : {todo.description}</h2>
    </div>
    
  )
}

export default TodoPage;

export async function getServerSideProps(context) {
  const { query } = context;
  // GET ONE TODO FROM DB!
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo))
    }
  }
}
