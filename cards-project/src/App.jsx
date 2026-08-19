import React from 'react'
import { Card } from './Components/Card'
import { Car } from 'lucide-react'


const App = () => {
  const jobOpenings = [
    {
        brandLogo: "public/google.webp",
        companyName: "Google",
        datePosted: "5 days ago",
        post: "Software Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$55/hr",
        location: "Bengaluru, India"
    },

    {
        brandLogo: "public/microsoft.png",
        companyName: "Microsoft",
        datePosted: "1 week ago",
        post: "Frontend Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$50/hr",
        location: "Hyderabad, India"
    },

    {
        brandLogo: "public/amazon.jfif",
        companyName: "Amazon",
        datePosted: "3 days ago",
        post: "Software Development Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$52/hr",
        location: "Seattle, USA"
    },

    {
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        companyName: "Apple",
        datePosted: "2 weeks ago",
        post: "iOS Software Engineer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$60/hr",
        location: "Cupertino, USA"
    },

    {
        brandLogo: "public/meta.jpg",
        companyName: "Meta",
        datePosted: "4 days ago",
        post: "React Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$58/hr",
        location: "Menlo Park, USA"
    },

    {
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
        companyName: "NVIDIA",
        datePosted: "10 days ago",
        post: "Machine Learning Engineer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$65/hr",
        location: "Santa Clara, USA"
    },

    {
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
        companyName: "Netflix",
        datePosted: "3 weeks ago",
        post: "Backend Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$70/hr",
        location: "Los Gatos, USA"
    },

    {
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        companyName: "IBM",
        datePosted: "1 week ago",
        post: "Cloud Engineer",
        tag1: "Part Time",
        tag2: "Mid Level",
        pay: "$48/hr",
        location: "Bengaluru, India"
    },

    {
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
        companyName: "Oracle",
        datePosted: "6 days ago",
        post: "Java Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$45/hr",
        location: "Hyderabad, India"
    },

    {
        brandLogo: "public/adobe.png",
        companyName: "Adobe",
        datePosted: "2 weeks ago",
        post: "UI/UX Engineer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$50/hr",
        location: "San Jose, USA"
    }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}>
            <Card company={elem.companyName} post={elem.post} logo={elem.brandLogo} date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} loc={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App