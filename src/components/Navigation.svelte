<script>
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About me', path: '#about' },
    { title: 'Projects', path: '#projects' },
    { title: 'Contacts', path: '#contacts' },
  ]

  function switchThemeVoice(theme) {
    const audio = new Audio(theme === 'dark' ? './enable-theme.ogg' : './disable-theme.ogg')
    audio.volume = 0.5
    audio.play()
  }

  function switchTheme() {
    let theme = localStorage.getItem('theme')
    if (!theme) theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'

    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    if (theme === 'dark') document.documentElement.classList.remove('dark')
    else document.documentElement.classList.add('dark')

    localStorage.setItem('theme', nextTheme)
    switchThemeVoice(nextTheme)
  }
</script>

<nav
  class="fixed top-0 z-[9999] w-full bg-[rgba(255,255,255,0.3)] py-3 text-2xl text-black backdrop-blur dark:bg-[rgba(0,0,0,0.3)] dark:text-white"
>
  <div class="mx-3 flex">
    <a href="/" aria-label="Home" class="flex-auto">Portfolio</a>

    <div class="flex-auto space-x-5 ">
      {#each links as link}
        <a aria-label={link.title} class="text-2xl first-line:hover:text-red-400" href={link.path}>{link.title}</a>
      {/each}
    </div>

    <button aria-label="theme-toggler" on:click={switchTheme} type="button" class="rounded-lg hover:text-red-400">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        /></svg
      >
    </button>
  </div>
</nav>
