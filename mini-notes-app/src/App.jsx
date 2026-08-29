import { useState } from "react";


const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('')
  
  const [task, setTask] = useState([])

  const submittingFrom = (e) =>{
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title, details});
    
    setTask(copyTask);

    setTitle('');
    setDetails('');
  }

  const deleteTask = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }

  return (
    <div className='w-full h-full bg-[#0E0E0E] flex justify-center items-center py-10'>
      <form 
        onSubmit={(e)=>{
            submittingFrom(e);
          }}
        className='flex flex-col w-[90%] h-fit gap-8 bg-[#282828] py-10 rounded-2xl justify-center items-center'>
        <h1 className=' text-white font-bold text-5xl mb-4 mt-10'>NOTES APP</h1>
        <div className='flex flex-col bg-[#2A2A2A] w-[90%] h-fit border border-[#444] rounded-xl gap-6 p-10'>
          <input 
          type="text" 
          placeholder='Title' 
          className='text-white bg-[#1E1E1E] px-3 py-4 border border-[#444] rounded-xl'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
          />
          <textarea 
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value);
          }}
          placeholder='Enter details...' 
          className='text-white w-full h-32 px-3 py-4 bg-[#1E1E1E]  border border-[#444] rounded-xl'
          ></textarea>
          <button 
          type="submit"
          className='bg-[#0AC6C7] active:scale-95 hover:shadow-[0_0_20px_rgba(10,198,199,0.35)] cursor-pointer px-3 py-4 rounded-xl text-xl font-bold'>ADD NOTES</button>
        </div>
        <div className=' bg-[#2A2A2A] w-[90%] px-8 py-6 h-fit border border-[#444] rounded-xl'>
          <h4 className='text-white w-full border-b-2 font-bold text-2xl pb-3 border-purple-400'>All Notes</h4>
          <div className="flex gap-8 flex-wrap">
            {task.map(function(elem, idx){
              return <div key={idx} className='flex flex-col gap-4 h-fit w-96 px-6 py-4 mt-8 text-white bg-[#201e1e] border border-[#444] rounded-xl '>
              <h6 className="font-semibold text-xl">{elem.title}</h6>
              <p>{elem.details}</p>
              <div className='flex gap-x-3'>
                <button 
                type="button"
                className='bg-[#0FAF7C] active:scale-95 cursor-pointer rounded-xl px-4 py-2 hover:shadow-[0_0_15px_rgba(15,175,124,0.45)]'>Edit</button>
                <button 
                type="button"
                onClick={()=>{
                  deleteTask(idx);
                }}
                className='bg-[#E52F32] active:scale-95 rounded-xl px-5 py-2 cursor-pointer hover:shadow-[0_0_15px_rgba(15,175,124,0.45)]'>Delete</button>
              </div>
            </div>
            })}
          </div>
        </div>
      </form>
    </div>
  )
}

export default App