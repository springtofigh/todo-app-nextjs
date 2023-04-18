import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { getOneTodo } from "../api/todos/[todoId]";

const TodoPage = ({todo}) => {
  const router = useRouter();
  const [formData, setFormData] = useState( {title:todo.title , description:todo.description});
  const changeHandler = (e) => setFormData({...formData , [e.target.name]: e.target.value});


  const submitHandler = e => {
    e.preventDefault();
    axios
    .put(`/api/todos/${router.query.todoId}`, {todo : formData}).then(res => {
      console.log(res.data);
      router.push('/')
    }).catch(err => console.log(err))
  }
  return (
    <div>
      <h1>Todo Detail Page</h1>
      <form className="w-full max-w-md bg-white p-2 md:p-4 rounded-xl" onSubmit={submitHandler}>
        <div className="mb-4">
            <label className="text-gray-600 mb-1 block" htmlFor="todo-title">
                Title
            </label>
            <input 
            name="title"
            placeholder=" todo title ..." 
            id="todo-title" 
            className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-none w-full block transition duration-300 ease-out"
            type="text"
            value={formData.title} 
            onChange={changeHandler}/>
        </div>
        <div className="mb-8">
        <label className="text-gray-600 mb-1 block" htmlFor="todo-title">
                Description
        </label>
        <textarea
        onChange={changeHandler}
        name="description"
        id="todo-description"
        value={formData.description} 
        className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-none w-full block transition duration-300 ease-out">
        </textarea>
        </div>
        <div className="flex items-center gap-x-4">
            <button 
            onClick={() => router.push("/")}
            type="button"
            className="w-full py-2 text-blue-500 border border-blue-500 rounded-lg transition-all duration-300 ease-in-out">
                Cancel
            </button>
            <button 
            type="submit"
            className="w-full py-2 bg-blue-500 border border-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">
              Edit your todo
              </button>
        </div>
    </form>
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

