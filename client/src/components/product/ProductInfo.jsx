import Button from "../common/Button";


export function ProductInfo() {
return (
<div className="space-y-6">
<div>
<h1 className="text-3xl font-semibold text-[#2b2b2b]">
Premium Analog Watch
</h1>
<p className="text-sm text-gray-500 mt-1">
Luxury Accessories
</p>
</div>


<div className="flex items-center gap-4">
<span className="text-2xl font-bold text-[#2b2b2b]">
$129.00
</span>
<span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-700">
In Stock
</span>
</div>


<p className="text-gray-600 leading-relaxed">
Designed for modern professionals, this premium watch features
a brushed stainless steel case paired with a genuine leather strap.
</p>


<ul className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
<li>• Water Resistant</li>
<li>• Leather Strap</li>
<li>• Quartz Movement</li>
<li>• 2 Year Warranty</li>
</ul>


<div className="flex flex-col gap-3 pt-2">
<Button>Add to Cart</Button>
<Button variant="secondary">Buy Now</Button>
<Button variant="link">♡ Add to Wishlist</Button>
</div>
</div>
);
}