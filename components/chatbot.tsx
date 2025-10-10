"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Send, Smile, MessageCircle, Phone, Mail, MapPin, Clock, Users, Camera, Video, Mic } from "lucide-react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const mediaIndustryKeywords = [
  'videography', 'photography', 'video', 'photo', 'cinematography', 'editing', 'production',
  'media', 'content', 'brand', 'corporate', 'wedding', 'event', 'commercial', 'documentary',
  'camera', 'lighting', 'audio', 'drone', 'post-production', 'motion graphics', 'animation',
  'youu media', 'youumedia', 'creative', 'storytelling', 'filmmaking', 'director', 'producer'
]

const siteInfo = {
  services: [
    'Videography & Cinematography',
    'Photography & Photo Editing', 
    'Event Coverage',
    'Corporate Brand Films',
    'Commercial Production',
    'Post-Production & Editing'
  ],
  contact: {
    email: 'contact@youumedia.com',
    phone: '+447958189989',
    address: 'Based in London'
  },
  pages: [
    'Home - Main landing page',
    'Portfolio - View our work',
    'Services - What we offer',
    'Contact - Get in touch',
    'For Freelancers - Join our team',
    'Sign In - Client portal'
  ]
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm the Youu Media assistant. I can help you with information about our services, portfolio, contact details, and anything related to our creative production work. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Debug: Log when component mounts
  useEffect(() => {
    console.log('Chatbot component mounted')
  }, [])

  // Lock background scroll when chatbox is open
  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling
      document.body.style.overflow = 'hidden'
    } else {
      // Restore background scrolling
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const isMediaRelated = (text: string): boolean => {
    const lowerText = text.toLowerCase()
    return mediaIndustryKeywords.some(keyword => lowerText.includes(keyword))
  }

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Handle button clicks and common requests
    if (lowerMessage.includes('our services') || lowerMessage.includes('services')) {
      return `We offer comprehensive creative production services:\n\n${siteInfo.services.map(service => `• ${service}`).join('\n')}\n\nWould you like to know more about any specific service?`
    }

    if (lowerMessage.includes('view portfolio') || lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('example')) {
      return "You can view our portfolio at /portfolio to see our latest videography and photography work. We specialize in corporate films, wedding videos, commercial content, and event coverage. Would you like to know about our specific areas of expertise?"
    }

    if (lowerMessage.includes('get quote') || lowerMessage.includes('quote') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return "Pricing varies based on project scope, duration, and requirements. For a personalized quote, please contact us with your project details. We offer competitive rates for high-quality creative production services."
    }

    if (lowerMessage.includes('contact us') || lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return `Get in touch with us:\n\n📧 Email: ${siteInfo.contact.email}\n📞 Phone: ${siteInfo.contact.phone}\n📍 Location: ${siteInfo.contact.address}\n\nYou can also visit our Contact page for more details.`
    }

    // General greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm the Youu Media assistant. I can help you with information about our services, portfolio, contact details, and anything related to our creative production work. What would you like to know?"
    }

    // Help requests
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
      return "I can help you with:\n\n• Information about our services\n• Portfolio and work examples\n• Contact details and getting quotes\n• Team and freelancer opportunities\n• Booking and project inquiries\n\nWhat would you like to know more about?"
    }

    // Additional service inquiries
    if (lowerMessage.includes('what do you do') || lowerMessage.includes('about you')) {
      return `We offer comprehensive creative production services:\n\n${siteInfo.services.map(service => `• ${service}`).join('\n')}\n\nWould you like to know more about any specific service?`
    }

    // Team inquiries
    if (lowerMessage.includes('team') || lowerMessage.includes('freelancer') || lowerMessage.includes('join')) {
      return "We work with talented freelancers and have opportunities for skilled creatives. Visit our 'For Freelancers' page to learn about joining our network of professional videographers, photographers, and editors."
    }

    // Booking inquiries
    if (lowerMessage.includes('book') || lowerMessage.includes('schedule') || lowerMessage.includes('available')) {
      return "To book our services, please contact us directly. We'll discuss your project requirements, timeline, and availability. We typically book 2-4 weeks in advance for most projects."
    }

    // General media questions
    if (lowerMessage.includes('video') || lowerMessage.includes('photo') || lowerMessage.includes('production')) {
      return "We're passionate about creating compelling visual content! Whether you need corporate videos, event coverage, commercial photography, or creative storytelling, we have the expertise and equipment to bring your vision to life. What type of project are you considering?"
    }

    // Company information
    if (lowerMessage.includes('company') || lowerMessage.includes('about') || lowerMessage.includes('who are you')) {
      return "Youu Media is a creative production company specializing in videography, photography, and visual storytelling. We work with businesses, events, and individuals to create compelling content that tells their story. We're based in the UK and work with clients worldwide."
    }

    // Location questions
    if (lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('based')) {
      return `We're based in the UK and work with clients worldwide. Our contact details are:\n\n📧 Email: ${siteInfo.contact.email}\n📞 Phone: ${siteInfo.contact.phone}\n📍 Location: ${siteInfo.contact.address}`
    }

    // Thank you responses
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're very welcome! I'm here to help with any questions about Youu Media. Is there anything else you'd like to know about our services or how we can help with your project?"
    }

    // Default response - be helpful for any question
    return "That's a great question! I'd be happy to help you with information about our creative production services, portfolio, contact details, pricing, or how to get started with a project. Feel free to ask me anything about Youu Media or our services!"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickActions = [
    { label: "Our Services", icon: Video, action: "What services do you offer?" },
    { label: "View Portfolio", icon: Camera, action: "Show me your portfolio" },
    { label: "Get Quote", icon: MessageCircle, action: "How much does it cost?" },
    { label: "Contact Us", icon: Phone, action: "How can I contact you?" }
  ]

  return (
    <>
      {/* Floating Chatbot Icon */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <div className="relative">
          {/* Pulsing ring animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] animate-ping opacity-20"></div>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 rounded-full bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <Smile className="h-8 w-8 text-white" />
          </Button>
        </div>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[9997] bg-black/20" 
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed bottom-24 right-6 z-[9998] w-80 h-96 bg-white rounded-lg shadow-2xl border border-border/50 overflow-hidden">
          <Card className="h-full flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Smile className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold">Youu Media Assistant</CardTitle>
                    <p className="text-xs text-white/80">Online now</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0 min-h-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 h-48 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-gradient-to-r from-primary to-secondary text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="p-3 border-t border-border/50">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInputValue(action.action)
                        handleSendMessage()
                      }}
                      className="text-xs h-8"
                    >
                      <action.icon className="h-3 w-3 mr-1" />
                      {action.label}
                    </Button>
                  ))}
                </div>

                {/* Input */}
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about our services..."
                    className="flex-1 text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="sm"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </>
      )}
    </>
  )
}
