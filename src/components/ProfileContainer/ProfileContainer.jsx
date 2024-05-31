
const ProfileContainer = ({users ,message}) => {
  
    // console.log(users?.items?.sort((a,b) => (a.stargazers_count - b.stargazers_count)))

  return (
      <div className="px-20 py-20  grid grid-cols-3  grid-flow-row gap-4 overflow-auto ">
    {users && users?.items?.length > 0 ? (
          users?.items?.map((item) => {
            return (
            <div key={item.id} className="flex flex-col gap-4 px-4 w-[20vw] h-[37vh] pt-5 pb-5 text-sm  rounded-md bg-white ">
                <img className="w-[60px] h-[60px] mx-[40%]  bg-cover rounded-md" src={item.owner.avatar_url}/>
                <div className="flex gap-1">
                  <h4   className="font-medium ">Name:</h4>
                {item.name}
                </div>
                <div className="flex gap-1">
                  <h4  className="font-medium " >Stars:</h4>
                {item.stargazers_count}
                </div>

                <div className="flex gap-1">
                  <p  className="font-medium " >Repo Name:</p>
                {item.owner.repos_url}
                </div>

                
                <div className="flex gap-1">
                  <h4  className="font-medium " >Description:</h4>
                {item.description == null ? "Not Specified" : item?.description?.length > 50 ? item?.description?.slice(0,40).concat("...") : item.description}
                </div>
                <div className="flex gap-1">
                  <h4   className="font-medium ">Language:</h4>
                {item.language == null  ? "Not Specified" : item.language}
                </div>

            </div>)
          }
        ) 
    )
    : (
      <>
          <div className="w-full h-[60vh] ">
              <h3 className="text-3xl text-white ">{message}</h3>

            </div>
    </>
   )
   }
   </div>
   
  )
}

export default ProfileContainer