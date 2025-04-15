const project = [
    {
        name:"Confetti",
        logo: "https://i.ibb.co/r0JYTN4/image.png",
        briefDesc:"A fully fledged working college confession website using mern stack.",
        desc: ["Confetti is an anonymous confession platform where users can share secrets and interact through likes,comments, and replies.","Supports real-time updates and storage with MongoDB and Firebase, ensuring smooth user interactions.","Uses Redis for caching to improve performance and response times.","Integrates push notifications through Firebase Cloud Messaging for real-time alerts.","Employs Nodemailer to send welcome and notification emails.", "Allows users to post confessions and retrieve Instagram IDs of potential confessioners, enhancing engagement."],
        tech: ["MongoDB","Express","React","Node.js","Firebase","Redis","Nodemailer","Firebase Cloud Messaging", "Tailwind CSS",],
        githubLink: "https://github.com/sanchiitvijay/confetti" ,
        liveLink: "https://confetti-five.vercel.app/",
    },
    {
        name: "Bail Sarathi",
        logo: "https://i.ibb.co/XxTsy6gf/image.png",
        briefDesc: "An AI solution to simplify the bail application process and enable secure virtual hearings.",
        desc: ["Developed an AI-powered solution to streamline the bail application process using RAG-based LLMs.", "Integrated Google Gemini API with Express.js and Flask for intelligent document processing.", " Implemented secure video conferencing for virtual bail hearings using WebRTC and JWT.", "Developed a background worker for preprocessing legal documents and case histories, and implemented an advanced RAG pipeline for extracting contextual insights from criminal records and judgments."],
        tech: ["React","Node.js","WebRTC","Flask", "MongoDB", "Express", "LangChain", "Gemini"],
        githubLink: "https://github.com/sih-2024-msrit/bail-sarathi",
        liveLink: "",
    },
    {
        name: "Extension-Phishing-Detection",
        logo: "https://i.ibb.co/RHt8pM9/image.png",
        briefDesc: "A machine learning model integraated with extension to detect phishing websites in email.",
        desc: ["Developed phishing detection extenion built using javascript and HTML and a backend powered by Flask.x","Implemented phishing detection logic, contributing to the functionality that identifies and flags phishing URLs in emails.","Integrated dynamic and responsive UI, ensuring a seamless user experience across devices and browsers.","Collaborated on cybersecurity features, enhancing site protection against phishing attacks by using quantum method."],
        tech: ["Javascript", "Flask", "Python"],
        githubLink: "https://github.com/sanchiitvijay/email-phishing-detector",
        liveLink: "",
    }
]

export {project};