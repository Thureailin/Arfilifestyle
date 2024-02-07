
const Herosmall = (props) => {

    const {photo} = props;

  return (
    <div
      className=" m-5 shadow-gray-700 rounded-lg ">
      <div className=" rounded-lg h-[480px] w-[350px] bg-[length:100%_100%]  border" alt="" style={{ backgroundImage: `url(${photo})` }}></div>
    </div>
  )
}

export default Herosmall