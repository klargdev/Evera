// src/data/projects.js
import memorialService from '../assets/images/memorial-service.jpg';
import weddingEvent from '../assets/images/wedding-event.jpg';
import corporateEvent from '../assets/images/corporate-event.jpg';

const projects = [
    {
      title: "Williams Family Memorial",
      description: "A tribute website honoring the life of James Williams with photo galleries, memory sharing, and virtual guestbook.",
      image: memorialService,
      tags: ["Memorial", "Tribute", "Live Streaming"],
      client: "Williams Family",
      link: "https://wisdomf.netlify.app/"
    },
    {
      title: "Sarah & Michael's Wedding",
      description: "A beautiful wedding website featuring RSVP management, gift registry, and event schedule.",
      image: weddingEvent,
      tags: ["Wedding", "RSVP", "Registry"],
      client: "Sarah & Michael",
      link: "/portfolio/sarah-michael-wedding"
    },
    {
      title: "TechCorp Annual Conference",
      description: "A comprehensive event platform for a major tech conference with live streaming and networking features.",
      image: corporateEvent,
      tags: ["Conference", "Live Streaming", "Networking"],
      client: "TechCorp",
      link: "/portfolio/techcorp-conference"
    },
    {
      title: "Johnson-Smith Wedding",
      description: "Complete wedding platform with RSVP management, gift registry, photo sharing, and custom timeline.",
      image: "/images/wedding-event.jpg",
      tags: ["Wedding", "RSVP", "Gallery"],
      client: "Emma & Michael",
      link: "/portfolio/johnson-smith-wedding"
    },
    {
      title: "TechCon 2024",
      description: "Corporate event management system with attendee registration, agenda planning, and networking features.",
      image: "/images/corporate-event.jpg",
      tags: ["Corporate", "Conference", "Registration"],
      client: "TechCorp Inc.",
      link: "/portfolio/techcon-2024"
    },
    {
      title: "Garcia 50th Birthday",
      description: "Birthday celebration website with video messages, photo submissions, and virtual celebration.",
      image: "/images/hero-bg.jpg",
      tags: ["Birthday", "Celebration", "Virtual"],
      client: "Garcia Family",
      link: "/portfolio/garcia-birthday"
    },
    {
      title: "St. Mary's Church Digital Memorial",
      description: "Digital memorial and archive system for community members, with genealogy integration.",
      image: "/images/memorial-service.jpg",
      tags: ["Memorial", "Archive", "Community"],
      client: "St. Mary's Church",
      link: "/portfolio/st-marys-memorial"
    },
    {
      title: "Annual Charity Gala",
      description: "Donation management, ticketing, and event coordination platform for a major charity fundraiser.",
      image: "/images/corporate-event.jpg",
      tags: ["Fundraising", "Charity", "Ticketing"],
      client: "Hope Foundation",
      link: "/portfolio/charity-gala"
    }
  ]
  
  export default projects