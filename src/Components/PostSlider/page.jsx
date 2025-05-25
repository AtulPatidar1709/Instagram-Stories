// src/PostSlider.js
import { useRef, useState, useEffect } from "react";
import "./page.css";

const PostSlider = ({ posts }) => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (newIndex) => {
    if (newIndex < 0 || newIndex >= posts.length) return;
    setIndex(newIndex);
    containerRef.current.scrollTo({
      top: newIndex * window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleTap = (e) => {
    const x = e.clientX;
    const middle = window.innerWidth / 2;
    if (x < middle) {
      scrollToIndex(index - 1);
    } else {
      scrollToIndex(index + 1);
    }
  };

  useEffect(() => {
    scrollToIndex(index);
  }, [index]);

  return (
    <div className="story-container-vertical" ref={containerRef} onClick={handleTap}>
      {posts.map((post, i) => (
        <div className="story-slide-vertical" key={i}>
          <img src={post.image} alt={`Story ${i}`} className="story-image" />
        </div>
      ))}
    </div>
  );
};

export default PostSlider;
