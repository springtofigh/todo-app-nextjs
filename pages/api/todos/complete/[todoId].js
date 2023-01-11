import dbConnect from '../../../../server/utils/dbConnect';
import Todo from '../../../../server/models/todo';

dbConnect();

export default async function handler(req,res) {
    const { method , query } = req;
    if ( method === "PUT" ) {
        const todo = await Todo.findById(query.todoId)
    }
}