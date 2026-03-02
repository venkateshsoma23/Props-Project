import React from 'react'
import Card from './components/Card'

const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Toronto, Canada"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMCrclKlTyMUSvoE39A0Ls2oYEQKTOif_6g&s",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://img.icons8.com/color/200/microsoft.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/888/888835.png",
    companyName: "Adobe",
    datePosted: "6 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",  
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResVG5sH41Gnk80sgefAzkaEplcNU8nCY2IA&s",
    companyName: "Oracle",
    datePosted: "9 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Sydney, Australia"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4rUVWDMjjaWBg4Z-GPl7e2d3gXJ6QcpcKQ&s",
    companyName: "IBM",
    datePosted: "10 weeks ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Paris, France"
  }
];

  return (
    <div className='parent'>
     {jobOpenings.map(function(elem,idx){
       return <div key={idx}>
        <Card company={elem.companyName} post={elem.post} pay={elem.pay}
       datePosted={elem.datePosted} brandLogo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} location={elem.location}/>
      </div>
      })}
      </div>
  )
}

export default App
