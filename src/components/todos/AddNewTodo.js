import { useState } from "react";

const TodoForm = ({ onAdd , formData , changeHandler }) => {
    const [isShow, setIsShow] = useState(false);

    if (!isShow) {
        return (
            <div>
                <button 
            onClick={() => setIsShow(true)}
            className="w-full py-2 px-8 font-bold bg-rose-600 border border-rose-500 text-white rounded-lg hover:bg-rose-400 transition-all duration-300 ease-in-out">
            اضافه کردن تودوی جدید؟
                </button>
            </div>
        )
    }

    return (
    <form className="w-full max-w-md bg-white p-2 md:p-4 rounded-xl" onSubmit={(e) => onAdd(e, formData)}>
        <div className="mb-4">
            <label className="text-gray-600 mb-1 block text-right" htmlFor="todo-title">
                عنوان
            </label>
            <input 
            name="title"
            placeholder=" ...عنوان تودو" 
            id="todo-title" 
            className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-red-400 focus:border-none w-full block transition duration-300 ease-out"
            type="text"
            value={formData.title} 
            onChange={changeHandler}/>
        </div>
        <div className="mb-8">
        <label className="text-gray-600 mb-1 block text-right" htmlFor="todo-title">
                توضیحات
        </label>
        <textarea
        onChange={changeHandler}
        name="description"
        id="todo-description"
        value={formData.description} 
        className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-red-400 focus:border-none w-full block transition duration-300 ease-out">
        </textarea>
        </div>
        <div className="flex items-center gap-x-4">
            <button 
            onClick={() => setIsShow(false)}
            type="button"
            className="w-full py-2 text-red-500 border border-rose-500 font-medium rounded-lg transition-all duration-300 ease-in-out">
                کنسل
            </button>
            <button 
            type="submit"
            className="w-full py-2 bg-rose-600 border border-rose-500 text-white font-medium rounded-lg hover:bg-rose-400 transition-all duration-300 ease-in-out">
                اضافه کردن تودو
            </button>
        </div>
    </form>
    );
};

export default TodoForm;