import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetUsersQuery } from "../../services/users"

const Todo = () => {
    const { data: users, isLoading } = useGetUsersQuery({ pollingInterval: 3000 })
    const dispatch = useDispatch()
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

  return (
    <div className="p-4">
        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4 w-96">
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
                Add Users 
            </button>
        </form>

        { isLoading ? <h2> Loading ... </h2> : 
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                { users.map((user, index) => (
                <div className="p-4 mt-4 text-white bg-slate-800 w-52 rounded-lg" key={user.id}>
                    <h2 className='flex justify-between items-center'> 
                        +{user.name} 
                        <span 
                            className="text-2xl cursor-pointer"> <strong> X </strong> </span> 
                    </h2>
                </div>
                )) }
            </div>
         }
    </div>
  )
}

export default Todo