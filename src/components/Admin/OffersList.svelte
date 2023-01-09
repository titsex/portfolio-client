<script>
  import OffersStatusesSelector from '@component/Admin/OffersStatusesSelector'

  export let offers
</script>

<table class="w-full table-auto bg-[#e6e6e6] text-center dark:bg-[#191919]">
  <thead>
    <tr>
      <th>ID</th>
      <th>Email</th>
      <th>Message</th>
      <th>Status</th>
    </tr>
  </thead>

  <tbody>
    {#each offers as offer}
      <tr>
        <td class="w-1/12">{offer.id}</td>
        <td class="w-2/12">{offer.email}</td>
        <td class="w-7/12 break-all">{offer.message}</td>
        <td><OffersStatusesSelector currentStatus={offer.status} id={offer.id} /></td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  th,
  td {
    @apply border-y border-x border-gray-400 border-opacity-[15%] px-6 py-4;
  }
</style>
