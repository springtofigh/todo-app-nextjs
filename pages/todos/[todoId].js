import Layout from "../../containers/Layout";
import { getOneTodo } from "../api/todos/[todoId]";
import dbConnect from "../../server/utils/dbConnect";

const TodoPage = ({ todo }) => {
  return (
    <Layout>
      <div className="text-white text-center">
        <h1 className="text-xl font-bold mb-4">
          صفحه جزئیات تودو
        </h1>
        <h2>
          <strong className="font-bold">عنوان</strong> : {todo.title}
        </h2>
        <p>
          <strong className="font-bold">توضیحات</strong> : {todo.description}
        </p>
      </div>
    </Layout>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  dbConnect();
  const { query } = context;
  // get one todo from DB !
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}

