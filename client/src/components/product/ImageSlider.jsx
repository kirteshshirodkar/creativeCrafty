export function ImageSlider({ images, selectedImage, onSelect }) {
return (
<div className="flex md:flex-col gap-3">
{images.map((img, i) => (
<img
key={i}
src={img}
onClick={() => onSelect(img)}
className={`w-20 h-20 object-cover rounded-xl cursor-pointer border transition ${
selectedImage === img
? "border-[#2b2b2b]"
: "border-transparent hover:border-gray-400"
}`}
/>
))}
</div>
);
}