<script>
  import Flatpickr from "svelte-flatpickr";
</script>

<div class="col-xxl-4">
  <div class="card">
    <div class="card-header border-0">
      <h4 class="card-title mb-0">Upcoming Events</h4>
    </div>
    <div class="card-body pt-0">
      <div class="upcoming-scheduled">
        <Flatpickr
          class="form-control"
          options={{
            dateFormat: "d M, Y",
            inline: true,
          }}
        />
      </div>

      <h6 class="text-uppercase fw-semibold mt-4 mb-4 text-muted">Events:</h6>
      <div class="mini-stats-wid d-flex align-items-center mt-3">
        <div class="flex-shrink-0 avatar-sm">
          <span
            class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4"
          >
            09
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mb-1">Biweekly 20</h6>
          <p class="text-muted mb-0">CouchCade Biweekly</p>
        </div>
        <div class="flex-shrink-0">
          <p class="text-muted mb-0">
            2:00 <span class="text-uppercase">pm</span>
          </p>
        </div>
      </div>
      <div class="mini-stats-wid d-flex align-items-center mt-3">
        <div class="flex-shrink-0 avatar-sm">
          <span
            class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4"
          >
            12
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mb-1">Street Fighter 6 Invitational</h6>
          <p class="text-muted mb-0">ATO Gaming Cafe</p>
        </div>
        <div class="flex-shrink-0">
          <p class="text-muted mb-0">
            11:30 <span class="text-uppercase">am</span>
          </p>
        </div>
      </div>
      <div class="mini-stats-wid d-flex align-items-center mt-3">
        <div class="flex-shrink-0 avatar-sm">
          <span
            class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4"
          >
            16
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mb-1">Biweekly 21</h6>
          <p class="text-muted mb-0">CouchCade Biweekly</p>
        </div>
        <div class="flex-shrink-0">
          <p class="text-muted mb-0">
            2:00 <span class="text-uppercase">pm</span>
          </p>
        </div>
      </div>
      <div class="mini-stats-wid d-flex align-items-center mt-3">
        <div class="flex-shrink-0 avatar-sm">
          <span
            class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4"
          >
            27
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mb-1">Evo Malaysia 2023</h6>
          <p class="text-muted mb-0">CouchCade Gaming</p>
        </div>
        <div class="flex-shrink-0">
          <p class="text-muted mb-0">
            1:45 <span class="text-uppercase">pm</span>
          </p>
        </div>
      </div>

      <div class="mt-3 text-center">
        <a href={null} class="text-muted text-decoration-underline"
          >View all Events</a
        >
      </div>
    </div>
  </div>
</div>
