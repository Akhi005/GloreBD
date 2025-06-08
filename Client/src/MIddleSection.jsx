export default function MiddleSection(){
    return(
        <>
          <div className="bg-[#ffd5df] flex justify-around items-center px-8 py-8">
            <div className="flex flex-col items-center justify-center">
               <img src="https://i.ibb.co/HfDFzJ2p/fl6q1ht2.png" width="50px" height="50px" className="py-4"/> 
               <div>
                <h2 className="text-center">Easy Exchange Policy</h2>
                <p>We Offer hassle free exchange policy</p>
               </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="https://i.ibb.co/Z6nhnFhK/download.webp" alt="" width="50px" height="50px"  className="py-4"/>
                 <div>
                <h2 className="text-center">3 Days Return Policy</h2>
                <p>We provide 3 days free return policy</p>
               </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="https://i.ibb.co/rR9LZGNQ/download-1.webp" alt="" width="50px" height="50px" className="py-4" />
                 <div>
                <h2 className="text-center">Best customer support</h2>
                <p>we provide 24/7 customer support</p>
               </div>
            </div>
          </div>
        </>
    )
}