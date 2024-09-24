const TimelineItem = ({ timeline, role, company, desc, tech, link, location }) => {
  return (
    <>
      <p className="text-xsm font-semibold italic md:text-sm">{timeline} 📍 {location}</p>

      <a href={link} target="_blank">
        <p className="text-sm font-bold md:text-lg text-lime-400">{role} <span className="text-xs">🔗</span></p>
      </a>
      <p className="font-semibold italic">{company}</p>

      {desc?.map((item, index) => {
        return (
          <p className="text-sm mt-1 text-zinc-400 md:text-sm" key={index}>
            🔸{item}
          </p>
        );
      })}
      <p className="font-semibold mt-2">Tech Stack:

      {tech?.map((item, index) => {
        return (
          <p className="text-xs mt-1 text-zinc-400 md:text-sm" key={index}>
            🔸{item}
          </p>
        );
      })}
      </p>
    </>
  );
};

export default TimelineItem;
