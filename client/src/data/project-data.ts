export interface Developer {
  id: string;
  name: string;
  role: string;
  bio: string;
  profileImage: string;
  linkedinUrl: string;
}

export interface Project {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  techStack: string[];
  features: Array<{
    title: string;
    description: string;
    color: string;
  }>;
}

export const projectData: Project = {
  title: "De-anonymizing-Entities-on-Onion-Sites-Operating-on-the-TOR-Network",
  description: "The internet comprises various layers, with the dark web being a segment not indexed by standard search engines. Accessing the dark web typically requires specialized software, with the TOR (The Onion Router) network being the most prevalent. TOR facilitates anonymous communication by routing user traffic through multiple servers (nodes), each adding a layer of encryption, akin to the layers of an onion. While TOR serves as a vital tool for preserving privacy and circumventing censorship, it also provides a haven for illicit activities due to its anonymity features. This duality presents challenges in distinguishing between legitimate use and malicious activities.",
  liveUrl: "https://de-anonymizing-entities-on-onion-sites.onrender.com/",
  githubUrl: "https://github.com/MiteshChaudhari18/De-anonymizing-Entities-on-Onion-Sites-Operating-on-the-TOR-Network.git",
  techStack: ["React.js", "Node.js", "Html ","CSS","MongoDB", "Tailwind CSS", "Bootstrap" , "Chart.js", "Scapy","PYTHON","Pyshark","Socket.IO","Flask","Stem", "httpx","GeoIP","Mapbox"],
  features: [
    {
      
      title: "Real-time Analytics",
      description: "Real-time analytics on the TOR network continuously monitors onion site traffic and user behavior to detect suspicious patterns instantly. It helps identify malicious entities by analyzing connection timings, traffic anomalies, and service activity as they happen, enabling quicker responses and better threat detection.",
      color: "blue"
    },
    {
      
      title: "Sustainability Goals",
      description: "The sustainability goal of TorCrawler is to stay adaptable, maintainable, and reusable for long-term dark web investigations.Its modular design allows easy updates to individual components without disrupting the whole system.Support for data export and integration ensures continued relevance in research, cybersecurity, and law enforcement.",
      color: "green"
    },
    {
      
      title: "Team Collaboration",
      description: "Effective collaboration relies on open communication and sharing knowledge among team members. Using collaborative tools ensures smooth coordination and project tracking. Diverse skills within the team foster innovation and better problem-solving.",
      color: "purple"
    }
  ]
};

import miteshImg from "@/images/mitesh.jpg";
import rohitImg from "@/images/rohit.png";
import piyushImg from "@/images/piyush.jpeg";
import janviImg from "@/images/janvi.png";

export const developers: Developer[] = [
  {
    id: "1",
    name: "Mitesh Chaudhari",
    role: "FullStack Developer , UI/UX Developer & Cloud Developer",
    bio: "Full-Stack Developer and UI/UX Designer skilled in building user-friendly, responsive web applications from front-end to back-end. I combine clean design with functional code to deliver seamless digital experiences.",
    profileImage: miteshImg,
    linkedinUrl: "https://www.linkedin.com/in/mitesh-chaudhari-201b57288/",
    resumeUrl: "https://drive.google.com/file/d/1dv9OcdB7zWnDMeQ6HnLX7xVHzJVir1W5/view?usp=drive_link",
    portfilo: "https://mitesh-s-portfolio-ohli.vercel.app/"

    

  },
  {
    id: "2",
    name: "Piyush Patil",
    role: "Cybersecurity devloper",
    bio: "Cybersecurity Developer focused on building secure applications and protecting systems from threats and vulnerabilities. Skilled in secure coding, threat analysis, and implementing robust security protocols.",
    profileImage: piyushImg,
    linkedinUrl: "https://www.linkedin.com/in/piyushpatil1137/",
    resumeUrl: "https://drive.google.com/file/d/1IrEGBPB7DM1UTfa5QCqXECnMzPnOoBtx/view?usp=drivesdk"
    
  },
  {
    id: "3",
    name: "Rohit Bhalkar",
    role: "Java Developer",
    bio: "Java Developer skilled in building scalable, high-performance applications using core Java, Spring Boot, and RESTful APIs. Experienced in backend development, database integration, and enterprise-level solutions.",
    profileImage: rohitImg,
    linkedinUrl: "https://www.linkedin.com/in/rohit-bhalkar-ab4a882b4",
    resumeUrl: "https://drive.google.com/file/d/1Im5vVKzqEMPHBijHhZ1vzZWwFT581LcQ/view?usp=drivesdk"
  },
  {
    id: "4",
    name: "Janvi Sonje",
    role: "Developer",
    bio: "Developer with a strong foundation in designing, building, and deploying efficient software solutions. Skilled in full-cycle development, problem-solving, and adapting to various technologies and frameworks.",
    profileImage: janviImg,
    linkedinUrl: "https://www.linkedin.com/in/janhavi-sonaje",
    resumeUrl: "https://drive.google.com/file/d/1ImeCUPC1mZVw9RjSrp4UGpnFdYw9S11P/view?usp=drivesdk"
  }
];
