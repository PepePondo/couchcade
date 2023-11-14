<script>
export let titles;

  import banjo from "../../assets/images/smashIcons/banjo.png";
  import bayonetta from "../../assets/images/smashIcons/bayonetta.png";
  import bowser from "../../assets/images/smashIcons/bowser.png";
  import bowserjr from "../../assets/images/smashIcons/bowserjr.png";
  import byleth from "../../assets/images/smashIcons/byleth.png";
  import captainfalcon from "../../assets/images/smashIcons/captainfalcon.png";
  import charizard from "../../assets/images/smashIcons/charizard.png";
  import chrom from "../../assets/images/smashIcons/chrom.png";
  import cloud from "../../assets/images/smashIcons/cloud.png";
  import corrin from "../../assets/images/smashIcons/corrin.png";
  import daisy from "../../assets/images/smashIcons/daisy.png";
  import darkpit from "../../assets/images/smashIcons/darkpit.png";
  import darksamus from "../../assets/images/smashIcons/darksamus.png";
  import dedede from "../../assets/images/smashIcons/dedede.png";
  import diddy from "../../assets/images/smashIcons/diddy.png";
  import dkong from "../../assets/images/smashIcons/dkong.png";
  import drmario from "../../assets/images/smashIcons/drmario.png";
  import duckhunt from "../../assets/images/smashIcons/duckhunt.png";
  import falco from "../../assets/images/smashIcons/falco.png";
  import fox from "../../assets/images/smashIcons/fox.png";
  import gamewatch from "../../assets/images/smashIcons/gamewatch.png";
  import ganon from "../../assets/images/smashIcons/ganon.png";
  import greninja from "../../assets/images/smashIcons/greninja.png";
  import hero from "../../assets/images/smashIcons/hero.png";
  import iceclimbers from "../../assets/images/smashIcons/iceclimbers.png";
  import ike from "../../assets/images/smashIcons/ike.png";
  import incineroar from "../../assets/images/smashIcons/incineroar.png";
  import inkling from "../../assets/images/smashIcons/inkling.png";
  import ivysaur from "../../assets/images/smashIcons/ivysaur.png";
  import jiggly from "../../assets/images/smashIcons/jiggly.png";
  import joker from "../../assets/images/smashIcons/joker.png";
  import kazuya from "../../assets/images/smashIcons/kazuya.png";
  import ken from "../../assets/images/smashIcons/ken.png";
  import kirby from "../../assets/images/smashIcons/kirby.png";
  import krool from "../../assets/images/smashIcons/krool.png";
  import link from "../../assets/images/smashIcons/link.png";
  import littlemac from "../../assets/images/smashIcons/littlemac.png";
  import lucario from "../../assets/images/smashIcons/lucario.png";
  import lucas from "../../assets/images/smashIcons/lucas.png";
  import lucina from "../../assets/images/smashIcons/lucina.png";
  import luigi from "../../assets/images/smashIcons/luigi.png";
  import mario from "../../assets/images/smashIcons/mario.png";
  import marth from "../../assets/images/smashIcons/marth.png";
  import megaman from "../../assets/images/smashIcons/megaman.png";
  import metaknight from "../../assets/images/smashIcons/metaknight.png";
  import mewtwo from "../../assets/images/smashIcons/mewtwo.png";
  import miifight from "../../assets/images/smashIcons/miifight.png";
  import miigun from "../../assets/images/smashIcons/miigun.png";
  import miisword from "../../assets/images/smashIcons/miisword.png";
  import minmin from "../../assets/images/smashIcons/minmin.png";
  import mythra from "../../assets/images/smashIcons/mythra.png";
  import ness from "../../assets/images/smashIcons/ness.png";
  import pacman from "../../assets/images/smashIcons/pacman.png";
  import palutena from "../../assets/images/smashIcons/palutena.png";
  import peach from "../../assets/images/smashIcons/peach.png";
  import pichu from "../../assets/images/smashIcons/pichu.png";
  import pikachu from "../../assets/images/smashIcons/pikachu.png";
  import pikmin from "../../assets/images/smashIcons/pikmin.png";
  import pit from "../../assets/images/smashIcons/pit.png";
  import plant from "../../assets/images/smashIcons/plant.png";
  import ptrainer from "../../assets/images/smashIcons/ptrainer.png";
  import pyra from "../../assets/images/smashIcons/pyra.png";
  import richter from "../../assets/images/smashIcons/richter.png";
  import ridley from "../../assets/images/smashIcons/ridley.png";
  import rob from "../../assets/images/smashIcons/rob.png";
  import robin from "../../assets/images/smashIcons/robin.png";
  import rosalina from "../../assets/images/smashIcons/rosalina.png";
  import roy from "../../assets/images/smashIcons/roy.png";
  import ryu from "../../assets/images/smashIcons/ryu.png";
  import samus from "../../assets/images/smashIcons/samus.png";
  import sephiroth from "../../assets/images/smashIcons/sephiroth.png";
  import sheik from "../../assets/images/smashIcons/sheik.png";
  import isabelle from "../../assets/images/smashIcons/isabelle.png";
  import shulk from "../../assets/images/smashIcons/shulk.png";
  import simon from "../../assets/images/smashIcons/simon.png";
  import snake from "../../assets/images/smashIcons/snake.png";
  import sonic from "../../assets/images/smashIcons/sonic.png";
  import sora from "../../assets/images/smashIcons/sora.png";
  import squirtle from "../../assets/images/smashIcons/squirtle.png";
  import steve from "../../assets/images/smashIcons/steve.png";
  import terry from "../../assets/images/smashIcons/terry.png";
  import toonlink from "../../assets/images/smashIcons/toonlink.png";
  import villager from "../../assets/images/smashIcons/villager.png";
  import wario from "../../assets/images/smashIcons/wario.png";
  import wiifit from "../../assets/images/smashIcons/wiifit.png";
  import wolf from "../../assets/images/smashIcons/wolf.png";
  import yoshi from "../../assets/images/smashIcons/yoshi.png";
  import younglink from "../../assets/images/smashIcons/younglink.png";
  import zelda from "../../assets/images/smashIcons/zelda.png";
  import zerosuit from "../../assets/images/smashIcons/zerosuit.png";

  let images = {
    banjo: banjo,
    bayonetta,
    bowser,
    bowserjr,
    byleth,
    captainfalcon,
    charizard,
    chrom,
    cloud,
    corrin,
    daisy,
    darkpit,
    darksamus,
    dedede,
    diddy,
    dkong,
    drmario,
    duckhunt,
    falco,
    fox,
    gamewatch,
    ganon,
    greninja,
    hero,
    iceclimbers,
    ike,
    iceclimbers,
    incineroar,
    inkling,
    isabelle,
    ivysaur,
    jiggly,
    joker,
    kazuya,
    ken,
    kirby,
    krool,
    link,
    littlemac,
    lucario,
    lucas,
    lucina,
    luigi,
    mario,
    marth,
    megaman,
    metaknight,
    mewtwo,
    miifight,
    miigun,
    miisword,
    minmin,
    mythra,
    ness,
    pacman,
    palutena,
    peach,
    pichu,
    pikachu,
    pikmin,
    pit,
    plant,
    ptrainer,
    pyra,
    richter,
    ridley,
    rob,
    robin,
    rosalina,
    roy,
    ryu,
    samus,
    sephiroth,
    sheik,
    shulk,
    simon,
    snake,
    sonic,
    sora,
    squirtle,
    steve,
    terry,
    villager,
    wario,
    wiifit,
    wolf,
    yoshi,
    younglink,
    zelda,
    zerosuit: zerosuit
  }

</script>

<div class="gap-1">
{#each titles as title}
    <img
        src={images[title]}
        alt={title}
        class="avatar-sm rounded-circle"
    />
{/each}
</div>

    <style>
    img {
        width: 1.25rem;
        height: 1.25rem;
    }

    img:not(:last-child) {
        margin-right: 0.5rem;
    }
    </style>