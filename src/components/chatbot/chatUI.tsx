import {
  Avatar,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";
import myImage from "./chatbot_avatar.jpg";
import chatConfig from "./chatConfig";
const ChatUI: React.FC = () => {
  const [messages, setMessages] = useState<
    Array<{ id: number; text: string; sender: "user" | "assistant" }>
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [sendDisabled, setSendDisabled] = useState(true);
  const [isConversationStarted, setIsConversationStarted] = useState(false);
  useEffect(() => {
    if (inputValue.length > 0 && inputValue.trim().length > 0) {
      setSendDisabled(false);
    } else {
      setSendDisabled(true);
    }
  }, [inputValue, sendDisabled]);

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage = {
        id: Date.now(),
        text: inputValue,
        sender: "user",
      };
      setMessages((currentMessages: any) => [...currentMessages, userMessage]);

      setInputValue("");
      setSendDisabled(true);

      const botResponse = await fetchBotResponse(
        [...messages, userMessage],
        isConversationStarted
      );
      const botMessage = {
        id: Date.now(),
        text: botResponse,
        sender: "assistant",
      };
      setMessages((currentMessages: any) => [...currentMessages, botMessage]);

      if (!isConversationStarted) setIsConversationStarted(true);
    }
  };

  async function fetchBotResponse(
    messages: any,
    isConversationStarted: boolean
  ): Promise<string> {
    const initialSystemMessage = {
      role: "system",
      content: chatConfig.content,
    };

    const apiMessages = isConversationStarted
      ? messages.map((msg: any) => ({ role: msg.sender, content: msg.text }))
      : [
          initialSystemMessage,
          ...messages.map((msg: any) => ({
            role: msg.sender,
            content: msg.text,
          })),
        ];

    try {
      const response = await fetch(chatConfig.apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: chatConfig.model,
          messages: apiMessages,
        }),
      });

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const data = await response.json();

      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error("There was an error fetching the chatbot response:", error);
      return "Sorry, I can't respond at the moment.";
    }
  }

  return (
    <Container maxWidth="sm" className="chatContainer">
      <Paper style={{ height: "300px", overflow: "auto", padding: "20px" }}>
        <List>
          {messages.map((message) => (
            <ListItem
              key={message.id}
              style={{
                justifyContent:
                  message.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              {message.sender === "assistant" ? (
                <Avatar alt="Vlad" src={myImage} />
              ) : (
                <Avatar sx={{ bgcolor: "orange" }}>you</Avatar>
              )}
              <ListItemText
                primary={message.text}
                style={{
                  backgroundColor:
                    message.sender === "user" ? "#e0f7fa" : "#e1bee7",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Grid container style={{ paddingTop: "20px" }}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            label="Type a message..."
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
          <Button
            disabled={sendDisabled}
            fullWidth
            variant="outlined"
            color="primary"
            endIcon={<SendIcon />}
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChatUI;
