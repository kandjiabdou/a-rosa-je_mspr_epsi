<template>
  <div class="chat-page">
    <div style="height: 100vh">
      <PrettyChatWindow
          :projectId="projectId"
          :username="username"
          :secret="secret"
      />
      <div>
        <h1>Oumy</h1>
      </div>
    </div>
    <h1>Chat en temps réel</h1>



    <div class="user-list">
      <h2>Utilisateurs connectés</h2>
      <ul>
        <li v-for="user in users" :key="user">{{ user }}</li>
      </ul>
    </div>

    <div class="chat-box">
      <div v-for="message in messages" :key="message.id" class="message">
        <strong>{{ message.author }} :</strong> {{ message.text }}
      </div>
    </div>

    <form class="message-form" @submit.prevent="sendMessage">
      <input v-model="newMessage" type="text" placeholder="Tapez votre message ici" />
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { applyReactInVue } from "veaury";

export default {
  data() {
    return {
      projectId: import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
    };
  },
  components: {
    PrettyChatWindow: applyReactInVue(PrettyChatWindow),
  },
  props: {
    username: {
      type: String,
      required: true,
    },
    secret: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.chat-page {
  max-width: 800px;
  margin: 0 auto;
}

.user-list {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}

.user-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.message {
  margin-bottom: 10px;
}

.message-form {
  display: flex;
  margin-top: 20px;
}

.message-form input {
  flex: 1;
  padding: 5px;
}

.message-form button {
  padding: 5px 10px;
}
</style>
