import { Link } from "react-router-dom"
import inno from "../../assets/img/home/New folder/sec.jpg"
const Define = () => {
  return (
    <section className="mx-2 xl:mt-11">
   
    <div className="lg:text-center mt-11">
    <div className="block lg:flex justify-center md:flex  xl:flex 2xl:flex items-center "
      // className="relative   xl:w-full 2xl:h-[600px] lg:h-[500px] sm:w-full  h-[250px] md:h-[700px] bg-[length:100%_100%]"style={{ backgroundImage: `url(${newImg})` }}
    >
      {/* <div className="w-[7500px] h-[500px] object-fit"style={{ backgroundImage: `url(${newImg})` }}></div>
      <div className="w-[800px] h-[500px] object-fit"style={{ backgroundImage: `url(${newImg})` }}></div> */}
      
      {/* <div className="">
      <p className="absolute sm:left-[100px] sm:top-[1400px] 2xl:top-[950px] 2xl:left-[1000px] 2xl:text-[20px] xl:text-[15px] xl:font-semibold  xl:top-[900px] xl:left-[800px] lg:left-[635px] lg:top-[900px] md:text-[20px] md:font-bold  md:top-[900px] md:left-[500px] md:text-lg  left-[20px] top-[1250px]  ">Get ready to experience our premium-quality</p>
       <p className="absolute sm:top-[1425px] sm:left-[100px] 2xl:top-[975px] 2xl:left-[1000px] 2xl:text-[20px] xl:text-[15px] xl:font-semibold xl:top-[925px] xl:left-[800px] lg:left-[635px] lg:top-[925px]  md:top-[925px] md:left-[500px] md:text-lg left-[20px] top-[1275px]  " >medical scrubs that are specifically designed</p>  
        <p className="absolute sm:top-[1450px] sm:left-[100px] 2xl:top-[1000px] 2xl:left-[1000px] 2xl:text-[20px] xl:text-[15px]  xl:font-semibold xl:top-[950px] xl:left-[800px] lg:left-[635px] lg:top-[950px] md:top-[950px] md:left-[500px] md:text-lg left-[20px] top-[1300px]">for healthcare professionals. OUr scrubs provide </p>  
         <p className="absolute  sm:top-[1475px] sm:left-[100px] 2xl:top-[1025px] 2xl:left-[1000px] 2xl:text-[20px] xl:text-[15px]  xl:font-semibold xl:top-[975px] xl:left-[800px] lg:left-[635px] lg:top-[975px] md:top-[975px] md:left-[500px] md:text-lg mb-5 left-[20px] top-[1325px]" > both comfort and style that you  find anywhere else.</p>
      <h1 className="absolute sm:top-[1525px] sm:left-[100px] md:text-[40px] 2xl:top-[1070px] 2xl:left-[1000px] 2xl:text-[50px] xl:text-[50px] xl:font-semibold  xl:top-[1000px] xl:left-[800px]  lg:left-[635px] lg:top-[1030px] lg:text-[40px] md:top-[1010px] md:left-[500px] text-[30px] font-semibold text-cus-primary uppercase md:absolute top-[1365px]   left-[60px]">THE WAIT IS OVER
      </h1>
      <h1 className='absolute sm:top-[1570px] sm:left-[100px] md:text-[40px] 2xl:top-[1150px] 2xl:left-[1000px] 2xl:text-[70px] xl:text-[50px] xl:top-[1075px] xl:left-[800px] lg:left-[630px] lg:text-[40px] lg:top-[1100px] md:top-[1070px] text-[30px] md:left-[500px] font-semibold text-cus-primary uppercase md:absolute top-[1400px]   left-[100px]'>ARFI IS HERE.</h1>
    </div>  */}
    <div className="bg-gray-100 py-1 md:py-[100px] lg:py-[100px] xl:py-[100px] 2xl:py-[100px]">
    <div className=" flex flex-col  justify-center  md:px-[100px] px-1 lg:px-[100px] xl:px-[100px] 2xl:px-[100px]  ">
          <p className="text-md">
            We believe that our customers deserve the best,
          </p>
          <p className=" text-md">
            which is why we are committed to providing </p>
            <p> exceptional customer service and ensuring that</p>
           <p>our products meet and exceed
            expectations.</p>
        

          
           <Link to={'/videoInventory'}>
              <div className="mt-5">
                <button className="pl-4 p-4 bg-cus-secondary rounded-[20px]">You want more awesome videos?</button>
              </div>
              </Link>
         
          <h1
            className="text-2xl mt-5 mx-2 md:text-4xl uppercase text-cus-primary font-bold"
          >
            WE DEFINE PREMIUM.
          </h1>
        </div>

    </div>
    <div className="">
        <img src={inno} alt="" className=" md:w-full lg:w-[600px] lg:h-[430px] w-[500px] h-[300px]  "/>
      </div>
      {/* <div className="">
        <img src={newImg} alt="" className="w-[500px] h-300px] lg:w-[700px] lg:h-[450px] "/>
      </div> */}
      
  </div>
  </div> 
  
     {/* <div className="">
      <p className="absolute sm:left-[100px] sm:top-[1400px] 2xl:top-[950px] 2xl:left-[1000px] 2xl:text-[20px] xl:text-[15px] xl:font-semibold  xl:top-[900px] xl:left-[800px] lg:left-[635px] lg:top-[900px] md:text-[20px] md:font-bold  md:top-[900px] md:left-[500px] md:text-lg  left-[20px] top-[1250px]  ">Get ready to experience our premium-quality</p>
       <p className="absolute sm:top-[1425px] sm:left-[100px] 2xl:top-[975px] 2xl:left-[1000px] 2xl:text-[20px] xl:text-[15px] xl:font-semibold xl:top-[925px] xl:left-[800px] lg:left-[635px] lg:top-[925px]  md:top-[925px] md:left-[500px] md:text-lg left-[20px] top-[1275px]  " >medical scrubs that are specifically designed</p>  
        <p className="absolute sm:top-[1450px] sm:left-[100px] 2xl:top-[1000px] 2xl:left-[1000px] 2xl:text-[20px] xl:text-[15px]  xl:font-semibold xl:top-[950px] xl:left-[800px] lg:left-[635px] lg:top-[950px] md:top-[950px] md:left-[500px] md:text-lg left-[20px] top-[1300px]">for healthcare professionals. OUr scrubs provide </p>  
         <p className="absolute  sm:top-[1475px] sm:left-[100px] 2xl:top-[1025px] 2xl:left-[1000px] 2xl:text-[20px] xl:text-[15px]  xl:font-semibold xl:top-[975px] xl:left-[800px] lg:left-[635px] lg:top-[975px] md:top-[975px] md:left-[500px] md:text-lg mb-5 left-[20px] top-[1325px]" > both comfort and style that you  find anywhere else.</p>
      <h1 className="absolute sm:top-[1525px] sm:left-[100px] md:text-[40px] 2xl:top-[1070px] 2xl:left-[1000px] 2xl:text-[50px] xl:text-[50px] xl:font-semibold  xl:top-[1000px] xl:left-[800px]  lg:left-[635px] lg:top-[1030px] lg:text-[40px] md:top-[1010px] md:left-[500px] text-[30px] font-semibold text-cus-primary uppercase md:absolute top-[1365px]   left-[60px]">THE WAIT IS OVER
      </h1>
      <h1 className='absolute sm:top-[1570px] sm:left-[100px] md:text-[40px] 2xl:top-[1150px] 2xl:left-[1000px] 2xl:text-[70px] xl:text-[50px] xl:top-[1075px] xl:left-[800px] lg:left-[630px] lg:text-[40px] lg:top-[1100px] md:top-[1070px] text-[30px] md:left-[500px] font-semibold text-cus-primary uppercase md:absolute top-[1400px]   left-[100px]'>ARFI IS HERE.</h1>
    </div>  */}
  </section>
  )
}

export default Define