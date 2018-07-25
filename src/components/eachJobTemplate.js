import React       from 'react'

const EachJobTemplate = ({data}) => {

  const will_do_lists     = data.What_you_will_do.split("\n").filter(Boolean)
  const looking_for_lists = data.What_we_are_looking_for.split("\n").filter(Boolean)

  return (
    <div>
      <h3>What you will do:</h3>
      <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
        { will_do_lists.map(list => (
            <li>{list}</li>
          ))
        }
      </ul>
      <hr className="big"/>
      <h3>What we are looking for:</h3>
      <ul style={{fontSize: '15px', lineHeight: '24px'}} className="job-list-ul">
        { looking_for_lists.map(list => (
            <li>{list}</li>
          ))
        }
      </ul>      

    </div>
  )
}

export default EachJobTemplate