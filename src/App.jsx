import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Root from './components/Root'
import Navbar from './components/Navbar'
import All from './components/All'
import FullStack from './components/FullStack'
import DataScience from './components/Datascience'
import Cyber from './components/Cyber'
import Career from './components/Career'
import NoMatch from './components/Nomatch'

const App = () => {
  const data = [{
    id: 1,
    field: 'fullstack',
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-Does-a-Top-Backend-Developer-Do-The-Ultimate-Guide.webp',
    // img:require('../public/fullstack/img1.webp'),
    title: 'What Does a Top Backend Developer Do? The Ultimate Guide',
    desc: 'Backend development plays a vital role in the functioning of websites and web applications. While',
    date: ' 14 April 2024',
    comment:'No comments'
  },
    {
      id: 2,
      img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/who_is_a_front_end_developer.webp',
    field:'fullstack',
    title: 'What is Frontend Development? Roles, Responsibilities, Skills & Salary',
    desc: 'Backend development plays a vital role in the functioning of websites and web applications. While',
    date: '14 April 2024',
    comment:'No comments'
    },
  
    {
      id: 3,
      img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp',
    field:'fullstack',
    title: 'Top Full Stack Development Trends for 2024: What to Expect',
    desc: 'In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full',
    date: '14 April 2024',
    comment:'No comments'
  },
    {
      id: 4,
      img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
    field:'datascience',
    title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
    desc: 'Are you someone who’s not interested in coding, but wants to get placed in tech',
    date: '15 January 2024',
    comment:'No comments'
  },
    {
      id: 5,
      img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp',
    field:'datascience',
    title: 'Impact of Certification Programs on Hiring Data Scientists',
    desc: 'Data scientists are the creators behind transforming the raw data into edible data insights. These',
    date: '14 April 2024',
    comment:'No comments'
    },
    {
      id: 6,
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp',
      field: 'datascience',
      title: 'Top Product-Based Companies for Data Science Freshers',
      desc: 'Data scientists are the creators behind transforming the raw data into edible data insights. These',
      date: '14 April 2024',
      comment: 'No comments'
    },
  {
      id: 7,
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
      field: 'cybersecurity',
      title: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
      desc: 'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills',
      date: '31 March 2024',
      comment: 'No comments'
    },{
      id: 8,
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
      field: 'cybersecurity',
      title: 'What Is Hacking? Types of Hacking & More',
      desc: 'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
      date: '14 April 2024',
      comment: 'No comments'
    },{
      id: 9,
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
      field: 'cybersecurity',
      title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
      desc: 'Cybersecurity & Ethical hacking and have been key in making sure that your data online',
      date: '14 April 2024',
      comment: 'No comments'
    },{
      id: 10,
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
      field: 'career',
      title: 'Master JavaScript Frontend Roadmap: From Novice to Expert [2024]',
      desc: 'Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?',
      date: '14 April 2024',
      comment: 'No comments'
    },{
      id: 11,
      img: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp',
      field: 'career',
      title: 'Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career',
      desc: 'Data scientists are the creators behind transforming the raw data into edible data insights. These',
      date: '14 April 2024',
      comment: 'No comments'
    },{
      id: 12,
      img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-2048x1072.webp',
      field: 'career',
      title: 'UI/UX Designer Job Description and Roles & Responsibilities',
    desc: 'UI UX is the abbreviated word that’s been rocking the trend over the years, especially',
      date: '14 April 2024',
      comment: 'No comments'
    }]

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Root/>}>
          <Route index element={<All data={data} />} />
            <Route path="fullstack" element={<FullStack data={data} />} />
            <Route path="datascience" element={<DataScience data={data} />} />
          <Route path="cyber" element={<Cyber data={data} />} />
          <Route path="career" element={<Career data={data} />} />

            
<Route path="*" element={<NoMatch />}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App