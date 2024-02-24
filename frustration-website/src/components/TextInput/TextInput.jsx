import React, { useState } from 'react';

const AutoResponseTextInput = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Check if user input is a question
    if (userInput.trim().endsWith('?')) {
      // Generate automatic response
      const automaticResponse = generateAutomaticResponse();
      setResponse(automaticResponse);
    } else {
      setResponse("Please ask a question.");
    }
  };

  const generateAutomaticResponse = () => {
    // Add your automatic response logic here
    return "This is an automatic response. Thank you for your question!";
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Ask a question..."
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
};

export default AutoResponseTextInput;