<script>
  export let type
  export let status

  import { routes, adminRoutes } from '@consts'
  import { switchTheme } from '@utils'

  import SwitchThemeIcon from '@SVG/SwitchThemeIcon'
  import logoutUser from '@http/users/logout-user'

  function handleClick() {
    logoutUser().then(() => location.replace('/'))
  }
</script>

<nav class="navigation bg-[rgba(255,255,255,0.3)] text-black dark:bg-[rgba(0,0,0,0.3)] dark:text-white">
  <div class="mx-3 flex">
    <a href="/" aria-label="Home" class="flex-auto">Portfolio</a>

    {#if status}
      <div class="flex-auto space-x-5">
        {#each type === 'default' ? routes : adminRoutes as route}
          <a aria-label={route.title} class="hover:text-red-400" href={route.to}>{route.title}</a>
        {/each}
      </div>
    {/if}

    <button
      on:click={handleClick}
      hidden={!(type === 'admin' && localStorage.getItem('token'))}
      class="mr-5 rounded-full bg-red-900 px-2 py-1 text-sm font-bold hover:scale-105 hover:bg-red-700"
    >
      Log out
    </button>

    <button class="hover:text-red-400" aria-label="theme-toggler" on:click={switchTheme}>
      <SwitchThemeIcon />
    </button>
  </div>
</nav>

<style>
  .navigation {
    @apply fixed top-0 z-[9999] w-full py-3 px-3 text-2xl backdrop-blur;
  }
</style>
