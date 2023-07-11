import { CheckIcon , TrashIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const ProfileTodo = ({ data, onDelete, onComplete }) => {
    return (
        <div className="w-full p-2 md:p-4 rounded-xl">
                {data.map((todo) => {
                return(
                <div key={todo._id} className="w-full bg-white font-medium p-2 mb-2 md:p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-4 p-3 md:p-2 rounded-xl">
                    <Link href={`/todos/${todo._id}`}>
                    <a>
                    <span className={`${todo.isCompleted ? "line-through" : ""}`}>{todo.title}</span>
                    </a>
                    </Link>
                    <div className="flex gap-x-3 items-center">
                    <button className="" onClick={() => onComplete(todo._id)}>
                    {todo.isCompleted ? (
                    <CheckIcon className="w-6 h-6 stroke-green-400" />
                    ) : <span className='w-5 h-5 block border-2 border-gray-600 rounded-full'></span>}
                    </button>
                    <button onClick={() => onDelete(todo._id)} >
                        <TrashIcon className="w-6 h-6 stroke-red-400" />
                    </button>
                    </div>
                    </div>
                </div>
            );
                })}
        </div>
    );
    };

export default ProfileTodo