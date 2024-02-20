import React from 'react';

const LandingPage = () => {
  const handleButtonClick = () => {
    alert("You clicked the button. But nothing happens. Frustrating, isn't it?");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Frustration.com</h1>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>The most frustrating website on the internet!</p>
      <form style={{ marginTop: '30px' }}>
        <label htmlFor="email">Enter your email:</label><br />
        <input type="email" id="email" style={{ padding: '5px', marginRight: '10px' }} /><br />
        <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>Subscribe Now</button>
      </form>
      <button onClick={handleButtonClick} style={{ padding: '10px 20px', marginTop: '30px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Click Me</button>
      <div style={{ marginTop: '50px', borderTop: '1px solid black', paddingTop: '20px' }}>
        <p style={{ fontSize: '14px', color: 'gray' }}>© 2024 Frustration.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;