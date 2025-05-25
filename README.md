# 📱 Instagram Reels-like Stories Viewer (Mobile Only)

This project is a simplified **Instagram Stories/Reels viewer**, built using **React.js**. It allows users to scroll through vertical full-screen posts with tap-based navigation (left/right tap to go back or forward), simulating the real Instagram experience.

⚠️ This project is designed **only for mobile view**.

---

## 📸 Features

- ✅ Mobile-only vertical full-screen view  
- ✅ Scrollable list of story-like posts (images)  
- ✅ Tap right side to go to the next post  
- ✅ Tap left side to go to the previous post  
- ✅ Automatically snaps to the next/previous story  
- ✅ Smooth transitions and responsive layout  
- ✅ Uses random images from the internet  
- ✅ No external UI libraries used  

---

## 📂 Folder Structure

```
reels-viewer/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── PostSlider.js
│   ├── data.js
│   ├── page.css
│   └── index.css
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/reels-viewer.git
cd reels-viewer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npm start
```

Open **http://localhost:3000** in mobile view to experience the project.

---

## 🧪 How to Use

- Scroll vertically to view posts.  
- Tap on the **left half** of the screen to go to the previous post.  
- Tap on the **right half** to go to the next post.  
- No backend or authentication is required — the images are fetched from Unsplash.

---

## 📷 Image Source

Images are randomly fetched using:

```
https://source.unsplash.com/random/1080x1920?1
https://source.unsplash.com/random/1080x1920?2
...
```

Modify `src/posts.js` to change or add your own URLs.

---

## 📦 Built With

- [React](https://reactjs.org/)  
- HTML + CSS  
- Unsplash (for demo images)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

**Your Name**  
[GitHub](https://github.com/AtulPatidar1709) | [LinkedIn](https://linkedin.com/in/atulpatidar09)
