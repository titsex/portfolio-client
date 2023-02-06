<script lang="ts">
  import { avatarUrl } from '@consts'
  import { t } from 'i18next'
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
      <span class="mt-3 flex justify-center opacity-70">{t('section.about.job')}</span>
    </div>

    <div class="mt-7 ml-12 text-xl">
      <h1 class="text-2xl font-semibold">{t('section.about.title')}</h1>

      <p class="mt-5">
        {t('section.about.info')}
      </p>
    </div>
  </div>
</section>

<style>
  #about {
    @apply p-5 shadow;
  }
</style>
