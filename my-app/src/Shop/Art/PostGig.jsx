
import React, { useState } from 'react';

const PostGig = () => {
  const [gig, setGig] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setGig(prev => ({ ...prev, [name]: value }));
  };

  const handleImage = e => {
    const file = e.target.files[0];
    setGig(prev => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send gig data to backend
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Post Your Gig</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold">Title</label>
        <input
          type="text"
          name="title"
          value={gig.title}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-4"
          required
        />
        <label className="block mb-2 font-semibold">Description</label>
        <textarea
          name="description"
          value={gig.description}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-4"
          required
        />
        <label className="block mb-2 font-semibold">Price ($)</label>
        <input
          type="number"
          name="price"
          value={gig.price}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-4"
          required
        />
        <label className="block mb-2 font-semibold">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="mb-4"
        />
        {preview && <img src={preview} alt="Preview" className="w-full h-40 object-cover mb-4 rounded" />}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Post Gig</button>
      </form>
      {submitted && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
          <strong>Gig posted successfully!</strong>
          <div>Title: {gig.title}</div>
          <div>Description: {gig.description}</div>
          <div>Price: ${gig.price}</div>
          {preview && <img src={preview} alt="Preview" className="w-full h-32 object-cover mt-2 rounded" />}
        </div>
      )}
    </div>
  );
};

export default PostGig;