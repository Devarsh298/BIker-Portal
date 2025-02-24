function Card({img,Name,Price,Discription,Model})
{
    return(
        <>
               <div className="first p-6 ">
          <div className="relative">
            <img src={`${img}`} alt=""/>
            <ul className="flex justify-between w-full absolute bottom-0 bg-gray-400 bg-opacity-70 p-3">
              <li><i className="fa fa-car p-1" aria-hidden="true"></i>Petrol</li>
              <li><i className="fa fa-calendar p-1" aria-hidden="true"></i>{Model}</li>
              <li><i className="fa fa-user p-1" aria-hidden="true"></i>2 seats</li>
            </ul>
          </div>
          <div className="car-title-m  flex justify-between p-5 bg-white">
            <h6><a href="" className="block text-lg font-bold hover:text-[#228DCB] duration-500">{Name}</a></h6>
            <span className="price font-bold">{Price}</span>
          </div>
          <div className="inventory_info_m p-5 bg-white pt-0 text-[#9e9e9e]">
            <p>{Discription}</p>
          </div>
          <div>

          </div>
        </div>
        </>
    )
}
export default Card