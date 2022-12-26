<script>
  const socials = [
    {
      title: 'Telegram',
      path: 'M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4',
      link: 'https://t.me/titsex',
    },
    {
      title: 'Github',
      path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
      link: 'https://github.com/titsex',
    },
  ]
</script>

<section class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
  <div class="mb-5 text-center md:max-w-xl lg:max-w-3xl">
    <h1 class="text-2xl font-semibold">My Social</h1>
  </div>

  <div class="flex flex-wrap">
    {#each socials as social}
      <div class="mb-12 ml-32 w-auto">
        <div class="flex items-start">
          <div class="shrink-0">
            <a
              href={social.link}
              target="_blank"
              aria-label={social.title}
              rel="noreferrer"
              class="flex h-14 w-14 items-center justify-center rounded-md p-4 shadow-sm shadow-black hover:scale-110 dark:shadow-white"
            >
              <svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none">
                <path d={social.path} />
              </svg>
            </a>
          </div>

          <a href={social.link} aria-label={social.title} class="ml-5 text-xl font-medium">{social.title}</a>
        </div>
      </div>
    {/each}
  </div>
</section>
