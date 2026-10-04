import { Animate, asset, Composition, defineVideo, Image, Subtitle, Video } from "konte";
import { videoMinimaxH3R2v } from "konte/workspace/adapters/comfy/video_minimax_h3_r2v.js";
import animatic from "./animatic";
import direction from "./direction";
import reference from "./reference";

const STYLE =
  "2D-animated. Modern high-end Japanese anime game key visual: crisp thin lineart, dramatic cel shading, strong rim light, glowing bloom, deep saturated color.";

const clipLength = (duration: number) => (duration * 24 < 124 ? { length: 124 } : {});

export default defineVideo(direction, {
  timeline: ({ shot }) => ({
    shots: shot("01", ({ duration }) => {
      const panel = animatic.shot("01").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the settler woman's hands raising the C-shaped steel striker above the flint in the dark."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The hand at frame right swings the C-shaped steel striker down and scrapes it across the sharp edge of the flint held in the hand at frame left; a burst of bright orange sparks flies off the strike onto the black char cloth hanging over the flint's front, and a spot on the cloth catches and glows as a growing red ember, its warm light spreading over her fingers while the grey flint stays cold grey stone. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A sharp metallic scrape of steel on flint and a faint crackle of the ember catching, quiet night air around it.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("02", ({ duration }) => {
      const panel = animatic.shot("02").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the settler woman's face lit from below by a small new flame in her cupped hands."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The settler woman purses her lips and blows gently on the small flame cupped in her hands; the flame leans, then stretches taller and brighter, and its warm orange light spreads further across her freckled face and coif, her eyes fixed on it. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "Soft breath on the flame, the small fire crackling, distant waves on the shore.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("03", ({ duration }) => {
      const panel = animatic.shot("03").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the settler woman kneeling by a small campfire on the dawn beach, the log fort on the left and the sailing ship on the right."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The little campfire on the beach flickers and a thin thread of smoke rises from it; the settler woman stays kneeling beside it, and the amber glow along the sea horizon slowly widens and brightens. The camera pushes in with small amplitude at slow speed toward the campfire, the fort and the ship still in frame at the end.",
            ],
          },
          overallSoundscape: "Gentle waves on the sand, the crackle of the small campfire, a light sea breeze.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("04", ({ duration }) => {
      const panel = animatic.shot("04").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the settler woman's hand holding out the punched-tin lantern toward the young minuteman's open hand in a black void."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The young minuteman's hand from the right closes around the lantern's ring handle beside her fingers, and the settler woman's hand opens and slides back toward the left edge, embers drifting around them. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "The soft creak of the lantern's tin handle and a low crackle of the candle flame in a hushed void.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("05", ({ duration }) => {
      const panel = animatic.shot("05").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the white church steeple above the night rooftops of Boston."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "High in the white church steeple, two small warm lantern lights appear side by side in the belfry window and flicker quietly there, tiny points against the midnight-blue night; the rooftops, chimneys and windows keep the same moonlit blue light and warm street glow as in <Picture 1> from start to end. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A quiet night town, a faint wind over the rooftops and a distant church bell's single low hum.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("06", ({ duration }) => {
      const panel = animatic.shot("06").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the young minuteman in a tricorn hat holding up the punched-tin lantern on the far riverbank, Boston and its steeple small behind him."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The young minuteman raises the lantern a little higher beside his cheek and draws his chin in, his eyes fixed on the darkness at frame right; the candle flame flickers inside the punched tin, and across the black river behind him the steeple's two tiny lights glow on. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "Lapping river water at the bank, the candle flame's faint flutter, a cool night wind.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("07", ({ duration }) => {
      const panel = animatic.shot("07").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the delegates seated in the candlelit Assembly Room."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "One by one, the delegates in the Assembly Room rise from their chairs in their own time: one near the front pushes up first with both palms on the green-baize desk, another stands slowly with a hand on his chair back, an older man further back rises a beat later, steadying himself with one hand on his desk, while two still sit before getting to their feet last, every delegate keeping his back to the camera and his face toward the front of the room throughout, the candle flames on the desks bending as each one moves and dust glittering in the golden window light. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "Chairs scraping back one after another on a wooden floor and the rustle of coats as the men stand in turn.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("08", ({ duration }) => {
      const panel = animatic.shot("08").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: George Washington with his head bowed in the gilded frame."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "George Washington slowly lifts his bowed head, opens his eyes and looks straight at the viewer with calm resolve; the white-gold glow behind him swells brighter and the gold rays shimmer. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft shimmering chime of light, otherwise hushed.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("09", ({ duration }) => {
      const panel = animatic.shot("09").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: Thomas Jefferson's hand writing the last line of the parchment with a quill."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Thomas Jefferson's hand draws the quill along the last handwritten line to its end, then lifts the nib off the parchment, a fresh line of dark ink glistening behind it in the candlelight. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "The scratch of a quill nib on parchment and a candle's faint flutter.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("10", ({ duration }) => {
      const panel = animatic.shot("10").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: Thomas Jefferson in profile in the gilded frame, holding the rolled parchment."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Thomas Jefferson turns his head from facing frame left toward the viewer until he faces straight ahead, holding the rolled parchment against his chest, his gaze calm and steady; the gold rays shimmer behind him. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft shimmering chime of light, otherwise hushed.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("11", ({ duration }) => {
      const panel = animatic.shot("11").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the young minuteman's hand holding out the punched-tin lantern toward the frontier blacksmith's open hand in a black void."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The frontier blacksmith's hand from the right closes around the lantern's ring handle beside the minuteman's fingers, and the minuteman's hand opens and slides back toward the left edge, embers drifting around them. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "The soft creak of the lantern's tin handle and a low crackle of the candle flame in a hushed void.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("12", () => {
      const panel = animatic.shot("12").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the frontier blacksmith's hammer raised high over a red-hot iron bar on the anvil."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The frontier blacksmith's hammer swings down hard onto the glowing iron bar on the anvil, and a bright burst of orange sparks sprays out in every direction from the strike, the bar flaring brighter. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A ringing clang of hammer on hot iron and the hiss of scattering sparks in a smoky forge.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("13", () => {
      const panel = animatic.shot("13").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the frontier blacksmith wiping his brow with his forearm beside the red glow of the forge."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The frontier blacksmith lowers the forearm from his brow and lifts his face, his eyes coming up to look straight ahead with quiet resolve, the red forge light shining on his sweat-damp cheek. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "The low roar of the forge fire and a slow exhale.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("14", ({ duration }) => {
      const panel = animatic.shot("14").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a black steam locomotive on the railroad track crossing a golden plain, the lone cottonwood on the left."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The steam locomotive drives steadily to the right along the railroad track, a long plume of white smoke rolling back from its stack and glowing gold in the low sun, the golden grass rippling in the wind. The camera pans right with small amplitude at slow speed, following the locomotive.",
            ],
          },
          overallSoundscape: "The chuffing of a steam engine, rattling iron wheels on the rails and wind across the grass.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("15", () => {
      const panel = animatic.shot("15").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the open firebox door of a locomotive, a bed of coals glowing low inside."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The coals in the firebox flare up and a roaring orange flame surges up from them, filling the firebox and lighting the riveted rim of the door bright orange. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A sudden whoosh and roar of fire inside a furnace.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("16", ({ duration }) => {
      const panel = animatic.shot("16").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a campfire burning inside a circle of covered wagons under a cottonwood at dusk."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The campfire's flames sway and crackle, and its smoke rises in a soft column up into the pink and violet dusk sky past the cottonwood's branches. The camera creeps forward very slightly toward the campfire, so slowly that the last frame is almost the same as the first, the campfire grown only a little larger and every wagon still in frame.",
            ],
          },
          overallSoundscape: "The crackle of a campfire, crickets in the grass and a soft evening breeze.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("17", ({ duration }) => {
      const panel = animatic.shot("17").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a paddle steamer on the Mississippi at dusk, a firework rocket trail climbing from its deck."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The firework rocket bursts high above the paddle steamer into a huge golden chrysanthemum, then two more bloom in red and white beside it, their colours reflected shimmering in the river below. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "Firework bursts booming and crackling over a wide river, the paddle wheel churning water below.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("18", ({ duration }) => {
      const panel = animatic.shot("18").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        ...clipLength(duration),
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: Andrew Jackson facing the viewer in the gilded frame."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Andrew Jackson turns his face from the viewer toward frame left, his piercing eyes fixing on the far distance, his white hair and the red lining of his cloak catching the gold light. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft shimmering chime of light, otherwise hushed.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("19", () => {
      const panel = animatic.shot("19").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the paddle steamer on the river under a grey overcast sky, black smoke drifting in from the left."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "A bank of black smoke rolls in from frame left across the river, thickening as it spreads over the water and around the paddle steamer, its warm deck lamps blurring into dim smudges inside the smoke. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A low rumble of the steamer's engine muffled by drifting smoke, water lapping.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("20", () => {
      const panel = animatic.shot("20").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a chained wrist in a frayed homespun sleeve resting among cotton bolls at night."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "A pale band of cold moonlight slides slowly sideways across the cotton bolls and comes to rest on the dark-skinned wrist and its iron shackle, the chain glinting dully as the light reaches it; the wrist stays still. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A faint clink of iron chain and crickets in the night field.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("21", () => {
      const panel = animatic.shot("21").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a long line of Cherokee people walking a snowy forest road."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The long silent line of Cherokee people trudges very slowly along the snowy road toward frame left with heavy, weary steps, each figure moving only a little, heads bowed, blankets pulled close, grey snow falling steadily over them. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "Footsteps crunching in snow, the creak of a cart wheel, a cold wind through the pines.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("22", () => {
      const panel = animatic.shot("22").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: weathered hands cupping a clay pot with a dim ember inside."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The dim ember inside the clay pot slowly brightens, its core glowing deeper and deeper red as if breathing, its warm light spreading over the weathered fingers holding the pot while snowflakes drift past. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft hiss of the ember and quiet falling snow.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("23", () => {
      const panel = animatic.shot("23").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: two army camps facing each other across a dark river at night."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The campfires on both banks flicker and their thin smoke rises into the starry sky, the dark river between them still. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "Distant crackling campfires, a slow river and a few faint voices carrying over the water.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("24", () => {
      const panel = animatic.shot("24").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a young Union soldier on the riverbank at night gazing across the river."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The young Union soldier keeps his gaze fixed across the river toward frame right, then draws his chin in slightly and presses his lips together, the warm firelight from across the river flickering on his face. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A quiet riverbank at night, the soft crackle of a distant fire.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("25", () => {
      const panel = animatic.shot("25").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a young Confederate soldier on the opposite riverbank at night gazing back across the river."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The young Confederate soldier keeps his gaze fixed back across the river toward frame left and presses his lips together, the warm firelight from across the river flickering on his face. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A quiet riverbank at night, the soft crackle of a distant fire.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("26", () => {
      const panel = animatic.shot("26").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: Abraham Lincoln in a close-up from the chest up against gold rays, holding the brim of a stovepipe hat."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Abraham Lincoln raises the black stovepipe hat to his chest and slowly closes his eyes, his head bowing a little in grief. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft hush, the faint shimmer of light.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("27", () => {
      const panel = animatic.shot("27").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: Theodore Roosevelt against gold rays, glancing toward frame right."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Theodore Roosevelt turns his gaze from frame right to look straight at the viewer through his pince-nez, his jaw set firm. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft shimmering chime of light.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("28", () => {
      const panel = animatic.shot("28").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: Woodrow Wilson against gold rays, looking straight ahead."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Woodrow Wilson slowly lowers his eyes behind his rimless spectacles, his face growing heavy and grave. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft hush, the faint shimmer of light.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("29", () => {
      const panel = animatic.shot("29").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: barbed wire across a night battlefield, a single searchlight beam in the smoky sky."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "More white searchlight beams sweep up from behind the horizon one after another and cross each other in the smoky night sky, swinging slowly, the barbed wire holding still in silhouette. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A distant low rumble of guns far away and wind over the mud.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("30", () => {
      const panel = animatic.shot("30").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a single red poppy standing in grey mud."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The red poppy sways gently in the wind, its petals trembling, the grey mud and blurred wire behind it still. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A thin cold wind over an empty field.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("31", () => {
      const panel = animatic.shot("31").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a Dust Bowl farm with a windmill, a dust storm on the far horizon."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The towering brown dust storm rolls forward from the horizon like a wall toward the farm, swallowing the field, the sky darkening to brown as the windmill blades spin faster. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A rising roar of wind and dust, the rattling windmill.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("32", () => {
      const panel = animatic.shot("32").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a Dust Bowl mother at a bare table beside a kerosene lamp."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The mother turns the kerosene lamp's wick knob and the flame inside the glass chimney shrinks to a thin, small flame, the light on her face dimming. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A small metallic click and a quiet, empty room.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("33", () => {
      const panel = animatic.shot("33").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the mother's hand holding out a lit kerosene lamp toward the factory woman's gloved hand in the dark."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The factory woman's gloved hand from the right closes around the kerosene lamp's wire bail handle, and the mother's thin hand at frame left lets go and slowly draws back off the left edge, the small flame inside the glass chimney swaying gently as the lamp changes hands. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "The faint creak of a wire handle and the soft flutter of a small lamp flame.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("34", () => {
      const panel = animatic.shot("34").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: Franklin D. Roosevelt in a close-up against gold rays, his eyes lowered."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Franklin D. Roosevelt lifts his chin and opens his eyes, looking straight ahead with resolve. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft shimmering chime of light.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("35", () => {
      const panel = animatic.shot("35").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a vast aircraft factory with showers of welding sparks along the bomber fuselages."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Showers of white and orange welding sparks keep pouring steadily down the sides of the silver bomber fuselages from the same welding points, the same amount throughout, raining and bouncing off the floor. The camera creeps forward slightly down the hall, the rows of fuselages and the ceiling lights still in frame at the end.",
            ],
          },
          overallSoundscape: "The hiss and crackle of many welding torches and the clang of a busy factory.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("36", () => {
      const panel = animatic.shot("36").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a welding torch in a gloved hand with a small blue flame near a fuselage panel."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The welding torch's blue flame flares into a sharp, bright blue-white jet, throwing hard blue light across the riveted panel. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A sharp roaring hiss of a welding flame.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("37", () => {
      const panel = animatic.shot("37").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a factory woman in a red polka-dot bandana with welding goggles down."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The factory woman pushes her welding goggles up onto her forehead with her gloved hand, looks at the flame below frame and breaks into a confident smile. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "Factory noise around her, a torch hissing nearby.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("38", () => {
      const panel = animatic.shot("38").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a convoy of darkened cargo ships on a night sea under a burning red horizon."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Every ship in the convoy plows forward toward frame left over the heavy swells, the large ship in the near right foreground rolling and pitching on the waves as it moves, spray bursting at its bow, the red glow on the horizon flickering. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "Heavy waves, deep ship engines and wind at sea.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("39", () => {
      const panel = animatic.shot("39").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a single slender flame in a black void."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The slender flame wavers, shrinks and thins, flickering lower and lower until it is a faint dying glow. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A faint flicker of flame in silence.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("40", () => {
      const panel = animatic.shot("40").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a dark farmhouse window with a tiny bluish flame at a white candle's wick."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The tiny bluish flame at the candle's wick grows into a warm golden flame, its light spreading across the window panes and the weathered frame. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft hiss of a candle catching in a quiet night.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("41", () => {
      const panel = animatic.shot("41").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a young man with a broken shackle at a split-rail fence at night."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The young man slowly lifts his face and looks up toward the upper right, where the warm window light falls across his face and eyes. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "Night insects in a dark field and his slow breath.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("42", () => {
      const panel = animatic.shot("42").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a mother seated at a window with a blue-star banner and a candle, her hands clasped."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Very slowly and quietly, the mother bows her head and closes her eyes in prayer, her clasped hands rising gently and only a little toward her chest, every movement soft and unhurried, the candle flame on the sill steady. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A quiet room at night, a clock ticking softly.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("43", () => {
      const panel = animatic.shot("43").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a candle on a window sill with a tiny dying flame."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The tiny dying flame suddenly leaps up tall and bright, warm golden light flooding the sill and the lace curtains. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft whoosh of a flame rising.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("44", () => {
      const panel = animatic.shot("44").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a mother's hand holding out the white candle in its candlestick toward an astronaut's open gloved hands in the dark."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The astronaut's white gloved hands from the right close around the white candle in its candlestick from below, and the mother's hand at frame left lets go and slides back toward the left edge, the flame steady between them. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A hushed void, the candle flame's faint flutter.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("45", () => {
      const panel = animatic.shot("45").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: Harry Truman against gold rays lifting a grey fedora."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Harry Truman raises the grey fedora higher in greeting and smiles broadly. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft shimmering chime of light.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("46", () => {
      const panel = animatic.shot("46").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: Dwight Eisenhower against gold rays with a wide grin."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Dwight Eisenhower's grin widens into a warm laugh, his eyes crinkling. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft shimmering chime of light.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("47", () => {
      const panel = animatic.shot("47").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the Saturn V rocket on the launch pad at dawn beside the red tower."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "White vapour streams from the Saturn V's side and the dawn light on the horizon brightens. The camera tilts up with small amplitude at slow speed along the rocket toward its tip.",
            ],
          },
          overallSoundscape: "Hissing vapour and a low hum of the launch pad at dawn.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("48", () => {
      const panel = animatic.shot("48").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: John F. Kennedy against gold rays pointing up toward the sky."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "John F. Kennedy raises his pointing arm higher toward the upper corner of the frame, his face lifting with it, determined. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft shimmering chime of light.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("49", () => {
      const panel = animatic.shot("49").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the Saturn V's five dark engine bells seen from below."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Ignition flame bursts in the throat of the centre engine bell and spreads to all five, blasting bright orange-white fire downward. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A thunderous ignition roar.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("50", () => {
      const panel = animatic.shot("50").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the Saturn V on the launch pad at full thrust with flames and exhaust clouds."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The Saturn V slowly lifts off the launch platform on a column of blinding flame, rising past the red tower as the exhaust clouds billow outward. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "An overwhelming rocket roar and rumble.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("51", () => {
      const panel = animatic.shot("51").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a racially mixed crowd of 1969 spectators on a beach looking ahead."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "One after another, the people in the crowd tilt their heads up to the sky, mouths opening in wonder. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A distant rocket roar and a crowd gasping and cheering.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("52", () => {
      const panel = animatic.shot("52").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: Lyndon Johnson in a close-up against gold rays, looking ahead."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Lyndon Johnson lifts his eyes and looks up toward the sky above frame. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A soft shimmering chime of light.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("53", () => {
      const panel = animatic.shot("53").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the Saturn V's nose breaking through a sea of clouds."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The Saturn V climbs up out of the clouds into the darkening sky, trailing flame and a white contrail, the clouds swirling apart around it. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A deep rocket roar fading into thin air.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("54", () => {
      const panel = animatic.shot("54").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: an astronaut in a capsule, his face in dim instrument light."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "A band of hard white light from the window sweeps across the astronaut's cheek and lights his calm face. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "The soft hum of the capsule and faint radio static.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("55", () => {
      const panel = animatic.shot("55").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the blue Earth floating in black space."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The Earth drifts very slightly further away as if seen from a spacecraft leaving it behind, shrinking only a little, so that in the last frame it is still large and fills most of the same area, about four fifths of its starting size, its atmosphere rim glowing blue. The camera pulls back almost imperceptibly at very slow speed.",
            ],
          },
          overallSoundscape: "N/A",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("56", () => {
      const panel = animatic.shot("56").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the lunar module hovering just above the lunar surface, its engine blowing dust."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The lunar module descends the last metre, its footpads settling onto the grey surface as the dust fan blows out and then falls still. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "N/A",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("57", () => {
      const panel = animatic.shot("57").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: an astronaut's white boot on the lowest ladder rung above the lunar soil."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The astronaut's white moon boot steps down off the ladder rung toward the grey soil below. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "N/A",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("58", () => {
      const panel = animatic.shot("58").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: a fresh bootprint in the still lunar soil."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The camera slowly pushes in toward the bootprint, its tread sharp in the same hard white sunlight, the grey soil and black shadows unchanged as they grow larger in frame.",
            ],
          },
          overallSoundscape: "N/A",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("59", () => {
      const panel = animatic.shot("59").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: Richard Nixon against gold rays holding a telephone receiver."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Richard Nixon presses the telephone receiver to his ear and listens intently, his eyes rising slightly. Behind him the white-gold glow and the gold rays over midnight blue each hold the position, size and brightness they have in the first frame, and nothing in the backdrop slides, fades, turns, appears or leaves; only the rays shimmer faintly. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "A faint crackle of a long-distance telephone line.",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
          <Image src={reference.frameOverlay} fill />
        </Composition>
      );
    })
    .nextShot("60", () => {
      const panel = animatic.shot("60").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: an astronaut on the Moon facing the viewer, the Earth above the horizon behind him."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The astronaut turns around slowly to face away from the viewer and tilts his helmeted head up toward the blue Earth hanging above the horizon. The camera holds a static shot.",
            ],
          },
          overallSoundscape: "N/A",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video src={motion} />
        </Composition>
      );
    })
    .nextShot("61", () => {
      const panel = animatic.shot("61").image("first");
      const motion = asset("motion", videoMinimaxH3R2v, {
        image1: panel,
        startImage: panel,
        prompt: {
          subjectDefinitions: ["<Picture 1> is the first frame of [Shot 1]: the blue Earth hanging above the grey lunar horizon in the black sky."],
          summary: {
            tasks: ["keyframe completion"],
            text: "The shot develops forward from <Picture 1>.",
          },
          retentionAnalysis: [
            "<Picture 1> ([Shot 1] first frame): fully_preserved - every figure's identity, clothing, colours, the set and the light.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "The blue Earth hangs quietly above the lunar horizon, its clouds drifting almost imperceptibly and its thin atmosphere rim glowing softly. The grey lunar plain, every crater and pebble on it, the curved grey horizon line across the lower third of the frame, each hold their shape and place, and nothing in the scene slides, turns, rises, sinks, appears or leaves. The camera, however, does move: it pushes in very slowly and smoothly toward the Earth at a constant speed, so that in the last frame the Earth is about a quarter larger and still well inside the frame, with the lunar horizon still visible along the bottom.",
            ],
          },
          overallSoundscape: "N/A",
          nonDiegeticMusic: "N/A",
        },
      });
      return (
        <Composition>
          <Video id="main" src={motion} />
          <Animate
            script={({ timeline }) => {
              timeline.to("#main", { opacity: 0, duration: 2 }, 3.6);
            }}
          />
        </Composition>
      );
    }),
    overlay: (ctx) => (
      <Composition>
        <Subtitle
          entries={ctx.lyrics}
          className="text-[2vmax] tracking-wide"
          style={{
            WebkitTextStroke: "0.12vmax rgba(0, 0, 0, 0.85)",
            paintOrder: "stroke fill",
            paddingBottom: "1.5%",
            textShadow: "0 0 0.6vmax rgba(0, 0, 0, 0.9), 0 0.15vmax 0.4vmax rgba(0, 0, 0, 0.9)",
          }}
        />
      </Composition>
    ),
  }),
});
