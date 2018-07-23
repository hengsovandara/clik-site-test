import React       from 'react'
import JobTemplate from '../../templates/jobTemplate'

const JuniorAndroidDeveloper = ({children}) => (
  <JobTemplate jobTitle="Junior Android Developer" >
    <h3>What you will do:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>Work closely with design teams to put together the slickest mobile app possible</li>
      <li>Collaborate with the Middleware team to ensure sound connection to our API’s </li>
      <li>Collaborate with software vendors for integration of mobile features supporting chat, KYC, encryption, CRM’s and more.</li>
      <li>Collaborate with the QA team to ensure a fast, smooth and stable delivery for the application to our various delivery enviroments</li>
      <li>Help write custom compentents using the Android API</li>
      <li>Deploy the application to the Google Play Store</li>
      <li>Run profiling on the application to determine areas where refactorying maybe required to improve speed and performance</li>
      <li>Manage and fix bugs as and when they are detected as priority</li>
      <li>Research and present new approaches, technologies, best practices etc, related to Android and mobile application development in general</li>
    </ul>
    <hr className="big"/>
    <h3>What we are looking for:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>An Android App Developer with several years of experience</li>
      <li>Excellent learnability and a curious nature</li>
      <li>Excellent communication skills</li>
      <li>Experience of design to launch in Google stores of a complete mobile app</li>
      <li>Understanding of the Internet, how websites work, IP addresses, basic networking </li>
      <li>Linux and basic console commands</li>
      <li>Basic experience with API development and usage for mobile apps</li>
      <li>Experience of using React Native a plus and / or a desire to learn and use React Native for mobile app development going forward</li>
    </ul>
  </JobTemplate>
)

export default JuniorAndroidDeveloper