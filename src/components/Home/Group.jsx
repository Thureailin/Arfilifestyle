import couple from '../../assets/img/home/New folder/group.png'
const Group = () => {
  return (
<section className="mb-11 mt-11">
      <div className="">
        <div className="block md:grid md:grid-cols-2 space-x-6">
          <img
            src={couple}
            className="mb-11 lg:ml-[100px] md:h-[400px] shadow-lg object-fit object-top md:w-[500px] lg:h-[450px] h-[300px] border"
            alt=""
          />
          <div className="space-y-8 md:flex md:flex-col md:justify-center block">
            <h1 className="text-4xl uppercase text-cus-primary font-bold">
              group orders
            </h1>
            <p className="text-lg">
              Our premium-quality medical scrubs, designed specifically for
              healthcare professionals, offer a unique combination of comfort
              and style. Group order option is available for added convenience.
            </p>
            <div>
              
              
              
                <div className="lg:flex gap-3 items-center inline-block bg-cus-secondary w-[150px]  p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                  <span>Contact Us</span>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>  )
}

export default Group