<script>
  import RefreshOffersListIcon from '@SVG/RefreshOffersListIcon'
  import { getOffers } from '@http/offers/get-offers'
  import OffersList from '@component/Admin/OffersList'
  import Spinner from '@component/Spinner'

  let promise = getOffers()

  function handleClick() {
    promise = getOffers()
  }
</script>

<section id="offers" class="mt-5 p-5">
  {#await promise}
    <Spinner />
  {:then offers}
    {#if offers.length}
      <h1 class="text-center text-2xl font-semibold mb-6">Offers</h1>
      <OffersList {offers} />
    {:else}
      <div class="flex">
        <h2 class="flex-auto text-center">There are no offers yet.</h2>
        <button class="hover:text-red-400" on:click={handleClick}>
          <RefreshOffersListIcon />
        </button>
      </div>
      <hr class="mt-5" />
    {/if}
  {:catch error}
    <span class="mt-3 flex justify-center text-center font-bold">{error}</span>
  {/await}
</section>
