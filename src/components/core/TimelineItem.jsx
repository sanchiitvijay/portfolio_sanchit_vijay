const TimelineItem = ({ timeline, title, company, description }) => {
  return (
    <>
      <p className="text-xsm font-semibold italic md:text-sm">{timeline}</p>

      <p className="text-sm font-bold md:text-base text-lime-400">{title}</p>
      <p className="text-xsm font-semibold italic md:text-sm">{company}</p>

      {description.map((item, index) => {
        return (
          <p className="text-xsm mt-1 text-zinc-400 md:text-sm" key={index}>
            🔸{item}
          </p>
        );
      })}
    </>
  );
};

export default TimelineItem;
