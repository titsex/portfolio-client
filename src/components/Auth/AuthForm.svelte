<script>
  import Spinner from '@component/Spinner'
  import { login } from '@store/authorization'

  let promise

  let [email, password] = ['', '']

  function handleClick() {
    promise = login(email, password)
  }
</script>

<div>
  <h1 class="mb-5 text-center text-2xl font-semibold">Authorization</h1>

  <form name="authForm" autocomplete class="grid grid-cols-1 place-items-center">
    <input placeholder="Email" type="email" bind:value={email} class="bg-light-theme dark:bg-dark-theme" />
    <input placeholder="Password" type="password" bind:value={password} class="bg-light-theme dark:bg-dark-theme" />

    <button type="button" on:click={handleClick}>To the admin panel</button>

    {#if promise}
      {#await promise}
        <Spinner />
      {:catch error}
        <span>{error}</span>
      {/await}
    {/if}
  </form>
</div>

<style>
  input {
    @apply m-0 mb-6 w-1/2 rounded px-3 py-1.5;
  }

  button {
    @apply w-1/2 rounded bg-red-600 py-2.5 text-white transition duration-150;
  }

  button:hover {
    @apply bg-red-900;
  }

  span {
    @apply mt-3 flex justify-center whitespace-pre-line text-center font-bold;
  }
</style>
