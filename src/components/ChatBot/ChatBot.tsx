import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, MessageCircle, Send, Minimize2 } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      message: 'Hello! I\'m SplendorBot, your MEP & HVAC assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "Services offered",
    "Get a quote",
    "Project timeline",
    "Contact information"
  ];

  const botResponses = {
    "services": "We offer comprehensive MEP & HVAC services including CHW piping, HVAC installation, valve packages, heat exchangers, ductwork, and complete MEP solutions.",
    "quote": "I'd be happy to help you get a quote! Please contact us at +971 50 123 4567 or fill out our contact form for a detailed proposal.",
    "timeline": "Project timelines vary based on scope. Typical installations range from 2-12 months. For specific timelines, please schedule a free consultation.",
    "contact": "You can reach us at:\n📞 +971 50 123 4567\n✉️ info@splendoruae.com\n📍 Business Bay, Dubai, UAE",
    "experience": "SplendorUAE has 15+ years of experience in MEP & HVAC with over 500 completed projects across the UAE.",
    "default": "I'm here to help with information about our MEP & HVAC services. You can also call us at +971 50 123 4567 for immediate assistance."
  };

  const generateBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('hvac') || message.includes('mep')) {
      return botResponses.services;
    } else if (message.includes('quote') || message.includes('price') || message.includes('cost')) {
      return botResponses.quote;
    } else if (message.includes('time') || message.includes('duration') || message.includes('schedule')) {
      return botResponses.timeline;
    } else if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return botResponses.contact;
    } else if (message.includes('experience') || message.includes('project') || message.includes('company')) {
      return botResponses.experience;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user' as const,
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage = {
        type: 'bot' as const,
        message: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl animate-pulse"
        variant="cta"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 shadow-2xl">
      <CardHeader className="bg-primary text-primary-foreground py-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            SplendorBot
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-primary-foreground hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <Minimize2 className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-primary-foreground hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
        <p className="text-xs text-primary-foreground/80">
          Online now • Ask about our MEP services
        </p>
      </CardHeader>

      <CardContent className="flex flex-col h-80 p-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-2 rounded-lg text-sm ${
                  msg.type === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}
              >
                <p className="whitespace-pre-line">{msg.message}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-muted text-foreground p-2 rounded-lg text-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Replies */}
        {messages.length === 1 && (
          <div className="p-3 border-t">
            <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
            <div className="grid grid-cols-2 gap-1">
              {quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-6"
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-3 border-t">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="text-sm"
            />
            <Button
              size="icon"
              variant="cta"
              className="h-8 w-8"
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
            >
              <Send className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;