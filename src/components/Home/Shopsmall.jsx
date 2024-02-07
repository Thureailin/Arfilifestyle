
const Shopsmall = (props) => {
    
    const {photo} = props;
  return (
    
    <div
      className="relative  m-5 shadow-gray-700 rounded-lg ">
      <div className="rounded-lg  h-[450px] w-[360px] bg-[length:100%_100%] border" alt="" style={{ backgroundImage: `url(${photo})` }}></div>
    </div>
  
  )
}

export default Shopsmall