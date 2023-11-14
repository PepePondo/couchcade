<script>
  import { Card, CardBody, CardHeader, Col, Row } from "sveltestrap";
  import YearlyStatsCharts from "./YearlyStatsCharts.svelte";
</script>

<Row>
  <Col xl={12}>
    <Card>
      <CardHeader class="border-0 align-items-center d-flex">
        <h4 class="card-title mb-0 flex-grow-1">Yearly Stats</h4>
        <div>
          <button type="button" class="btn btn-soft-secondary btn-sm">
            ALL
          </button>
          <button type="button" class="btn btn-soft-secondary btn-sm">
            1M
          </button>
          <button type="button" class="btn btn-soft-secondary btn-sm">
            6M
          </button>
          <button type="button" class="btn btn-soft-primary btn-sm">
            1Y
          </button>
        </div>
      </CardHeader>

      <CardHeader class="p-0 border-0 bg-light-subtle">
        <Row class="g-0 text-center">
          <Col xs={6} sm={3}>
            <div class="p-3 border border-dashed border-start-0">
              <h5 class="mb-1">
                <span class="counter-value" data-target="62">0</span>
              </h5>

              <p class="text-muted mb-0">Number of Games</p>
            </div>
          </Col>
          <Col xs={6} sm={3}>
            <div class="p-3 border border-dashed border-start-0">
              <h5 class="mb-1">
                <span class="counter-value" data-target="32">0</span>
              </h5>

              <p class="text-muted mb-0">Total Wins</p>
            </div>
          </Col>
          <Col xs={6} sm={3}>
            <div class="p-3 border border-dashed border-start-0">
              <h5 class="mb-1">
                <span class="counter-value" data-target="3021">0</span>
              </h5>

              <p class="text-muted mb-0">Points Earned</p>
            </div>
          </Col>
          <Col xs={6} sm={3}>
            <div class="p-3 border border-dashed border-start-0 border-end-0">
              <h5 class="mb-1 text-success">
                <span class="counter-value" data-target="13">0</span>
              </h5>

              <p class="text-muted mb-0">Events Attended</p>
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardBody class="p-0 pb-2">
        <div>
          <div dir="ltr" class="apex-charts">
            <YearlyStatsCharts
              dataColors={["--vz-primary", "--vz-green", "--vz-danger"]}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
</Row>
