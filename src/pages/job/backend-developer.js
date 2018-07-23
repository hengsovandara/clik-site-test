import React       from 'react'
import JobTemplate from '../../templates/jobTemplate'

const JuniorAndroidDeveloper = ({children}) => (
  <JobTemplate jobTitle="Backend (Server Side) Developer (Java or .NET)" >
    <h3>What you will do:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>Design backend / middleware functionality based on design mockups &amp; business requirements</li>
      <li>Design RESTful API based on requirements.</li>
      <li>Build functionality and RESTful API</li>
      <li>Write specs to test functionaliy and API endpoints</li>
      <li>Collaborate closely with the design team, product owner and CTO.</li>
      <li>Collaborate closely with the Web and Mobile Front End Teams.</li>
      <li>Consider security at the forefront of everything we build.</li>
      <li>Work closely with lead developers and CTO to ensure application is properly secured that deployment is smooth and properly incorporated into the CI process and that the middleware is fully tested.</li>
    </ul>
    <hr className="big"/>
    <h3>What we are looking for:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>Backend / Server Side Developer with several years of experience. Programming experience ideally using .NET or Java.</li>
      <li>Excellent learnability and a curious nature - specifically a desire to learn C#.NET.</li>
      <li>Excellent communication skills</li>
      <li>Experience of designing and building middleware / RESTful API applications.</li>
      <li>Understanding of the Internet, how websites work, IP addresses, basic networking</li>
    </ul>
  </JobTemplate>
)

export default JuniorAndroidDeveloper