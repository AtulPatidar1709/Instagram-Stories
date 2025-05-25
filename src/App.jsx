import posts from "./data/stories.json";
import PostSlider from "./Components/PostSlider/page";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <PostSlider posts={posts} />
    </div>
  );
}
