import React from "react";
import "../../src/App.css"
import PropTypes from "prop-types";

const List =(props)=> {
  console.log(props)
    return (
      <div>
        <h1>name :{props.person.fullname}</h1>
        <h1>bio :{props.person.bio}</h1>
        <h1>profession :{props.person.profession}</h1>
        <button type="button" onClick={()=>alert(props.person.fullname)}>click me !!</button>
        {props.version}
      </div>
    );
    
  }
List.defaultProps = {
    version: "person"
   };
   List.propTypes = {
    numberProp: PropTypes.number,

   };

export default List;
