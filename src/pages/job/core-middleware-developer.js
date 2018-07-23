import React       from 'react'
import JobTemplate from '../../templates/jobTemplate'

const JuniorAndroidDeveloper = ({children}) => (
  <JobTemplate jobTitle=".NET Core Middleware Developer" >
    <h3>What you will do:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>Design middleware functionality based on design mockups &amp; business requirements;</li>
      <li>Design RESTful API based on requirements;</li>
      <li>Build functionality and RESTful API using .NET Core (C#);</li>
      <li>Write specs in C# to test functionaliy and API endpoints;</li>
      <li>Collaborate closely with the design team, product owner and CTO;</li>
      <li>Consider security at the forefront of everything we build;</li>
      <li>Work closely with lead developers and CTO to ensure application is properly secured that deployment is smooth and properly incorporated into the CI process and that the middleware is fully tested.</li>
    </ul>
    <hr className="big"/>
    <h3>What we are looking for:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>A C#.NET Core Developer with several years of experience;</li>
      <li>Excellent learnability and a curious nature;</li>
      <li>Excellent communication skills;</li>
      <li>Experience of designing and building middleware / RESTful API applications;</li>
      <li>Understanding of the Internet, how websites work, IP addresses, basic networking; </li>
      <li>Linux and basic console commands.</li>
    </ul>
  </JobTemplate>
)

export default JuniorAndroidDeveloper