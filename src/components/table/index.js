import "./styles.scss"

import { tableLegend } from "constants/index"

export function Table({ data, headers, gpa }) {
  let keyCount = 0

  const getKey = (prefix) => {
    keyCount = keyCount += 1
    return `${prefix}-${keyCount}`
  }

  const renderColorClass = (_gpa) => {
    let className
    const diff = (gpa - _gpa).toFixed(1)

    if (diff < 0.1) {
      className = "a"
    } else if (diff <= 0.1) {
      className = "b"
    } else if (diff === 0.0) {
      className = "c"
    } else if (diff > 0.1) {
      className = "d"
    } else if (diff >= 0.1) {
      className = "e"
    }

    return className
  }

  const renderTd = (entry) => {
    switch (entry[0]) {
      case "act":
        return [entry[1]].map((act) => {
          return (
            <>
              <td key={getKey("td")} className="table__data">
                {Object.values(act).map((value, index) => {
                  if (Number.isInteger(value))
                    return `${value}${index === 0 ? "-" : " "}`
                  else {
                    return `${index !== 0 ? "Not Reported" : " "}`
                  }
                })}
              </td>
            </>
          )
        })
      case "sat":
        return [entry[1]].map((sat) => {
          return (
            <>
              <td key={getKey("td")} className="table__data">
                {Object.values(sat.reading).map((value, index) => {
                  if (Number.isInteger(value))
                    return `${value}${index === 0 ? "-" : " "}`
                  else {
                    return `${index !== 0 ? "Not Reported" : " "}`
                  }
                })}
              </td>
              <td key={getKey("td")} className="table__data">
                {Object.values(sat.math).map((value, index) => {
                  if (Number.isInteger(value))
                    return `${value}${index === 0 ? "-" : " "}`
                  else {
                    return `${index !== 0 ? "Not Reported" : " "}`
                  }
                })}
              </td>
            </>
          )
        })
      case "gpa":
        return Object.entries(entry[1]).map((gpa) => {
          return (
            <td
              key={getKey("td")}
              style={{ width: "10px" }}
              className={`table__data ${
                gpa[0] === "50%" ? renderColorClass(gpa[1]) : ""
              }`}>
              {"   "}
              {gpa[1].toFixed(2)}
              {"   "}
            </td>
          )
        })
      case "school":
      case "division":
      case "conference":
      case "ranking":
        return (
          <td
            key={getKey("td")}
            className={`table__data ${
              ["conference", "school"].includes(entry[0]) ? "left" : ""
            }`}>
            {entry[1]}
          </td>
        )
      default:
        return null
    }
  }

  const renderTable = () => {
    return (
      <>
        <tr key={getKey("headers")} className="table__headers">
          {headers.map((header) => {
            return (
              <td key={header} className="table__header">
                <div>
                  {header.map((subHeader) => {
                    return (
                      <>
                        {subHeader === "50%" && (
                          <>
                            <span>GPA***</span>
                            <br />
                          </>
                        )}
                        {subHeader}
                        <br />
                      </>
                    )
                  })}
                </div>
              </td>
            )
          })}
        </tr>
        {data?.map((row) => {
          return (
            <tr key={getKey("rows")} className="table__row">
              {Object.entries(row).map((entry) => {
                return <>{renderTd(entry)}</>
              })}
            </tr>
          )
        })}
      </>
    )
  }

  const NoData = () => {
    return (
      <tr className="table__row--no-data">
        <td>No Data</td>
      </tr>
    )
  }

  return (
    <div className="table__container">
      <table className="table">
        <tbody className="table__body">
          {data ? renderTable() : <NoData />}
          {/* {renderTable()} */}
        </tbody>
      </table>
      <div className="table__legend">
        {tableLegend.map((line) => {
          return <p>{line}</p>
        })}
      </div>
    </div>
  )
}
