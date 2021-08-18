import React from 'react';


const Section = ({children, headingLevel=2, headingText, className}) =>{
  const H = `h${headingLevel}`;
  return(
    <section className={className}>
      <H>{headingText}</H>
      {children}
    </section>
  );
};

export default Section;