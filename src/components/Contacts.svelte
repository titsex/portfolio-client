<script>
  const formNames = ['Name', 'Email']
</script>

<section class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-5/12 lg:px-6">
  <div class="mb-5 text-center md:max-w-xl lg:max-w-3xl">
    <h1 class="text-2xl font-semibold">Contact Me</h1>
  </div>

  {#each formNames as formName}
    <div class="form-group mb-6">
      <input
        type="text"
        class="form-control m-0 w-full rounded bg-[#e6e6e6] px-3 py-1.5 dark:bg-[#191919]"
        placeholder={formName}
      />
    </div>
  {/each}

  <div class="form-group mb-6">
    <textarea
      type="text"
      class="form-control m-0 w-full rounded bg-[#e6e6e6] px-3 py-1.5 dark:bg-[#191919]"
      placeholder="Message"
    />
  </div>

  <button class="w-full rounded bg-red-600 py-2.5 text-white transition duration-150 hover:bg-red-900">SEND</button>
</section>
