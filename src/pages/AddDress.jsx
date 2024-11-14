import { useState } from "react";
import useInsertManDress from "../hooks/useInsertManDress";

const AddDress = () => {
  const { mutate: addManDress } = useInsertManDress();
  const [formData, setFormData] = useState({
    size: "",
    price: "",
    color: "",
    material: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to server)
    console.log(formData);
    addManDress({
      size: formData.size,
      price: formData.price,
      color: formData.color,
      mater: formData.material,
      type: formData.type,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-semibold mb-6">Add New Dress</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Size Input */}
          <div>
            <label htmlFor="size" className="block text-lg font-semibold mb-2">
              Size
            </label>
            <input
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter dress size (e.g., S, M, L)"
              required
            />
          </div>

          {/* Price Input */}
          <div>
            <label htmlFor="price" className="block text-lg font-semibold mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Color Input */}
          <div>
            <label htmlFor="color" className="block text-lg font-semibold mb-2">
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter color"
              required
            />
          </div>

          {/* Material Input */}
          <div>
            <label
              htmlFor="material"
              className="block text-lg font-semibold mb-2"
            >
              Material
            </label>
            <input
              type="text"
              id="material"
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter material"
              required
            />
          </div>

          {/* Type Input */}
          <div>
            <label htmlFor="type" className="block text-lg font-semibold mb-2">
              Type
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter type (e.g., Casual, Formal)"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Add Dress
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDress;
