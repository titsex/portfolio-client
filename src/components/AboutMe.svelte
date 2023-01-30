<script lang="ts">
  import { avatarUrl } from '@consts'
</script>

<section id="about" class="bg-light-theme dark:bg-dark-theme">
  <div class="block md:flex">
    <div class="md:flex-none">
      <img
        class="mx-auto rounded-full shadow shadow-white invert dark:invert-0"
        src={avatarUrl}
        width="240"
        height="240"
        alt="Github Profile Avatar"
      />
      <span class="mt-3 flex justify-center opacity-70">Web Developer</span>
    </div>

    <div class="mt-7 ml-12 text-xl">
      <h1 class="text-2xl font-semibold">About Me</h1>

      <p class="mt-5">
        Hi there, my name's Ravan. I'm <span class="font-semibold text-red-400">∞</span> y.o
      </p>
    </div>
  </div>
</section>

<style>
  #about {
    @apply p-5 shadow;
  }
</style>
