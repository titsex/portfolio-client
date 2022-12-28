<section class="mb-0 w-5/12 shrink-0 grow-0 px-6">
  <div class="mb-5 text-center md:max-w-xl lg:max-w-3xl">
    <h1 class="text-2xl font-semibold">Contact Me</h1>
  </div>

  {#each ['Name', 'Email'] as formName}
    <input
      type="text"
      class="m-0 mb-6 w-full rounded bg-[#e6e6e6] px-3 py-1.5 dark:bg-[#191919]"
      placeholder={formName}
    />
  {/each}

  <textarea
    type="text"
    class="m-0 mb-6 w-full rounded bg-[#e6e6e6] px-3 py-1.5 dark:bg-[#191919]"
    placeholder="Message"
  />

  <button class="w-full rounded bg-red-600 py-2.5 text-white transition duration-150 hover:bg-red-900">SEND</button>
</section>
