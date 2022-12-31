<section class="mb-0 w-5/12 shrink-0 grow-0 px-6">
  <div class="mb-5 text-center">
    <h1 class="text-2xl font-semibold">Contact Me</h1>
  </div>

  {#each ['Name', 'Email'] as formName}
    <input type="text" class="bg-[#e6e6e6] dark:bg-[#191919]" placeholder={formName} />
  {/each}

  <textarea type="text" class="bg-[#e6e6e6] dark:bg-[#191919]" placeholder="Message" />

  <button class="bg-red-600 text-white hover:bg-red-900">SEND</button>
</section>

<style>
  button {
    @apply w-full rounded py-2.5 transition duration-150;
  }

  textarea,
  input {
    @apply m-0 mb-6 w-full rounded px-3 py-1.5;
  }
</style>
