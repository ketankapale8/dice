import { useState } from "react"
import ProfileContainer from "../ProfileContainer/ProfileContainer";
import { toast } from "react-toastify";




const Home = () => {
  const [inputchange , setInputChange ] = useState("");
  const [loading , setLoading] = useState(false);
  const [message , setMessage] = useState(null);
  const [sorted, setSortedArr] = useState([]);
  const [sorting , setSorting] = useState(false);
  const [users , getUsers] = useState([]);
  const [defaultOption , setDefaultOption] = useState(false);
  // watchers_count



  let baseUrl = "https://api.github.com/search/repositories?q="

  // Search Function to get gituser's data //

  let formatter = new Intl.DateTimeFormat("en-Gb", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  })


  const handleSearch = async () => {
    try{
      if(inputchange.length == 0){
    toast("Please add data in the search field before sorting it")

      }else{
        setLoading(true);
        let response = await fetch(`${baseUrl}${inputchange}`);
        let data = await response.json();
          if(data){
            setLoading(false)
            setSorting(false)
            getUsers(data)
          }

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
    toast("Please add data in the search field before sorting it")
  }else{
    let sortedArr = await users?.items?.sort((a, b)=> {
      return a.stargazers_count - b.stargazers_count
  
  
    })
    
    setSortedArr(sortedArr)

  }
}

const TogglehandleSort = async () => {
  setSorting(false);
  console.log(users)
  if(users.length == 0){
    toast("Please add data in the search field before sorting it")
  }else{
    let sortedArr = await users?.items?.sort((a, b)=> {
      return b.stargazers_count - a.stargazers_count
  
  
    })
    
    setSortedArr(sortedArr)

  }
}

// Watchers Count Filter //


const handleWatchersCount = async () => {
  setSorting(true);
  console.log(users)
  if(users.length == 0){
    toast("Please add data in the search field before sorting it")
  }else{
    let sortedArr = await users?.items?.sort((a, b)=> {
      return a.watchers_count - b.watchers_count
  
  
    })
    
    setSortedArr(sortedArr)

  }
}

const ToggleWatchersCount = async () => {
  setSorting(false);
  console.log(users)
  if(users.length == 0){
    toast("Please add data in the search field before sorting it")
  }else{
    let sortedArr = await users?.items?.sort((a, b)=> {
      return b.watchers_count - a.watchers_count
  
  
    })
    
    setSortedArr(sortedArr)

  }
}


// Name Filter //
const FilterName = async () => {
  setSorting(false);
  if(users.length == 0){
    toast("Please add data in the search field before sorting it")
  }else{
   
    let sortedArr = await users?.items?.sort((a,b)=> {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();
      if(nameA > nameB ){ return -1; }
    })
  
    console.log(sortedArr)
    
    setSortedArr(sortedArr)

  }
}

const ToggleFilterName = async () => {
  setSorting(true);
  // console.log(users)
  if(users.length == 0){
    toast("Please add data in the search field before sorting it")
  }else{
   
    let sortedArr = await users?.items?.sort((a,b)=> {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();
      if(nameA < nameB ){ return -1; }
    })
    console.log(sortedArr)
    
    setSortedArr(sortedArr)

  }
}



// Score filter between zero and one //
const handleScore = async () => {
  setSorting(true);
  console.log(users)
  if(users.length == 0){
    toast("Please add data in the search field before sorting it")
  }else{
   
    let sortedArr = await users?.items?.filter(x => x.score = 1);
    console.log(sortedArr)
    if(sortedArr.length == 0){
      getUsers(null);
      setMessage("No users with Score of 0")
    }else{
      setSortedArr(sortedArr)

    }
  
  
    

  }
}
const toggleScore = async () => {
  setSorting(true);
  if(users.length == 0){
    toast("Please add data in the search field before sorting it")
  }else{

    let sortedArr = await users?.items?.filter(x => x.score = 0);
    if(sortedArr.length == 0){
      getUsers(null);
      setMessage("No users with Score of 0")
    }
    
    
    setSortedArr(sortedArr)

  }
}

// CreatedAt Filter //
const createdAtLowhighFilter = async () => {
  setSorting(false);
  if(users.length == 0){
    toast("Please add data in the search field before sorting it")
  }else{

    let sortedArr = await users?.items?.sort((a,b)=> {
      var firstDate = formatter.format(Date.parse(a.created_at))
      var secondDate = formatter.format(Date.parse(b.created_at))
      if(firstDate > secondDate ){ return -1; }

    })
    
    
    setSortedArr(sortedArr)

  }
}

const HandlecreatedAtLowhighFilter = async () => {
  setSorting(true);
  if(users.length == 0){
    toast("Please add data in the search field before sorting it")
  }else{

    let sortedArr = await users?.items?.sort((a,b)=> {
      var firstDate = formatter.format(Date.parse(a.created_at))
      var secondDate = formatter.format(Date.parse(b.created_at))
      if(firstDate < secondDate ){ return -1; }

    })
    
    
    setSortedArr(sortedArr)

  }
}

// UpdatedAt  Filter //

const updatedAtLowhighFilter = async () => {
  setSorting(false);
  if(users.length == 0){
    toast("Please add data in the search field before sorting it")
  }else{

    let sortedArr = await users?.items?.sort((a,b)=> {
      var firstDate = formatter.format(Date.parse(a.updated_at))
      var secondDate = formatter.format(Date.parse(b.updated_at))
      if(firstDate > secondDate ){ return -1; }

    })
    
    
    setSortedArr(sortedArr)

  }
}

const HandleupdatedAtLowhighFilter = async () => {
  setSorting(true);
  if(users.length == 0){
    toast("Please add data in the search field before sorting it")
  }else{

    let sortedArr = await users?.items?.sort((a,b)=> {
      var firstDate = formatter.format(Date.parse(a.updated_at))
      var secondDate = formatter.format(Date.parse(b.updated_at))
      if(firstDate < secondDate ){ return -1; }

    })
    
    
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
      <div className="flex items-center gap-3 justify-center pt-[25%] ">
        <h2 className="text-3xl">{message}</h2>
        <button className="rounded-md w-[120px] h-[4vh]  text-xl  bg-slate-900 text-white " onClick={()=> window.location.reload()}>Reload</button>
      </div>
    )
  }




//// Main Return Tab //
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
            onClick={()=>{getUsers([]) ;setDefaultOption(!defaultOption)}
              
            }
          >Refresh</button>

{/* Filters  */}
<div className="relative inline-block text-left">
  <div>
    <button type="button" onClick={()=>setDefaultOption(!defaultOption)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-1 h-[4vh] text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
      Sorting Options
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"  />
      </svg>
    </button>
  </div>
{defaultOption == true  && (
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0" onClick={()=>handleSort()}>Stars [low to high] </a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-1"  onClick={()=>TogglehandleSort()}>Stars [high to low]</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2" onClick={()=>handleScore()}>Score [1]</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-3" onClick={()=>toggleScore()}>Score [0]</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-4" onClick={()=>handleWatchersCount()}>Watchers count [low to high]</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-5" onClick={()=>ToggleWatchersCount()}>Watchers count [high to low]</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-6" onClick={()=>ToggleFilterName()}>Sort Name [A-Z] </a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-7" onClick={()=>FilterName()}>Sort Name [Z-A] </a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-8" onClick={()=>createdAtLowhighFilter()}>Sort CreatedAt [A-Z] </a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-9" onClick={()=>HandlecreatedAtLowhighFilter()}>Sort CreatedAt [Z-A] </a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-8" onClick={()=>updatedAtLowhighFilter()}>Sort UpdatedAt [A-Z] </a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-9" onClick={()=>HandleupdatedAtLowhighFilter()}>Sort UpdatedAt [Z-A] </a>
    </div>
  </div>
)}
</div>
      </h4>
      
        <div className="w-full h-auto px-24">
            {/* Users Flagged based on Sort Selector */}
            <ProfileContainer message={message} users={setSorting == true ? sorted :  users}/>

        </div>
      

    </div>
  )
}

export default Home