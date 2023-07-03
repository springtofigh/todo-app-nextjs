import axios from "axios";
import { useState } from "react";
import TodoList from "../components/todos/TodoList";
import TodoForm from "../components/todos/AddNewTodo";
import dbConnect from "../server/utils/dbConnect";
import Todo from "../server/models/todo"
import Layout from "../containers/Layout";

const fetcher = async () => {
  const { data } = await axios.get("/api/todos");
  return data;
}

export default function Home( {todos} ) {
  const [data, setData] = useState(todos);

  const deleteTodo = (id) => {
    console.log({id});
    axios
    .delete(`/api/todos/${id}`)
    .then(({ data }) => {
      setData(data.todos);
      setLoading(false);
    })
    .catch((err) => console.log(err))
  };

  const addTodo = (e, formData) => {
    e.preventDefault();
    axios
    .post(`/api/todos` , { formData })
    .then(({data}) => {
      setData(data.todos);
      setLoading(false)
    })
    .catch((err) => console.log(err))

  };

  const completeHandler = (id) => {
    console.log(id);
    axios
    .put(`/api/todos/complete/${id}`)
    .then(({data}) => {
      setData(data.todos);
    })
    .catch((err) => console.log(err))
  }
  return (
    <Layout>
        <div className="container p-2 xl:max-w-screen-xl mx-auto">
          <section className="flex md:flex-row mid:items-start md:justify-center gap-x-8 flex-col gap-y-8">
            {/* TODOFORM */}
            <TodoForm  onAdd={addTodo} />
            {/* TODOLIST */}
            <TodoList data={data} onDelete={deleteTodo} onComplete={completeHandler} />
          </section>
        </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  dbConnect();
  const todos = await Todo.find({})
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos))
    }
  }
}