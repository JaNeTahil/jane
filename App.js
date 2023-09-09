import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Simulated initial messages when the component mounts
    const initialMessages = [
      {
        id: '1',
        text: 'Sis Adie, naa koy chika!',
        user: {
          name: 'Flora Mae',
          avatarUrl: 'http://cloudmind.info/wp-content/uploads/2014/12/blue-water-lily-flower-flowers-hd-wallpaper-beautiful-gallery-hd1.jpgs',
        },
      },
      {
        id: '2',
        text: 'Where na u!',
        user: {
          name: 'Monaliza',
          avatarUrl: 'https://i.pinimg.com/736x/24/16/8a/24168a848398266ad736c98abf03b4ba.jpg',
        },
      },
  {
      id: '3',
        text: 'Hoyyy!',
        user: {
          name: 'Rodel',
          avatarUrl: 'https://img.izismile.com/img/img8/20151124/640/the_worlds_ugliest_man_of_2015_640_07.jpg',
        },
      },
    {
      id: '4',
        text: 'Hello, Baby!',
        user: {
          name: 'Mackenyu Arata',
          avatarUrl: 'https://th.bing.com/th/id/OIP.6pKXnGYJuKHJWVaGOWadoQHaHs?pid=ImgDet&w=179&h=186&c=7',
        },
      },
      // Add more initial messages as needed
    ];

    setMessages(initialMessages);
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: Date.now().toString(),
        text: inputMessage,
        user: {
          name: 'Flora Mae', // You can replace this with the authenticated user's name
          avatarUrl: '', // You can replace this with the authenticated user's avatar URL
        },
      };

      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Messages</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Image source={{ uri: item.user.avatarUrl }} style={styles.avatar} />
            <View style={styles.messageContent}>
              <Text style={styles.userName}>{item.user.name}</Text>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#1DA1F2',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  sendButton: {
    marginLeft: 10,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: '#1DA1F2',
    fontWeight: 'bold',
  },
});
