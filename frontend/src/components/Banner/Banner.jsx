/* eslint-disable react/prop-types */


const Banner = ({ data }) => {
    return (
        <div className="min-h-[450px] flex justify-center items-center py-0">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center
                    text-white rounded-3xl" style={{ backgroundColor: data.bgColor }}>
                    <div className="p-6 sm:p-8">
                        <p
                            className="text-sm"
                            data-aos="slide-right"
                        >
                            {data.discount}
                        </p>
                        <h1
                            className="uppercase text-4xl lg:text-7xl font-bold"
                            data-aos="zoom-out"
                        >{data.title}</h1>
                        <p
                            className="text-sm"
                            data-aos="fade-up"
                        >{data.date}</p>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <img
                            data-aos="zoom-in"
                            src={data.image} alt="banner"
                            className="w-[250px] scale-125 md:w-[340px] mx-auto drop-shadow-2xl
                            object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                        <p
                            className="font-bold text-xl"
                            data-aos="zoom-out"
                        >{data.title2}</p>
                        <p
                            className="text-3xl sm:text-5xl font-bold"
                            data-aos="fade-up"
                        >{data.title3}</p>
                        <p
                            className="text-sm tracking-wide leading-5"
                            data-aos="fade-up"
                        >{data.title4}</p>

                        <div data-aos="fade-up" data-aos-offset="0">
                            <button className="bg-white text-primary py-2 px-4 rounded-full 
                                font-bold">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
