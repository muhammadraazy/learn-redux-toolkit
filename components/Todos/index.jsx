import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } from "../../features/todos"


const Todos = () => {
    const { data: users, refetch, isLoading, isSuccess } = useGetUsersQuery({ pollingInterval: 0 })
    const [deleteUser, {error}] = useDeleteUserMutation()
    const [addUser] = useAddUserMutation()

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const addUsers = async(e) => {
        e.preventDefault()
        await addUser({ id: Math.random(Math.floor(10) * 100), name, username, email, address })

        console.log('new user')
    }

    const deletedUser = async(id) => {
        if(error) console.log(error)

        await deleteUser({ id })
    }

    useEffect(() => {
        refetch()
    }, [refetch])

    let content = '';

    if(isLoading) {
        content = <h2> Please Wait </h2>   
    } else {
        content =  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    { isSuccess && users.map((user) => (
                    <div className="flex w-80 items-center justify-between p-4 mt-4 text-white bg-slate-800 w-62 rounded-lg" key={user.id}>
                        <h2 className='flex justify-between items-center'> 
                            +{user.name} 
                        </h2>
                        <button 
                            onClick={() => deletedUser(user.id)}
                            className="bg-red-800 text-1xl p-1 px-2 rounded-lg cursor-pointer"><strong> Delete </strong> 
                        </button> 
                        <button className="bg-green-800 text-1xl p-1 px-2 rounded-lg cursor-pointer"> Edit </button>
                    </div>
            )) }
        </div>
    }

  return (
    <div className="p-4 relative left-52">
        <form onSubmit={addUsers} className="grid grid-cols-1 gap-4 w-96">
            <input 
                value={id} type="text" 
                placeholder="enter id" 
                className="border-2 border-slate-800 p-2" 
                onChange={e => setId(e.target.value)}
                name='name'    
            />
            <input 
                value={name} type="text" 
                placeholder="enter name" 
                className="border-2 border-slate-800 p-2" 
                onChange={e => setName(e.target.value)}
                name='name'    
            />
            <input 
                value={username} type="text" 
                placeholder="enter username" 
                className="border-2 border-slate-800 p-2" 
                onChange={e => setUsername(e.target.value)}
                name='name'    
            />
            <input 
                value={email} type="email" 
                placeholder="enter email" 
                className="border-2 border-slate-800 p-2" 
                onChange={e => setEmail(e.target.value)}
                name='name'    
            />
            <input 
                value={address} type="address" 
                placeholder="enter address" 
                className="border-2 border-slate-800 p-2" 
                onChange={e => setAddress(e.target.value)}
                name='age'    
            />
            <button
                type="submit"
                className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg"> 
                Add Users 
            </button>
        </form>

        {content}
    </div>
  )
}

export default Todos