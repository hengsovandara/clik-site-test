import React   			     from 'react'
import Link    			     from 'gatsby-link'
import HeaderlineSection from '../components/headerlineSection'
import FeatureSection    from '../components/featureSection'
import TeamSection 		   from '../components/teamSection'
import NewsSection 		   from '../components/newsSection'
import CareerSection     from '../components/careerSection'

const IndexPage = ({data}) => { 
  return (
    <div>
      <HeaderlineSection />
      <FeatureSection />
      <TeamSection data={data.strapiTeamsection}/>
      <NewsSection data={data.allStrapiNewssection.edges}/>
      <CareerSection data={data.allStrapiJob.edges}/> 
    </div>
  )
}

export default IndexPage

export const query = graphql`  
  query IndexQuery {
    strapiTeamsection{
      title
      content
      teams{
        first_name
        last_name
        link
        email
        position
      }
    },
    allStrapiNewssection{
      edges{
        node{
          headline
          content
          publisher
          publish_date
          post_link
        }
      }
    },
    allStrapiJob{
      edges{
        node{
          id
          title
        }
      }
    },
  }
`