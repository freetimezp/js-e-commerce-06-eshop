/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
import Button from "../Shared/Button";


const Popup = ({ orderPopup, handleOrderPopup }) => {
    return (
        <>
            {
                orderPopup && (
                    <div>
                        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50
                        z-50 backdrop-blur-sm">
                            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            p-4 shadow-md bg-white dark:bg-gray-700 dark:text-white duration-300
                            rounded-md">
                                <div className="flex items-center justify-between mb-4">
                                    <h1>Order Now</h1>
                                    <div>
                                        <IoMdClose
                                            className="text-2xl cursor-pointer"
                                            onClick={handleOrderPopup}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="form-input"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Your email"
                                        className="form-input"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className="form-input"
                                    />

                                    <div className="flex justify-center">
                                        <Button
                                            text="Order Now"
                                            bgColor={"bg-primary"}
                                            textColor={"text-white"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Popup;
