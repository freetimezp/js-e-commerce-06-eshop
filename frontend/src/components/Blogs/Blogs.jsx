
import Heading from "../Shared/Heading";

import Img1 from '../../assets/blogs/blog-1.jpg';
import Img2 from '../../assets/blogs/blog-2.jpg';
import Img3 from '../../assets/blogs/blog-3.jpg';

const blogData = [
    {
        id: 1,
        title: "How to choose perfect smartwatch",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sit quibusdam nulla quam, voluptas alias expedita doloremque
        soluta a cupiditate illum enim sint provident perspiciatis beatae`,
        published: "Jan 20, 2024 by Me",
        image: Img1
    },
    {
        id: 2,
        title: "How to choose perfect smartwatch",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sit quibusdam nulla quam, voluptas alias expedita doloremque
        soluta a cupiditate illum enim sint provident perspiciatis beatae`,
        published: "Jan 20, 2024 by Me",
        image: Img2
    },
    {
        id: 3,
        title: "How to choose perfect smartwatch",
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sit quibusdam nulla quam, voluptas alias expedita doloremque
        soluta a cupiditate illum enim sint provident perspiciatis beatae`,
        published: "Jan 20, 2024 by Me",
        image: Img3
    },
];

const Blogs = () => {
    return (
        <div className="my-12">
            <div className="container">
                <Heading title="Recent News" subtitle="Explore Our Blogs" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
                    gap-y-8 sm:gap-4 md:gap-7">
                    {blogData.map((data) => (
                        <div key={data.id} className="bg-white dark:bg-gray-800">
                            <div className="overflow-hidden rounded-2xl mb-2">
                                <img
                                    src={data.image} alt="blog"
                                    className="w-full h-[220px] object-cover rounded-2xl hover:scale-105
                                    duration-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500">{data.published}</p>
                                <p className="font-bold line-clamp-1">{data.title}</p>
                                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                                    {data.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;
