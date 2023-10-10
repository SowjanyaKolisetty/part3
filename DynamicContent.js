import React from 'react';
const DynamicContent = ({ match }) => {
const { parameter } = match.params;
// Here, you can use the 'parameter' variable to determine what content to render.
// For simplicity, we'll just display the parameter value itself.
return <div>parameter: {parameter}
</div>;
};
export default DynamicContent;