// src/components/BisaRx/BisaRxInterface.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ChatArea from './ChatArea';
import InputBar from './InputBar';
import useChatLogic from '../../hooks/useChatLogic';

const BisaRxInterface = () => {
  const {
    messages, inputValue, isTyping, isSidebarOpen,
    setIsSidebarOpen, inputRef, messagesEndRef,
    handleKeyPress, handleSendMessage, handleQuickPrompt,
    handleNewChat, setInputValue, quickPrompts
  } = useChatLogic();

  return (
    <div className="min-h-screen flex bg-[linear-gradient(180deg,#0f1113_0%,#141519_100%)] text-white">
      <Sidebar isOpen={isSidebarOpen} onNewChat={handleNewChat} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-auto py-10">
          <div className="centered-layout">
            <ChatArea
              messages={messages}
              isTyping={isTyping}
              quickPrompts={quickPrompts}
              handleQuickPrompt={handleQuickPrompt}
              messagesEndRef={messagesEndRef}
            />
          </div>
        </main>

        <InputBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleKeyPress={handleKeyPress}
          handleSendMessage={handleSendMessage}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
};

export default BisaRxInterface;
