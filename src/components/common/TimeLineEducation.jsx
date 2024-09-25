
const TimeLineEducation = ({ timeline, name, location, degree, marks }) => {
  return (
    <>
      <p className="text-xsm font-semibold italic md:text-sm">{timeline} 📍 {location}</p>

      <p className="text-sm font-bold md:text-base text-lime-400">{name}</p>
      <p className="text-xsm font-semibold italic md:text-sm">{degree}</p>
      <p className="text-xsm font-semibold italic md:text-sm">{marks}</p>
    </>
  )
}

export default TimeLineEducation