import { Link, useLoaderData } from 'react-router-dom';
import checkOutBanner from '../../assets/images/checkout/checkout.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Auth Provider/AuthProvider';
const CheckOut = () => {
    const checkoutdata= useLoaderData()
    const {price, title, _id}= checkoutdata;
    const {user}= useContext(AuthContext)
    console.log(user);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(message);
    }
    return (
        <>
            <section className='relative'>
                <img src={checkOutBanner} alt="" />
                <div className="absolute top-0 left-0 text-white h-full w-full bg-gradient-to-l from-transparent to-black pl-10 pt-10">
                    <h1 className='absolute top-1/2 left-10 -translate-y-1/3 text-5xl font-bold'>Check Out</h1>
                    <p className='text-white absolute bottom-0 left-1/2 bg-orange-500 px-10 py-2 rounded-tl-full -translate-x-1/2 rounded-tr-full'>
                    <Link to="/" >Home</Link> / CheckOut
                    </p>
                </div>
            </section>

            <section>
                <form onSubmit={handleSubmit} className="w-full mx-auto p-20 shadow-lg rounded">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="col-span-2 flex gap-4">
                        <div className="flex-1">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="mt-1 block py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="First Name"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Last Name"
                            />
                        </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="col-span-2 flex gap-4">
                        <div className="flex-1">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Phone Number"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={user?.email}
                            className="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Email Address"
                            />
                        </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Your message..."
                        />
                    </div>

                    <input
                        type="submit"
                        value="Confirm Order"
                        className="w-full bg-orange-500 font-semibold text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    />
                   
                </form>
            </section>
        </>
    );
};

export default CheckOut;