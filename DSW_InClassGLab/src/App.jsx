import { useState, useEffect } from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  const [student] = useState({
    fullName: "Tendani Nethavhakone",
    studentNumber: "222234247",
    qualification: "Diploma in Business Information Technology"
  });

  const [likes, setLikes] = useState(0);

  const likeProfile = () => {
    setLikes(likes + 1);
  };

  useEffect(() => {
    console.log("Profile liked.");
  }, [likes]);

  return (
    <div className="container">
      <Header />

      <StudentCard
        student={student}
        likes={likes}
        likeProfile={likeProfile}
      />

      <Footer />
    </div>
  );
}

export default App;
