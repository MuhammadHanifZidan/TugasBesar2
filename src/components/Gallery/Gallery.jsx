import React, { useState } from 'react'
import {
  Image6, Image7, Image8, Image9,
  Image10, Image11, Image13
} from '../../assets'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isZoomed, setIsZoomed] = useState(false)

  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc)
    setIsZoomed(false) // Reset zoom state ketika gambar baru dipilih
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setIsZoomed(false)
  }

  const toggleZoom = (e) => {
    e.stopPropagation() // Mencegah event bubbling ke overlay
    setIsZoomed(!isZoomed)
  }

  return (
    <div className="wrapper">
      <h1 className="gallery-title">GALLERY</h1>

      <div className="gallery-container">
        {[Image6, Image8, Image7, Image9, Image10, Image11, Image13].map((img, idx) => (
          <img key={idx} src={img} alt="gallery" onClick={() => openLightbox(img)} />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <img 
            src={selectedImage} 
            alt="preview" 
            className={isZoomed ? 'enlarged' : ''}
            onClick={toggleZoom}
          />
        </div>
      )}
    </div>
  )
}

export default Gallery