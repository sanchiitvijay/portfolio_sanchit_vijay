
const TimeLineEducation = ({ timeline, name, location, degree }) => {
  return (
    <>
      <p className="text-xsm font-semibold italic md:text-sm">{timeline}</p>

      <p className="text-sm font-bold md:text-base text-lime-400">{name}</p>
      <p className="text-xsm font-semibold italic md:text-sm">{location}</p>
      <p className="text-xsm font-semibold italic md:text-sm">{degree}</p>
    </>
  )
}

export default TimeLineEducation