import axios from "axios";
import { useState } from "react"
import { useSession , getSession } from "next-auth/react"
import dbConnect from "@/server/utils/dbConnect"
import Todo from "@/server/models/todo"
import Layout from "@/containers/Layout"
import ProfileTodo from "@/components/todos/ProfileTodo"


const todos = ({ todos }) => {
    const { data: session , status } = useSession();
    const [data, setData] = useState(todos);

    const deleteTodo = (id) => {
      axios
      .delete(`/api/todos/${id}`)
      .then(({ data }) => {
        setData(data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err))
    };

    const completeHandler = (id) => {
      axios
      .put(`/api/todos/complete/${id}`)
      .then(({data}) => {
        setData(data.todos);
      })
      .catch((err) => console.log(err))
    }

  return (
    <Layout>
        <h1 className="text-slate-100 text-right">
        در زیر قابل مشاهده است {session.user.name} لیست تودو های
        </h1>
        <ProfileTodo data={data} onDelete={deleteTodo} onComplete={completeHandler} />
    </Layout>
  )
}

export default todos;


export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/todos",
        permanent: false,
      },
    };
  }

  dbConnect();
  const todos = await Todo.find({})

  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
      session,
    },
  };
}