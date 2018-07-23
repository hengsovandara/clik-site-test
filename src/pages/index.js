import React   			     from 'react'
import Link    			     from 'gatsby-link'
import HeaderlineSection from '../components/headerlineSection'
import FeatureSection    from '../components/featureSection'
import TeamSection 		   from '../components/teamSection'
import NewsSection 		   from '../components/newsSection'
import CareerSection     from '../components/careerSection'

const IndexPage = () => (
  <div>
    <HeaderlineSection />
    <FeatureSection />
    <TeamSection />
    <NewsSection />
    <CareerSection /> 
  </div>
)

export default IndexPage
