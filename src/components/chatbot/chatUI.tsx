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
const ChatUI: React.FC = () => {
  const [messages, setMessages] = useState<
    Array<{ id: number; text: string; sender: "user" | "bot" }>
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [sendDisabled, setSendDisabled] = useState(true);

  useEffect(() => {
    if (inputValue.length > 0 && inputValue.trim().length > 0) {
      setSendDisabled(false);
    } else {
      setSendDisabled(true);
    }
  }, [inputValue, sendDisabled]);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].sender === "user") {
      setTimeout(() => {
        setMessages([
          ...messages,
          {
            id: Date.now(),
            text: "I am a bot, I am not programmed to respond.",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  }, [messages]);
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), text: inputValue, sender: "user" },
      ]);
      setInputValue("");
      setSendDisabled(true);
    }
  };

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
              {message.sender === "bot" ? (
                <Avatar alt="Vlad" src={myImage} />
              ) : (
                <Avatar sx={{ bgcolor: "orange" }}>me</Avatar>
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
