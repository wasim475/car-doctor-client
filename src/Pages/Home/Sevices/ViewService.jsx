
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ViewService = ({service}) => {
    const {title,img,price, _id}=service
    return (
        <>
            <section className="border border-gray-500 p-2 rounded-lg">
                <div className="">
                    <img className="w-full h-52 rounded-md" src={img} alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <div className="text-red-500 flex justify-between">
                    <p>Price: <span className="font-medium">${price}</span></p>
                    <FaLongArrowAltRight/>
                    </div>
                    <div>
                        <Link className="border border-gray-300 px-2 bg-green-400 text-white font-semibold rounded-md hover:bg-transparent transition delay-100 py-0" to={`/checkout/${_id}`}>Buy Now</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewService;