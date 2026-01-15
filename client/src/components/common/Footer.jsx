

export default function Footer() {
    return (
         <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Furnish<span className="text-black">.</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Premium handcrafted furniture designed to bring comfort and
              elegance to your home.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Products</li>
              <li className="hover:text-black cursor-pointer">Blogs</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-black cursor-pointer">FAQs</li>
              <li className="hover:text-black cursor-pointer">Shipping</li>
              <li className="hover:text-black cursor-pointer">Returns</li>
              <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-3">
              Subscribe to get special offers & updates.
            </p>

            <div className="flex items-center border rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full outline-none text-sm"
              />
              <button className="bg-black text-white px-5 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Furnish. All rights reserved.
        </div>

      </div>
    </footer>
    );
}
