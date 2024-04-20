'use client'
import axios from 'axios';
import React, { useState } from 'react'


const AudioPlayer = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: { target: { files: React.SetStateAction<null>[]; }; }) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('audioFile', selectedFile);

    try {
      const response = await axios.post('http://localhost:3005/upload-audio', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Audio</button>
    </div>
  )
}

export default AudioPlayer