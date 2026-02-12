import { useEffect, useState } from "react";
import "../styles/Gallery.css";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const galleryImages = [
    "/images/one.webp",
    "/images/two.webp",
    "/images/three.webp",
    "/images/four.webp",
  ];

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % galleryImages.length);
  };

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-inner">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => openLightbox(i)}
            >
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div className="lightbox">
          <button className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>

          <button className="lightbox-prev" onClick={showPrev}>
            ‹
          </button>

          <img
            src={galleryImages[activeIndex]}
            alt=""
            className="lightbox-image"
          />

          <button className="lightbox-next" onClick={showNext}>
            ›
          </button>
        </div>
      )}
    </>
  );
}
