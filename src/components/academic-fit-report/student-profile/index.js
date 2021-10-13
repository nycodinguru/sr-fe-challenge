import { useEffect, useState } from "react"

import "./styles.scss"
import { getInitials } from "utils/getInitials"

export function StudentProfile({ student }) {
  const [profileImage, setProfileImage] = useState(null)

  useEffect(() => {
    console.log(student)

    setTimeout(() => {
      setProfileImage(student?.profile_image)
    }, 30000)
  }, [student])

  return (
    <div className="student-profile">
      <div className="student-profile__left">
        <div
          className={`student-profile__profile-image ${
            !profileImage ? "render-initials" : ""
          }`}
          style={{ backgroundImage: `url(${profileImage})` }}>
          {!profileImage && getInitials(student?.name)}
        </div>
        <div className="student-profile__info--column first-column">
          <h3 className="student-profile__info--header">{student?.name}</h3>
          <p className="student-profile__info--item">
            <span>Sport:</span> {student?.sport}
          </p>
          <p className="student-profile__info--item">
            <span>Class:</span> {student?.grad_year}
          </p>
          <p className="student-profile__info--item">
            <span>Club:</span> {student?.club?.name}
          </p>
        </div>
        <div className="student-profile__info--column">
          <p className="student-profile__info--item">
            <span>High School:</span> {student?.high_school?.name}
          </p>
          <p className="student-profile__info--item">
            <span>GPA:</span>
            {"  "}
            {student?.gpa}
          </p>
          <p className="student-profile__info--item">
            <span>Desired Major:</span>
            {"  "}
            {student?.major}
          </p>
        </div>
      </div>
      <div className="student-profile__right">
        <div className="student-profile__logo"></div>
        <h1 className="student-profile__header">Academic Fit Report</h1>
      </div>
    </div>
  )
}
