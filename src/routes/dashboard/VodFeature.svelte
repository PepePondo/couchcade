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
  import { ArrowRightIcon } from "svelte-feather-icons";

  const vods = vodList[vodList.length - 1];
</script>

<Card class="min-vh-50">
  <CardHeader class="border-0 align-items-center d-flex">
    <h4 class="card-title mb-0 flex-grow-1">Latest VOD</h4>
  </CardHeader>
  <CardBody>
    <CardTitle>{vods.match}</CardTitle>
    <CardSubtitle
      ><span class="text-muted content-center flex"
        >{vods.event}<ArrowRightIcon size="18" />
        {vods.player1}<XIcon size="18" />{vods.player2}</span
      >
    </CardSubtitle>
    <div class="live-preview">
      <div class="ratio ratio-16x9 mt-2">
        <iframe
          src={vods.video}
          title={vods.match}
          allow="accelerometer;
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  </CardBody>
</Card>
