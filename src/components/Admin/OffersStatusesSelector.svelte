<script>
  import { offerStatuses } from '@consts'
  import changeOfferStatus from '@http/offers/change-offer-status'
  import { getTextColorByOfferStatus } from '@utils'

  export let id
  export let currentStatus

  let statusTextColor = getTextColorByOfferStatus(currentStatus)
  let status
  let promise

  function changeStatus(event) {
    promise = changeOfferStatus({ id, status: event.target.value }).then(() => {
      statusTextColor = getTextColorByOfferStatus(event.target.value)
      currentStatus = event.target.value
    })
  }
</script>

<select on:change={changeStatus} class={`bg-[#e6e6e6] dark:border-opacity-[15%] dark:bg-[#191919] ${statusTextColor}`}>
  <option
    bind:this={status}
    class={`${statusTextColor}`}
    value={currentStatus}
    disabled={currentStatus === 'pending'}
    selected
  >
    {currentStatus === 'pending' ? 'Select status' : currentStatus}
  </option>

  {#each offerStatuses as status}
    {#if currentStatus !== status}
      <option class="text-black dark:text-white" value={status}>
        {status}
      </option>
    {/if}
  {/each}
</select>

{#await promise catch error}
  <h5 class="text-red-400 mt-3">{error}</h5>
  {(status.selected = true) && ''}
{/await}

<style>
  select {
    @apply w-full cursor-pointer appearance-none rounded border border-solid
    border-gray-300 py-1.5 px-3 text-center transition ease-in-out;
  }
</style>
