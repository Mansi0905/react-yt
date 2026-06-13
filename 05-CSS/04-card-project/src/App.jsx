import React from 'react'
import Card from './components/Card'

const App = () => {

 const jobs = [
  {
    id: 1,
    company: "Amazon",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    logo: "https://imgs.search.brave.com/R2sy_8tEyN3xPSljdMF5DQbFsamUITQiFoSp9E2WKZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/ODE2LzgwOS9zbWFs/bC9hbWF6b24tdHJh/bnNwYXJlbnQtaWNv/bi1mcmVlLXBuZy5w/bmc"
  },
  {
    id: 2,
    company: "Google",
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Bangalore, India",
    logo: "https://imgs.search.brave.com/ka0HEWVZg3dscTlaOEIjyjliTkAnRpAUHAqDcbtDD6w/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ29teXdheS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDEvZ29vZ2xl/LWxvZ28tbmV3Lmpw/Zw"
  },
  {
    id: 3,
    company: "Microsoft",
    posted: "1 week ago",
    title: "React Developer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$80/hr",
    location: "Hyderabad, India",
    logo: "https://imgs.search.brave.com/_g56jH3ENgDwJppODlyj86EV-KUc-s1G84EvvPzQZT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzYwMS9zbWFs/bC9taWNyb3NvZnQt/bG9nby1taWNyb3Nv/ZnQtaWNvbi1mcmVl/LWZyZWUtdmVjdG9y/LmpwZw"
  },
  {
    id: 4,
    company: "Meta",
    posted: "3 days ago",
    title: "Product Designer",
    type: "Remote",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Remote",
    logo: "https://imgs.search.brave.com/sEVAqcZOgcVNA49r860w7_t35uDx0l9vcWK6KghGnV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n"
  },
  {
    id: 5,
    company: "Netflix",
    posted: "6 days ago",
    title: "UI Designer",
    type: "Contract",
    level: "Mid Level",
    salary: "$110/hr",
    location: "Delhi, India",
    logo: "https://imgs.search.brave.com/QosszrpfROYh-3KmAQzE33S7tueZHyPT04GAZHsae40/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L25ldGZsaXgtbG9n/by1zeW1ib2wtcG5n/LTEucG5n"
  },
  {
    id: 6,
    company: "Adobe",
    posted: "4 days ago",
    title: "UX Researcher",
    type: "Full Time",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Pune, India",
    logo: "https://imgs.search.brave.com/17Z08VaemRypEXW6ZoaC2OUFu3e5iT08tP7EURsEw9Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc"
  },
  {
    id: 7,
    company: "Spotify",
    posted: "2 weeks ago",
    title: "Visual Designer",
    type: "Remote",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Remote",
    logo: "https://imgs.search.brave.com/NqBGOqNucUSytAldKCJG2y5yBpeDWoLGM24JndJHNug/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvU3Bv/dGlmeS1Mb2dvLVBO/Ry1QaG90b3MucG5n"
  },
  {
    id: 8,
    company: "Airbnb",
    posted: "1 day ago",
    title: "Interaction Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Goa, India",
    logo: "https://imgs.search.brave.com/SjC_YImbhGhloF9WDfJVOQ2o4vwg1AjDjz1tZEiYTEQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/aGlzdG9yeS5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDkvQWlyYm5iLUxv/Z28ucG5n"
  },
  {
    id: 9,
    company: "Uber",
    posted: "5 days ago",
    title: "Mobile UI Designer",
    type: "Part Time",
    level: "Mid Level",
    salary: "$90/hr",
    location: "Chennai, India",
    logo: "https://imgs.search.brave.com/ELAGyNAMJn6LfRhxcU2fUyE8xrHGB9ZW5LcxDJShYcQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9pbnNwaXJh/dGlvbl9pbWFnZXMv/NjUxNTYwL2NvbnZl/cnNpb25zLzEyMDB4/NjAwd2EtZGVza3Rv/cC5qcGc"
  },
  {
    id: 10,
    company: "LinkedIn",
    posted: "3 days ago",
    title: "Senior Product Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$150/hr",
    location: "Gurugram, India",
    logo: "https://imgs.search.brave.com/q-kKV982IHJUUD2H_qIcfGo6anKcYu0O8QhT_9F4qPo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbGlua2VkaW4t/dWktZmxhdC80OC9M/aW5rZWRJbl9VSS0w/Mi0xMDI0LnBuZw"
  }
];


  return (
    <div className="parent">
      {jobs.map(function(elem){
        return <Card company={elem.company}  title={elem.title} type={elem.type} level={elem.level} salary={elem.salary} posted={elem.posted} logo={elem.logo} location={elem.location}   />
      })}
    </div>
  )
}

export default App