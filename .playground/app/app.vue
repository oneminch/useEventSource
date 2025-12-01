<script setup lang="ts">
  import { useEventSource } from "@minch/use-event-source";

  const { eventData, restartConnection, closeConnection, isStopped } =
    useEventSource("/api/counter", 0);
</script>

<template>
  <div class="container">
    <h1>{{ eventData }}</h1>

    <p>The number is being sent from the server in real-time.</p>

    <div class="buttons">
      <button :disabled="!isStopped" @click="restartConnection">Restart</button>
      <button :disabled="isStopped" @click="closeConnection">Stop</button>
    </div>
  </div>
</template>

<style>
  div.container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  h1 {
    font-size: 6rem;
    margin: 0;
  }

  div.buttons {
    display: flex;
    gap: 1rem;
  }

  button {
    border-radius: 10rem;
    padding: 0.25rem 1rem;
  }
</style>
