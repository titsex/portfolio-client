<script>
  import { socials } from '@consts'
</script>

<section class="w-6/12">
  <h1 class="mb-5 text-center text-2xl font-semibold">My Social</h1>

  <div class="flex flex-wrap">
    {#each socials as social}
      <div class="mb-12 ml-32">
        <div class="flex">
          <a
            href={social.link}
            target="_blank"
            aria-label={social.title}
            rel="noreferrer"
            class="h-14 w-14 rounded-lg p-3 shadow-sm shadow-black hover:scale-110 dark:shadow-white"
          >
            <svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none">
              <path d={social.path} />
            </svg>
          </a>

          <a href={social.link} aria-label={social.title} class="ml-5 text-xl font-medium">{social.title}</a>
        </div>
      </div>
    {/each}
  </div>
</section>
