<script lang="ts">
  export let nameholder: string
  export let emailholder: string
  export let messageholder: string
  export let title: string

  import Spinner from '@component/Spinner'

  let [name, email, message] = ['', '', '']
  let promise: Promise<void>

  function handleClick() {
    console.log('1')
  }
</script>

<section id="contacts" class="mb-0 w-full shrink-0 grow-0 px-6 lg:w-5/12">
  <h1 class="mb-5 text-center text-2xl font-semibold">{title}</h1>

  <input type="text" placeholder={nameholder} bind:value={name} class="bg-light-theme dark:bg-dark-theme" />
  <input type="email" placeholder={emailholder} bind:value={email} class="bg-light-theme dark:bg-dark-theme" />
  <textarea placeholder={messageholder} bind:value={message} class="bg-light-theme dark:bg-dark-theme" />

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
