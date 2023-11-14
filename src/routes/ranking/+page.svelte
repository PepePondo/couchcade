<script>
    import { Col, Container, Row, ListGroup, ListGroupItem } from "sveltestrap";
    import BreadCrumb from "../../Components/Common/BreadCrumb.svelte";

    // import mock images
    import avatar1 from "../../assets/images/users/avatar-1.jpg";
	import avatar2 from "../../assets/images/users/avatar-2.jpg";
	import avatar3 from "../../assets/images/users/avatar-3.jpg";
	import avatar4 from "../../assets/images/users/avatar-4.jpg";

    import data from "../../common/data/ranking.js";
    import Counter from "../../Components/Common/CounterPage.svelte";
    import SmashIcons from "../../Components/Common/SmashIcons.svelte";
</script>

<svelte:head>
    <title>CouchCade | Rankings</title>
</svelte:head>
<Counter />
<div class="page-content">
    <Container fluid>
        <BreadCrumb title="Rankings" pageTitle="Home" />
        <Row class="project-wrapper">
            <Col xs={12}>
                <ListGroup>
                    <ListGroupItem
                        tag="a"
                        href={null}
                        class="list-group-item-action"
                    >
                        <div class="float-end flex flex-shrink-0 align-middle">
                            <SmashIcons titles={["zerosuit", "banjo", "gamewatch"]} />
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img
                                    src={avatar1}
                                    alt=""
                                    class="avatar-sm rounded-circle"
                                />
                            </div>
                            <div class="flex-shrink-0 fs-16">
                                <p class="list-text text-gray-900 my-0 ms-4">1st</p>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5 class="list-title fs-15 my-0">
                                    Charlie Pritchard
                                </h5>
                            </div>
                        </div>

                    </ListGroupItem>
                    <ListGroupItem
                        tag="a"
                        href={null}
                        class="list-group-item-action"
                    >
                        <div class="float-end flex flex-shrink-0 align-middle">
                            <SmashIcons titles={["zerosuit", "banjo", "gamewatch"]} />
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img
                                    src={avatar1}
                                    alt=""
                                    class="avatar-sm rounded-circle"
                                />
                            </div>
                            <div class="flex-shrink-0 fs-16">
                                <p class="list-text text-gray-900 my-0 ms-4">1st</p>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5 class="list-title fs-15 my-0">
                                    Charlie Pritchard
                                </h5>
                            </div>
                        </div>

                    </ListGroupItem>
                    <ListGroupItem
                        tag="a"
                        href={null}
                        class="list-group-item-action"
                    >
                        <div class="float-end flex flex-shrink-0 align-middle">
                            <SmashIcons titles={["zerosuit", "banjo", "gamewatch"]} />
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img
                                    src={avatar1}
                                    alt=""
                                    class="avatar-sm rounded-circle"
                                />
                            </div>
                            <div class="flex-shrink-0 fs-16">
                                <p class="list-text text-gray-900 my-0 ms-4">1st</p>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5 class="list-title fs-15 my-0">
                                    Charlie Pritchard
                                </h5>
                            </div>
                        </div>

                    </ListGroupItem>
                    <ListGroupItem
                        tag="a"
                        href={null}
                        class="list-group-item-action"
                    >
                        <div class="float-end flex flex-shrink-0 align-middle">
                            <SmashIcons titles={["zerosuit", "banjo", "gamewatch"]} />
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img
                                    src={avatar1}
                                    alt=""
                                    class="avatar-sm rounded-circle"
                                />
                            </div>
                            <div class="flex-shrink-0 fs-16">
                                <p class="list-text text-gray-900 my-0 ms-4">1st</p>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5 class="list-title fs-15 my-0">
                                    Charlie Pritchard
                                </h5>
                            </div>
                        </div>

                    </ListGroupItem>
                    <ListGroupItem
                        tag="a"
                        href={null}
                        class="list-group-item-action"
                    >
                        <div class="float-end flex flex-shrink-0 align-middle">
                            <SmashIcons titles={["zerosuit", "banjo", "gamewatch"]} />
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img
                                    src={avatar1}
                                    alt=""
                                    class="avatar-sm rounded-circle"
                                />
                            </div>
                            <div class="flex-shrink-0 fs-16">
                                <p class="list-text text-gray-900 my-0 ms-4">1st</p>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5 class="list-title fs-15 my-0">
                                    Charlie Pritchard
                                </h5>
                            </div>
                        </div>

                    </ListGroupItem>
                    <ListGroupItem
                        tag="a"
                        href={null}
                        class="list-group-item-action"
                    >
                        <div class="float-end flex flex-shrink-0 align-middle">
                            <SmashIcons titles={["zerosuit", "banjo", "gamewatch"]} />
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img
                                    src={avatar1}
                                    alt=""
                                    class="avatar-sm rounded-circle"
                                />
                            </div>
                            <div class="flex-shrink-0 fs-16">
                                <p class="list-text text-gray-900 my-0 ms-4">1st</p>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5 class="list-title fs-15 my-0">
                                    Charlie Pritchard
                                </h5>
                            </div>
                        </div>

                    </ListGroupItem>
                    <ListGroupItem
                        tag="a"
                        href={null}
                        class="list-group-item-action"
                    >
                        <div class="float-end flex flex-shrink-0 align-middle">
                            <SmashIcons titles={["zerosuit", "banjo", "gamewatch"]} />
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img
                                    src={avatar1}
                                    alt=""
                                    class="avatar-sm rounded-circle"
                                />
                            </div>
                            <div class="flex-shrink-0 fs-16">
                                <p class="list-text text-gray-900 my-0 ms-4">1st</p>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5 class="list-title fs-15 my-0">
                                    Charlie Pritchard
                                </h5>
                            </div>
                        </div>

                    </ListGroupItem>
                    <ListGroupItem
                        tag="a"
                        href={null}
                        class="list-group-item-action"
                    >
                        <div class="float-end flex flex-shrink-0 align-middle">
                            <SmashIcons titles={["zerosuit", "banjo", "gamewatch"]} />
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <img
                                    src={avatar1}
                                    alt=""
                                    class="avatar-sm rounded-circle"
                                />
                            </div>
                            <div class="flex-shrink-0 fs-16">
                                <p class="list-text text-gray-900 my-0 ms-4">1st</p>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5 class="list-title fs-15 my-0">
                                    Charlie Pritchard
                                </h5>
                            </div>
                        </div>

                    </ListGroupItem>
                </ListGroup>
        </Col>
        </Row>
    </Container>
</div>