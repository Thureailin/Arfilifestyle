

const Mensmall = (props) => {
 
    const {img} = props;
    return (
      <div
    className="relative  m-5 shadow-gray-700 rounded-lg  ">
    <div className="rounded-lg h-[420px] w-[300px] bg-[length:100%_100%] border" alt="" style={{ backgroundImage: `url(${img})` }}></div>
  </div>
    
    )
  
}

export default Mensmall