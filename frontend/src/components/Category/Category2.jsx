
import Image1 from '../../assets/category/gaming.png';
import Image2 from '../../assets/category/vr.png';
import Image3 from '../../assets/category/speaker.png';
import Button from '../Shared/Button';

const Category2 = () => {
    return (
        <div className='py-8'>
            <div className='container'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500 
                        to-gray-200 text-white rounded-3xl relative h-[320px] flex 
                        items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>
                                    Laptop
                                </p>

                                <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
                            </div>
                        </div>
                        <img
                            src={Image1}
                            alt="category"
                            className='w-[250px] md:w-[300px] absolute top-1/2 -translate-y-1/2 -right-0'
                        />
                    </div>

                    <div className='py-10 pl-5 bg-gradient-to-br from-black to-brandGreen/70
                        text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>
                                    Earphone
                                </p>

                                <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
                            </div>
                        </div>
                        <img src={Image2} alt="category" className='w-[250px] md:w-[150px] absolute bottom-0 right-0' />
                    </div>

                    <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/60 to-brandBlue
                        text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>
                                    Gadget
                                </p>

                                <Button text="Browse" bgColor="bg-white" textColor="text-brandBlue" />
                            </div>
                        </div>
                        <img
                            src={Image3}
                            alt="category"
                            className='w-[220px] absolute right-0 lg:top-[10px]'
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Category2;
