import { adapters, asset, defineReference, Image } from "konte";
import { audioYue2 } from "konte/workspace/adapters/comfy/audio_yue2.js";
import { imageKrea2TurboT2i } from "konte/workspace/adapters/comfy/image_krea2_turbo_t2i.js";
import { imageZImageBase } from "konte/workspace/adapters/comfy/image_z_image_base.js";
import { imageQwenImageEdit21 } from "konte/workspace/adapters/comfy/image_qwen_image_edit_2_1.js";
import direction from "./direction";

const STYLE =
  "Modern high-end Japanese anime game cinematic key visual, sharp digital illustration with crisp thin lineart, realistic adult proportions, dramatic cel shading with hard-edged shadows, strong rim light, glowing bloom light effects, deep saturated color and high contrast";

const SCENERY_STYLE =
  "Modern high-end Japanese anime game cinematic background art, sharp digital painting with crisp edges, dramatic contrast, glowing bloom light effects, deep saturated color";

const CHARACTER_SHEET =
  "standing full body, facing the viewer in a relaxed three-quarter view, filling the frame from head to boots, on a plain flat warm-grey backdrop under even light";

const PROP_SHEET =
  "a single object centred and filling the frame, on a plain flat warm-grey backdrop under even light";

const LOCATION_SHEET = "wide panoramic establishing view of the place standing empty and still";

export default defineReference(direction, () => {
  const clock = direction.policy.clock!;
  const song = asset(clock.song, audioYue2, {
    style: `English, cinematic orchestral pop, clear powerful female vocal, 104 BPM, ${clock.beatsPerBar}/4, soaring string section, French horns, taiko and timpani, felt piano, choir pads, wide polished film-score production`,
    bpm: 104,
    lyrics: direction.lyrics!.map((s) => `[${s.label}]\n${s.lines.join("\n")}`).join("\n\n"),
  });
  const look = asset("look", imageKrea2TurboT2i, {
    prompt:
      "Modern high-end Japanese anime game cinematic key visual, sharp digital illustration with crisp thin lineart, realistic adult proportions, dramatic cel shading with hard-edged shadows, strong rim light, glowing bloom and lens-flare light effects, and a richly detailed painted background with deep saturated color and high contrast. A river valley on the American frontier at dusk: a wide river curving away between steep bluffs, tall amber grass in the foreground, a few distant cabins with glowing windows, a sky torn open by a blazing orange sunset behind towering dark teal clouds with shafts of golden light. One unnamed traveler in a long brown wool coat and wide-brimmed hat stands on a grassy rise in the left third, seen in three-quarter view from behind, coat edges lit by a hot orange rim light, holding up a small tin lantern whose flame throws a bright glowing halo across the grass. Hundreds of glowing golden embers and sparkling light particles swirl through the air around the lantern. Palette of molten gold, blazing orange, deep crimson shadow, midnight teal and ink black. Wide cinematic landscape framing.",
    width: 1920,
    height: 1088,
  });

  const frameSource = asset("frameSource", imageKrea2TurboT2i, {
    prompt: `${SCENERY_STYLE}. An ornate baroque gold filigree picture frame border seen perfectly straight on: rich carved gold scrollwork and laurel leaves running in a narrow band along all four edges of the image, large ornamental gold corner pieces in each corner, and a small gold crest at the centre of the top edge and of the bottom edge. The frame is gleaming polished gold with warm highlights, laid on a pure flat black background, and the whole centre inside the band is flat pure black.`,
    width: 1920,
    height: 1088,
  });
  const _portraitFrame = asset("portraitFrame", adapters.jsxImage, {
    width: 1248,
    height: 704,
    build: () => (
      <>
        <Image src={frameSource} fill style={{ clipPath: "inset(0 50% 50% 0)" }} />
        <Image src={frameSource} fill style={{ clipPath: "inset(0 50% 50% 0)", transform: "scaleX(-1)" }} />
        <Image src={frameSource} fill style={{ clipPath: "inset(0 50% 50% 0)", transform: "scaleY(-1)" }} />
        <Image src={frameSource} fill style={{ clipPath: "inset(0 50% 50% 0)", transform: "scale(-1, -1)" }} />
      </>
    ),
  });

  const frameOverlay = asset("frameOverlay", adapters.imageFile, {
    path: "assets/files/portraitFrame.png",
  });

  const president = (id: string, width: number, height: number) => {
    const source = asset(`${id}Portrait`, adapters.imageFile, {
      path: `assets/files/portraits/${id}.jpg`,
    });
    return asset(id, imageQwenImageEdit21, {
      image1: source,
      image2: look,
      prompt:
        "Render <image1> as a modern high-end Japanese anime game key visual character portrait in the rendering of <image2>: crisp thin lineart, realistic adult proportions, dramatic cel shading with hard-edged shadows, a warm golden rim light along the hair and shoulders, deep saturated color, on a plain flat dark warm-grey backdrop. Keep the same face, facial proportions, hairstyle, clothing and pose as in <image1>.",
      width,
      height,
    });
  };
  const washington = president("washington", 1024, 1216);
  const jefferson = president("jefferson", 1024, 1216);
  const jackson = president("jackson", 992, 1248);
  const lincoln = president("lincoln", 992, 1280);
  const tRoosevelt = president("tRoosevelt", 992, 1248);
  const wilson = president("wilson", 960, 1280);
  const fRoosevelt = president("fRoosevelt", 960, 1280);
  const truman = president("truman", 960, 1312);
  const eisenhower = president("eisenhower", 992, 1280);
  const kennedy = president("kennedy", 992, 1280);
  const johnson = president("johnson", 960, 1280);
  const nixon = president("nixon", 960, 1280);

  const redrawn = (id: string, photo: string, keep = "") => {
    const source = asset(`${id}Photo`, imageZImageBase, {
      prompt: `Full-length documentary photograph, standing straight and facing the camera in a relaxed three-quarter view, head to boots in frame, against a plain warm-grey studio wall under soft even daylight. ${photo}`,
      negativePrompt: "blurry, extra fingers, watermark, text",
      width: 896,
      height: 1344,
    });
    return asset(id, imageQwenImageEdit21, {
      image1: source,
      image2: look,
      prompt:
        "Render <image1> as a modern high-end Japanese anime game key visual character illustration in the rendering of <image2>: crisp thin lineart, realistic adult proportions, dramatic cel shading with hard-edged shadows, a warm golden rim light along the hair and shoulders, deep saturated color, on a plain flat warm-grey backdrop. Keep the same face, facial proportions, hairstyle, clothing and pose as in <image1>." + keep,
      width: 896,
      height: 1344,
    });
  };
  const settler = redrawn(
    "settler",
    "A plain-featured English settler woman of 1607 Virginia in her mid twenties, a long face with a strong nose, thin lips, uneven weathered skin with sunburn and freckles across the cheeks, tired deep-set grey eyes, brown hair tucked under an undyed linen coif, a soot-stained brown wool gown with a cream linen apron and rolled sleeves, rough work-worn hands.",
  );
  const minuteman = asset("minuteman", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A young colonial minuteman of 1775, lean, earnest face, black tricorn hat, cream linen shirt under a brown wool waistcoat, dark breeches, a musket slung on his shoulder, ${CHARACTER_SHEET}.`,
  });
  const blacksmith = asset("blacksmith", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A muscular middle-aged frontier blacksmith of the 1860s, short beard, soot-smudged face, a heavy brown leather apron over a collarless grey work shirt with sleeves rolled to the elbow, thick forearms, ${CHARACTER_SHEET}.`,
  });
  const cherokeeElder = asset("cherokeeElder", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A dignified Cherokee elder woman of 1838, lined weathered face, grey-streaked black braids, an indigo trade-cloth turban-style head wrap, an indigo trade-cloth shawl over a long calico dress, moccasins, ${CHARACTER_SHEET}.`,
  });
  const freedomSeeker = asset("freedomSeeker", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A young Black man of the 1850s seeking freedom, lean and strong, close-cropped hair, intense resolute eyes, a frayed off-white homespun shirt and worn brown trousers, barefoot, ${CHARACTER_SHEET}.`,
  });
  const unionSoldier = redrawn(
    "unionSoldier",
    "A young white Union soldier of the American Civil War, about nineteen, of Irish-American descent, fair pale skin with ruddy freckled cheeks, sandy light-brown hair, pale blue eyes, a narrow face with a long straight nose and a slightly crooked mouth, a navy-blue kepi cap and navy-blue wool sack coat with brass buttons, light-blue trousers, worn brogans.",
  );
  const confederateSoldier = redrawn(
    "confederateSoldier",
    "A young white Confederate soldier of the American Civil War, about nineteen, of Irish-American descent, fair pale skin with ruddy freckled cheeks, sandy light-brown hair, pale blue eyes, a narrow face with a long straight nose and a slightly crooked mouth, a grey kepi cap and grey wool shell jacket with brass buttons, grey trousers, worn brogans.",
    " Keep the light slate-grey colour of the wool jacket, cap and trousers exactly as in <image1>.",
  );
  const dustMother = redrawn(
    "dustMother",
    "A plain-featured Dust Bowl farm mother of the 1930s in her late thirties, a gaunt square face with hollow cheeks, fine lines at the eyes and mouth, sun-weathered skin, worried but steady hazel eyes, brown hair pinned back in a low bun with loose strands, a faded blue small-flower print cotton dress, bony work-worn hands.",
  );
  const factoryWoman = redrawn(
    "factoryWoman",
    "A sturdy 1940s aircraft factory worker woman in her late twenties, a broad round face with a wide nose, heavy dark eyebrows, a few freckles and a smudge of grease on one cheek, a confident lopsided grin, a red bandana with white polka dots tied over dark curly hair, navy-blue work coveralls with sleeves rolled up over strong forearms, welding goggles pushed up on her forehead, leather work gloves.",
  );
  const astronaut = asset("astronaut", imageKrea2TurboT2i, {
    prompt: `${STYLE}. An Apollo 11 astronaut of 1969 in a white Apollo spacesuit with an American flag patch on the shoulder, a white helmet with the gold visor raised to show a calm focused face, white gloves and white moon boots, ${CHARACTER_SHEET}.`,
  });

  const vocalist = asset("vocalist", imageKrea2TurboT2i, {
    prompt: `${STYLE}. The silhouette of a female singer standing at a vintage microphone, seen in profile as a dark shape against a blazing golden backlight, long hair lifted by the light, golden embers drifting around her, ${CHARACTER_SHEET}.`,
  });

  const lantern = asset("lantern", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A punched-tin lantern of colonial America with a conical top and ring handle, a candle burning inside throwing star-shaped specks of light through the pierced pattern, ${PROP_SHEET}.`,
  });
  const fireSteel = asset("fireSteel", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A traditional 17th-century fire-starting kit: a hand-forged steel fire striker seen flat from above, a thin strip of dark steel bent into the shape of a wide capital letter C, its straight back about ten centimetres long forming the striking edge and its two ends curling inward into small decorative spirals, the open side of the C wide enough for four fingers, lying beside a sharp-edged grey flint chip and a small square of black char cloth, ${PROP_SHEET}.`,
  });
  const candle = asset("candle", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A single white wax candle in a simple brass candlestick holder, burning with a small bright flame, ${PROP_SHEET}.`,
  });
  const parchment = asset("parchment", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A large yellowed parchment sheet of the 1776 Declaration of Independence, an ornate calligraphic title across the top, dense handwritten columns and rows of signatures below, ${PROP_SHEET}.`,
  });
  const kerosene = asset("kerosene", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A 1930s brass kerosene lamp with a soot-clouded glass chimney and a small thin flame inside, ${PROP_SHEET}.`,
  });
  const weldingTorch = asset("weldingTorch", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A 1940s brass and steel oxy-acetylene welding torch with two black hoses attached, a sharp blue-white flame at its tip, ${PROP_SHEET}.`,
  });
  const saturnV = asset("saturnV", imageKrea2TurboT2i, {
    prompt: `${STYLE}. The Saturn V moon rocket standing upright, white with black roll-pattern bands and the vertical letters "USA" on the first stage, five engine bells at its base, the whole rocket from nozzles to escape tower filling the frame, on a plain flat warm-grey backdrop under even light.`,
    width: 1024,
    height: 2048,
  });

  const darkness = asset("darkness", imageKrea2TurboT2i, {
    prompt: `${SCENERY_STYLE}. An infinite velvet-black void with golden embers drifting slowly through it, faint warm haze in the centre, ${LOCATION_SHEET}.`,
  });
  const shore = asset("shore", imageKrea2TurboT2i, {
    prompt: `${STYLE}. The Virginia shore of 1607 before dawn: a sandy beach, a triangular log palisade fort of sharpened timbers on the left, a three-masted sailing ship at anchor offshore on the right, amber pre-dawn glow on the horizon, deep blue sky, ${LOCATION_SHEET}.`,
  });
  const bostonNight = asset("bostonNight", imageKrea2TurboT2i, {
    prompt: `${STYLE}. Boston at night in 1775: colonial brick rooftops with chimneys crowding a narrow street, a tall white church steeple rising above them on the right, moonlit midnight-blue sky, warm glow from a few windows, ${LOCATION_SHEET}.`,
  });
  const assemblyHall = asset("assemblyHall", imageKrea2TurboT2i, {
    prompt: `${STYLE}. The Assembly Room of Independence Hall, Philadelphia, 1776: rows of desks covered in green baize, tall arched windows along the left wall pouring in golden morning light, the carved rising-sun chair at the president's desk at the far end, candles burning on the desks, ${LOCATION_SHEET}.`,
  });
  const gilded = asset("gilded", imageKrea2TurboT2i, {
    prompt: `${STYLE}. An ornate gold filigree frame with baroque scrollwork and laurel leaves bordering the whole image, inside it an empty backdrop of radiating gold rays bursting from the centre over deep crimson and midnight-blue, glittering light particles, ${LOCATION_SHEET}.`,
  });
  const forge = asset("forge", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A frontier blacksmith's forge of the 1860s: a brick forge hearth glowing with red-hot coals on the right, a black iron anvil on a stump in the centre, hammers and tongs on the timber walls, sparks hanging in the smoky air, ${LOCATION_SHEET}.`,
  });
  const prairie = asset("prairie", imageKrea2TurboT2i, {
    prompt: `${STYLE}. The Great Plains in 1869 at golden hour: an endless sea of golden grass, a single railroad track running across the middle to the horizon, a lone cottonwood tree on the left with a circle of white-topped covered wagons camped beneath it, towering sunlit clouds, ${LOCATION_SHEET}.`,
  });
  const mississippi = asset("mississippi", imageKrea2TurboT2i, {
    prompt: `${STYLE}. The Mississippi River at sunset in the 19th century: a vast shining river, a white paddle steamer with two tall smokestacks on the water in the left half, low river bluffs along the far bank on the right, crimson and gold sky, ${LOCATION_SHEET}.`,
  });
  const plantation = asset("plantation", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A southern cotton field at night in the 1850s: long rows of white cotton bolls glowing under a cold full moon, dark trees on the horizon, a silent midnight-blue sky, ${LOCATION_SHEET}.`,
  });
  const trail = asset("trail", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A frozen forest road in the winter of 1838: a muddy rutted trail running away between dense snow-laden pines, grey falling snow, a pale cold sky, ${LOCATION_SHEET}.`,
  });
  const riverCamps = asset("riverCamps", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A Civil War night seen from a hill: on the near left bank rows of white Union army tents with blue flags and campfires, a dark river running through the middle, on the far right bank rows of grey Confederate army tents with campfires, smoke drifting under a starry sky, ${LOCATION_SHEET}.`,
  });
  const dustFarm = asset("dustFarm", imageKrea2TurboT2i, {
    prompt: `${STYLE}. An Oklahoma farm in the 1930s Dust Bowl: a weathered farmhouse with a bare kitchen table visible through its open door, a sand-scoured metal farm windmill on the left, a towering brown dust storm rolling in like a wall from the right, a sepia sky, ${LOCATION_SHEET}.`,
  });
  const warfront = asset("warfront", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A World War I front at night: churned mud and tangled barbed wire stretching across the open ground between the trenches, white searchlight beams crossing in the smoky sky, a distant orange glow on the horizon, ${LOCATION_SHEET}.`,
  });
  const factory = asset("factory", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A vast 1940s aircraft factory: rows of silver bomber fuselages receding into the distance, hundreds of overhead factory lamps hanging from a high steel-truss ceiling, showers of welding sparks, steel-blue light, ${LOCATION_SHEET}.`,
  });
  const atlantic = asset("atlantic", imageKrea2TurboT2i, {
    prompt: `${STYLE}. The North Atlantic at night during World War II: a convoy of darkened cargo ships crossing heavy swells, the horizon burning red under black smoke clouds, steel-blue sea, ${LOCATION_SHEET}.`,
  });
  const safehouse = asset("safehouse", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A northern farmhouse on a dark night in the 1850s, an Underground Railroad safe house: a single four-pane farmhouse window glowing warmly with a candle inside, a split-rail fence crossing a dark field in front, deep night sky with the North Star, ${LOCATION_SHEET}.`,
  });
  const homefront = asset("homefront", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A modest American living room at night in 1944: a window with lace curtains and, hanging in it, a small rectangular service banner with a white field and a single blue star inside a red border, a wooden sill, a worn armchair, dim warm lamplight, ${LOCATION_SHEET}.`,
  });
  const launchPad = asset("launchPad", imageKrea2TurboT2i, {
    prompt: `${STYLE}. Launch Complex 39A at Kennedy Space Center at dawn in 1969: a towering red steel launch umbilical tower beside an empty launch platform, the flame trench below, the Atlantic horizon glowing white-gold behind, ${LOCATION_SHEET}.`,
  });
  const beach = asset("beach", imageKrea2TurboT2i, {
    prompt: `${STYLE}. A Florida beach near Cape Canaveral on a bright morning in 1969: sand dunes with sea oats swaying, parked 1960s cars along the road behind, a clear sky, ${LOCATION_SHEET}.`,
  });
  const capsule = asset("capsule", imageKrea2TurboT2i, {
    prompt: `${STYLE}. Inside the Apollo command module: a dense curved instrument panel of switches, dials and glowing indicator lights, three couches, a small window letting in hard white sunlight, ${LOCATION_SHEET}.`,
  });
  const upperSky = asset("upperSky", imageKrea2TurboT2i, {
    prompt: `${SCENERY_STYLE}. The stratosphere: a brilliant white sea of clouds far below, the sky shading from deep blue to black above, the curve of the Earth's horizon glowing, ${LOCATION_SHEET}.`,
  });
  const space = asset("space", imageKrea2TurboT2i, {
    prompt: `${SCENERY_STYLE}. Deep space: the round blue Earth floating in pitch-black space with swirling white clouds, a thin glowing atmosphere rim, scattered stars, ${LOCATION_SHEET}.`,
  });
  const moon = asset("moon", imageKrea2TurboT2i, {
    prompt: `${STYLE}. The Sea of Tranquility on the Moon in July 1969: grey powdery lunar plain with small craters, the gold-foil-wrapped four-legged lunar module standing on the left, the blue Earth hanging above the lunar horizon in a pitch-black sky on the right, ${LOCATION_SHEET}.`,
  });

  return {
    song,
    vocalist,
    frameOverlay,
    look,
    washington,
    jefferson,
    jackson,
    lincoln,
    tRoosevelt,
    wilson,
    fRoosevelt,
    truman,
    eisenhower,
    kennedy,
    johnson,
    nixon,
    settler,
    minuteman,
    blacksmith,
    cherokeeElder,
    freedomSeeker,
    unionSoldier,
    confederateSoldier,
    dustMother,
    factoryWoman,
    astronaut,
    lantern,
    fireSteel,
    candle,
    parchment,
    kerosene,
    weldingTorch,
    saturnV,
    darkness,
    shore,
    bostonNight,
    assemblyHall,
    gilded,
    forge,
    prairie,
    mississippi,
    plantation,
    trail,
    riverCamps,
    dustFarm,
    warfront,
    factory,
    atlantic,
    safehouse,
    homefront,
    launchPad,
    beach,
    capsule,
    upperSky,
    space,
    moon,
  };
});
