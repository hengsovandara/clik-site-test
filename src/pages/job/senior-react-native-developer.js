import React       from 'react'
import JobTemplate from '../../templates/jobTemplate'

const JuniorAndroidDeveloper = ({children}) => (
  <JobTemplate jobTitle="Senior React Native Developer" >
    <h3>What you will do:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>Work closely with design teams to put together the slickest mobile app possible</li>
      <li>Turn our hi-fidelity designs into real working mobile applications for iOS and Android Platforms using React Native</li>
      <li>Collaborate with the Middleware team to ensure sound connection to our API’s </li>
      <li>Collaborate with software vendors for integration of mobile features supporting chat, KYC, encryption, CRM’s and more</li>
      <li>Collaborate with the QA team to ensure a fast, smooth and stable delivery for the application to our various delivery enviroments</li>
      <li>Extend React Native with custom modules using the iOS and Android API</li>
      <li>Work with experienced iOS and Android developers to troubleshoot, debug, improve performace of the app as well as to assist with writing React Native extensions</li>
      <li>Deploy the application to the Apple App Store and Google Play Store</li>
      <li>Write unit specs for the business logic using Mocha</li>
      <li>Write specs using Appium for automated testing of features</li> 
      <li>Setup and configure CI servers with toegther with the DevOps team for automated running of specs </li>
      <li>Setup Analytics in the application using Mixpanel</li>
      <li>Run profiling on the application to determine areas where refactoring maybe required to improve speed and performance</li>
      <li>Manage and fix bugs as and when they are detected as priority</li>
      <li>Use CodePush to seamlessly send application updates to end users</li>
      <li>Research and present new approaches, technologies, best practices etc, related to React Native and mobile application development in general</li>
    </ul>
    <hr className="big"/>
    <h3>What we are looking for:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>A React Native App Developer with several years of experience</li>
      <li>Excellent learnability and a curious nature</li>
      <li>Excellent communication skills</li>
      <li>Experience of design to launch in Apple and Google stores of a complete mobile app</li>
      <li>Understanding of the Internet, how websites work, IP addresses, basic networking </li>
      <li>Linux and basic console commands</li>
      <li>Basic experience with API development and usage for mobile apps</li>
      <li>Experience of setting up and using Analytics tools (Mixpanel experience a plus)</li>
      <li>Experience of Test Driven Development (Appium experience a plus)</li>
      <li>Experience of writing custom React Native modules a plus</li>
      <li>Experience of using CodePush a plus</li>
    </ul>
  </JobTemplate>
)

export default JuniorAndroidDeveloper