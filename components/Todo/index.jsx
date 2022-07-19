import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetUsersQuery } from "../../services/users"

const Todo = () => {
    const { data, error, isLoading } = useGetUsersQuery()
    const dispatch = useDispatch()
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    console.log(data)

  return (
    <div className="p-4">
        <form onSubmit={(e) => e.preventDefault()} className="w-auto">
            <input 
                value={id} type="text" 
                placeholder="enter something" 
                className="border-2 border-slate-800 p-2" 
                onChange={e => setId(e.target.value)}
                name='name'    
            />
            <input 
                value={name} type="text" 
                placeholder="enter something" 
                className="border-2 border-slate-800 p-2" 
                onChange={e => setName(e.target.value)}
                name='name'    
            />
            <input 
                value={age} type="text" 
                placeholder="enter something" 
                className="border-2 border-slate-800 p-2" 
                onChange={e => setAge(e.target.value)}
                name='age'    
            />
            <button
                type="submit"
                className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg"> 
                Add Todo 
            </button>
        </form>

        {/* { todos.map((todo, index) => (
            <div className="p-4 mt-4 text-white bg-slate-800 w-52 rounded-lg" key={todo.id}>
                <h2 className='flex justify-between items-center'> 
                    +{todo.name} 
                    <span 
                        className="text-2xl cursor-pointer"> <strong> X </strong> </span> 
                </h2>
            </div>
        )) } */}
    </div>
  )
}

export default Todo