import profile from "../assets/profile.jpg";

function StudentCard({ student, likes, likeProfile }) {
  return (
    <div className="card">

      <img
        src={profile}
        alt="Profile"
        className="profile-image"
      />

      <h2>{student.fullName}</h2>

      <p>
        <strong>Student Number:</strong> {student.studentNumber}
      </p>

      <p>
        <strong>Qualification:</strong> {student.qualification}
      </p>

      <button onClick={likeProfile}>
        Like Profile
      </button>

      <h3>Likes: {likes}</h3>

    </div>
  );
}

export default StudentCard;