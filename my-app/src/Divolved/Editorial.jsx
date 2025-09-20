
import React, {useState, useEffect} from 'react'
import { useRef } from 'react'

const Editorial = ({onSuccess}) => {
    const [formData, setFormData] = useState({
        src : null,
        name : "",
        inventor : "",
        weight : "",
        size : "",
        type : "",
        description : "",
        price : "",
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const fileInputRef = useRef(null)

    const handlechange =  (e) => {
        const {name, value, files} = e.target;
        setFormData((prev) =>({
            ...prev,
            [name] : files ? files[0] : value,
        }))
    }

    const handlesubmit =  async(e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const formPayload = new FormData();
            Object.keys(formData).forEach((key) => {
                formPayload.append(key, formData[key])
            });

            const res = await fetch('http://localhost:3000/api/art2',{
                method : "POST",
                body : formPayload
            })
            const data = await res.json()

            if(!res.ok) {
                throw new Error(data.error || 'Failed to post data')
            }
            

            onSuccess && onSuccess(data)

            //Reset form
            setFormData({ src : null, name : "", inventor : "", weight : "", size : "", type : "", description : "", price : "" })
            if(fileInputRef.current) fileInputRef.current.value = ""
        } catch (err) {
            console.error(" Error updating bla bla", err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

  return (
    <div>
      <form onSubmit={handlesubmit} className='bg-[#e9e6e6] flex flex-col gap-3  w-[800px]'>
        <input type="file" name='src' accept='image/*' onChange={handlechange} ref={fileInputRef} required/>
        <input type="text" name='name' placeholder='Enter name' value={formData.name} onChange={handlechange} required/>
        <input type="text" name='inventor' placeholder='Inventor' value={formData.inventor} onChange={handlechange} required/>
        <input type="text" name='weight' placeholder='Enter weight' value={formData.weight} onChange={handlechange} required/>
        <input type="text" name='size' placeholder='Enter size' value={formData.size} onChange={handlechange} required/>
        <input type="text" name='type' placeholder='Enter type' value={formData.type} onChange={handlechange} required/>
        <textarea type="text" name='description' placeholder='Enter description' value={formData.description} onChange={handlechange} required/>
        <input type="text" name='price' placeholder='Enter price' value={formData.price} onChange={handlechange} required/>
        {error && <p className='text-red-500'>{error}</p> }
        <button type='submit' disabled={loading}>
            {loading ? 'Posting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default Editorial


    // {
    //     id : 1,
    //     src : hague,
    //     name : "The Hague",
    //     inventor : "Ryan McGuire",
    //     weight : "1.2kg",
    //     size : "2.5 metres",
    //     type : "artifact",
    //     description : "A beautiful invention that captures the essence of The Hague, showcasing its iconic architecture and vibrant culture.",
    //     price : "$320"
    // },