<script>
  import Spinner from '@component/Spinner'

  let [name, email, message] = ['', '', '']
  let promise

  function handleClick() {
    // todo
  }
</script>

<section class="mb-0 w-5/12 shrink-0 grow-0 px-6">
  <h1 class="mb-5 text-center text-2xl font-semibold">Contact Me</h1>

  <input placeholder="First Name" type="text" bind:value={name} class="bg-[#e6e6e6] dark:bg-[#191919]" />
  <input placeholder="Email" type="email" bind:value={email} class="bg-[#e6e6e6] dark:bg-[#191919]" />
  <textarea placeholder="Message" type="text" bind:value={message} class="bg-[#e6e6e6] dark:bg-[#191919]" />

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
