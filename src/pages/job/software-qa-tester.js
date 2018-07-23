import React       from 'react'
import JobTemplate from '../../templates/jobTemplate'

const JuniorAndroidDeveloper = ({children}) => (
  <JobTemplate jobTitle="Software QA Tester" >
    <h3>What you will do:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
    <li>QA / QC and Software Testing of web and mobile applications;</li>
      <li>Prepare test plans and test cases;</li>
      <li>Monitor and assess automated test coverage via CI server;</li>
      <li>Develop and improve relevant processes;</li>
      <li>Train and develop the support team;</li>
      <li>Some product and customer support;</li>
      <li>Work closely with developers, managers, end users and other testers;</li>
      <li>Provide advice on testing strategy, security strategy, and QA strategy as required.</li>
    </ul>
    <hr className="big"/>
    <h3>What we are looking for:</h3>
    <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
      <li>A talented software Quality Assurance Tester with;</li>
      <li>Experience working in a dynamic QA testing enviroment for a software company;</li>
      <li>Ideally has FinTech experience;</li>
      <li>Good communication skills;</li>
      <li>Experience working in an Agile environment.</li>
    </ul>
  </JobTemplate>
)

export default JuniorAndroidDeveloper