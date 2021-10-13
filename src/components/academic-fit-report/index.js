import "./styles.scss"
import { StudentProfile } from "./student-profile"
import { Table } from "components"
import { tableHeaders } from "constants/index"

function AcademicFitReport({ athleteData }) {
  return (
    <div className="academic-fit-report">
      <div>
        <StudentProfile student={athleteData} />
        <Table
          headers={tableHeaders}
          data={athleteData.report}
          gpa={athleteData.gpa}
        />
      </div>
    </div>
  )
}

export default AcademicFitReport
