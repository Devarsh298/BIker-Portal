function Bikelist({ img, Name, Price, Model }) {
    return (
        <>
            <div className="bg-gray-100 rounded-lg shadow-md p-4 lg:ml-14 lg:flex mb-5">
                <img src={`${img}`} alt="Bike"
                    className="  rounded mr-4 object-cover w-1/2" />
                <div>
                    <h3 className="font-bold text-xl">{Name}</h3>
                    <p className="text-sm text-gray-600 mt-10">
                        {Price}Per Day
                    </p>
                    <ul className="flex space-x-4 text-sm  text-gray-600 mt-10">
                        <li><i className="fa fa-user p-1" aria-hidden="true"></i>2 Seats</li>
                        <li><i className="fa fa-calendar p-1" aria-hidden="true"></i>{Model} model</li>
                        <li><i className="fa fa-car p-1" aria-hidden="true"></i>Petrol</li>
                    </ul>
                    <div className="mt-10">
                        <a href="" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                            View Details</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bikelist