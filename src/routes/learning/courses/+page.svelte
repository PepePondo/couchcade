<script>
  import BreadCrumb from "../../../Components/Common/BreadCrumb.svelte";
  import { Container } from "sveltestrap";
  import data from "../../../common/data/courseList.js";
  import List from "./List.svelte";
</script>

<svelte:head>
  <title>Product List | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>

<div class="page-content">
  <Container fluid>
    <BreadCrumb title="Course List" pageTitle="Course" />

    <List courseList={data.courseList} />
  </Container>
</div>
