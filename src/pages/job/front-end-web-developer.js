import React       from 'react'
import JobTemplate from '../../templates/jobTemplate'

const JuniorAndroidDeveloper = ({children}) => (
  <JobTemplate jobTitle="Front End Developer">
    <h3>What you will do:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>Work closely with design teams to put together the slickest web applications possible;</li>
      <li>Turn our hi-fidelity designs into real working web applications for modern web browsers using HTML / CSS and JS;</li>
      <li>Collaborate with the Middleware team to ensure sound connection to our API's;</li>
      <li>Collaborate with the QA team to ensure a fast, smooth and stable delivery for the application to our various delivery enviroments;</li>
      <li>Deploy the application to staging and production servers via a CI system;</li>
      <li>Write front end specs and integration specs;</li>
      <li>Setup and configure CI servers with toegther with the DevOps team for automated running of specs and deployment to our various environments;</li>
      <li>Setup Analytics in the application using Mixpanel or other 3rd party analytics tool;</li>
      <li>Manage and fix bugs as and when they are detected as priority;</li>
      <li>Research and present new approaches, technologies, best practices etc, related to web application development in general;</li>
    </ul>
    <hr className="big"/>
    <h3>What we are looking for:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>A Web Front End Developer with several years of proven experience;</li>
      <li>Excellent learnability and a curious nature;</li>
      <li>Excellent communication skills; </li>
      <li>Understanding of the Internet, how websites work, IP addresses, basic networking; </li>
      <li>Linux and basic console commands;</li>
      <li>Basic experience with API development and usage for web apps;</li>
    </ul>
  </JobTemplate>
)

export default JuniorAndroidDeveloper