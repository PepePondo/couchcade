<script>
  import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardSubtitle,
  } from "sveltestrap";
  import vodList from "../../common/data/vods.js";
  import { XIcon } from "svelte-feather-icons";

  const vodPage = vodList.filter((seven) => seven.id <= 7);
</script>

<Card class="min-vh-50">
  <CardBody>
    <div class="table-responsive table-card">
      <table class="table table-nowrap mb-0">
        <thead class="table-light">
          <tr>
            <th scope="col">Match</th>
            <th scope="col">Event</th>
            <th scope="col">Players</th>
            <th scope="col">Status</th>
            <th scope="col">VOD</th>
          </tr>
        </thead>
        <tbody>
          {#each vodPage as item}
            <tr>
              <td>{item.event}</td>
              <td>{item.match}</td>
              <td
                >{item.player1}
                <XIcon />
                {" "}
                {item.player2}
              </td>
              <td>
                <span class={`badge bg-${item.badge}`}>{item.status}</span>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger btn-icon waves-effect waves-light btn-sm"
                >
                  <i class="ri-youtube-fill" />
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="align-items-center mt-xl-3 mt-4 justify-content-between d-flex">
      <div class="flex-shrink-0">
        <div class="text-muted">
          Showing <span class="fw-semibold">5</span> of{" "}
          <span class="fw-semibold">25</span> Results
        </div>
      </div>
      <ul class="pagination pagination-separated pagination-sm mb-0 pt-3">
        <li class="page-item disabled">
          <a href="/" class="page-link"> ← </a>
        </li>
        <li class="page-item active">
          <a href="/" class="page-link"> 1 </a>
        </li>
        <li class="page-item">
          <a href="/" class="page-link"> 2 </a>
        </li>
        <li class="page-item">
          <a href="/" class="page-link"> 3 </a>
        </li>
        <li class="page-item">
          <a href="/" class="page-link"> → </a>
        </li>
      </ul>
    </div>
  </CardBody>
</Card>
