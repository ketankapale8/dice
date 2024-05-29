import Filter from "../../common/Filter/Filter"
import ProfileContainer from "../ProfileContainer/ProfileContainer"

const Home = () => {
  return (
    <div className="w-full h-full bg-slate-900  ">
      <h4 className="  py-10 flex gap-3 align-middle justify-center  ">
          <input className="rounded-md w-1/3 h-[4vh] text-black" placeholder="Search for a git repository"/>
          <button className="rounded-md w-[120px] h-[4vh] bg-white text-xl ">Search</button>
      </h4>
      <div className="flex px-20">
        <div className="w-2/3 h-screen">
            <ProfileContainer/>

        </div>
        <div className="w-1/3 bg-black">
          <Filter/>
        </div>

      </div>
    </div>
  )
}

export default Home