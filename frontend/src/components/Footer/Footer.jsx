import { FaInstagram, FaLocationArrow, FaMobileAlt, FaTwitter, FaYoutube } from "react-icons/fa";


const footerLinks = [
    {
        id: 1,
        title: "Home",
        link: "/#"
    },
    {
        id: 2,
        title: "About",
        link: "/#about"
    },
    {
        id: 1,
        title: "Contact",
        link: "/#contact"
    },
    {
        id: 4,
        title: "Blogs",
        link: "/#blogs"
    },
];

const Footer = () => {
    return (
        <div className="dark:bg-gray-950">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className="py-8 px-4">
                        <a href="#" className="text-primary font-semibold tracking-widest 
                            text-2xl uppercase sm:text-3xl">
                            Eshop
                        </a>
                        <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Delectus dolorum odit fuga fugiat fugit.
                        </p>
                        <p className="text-gray-500 mt-4">
                            Mady By Freetime
                        </p>
                        <a href="#" className="inline-block bg-primary/90 text-white py-2 
                            px-4 mt-4 text-sm rounded-full">
                            Visit Youtube channel
                        </a>
                    </div>

                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left mb-3 text-gray-700
                                dark:text-white">
                                Important Links
                            </h1>
                            <ul className="space-y-3">
                                {footerLinks.map(data => (
                                    <li key={data.id}>
                                        <a href={data.link} className="text-gray-600 hover:text-black
                                            duration-300 hover:ml-2 dark:hover:text-white">
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left mb-3 text-gray-700
                                dark:text-white">
                                Quick Links
                            </h1>
                            <ul className="space-y-3">
                                {footerLinks.map(data => (
                                    <li key={data.id}>
                                        <a href={data.link} className="text-gray-600 hover:text-black
                                            duration-300 hover:ml-2 dark:hover:text-white">
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <h1 className="text-xl font-bold sm:text-left mb-3 text-gray-700
                                dark:text-white">
                                Contact
                            </h1>
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Ukraine, Zaporizhzhya</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>+12 345 67890</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="#">
                                        <FaInstagram className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                    <a href="#">
                                        <FaTwitter className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                    <a href="#">
                                        <FaYoutube className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
