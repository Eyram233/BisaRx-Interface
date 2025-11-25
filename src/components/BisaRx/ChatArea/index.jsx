// src/components/BisaRx/ChatArea/index.jsx
import React from 'react';
import EmptyState from './EmptyState';
import MessageList from './MessageList';

const ChatArea = ({ messages, isTyping, quickPrompts, handleQuickPrompt, messagesEndRef }) => {
  return (
    <div>
      {messages.length === 0 ? (
        <EmptyState quickPrompts={quickPrompts} handleQuickPrompt={handleQuickPrompt} />
      ) : (
        <MessageList messages={messages} isTyping={isTyping} messagesEndRef={messagesEndRef} />
      )}
    </div>
  );
};

export default ChatArea;
