
import React, { useState, useRef } from "react";

const Whatsnew = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    src: null,
    name: "",
    author: "",
    size: "",
    description: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formPayload = new FormData();
      Object.keys(formData).forEach((key) => {
        formPayload.append(key, formData[key]);
      });

      const res = await fetch("http://localhost:3000/api/art", {
        method: "POST",
        body: formPayload,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to post data");
      }

      onSuccess && onSuccess(data);

      // Reset form
      setFormData({
        src: null,
        name: "",
        author: "",
        size: "",
        description: "",
        price: "",
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("Error posting artwork:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="file"
        name="src"
        accept="image/*"
        onChange={handleChange}
        ref={fileInputRef}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Artwork Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="size"
        placeholder="Size (e.g., 6x6m)"
        value={formData.size}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      {error && <p style={styles.error}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Submit"}
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    margin: "auto",
  },
  error: {
    color: "red",
  },
};

export default Whatsnew;