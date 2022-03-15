import './App.css';
import { useRef,  useState, useEffect} from 'react'
import Thougths from './Components/Thougths';
const chk = (localStorage.getItem("Journal")) ? JSON.parse(localStorage.getItem("Journal")) : [];


function App() {
  const [id, setId] = useState(Date.now())
  const thoughtsRef = useRef(null);
  const dateRef = useRef(null);
  const taskRef = useRef(null);
  const [saveThought, setThought] = useState(chk);
    
  const submitThoughts = (e) => {
      e.preventDefault();
      const thoughtObject = {
                            id:id,
                            thoughts: thoughtsRef.current.value,
                            task: taskRef.current.value,
                            date: dateRef.current.value,
                            
      }
      setThought([...saveThought, thoughtObject]);
      thoughtsRef.current.value = null
      taskRef.current.value = null;
      dateRef.current.value = null;
      setId(Date.now());
      
      alert("Saved!")
  }

  useEffect(() => {
    localStorage.setItem('Journal',JSON.stringify(saveThought))
  }, [saveThought])

  


  return (
    <div className="container">
        <h1 className='text-center'></h1><br/>
        <div className='d-flex'>
            <div className="col-12">
              <form onSubmit={submitThoughts} >
                  <div className="container">
                      <h2>My Coding Journal</h2><br></br>
                      <input type="text" name="thoughts"  placeholder="What's on your mind?" ref={thoughtsRef}/><br/><br/>  
                      <input type="text" name="task"  placeholder="Things to do" ref={taskRef}/><br/><br/>                   
                      <input type="date" name="thoughtsDate" required ref={dateRef}/>             
                      <button className='save' type="submit">Save</button> <br/><br/>           
                  </div>
              </form> 
              <Thougths arr={saveThought} />
            </div>
       </div>
    </div>
  );
}

export default App;
