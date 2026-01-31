import { useState } from "react";
import { ImageSlider } from "./ImageSlider";
import { ProductInfo } from "./ProductInfo";


const images = [
"https://images.unsplash.com/photo-1523275335684-37898b6baf30",
"https://images.unsplash.com/photo-1503602642458-232111445657",
"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
];


export function ProductInformation() {
const [selectedImage, setSelectedImage] = useState(images[0]);


return (
<div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-6 items-start">
<ImageSlider
images={images}
selectedImage={selectedImage}
onSelect={setSelectedImage}
/>


<div className="flex justify-center">
<img
src={selectedImage}
className="max-w-md w-full rounded-3xl shadow-md"
/>
</div>


<ProductInfo />
</div>
);
}