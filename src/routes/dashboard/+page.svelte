<script>
  import { Col, Container, Row } from "sveltestrap";
  import BreadCrumb from "../../Components/Common/BreadCrumb.svelte";
  import Widgets from "./Widgets.svelte";
  import UpcomingEvents from "./UpcomingEvents.svelte";
  import YearlyStats from "./YearlyStats.svelte";
  import VodFeature from "./VodFeature.svelte";
  import VodList from "./VodList.svelte";

  import data from "../../common/data/dashboard";
  import Counter from "../../Components/Common/CounterPage.svelte";
  import Ladder from "./Ladder.svelte";
  import Shoutouts from "./Shoutouts.svelte";
  import CharacterData from "./CharacterData.svelte";
</script>

<svelte:head>
  <title>CouchCade | Dashboard</title>
</svelte:head>
<Counter />
<div class="page-content">
  <Container fluid>
    <BreadCrumb title="Dashboard" pageTitle="Home" />
    <Row class="project-wrapper">
      <Col xs={8}>
        <Widgets dashboardWidgets={data.dashboardWidgets} />
        <YearlyStats />
      </Col>
      <UpcomingEvents />
    </Row>
    <Row>
      <Col xs={6}>
        <VodFeature />
      </Col>
      <Col>
        <VodList />
      </Col>
    </Row>
    <Row>
      <Ladder ladderDataCharts={data.ladderDataCharts} />
      <Shoutouts />
      <CharacterData />
    </Row>
  </Container>
</div>
