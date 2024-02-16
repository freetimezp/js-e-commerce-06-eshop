/* eslint-disable react/prop-types */

import Button from "../Shared/Button";

const ProductsList = ({ data }) => {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 
                place-items-center">
                {data.map(product => (
                    <div key={product.id} className="group duration-500 transition-all">
                        <div className="relative">
                            <img
                                src={product.img} alt="product"
                                className="w-[260px] h-[180px] object-cover rounded-md"
                            />
                            <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 
                                left-1/2 -translate-x-1/2 w-full h-full text-center 
                                group-hover:backdrop-blur-sm justify-center items-center
                                duration-500 transition-all">
                                <Button text="Add To Cart" bgColor="bg-primary" textColor="text-white" />
                            </div>
                        </div>
                        <div className="leading-7">
                            <h2 className="font-semibold">{product.title}</h2>
                            <h2 className="font-bold">${product.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsList;
