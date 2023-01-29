<script>
  export let type
  export let status

  import { logout, token } from '@store/authorization'
  import { routes, adminRoutes } from '@consts'
  import { switchTheme } from '@store/theme'

  import SwitchThemeIcon from '@SVG/SwitchThemeIcon'
  import MenuIcon from './SVG/MenuIcon.svelte'

  let menuIsOpen = false

  function handleMenu() {
    menuIsOpen = !menuIsOpen
  }
</script>

<nav class="bg-[rgba(255,255,255,0.3)] text-black dark:bg-[rgba(0,0,0,0.3)] dark:text-white">
  <div class="flex">
    <a href="/" aria-label="Home" class="mr-auto">Portfolio</a>

    <div hidden={!menuIsOpen} class="md:block md:w-auto">
      {#if status}
        <ul class="mt-9 flex flex-col text-center md:mt-0 md:flex-row md:space-x-5">
          {#each type === 'default' ? routes : adminRoutes as route}
            <li>
              <a aria-label={route.title} class="block hover:text-red-400" href={route.to}>{route.title}</a>
            </li>
          {/each}
        </ul>
      {/if}
    </div>

    <div class="ml-auto flex">
      <button on:click={logout} id="logout" hidden={!(type === 'admin' && token.get())} class=""> Log out </button>

      <button
        id="switchTheme"
        class="mr-5 mt-1 flex md:mt-0 md:mr-0 md:block"
        aria-label="theme-toggler"
        on:click={switchTheme}
      >
        <SwitchThemeIcon />
      </button>

      <button id="handleMenu" on:click={handleMenu} class="flex md:hidden">
        <MenuIcon />
      </button>
    </div>
  </div>
</nav>

<style>
  nav {
    @apply fixed top-0 z-[9999] w-full py-3 px-6 text-2xl backdrop-blur;
  }

  #handleMenu:hover,
  #switchTheme:hover {
    @apply text-red-400;
  }

  #handleMenu,
  #switchTheme {
    @apply outline-none;
  }

  #logout {
    @apply mr-5 rounded-full bg-red-900 px-2 text-sm font-bold text-white;
  }

  #logout:hover {
    @apply scale-105 bg-red-700;
  }
</style>
