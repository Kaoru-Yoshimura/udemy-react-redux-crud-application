import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name:"taro",age:20},
    {name:"taradsfo",age:20},
    {name:"taradsfo",age:20},
    {name:"tarasdafsadfdsfo"},
  ]
  return (
    <div>
      {
        profiles.map((profile,index) => {
          return <User name={profile.name} age={profile.age} key={ index}/>

      })
      }

    </div>
  )
}

const User = (props) => {
  return <div>This Is {props.name} and I have {props.age}dig </div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
