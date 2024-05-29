import { useEffect, useState } from "react"
import ProfileContainer from "../ProfileContainer/ProfileContainer"

const Home = () => {
  const [inputchange , setInputChange ] = useState("");
  const [loading , setLoading] = useState(false);
  const [message , setMessage] = useState(null);
  const [sorted, setSortedArr] = useState([]);
  const [sorting , setSorting] = useState(false);
  const [users , getUsers] = useState([])


  let baseUrl = "https://api.github.com/search/repositories?q="

  // Search Function to get gituser's data //

  const handleSearch = async () => {
    try{
      setLoading(true);
      let response = await fetch(`${baseUrl}${inputchange}`);
      let data = await response.json();
        if(data){
          setLoading(false)
          setSorting(false)
          getUsers(data)
        }
    }catch(err){
      setMessage(err.message)
      console.log(err)
    }
  }


// Sorting Functions with a flag based on selected sort-option //
const handleSort = async () => {
  setSorting(true);
  console.log(users)
  if(users.length == 0){
    alert("Please add data in the search field before sorting it")
  }else{
    let sortedArr = await users?.items?.sort((a, b)=> {
      return a.stargazers_count - b.stargazers_count
  
  
    })
    let sorted = await users?.items?.map(item => item.stargazers_count).sort()
    
    setSortedArr(sortedArr)

  }
}
// Loader //
  if(loading){
    return (
      <div className="flex justify-center absolute  items-center  ">
        <h2 className="text-2xl relative w-[50%] h-[50%]">Loading....</h2>
      </div>
    )
  }
// Error //
  if(message){
    return (
      <div className="flex items-center ">
        <h2 className="text-3xl">{message}</h2>
      </div>
    )
  }

  return (
    <div className="w-full h-auto bg-slate-900  ">
      <h4 className="  py-10 flex gap-3 align-middle justify-center  ">
          <input className="rounded-md w-1/3 h-[4vh] text-black px-2"
           placeholder="Search for a git repository"
           onChange={(e)=> setInputChange(e.target.value)}
           />
          <button className="rounded-md w-[120px] h-[4vh] bg-white text-xl "
            onClick={()=>handleSearch()}
          >Search</button>
          <button className="rounded-md w-[120px] h-[4vh] bg-white text-xl "
            onClick={()=>handleSort()}
          >Sort</button>
          <button className="rounded-md w-[120px] h-[4vh] bg-white text-xl "
            onClick={()=>getUsers([])}
          >Refresh</button>
          {/* <Filter /> */}
      </h4>
      
        <div className="w-full h-auto px-24">
            {/* Users Flagged based on Sort Selector */}
            <ProfileContainer users={setSorting == true ? sorted :  users}/>

        </div>
      

    </div>
  )
}

export default Home