import WorkItemComponent from "../Molecules/WorkItemComponent";

const WorksMobile = () => {
  return (
    <>
      <WorkItemComponent
        Header="Personal branding site"
        Description="Crafted a responsive personal branding website with React and Vite, leading to an increase in inquiries for freelance projects."
        Tags={["UI/UX", "Vite", "React"]}
      />
      <WorkItemComponent
        Header="3D LandingPage"
        Description="Designed a 3D interactive landing page with React Three Fiber and Blender assets."
        Tags={["3D", "ThreeJS", "React3Fiber"]}
      />
      <WorkItemComponent
        Header="PDF Visual Diff tool"
        Description="Lorem ipsum dolor sit amet consectetur. Convallis morbi vitae malesuada consequat sit vestibulum. Sodales magna sed et erat est."
        Tags={["DSA", "Sass", "React"]}
      />
      <WorkItemComponent
        Header="Rock Paper Scissor"
        Description="Built a Rock Paper Scissor multiplayer game with real-time updates using Socket.io and Node.js, ensuring smooth gameplay and efficient event handling."
        Tags={["Game", "Node.js", "React"]}
      />
    </>
  );
};

export default WorksMobile;
