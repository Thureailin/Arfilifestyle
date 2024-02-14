import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import {  useSelector } from "react-redux";
import { GrBlog } from "react-icons/gr";
import TextTruncate from "../components/TextTruncate";
const Threads = () => {


  const [articles,setArticle] = useState([]);
  const url = useSelector(state=>state.cart.url)
  useEffect(() => {
      fetchProduct();
    }, []);

  
    const fetchProduct = async () => {
      const api = await fetch(url+"/api/get/blog");
      const {data} = await api.json();
      setArticle(data)
      console.log(articles)
     
    };
   

    if(articles.length === 0 ){
      return(
          <div className='flex justify-center h-[300px] items-center'>
          <div className='flex flex-col gap-4'>
              <h1 className='text-3xl tracking-wider text-cus-primary font-bold'>There is No Article........</h1>
              <div className="text-center">
              <p className="ml-[130px] text-[35px]"><GrBlog/></p>
              </div>
            {/* <Link to={'/'}>
              <button className='px-4 py-1 btn btn-primary mx-5 text-white '>
                  Fill it
                  </button>
                  </Link> */}
          </div>
          </div>
      )
  }
  return (
      
    <div>
      
      {articles?.map((article)=>{
        const longText = article.description;
        const maxLength = 350;
        const originTime = article.created_at;
        const timestamp = new Date(originTime).getTime();
        const Day = new Date(timestamp).getDate();
        const Month = new Date(timestamp).getMonth()+1;
        const Year = new Date(timestamp).getFullYear();
        const newDateFormat = `${Day}/${Month}/${Year}`;
        return(
          <>
          <div>
<div className="flex justify-center my-11">
        <h2 className='text-2xl font-bold text-cus-primary text-center'>{article.title}</h2>
      </div>
      <div className="flex items-center justify-center">
        <img src={article.photo} className="w-[1000px] h-[400px] object-contain"/>
      </div>
      <div className="flex justify-center mt-5">
          <p className="font-bold">{article.subtitle}</p>
        </div>
        <div className="flex justify-between container -ml-[100px] mt-5">
        <div className="float-right mt-5 ">
          
          <p className="font-bold ml-[200px] "><span className=""><FaRegUser/></span>{article.author}</p>
        </div>
        <div className="float-left mt-5">
          <p className="font-bold ">{newDateFormat}</p>
        </div>
        </div>
      <div className="mt-11 lg:mx-[40px] 2xl:mx-[180px]  xl:mx-[300px] text-cus-primary font-semibold text-left lg:text-left w-[300px] 2xl:w-[1200px] md:w-[800px] xl:w-[800px] lg:w-[900px]">
        {/* <TextTruncate text={longText}xl maxLength={maxLength}/> */}
        <div></div>
        <div dangerouslySetInnerHTML={{__html: article.description}} />
      </div>
     
          </div>
         <hr className=" border-1 border-black mt-5 container"/>
          </>
        )
      })}
      
    </div>
  )
}

export default Threads