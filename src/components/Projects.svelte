<script>
  import { projects } from '@consts'
  import { t } from 'i18next'
</script>

<section id="projects" class="mt-5 p-5">
  <h1 class="text-center text-2xl font-semibold">{t('section.projects.title')}</h1>

  <div class="mt-7">
    {#if projects.length}
      <div class="grid grid-cols-2 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {#each projects as project}
          <div class="bg-light-theme transition-transform hover:scale-110 dark:bg-dark-theme">
            <img width="350" height="350" class="w-full invert dark:invert-0" src={project.image} alt="" />
            <div class="p-5">
              <h2 class="mb-5 text-xl font-semibold">next-extensive-template</h2>
              <p>
                Extensive template for NEXT.js with redux and redux-toolkit already set up. Bootstrap and
                bootstrap-icons are already included in the project. A separate bonus for beginners is that the project
                has examples of using redux and redux-toolkit in asynchronous mode.
              </p>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <h2 class="text-center">{t('section.projects.empty')}</h2>
      <hr class="mt-5" />
    {/if}
  </div>
</section>

<style>
  p {
    font-family: 'Fira Code Light';
  }
</style>
