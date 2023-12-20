const handleSendMessage = (message) => {
    const newChatMessages = [...chatMessages, { type: 'user', message: typedMessage }];
    setChatMessages(newChatMessages);
    // Handle sending the message logic here
    console.log(`Message sent: ${message}`);
    // You can also toggle the section after sending the message if needed
    toggleSection();
  };


  const handleSendMessageFaq = () => {
    const newChatMessages = [...chatMessages, { type: 'user', message: typedMessage }];
    setChatMessages(newChatMessages);
    // Handle sending the message logic here
    console.log(`Message sent: ${typedMessage}`);
    // Optionally, you can clear the typed message input after sending
    setTypedMessage('');
  };


  const handleChangeMessage = (e) => {
    setTypedMessage(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // If the Enter key is pressed, send the message
      handleSendMessage();
    }
  };
  const handleKeyPressFaq = (e) => {
    if (e.key === 'Enter') {
      // If the Enter key is pressed, send the message
      handleSendMessageFaq();
    }
  };