<script lang="ts">
  import Spinner from '@component/Spinner'

  let [name, email, message] = ['', '', '']
  let promise: Promise<void>

  function handleClick() {
    // todo
  }
</script>

<section id="contacts" class="mb-0 w-full shrink-0 grow-0 px-6 lg:w-5/12">
  <h1 class="mb-5 text-center text-2xl font-semibold">Contact Me</h1>

  <input placeholder="First Name" type="text" bind:value={name} class="bg-light-theme dark:bg-dark-theme" />
  <input placeholder="Email" type="email" bind:value={email} class="bg-light-theme dark:bg-dark-theme" />
  <textarea placeholder="Message" bind:value={message} class="bg-light-theme dark:bg-dark-theme" />

  <button on:click={handleClick}>SEND</button>

  {#if promise}
    {#await promise}
      <Spinner />
    {:then message}
      <span>{message}</span>
    {:catch error}
      <span>{error}</span>
    {/await}
  {/if}
</section>

<style>
  button {
    @apply w-full rounded bg-red-600 py-2.5 text-white transition duration-150;
  }

  button:hover {
    @apply bg-red-900;
  }

  input,
  textarea {
    @apply m-0 mb-6 w-full rounded px-3 py-1.5;
  }

  span {
    @apply mt-3 flex justify-center text-center font-bold;
  }
</style>
