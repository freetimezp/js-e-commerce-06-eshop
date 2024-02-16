/* eslint-disable no-unused-vars */
import Heading from "../Shared/Heading";
import ProductsList from "./ProductsList";

import img1 from '../../assets/product/p-1.jpg';
import img2 from '../../assets/product/p-2.jpg';
import img3 from '../../assets/product/p-3.jpg';
import img4 from '../../assets/product/p-4.jpg';
import img5 from '../../assets/product/p-5.jpg';
import img6 from '../../assets/product/p-2.jpg';
import img7 from '../../assets/product/p-7.jpg';
import img8 from '../../assets/product/p-8.jpg';

const productData = [
    {
        id: 1,
        img: img1,
        title: "Boat Headphone",
        price: 120,
        aosDelay: "0"
    },
    {
        id: 2,
        img: img2,
        title: "Rocky Mountine",
        price: 420,
        aosDelay: "200"
    },
    {
        id: 3,
        img: img3,
        title: "Goggles",
        price: 320,
        aosDelay: "400"
    },
    {
        id: 4,
        img: img4,
        title: "Printed",
        price: 384,
        aosDelay: "600"
    },
];

const productData2 = [
    {
        id: 1,
        img: img5,
        title: "Boat Headphone",
        price: 120,
        aosDelay: "0"
    },
    {
        id: 2,
        img: img6,
        title: "Rocky Mountine",
        price: 420,
        aosDelay: "200"
    },
    {
        id: 3,
        img: img7,
        title: "Goggles",
        price: 320,
        aosDelay: "400"
    },
    {
        id: 4,
        img: img8,
        title: "Printed",
        price: 384,
        aosDelay: "600"
    },
];

const Products = () => {
    return (
        <div>
            <div className="container">
                <Heading title="Our Products" subtitle="Explore Our Products" />

                <ProductsList data={productData} />
                <ProductsList data={productData2} />
            </div>
        </div>
    );
}

export default Products;
