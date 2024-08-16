import React, { useState, useEffect, useRef } from 'react';
import ChatIcon from '@mui/icons-material/Chat'; 
import CloseIcon from '@mui/icons-material/Close'; 
import './Chatbot.css';
import { v4 as uuidv4 } from 'uuid'; 
const QNA = {
  "Who can donate blood?": "To donate blood, you generally need to be at least 17 years old, weigh at least 110 pounds, and be in good health. Eligibility criteria might vary slightly depending on your location and the blood donation center.",
  "What happens during a blood donation?": "The blood donation process typically involves registering at the donation center, undergoing a brief health check, having your blood drawn (which usually takes about 10 minutes), and then resting for a few minutes while you enjoy some refreshments.",
  "What should I do after donating blood?": "After donating blood, it's important to rest for a few minutes and drink plenty of fluids. Avoid heavy exercise for the rest of the day and eat a balanced meal to help replenish your energy.",
  "How often can I donate blood?": "You can typically donate blood every 56 days if you're donating whole blood. The frequency might vary for different types of donations, such as platelets or plasma.",
   "hi": "Hello! How can I assist you today?",
  "thank you": "You're welcome! If you have any more questions, feel free to ask."
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessages = [...messages, { text: input, fromUser: true }];
    setMessages(newMessages);
    setInput('');

    const response = getResponse(input);
    setMessages([...newMessages, { text: response, fromUser: false }]);
  };

  const getResponse = (text) => {
   
    const normalizedText = text.trim().toLowerCase();
    
    const matchedResponse = Object.keys(QNA).find(key =>
      key.toLowerCase() === normalizedText
    );

    return matchedResponse ? QNA[matchedResponse] : "Sorry, I didn’t understand that.";
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      <div className="chatbot-icon" onClick={toggleChat}>
        <ChatIcon />
      </div>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Chat with Us</h3>
            <CloseIcon className="close-icon" onClick={toggleChat} />
          </div>
          <div className="chatbot-content" ref={chatContainerRef}>
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div key={uuidv4()} className={msg.fromUser ? 'message user-message' : 'message bot-message'}>
                  {msg.text}
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="chatbot-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
