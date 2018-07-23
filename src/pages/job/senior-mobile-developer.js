import React       from 'react'
import JobTemplate from '../../templates/jobTemplate'

const SeniorMobileDeveloper = ({children}) => (
  <JobTemplate jobTitle="Senior Mobile Developer" >
    <h3>What you will do:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>Work closely with design teams to put together the slickest mobile app possible.</li>
      <li>Collaborate with the Middleware team to ensure sound connection to our API's.</li>
      <li>Collaborate with software vendors for integration of mobile features supporting chat, KYC, encryption, CRM's and more.</li>
      <li>Collaborate with the QA team to ensure a fast, smooth and stable delivery for the application to our various delivery enviroments.</li>
      <li>Deploy the application to the Apple App Store and Google Play Store.</li>
      <li>Design and write unit specs for the business logic.</li>
      <li>Run profiling on the application to determine areas where refactoring maybe required to improve speed and performance.</li>
      <li>Manage and fix bugs as and when they are detected as priority.</li>
      <li>Research and present new approaches, technologies, best practices etc, related to mobile application development in general</li>
      <li>Be open and willing to learn and develop using new technology - in particular React Native.</li>
    </ul>
    <hr className="big"/>
    <h3>What we are looking for:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>An iOS and/or Android Developer with several years of experience and with several applications already in Production.</li>
      <li>High level of experience of web technologies including building web applications using HTML, CSS and JavaScript.</li>
      <li>Experience of a JavaScript framework a plus (esp. React JS).</li>
      <li>Excellent learnability and a curious nature.</li>
      <li>Excellent communication skills. </li>
      <li>Experience of design to launch in Apple App Store and/or the Google Play Store of a complete mobile app.</li>
      <li>Understanding of the Internet, how websites work, IP addresses, basic networking </li>
      <li>Linux and basic console commands.</li>
      <li>Basic experience with API development and usage for mobile apps.</li>
      <li>Experience of using React Native a plus and / or a strong desire to learn to build React Native mobile apps.</li>
    </ul>
  </JobTemplate>
)

export default SeniorMobileDeveloper