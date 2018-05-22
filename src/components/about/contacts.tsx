import * as React from 'react';
import * as styles from './contacts.css';

interface Props {}

export const Contacts:React.SFC<Props> = props => {

  const inlineStyle = typeof window != 'undefined' ? null : (
    <style>{styles.source.toString()}</style>
  );
  
   return (
      <p className={styles.paragraph}>
        We are a Los Angeles, CA based startup looking to expand our current team with full-stack, backend and front end experts who can help us propel our platform to the next level. We are building a digital marketing platform for realtors. Our current version of the platform is now more than an MVP and serves clients in production. Yet, there is still tons of work in front of us. The current platform is built in ReactJs + NodeJs and we also use various other tech stacks, frameworks, languages and etc. This is an ongoing project. We are open to work with freelancers but also keen on adding permanent team members. Your location is not important. If you are an experienced developer who is seeking a tech challenge please reach out!
        {inlineStyle}
      </p>
   ) 
  };
