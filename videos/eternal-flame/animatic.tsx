import { adapters, asset, Composition, defineAnimatic, Image, Panel } from "konte";
import { imageMinimaxH3R2i } from "konte/workspace/adapters/comfy/image_minimax_h3_r2i.js";
import direction from "./direction";
import reference from "./reference";

const STYLE =
  "2D-animated. Modern high-end Japanese anime game key visual: crisp thin lineart, dramatic cel shading with hard-edged shadows, strong rim light, glowing bloom, deep saturated color.";

const STYLE_DRAWN =
  "2D-animated, hand-drawn cel animation in the same drawn rendering as the rest of the piece: bold clean ink outlines around every object, flat cel colours with hard-edged painted shadows, painted anime background art, strong rim light and glowing bloom, deep saturated colour.";

export default defineAnimatic(direction, {
  plates: () => {
    const handoffInsert = {
      image: asset("handoffInsert", adapters.imageCrop, {
        image: reference.darkness,
        x: 140,
        y: 0,
        width: 2216,
        height: 1248,
      }),
      prompt: "a velvet-black void with drifting embers floating through it",
    };
    const riverWide = {
      image: asset("riverWide", adapters.imageCrop, {
        image: reference.mississippi,
        x: 140,
        y: 0,
        width: 2216,
        height: 1248,
      }),
      prompt:
        "a wide shining river with a paddle steamer on the water at the left and river bluffs along the far bank at the right",
    };
    const gildedBackdrop = asset("gildedBackdrop", imageMinimaxH3R2i, {
      image1: reference.gilded,
      prompt: {
        subjectDefinitions: [
          "<Subject 1> is the radiating gold rays backdrop in <Picture 1>: gold rays, glittering particles and a deep ground.",
        ],
        summary: {
          tasks: ["reference generation"],
          text: "An empty backdrop of gold rays over midnight blue filling the whole image.",
        },
        retentionAnalysis: [
          "<Subject 1> (appears in [Shot 1]): attribute_transfer - the gold rays and glittering particles carry over; the ground becomes midnight blue and the framing is new.",
        ],
        detailedDescription: {
          style: STYLE,
          shots: [
            "An empty backdrop seen straight on: slender gold rays radiate outward from a bright white-gold glow just above the centre over a deep midnight-blue ground, the rays and the blue running straight out past all four edges of the image, glittering light particles drifting through them. The glow is about a fifth of the image's height across and fades into midnight blue between the rays.",
          ],
        },
      },
      width: 1344,
      height: 768,
    });
    const portraitMedium = {
      image: asset("portraitMedium", adapters.imageCrop, {
        image: gildedBackdrop,
        x: 0,
        y: 0,
        width: 1344,
        height: 768,
      }),
      prompt:
        "slender radiating gold rays spreading from a white-gold glow over midnight blue, filling the whole image to every edge",
    };
    const portraitClose = {
      image: asset("portraitClose", adapters.imageCrop, {
        image: gildedBackdrop,
        x: 168,
        y: 96,
        width: 1008,
        height: 576,
      }),
      prompt:
        "broad radiating gold rays spreading from a white-gold glow over midnight blue, filling the whole image to every edge",
    };
    const footprintInsert = {
      image: asset("footprintInsert", adapters.imageCrop, {
        image: reference.moon,
        x: 1438,
        y: 826,
        width: 748,
        height: 421,
      }),
      prompt: "undisturbed grey powdery lunar soil with a few small pebbles filling the frame under hard white sunlight",
    };
    return { handoffInsert, riverWide, portraitMedium, portraitClose, footprintInsert };
  },
  timeline: ({ shot, plates }) => ({
    shots: shot("01", () => {
      const first = asset("first", imageMinimaxH3R2i, {
        image1: reference.shore,
        image2: reference.settler,
        image3: reference.fireSteel,
        prompt: {
          subjectDefinitions: [
            "<Subject 1> is the 1607 Virginia shore in <Picture 1>, its sand and pre-dawn darkness.",
            "<Subject 2> is the settler woman in a linen coif in <Picture 2>: freckled sun-browned skin, an undyed linen coif, a soot-stained brown wool gown with rolled sleeves.",
            "<Subject 3> is the fire-starting kit in <Picture 3>: the C-shaped steel striker, the grey flint chip and the black char cloth.",
          ],
          summary: {
            tasks: ["reference generation"],
            text: "Close on the settler woman's hands raising the steel above the flint in the dark.",
          },
          retentionAnalysis: [
            "<Subject 1> (appears in [Shot 1]): weak_reference - only the dark sand and the night air carry over; the framing is new.",
            "<Subject 2> (appears in [Shot 1]): partially_preserved - her hands, freckled skin and rolled brown wool sleeves carry over; her face is out of frame.",
            "<Subject 3> (appears in [Shot 1]): partially_preserved - the shape of the C-shaped steel striker, the flint chip and the char cloth; the striker is drawn at the small size written here.",
          ],
          detailedDescription: {
            style: STYLE,
            shots: [
              "Total darkness at night, only the settler woman in a linen coif's two hands in the frame, in rolled brown wool sleeves, held up in the air at chest height against the dark night, the sand far below and out of focus. Her left hand at frame left holds the grey flint chip with its sharp edge pointing toward frame right; a palm-sized square of black char cloth with pinked edges is laid flat on top of the flint, on the side facing the camera, covering most of the flint so the black cloth is the nearest, largest thing in her hand, her thumb pressing it down onto the stone, only the flint's sharp grey edge sticking out from under the cloth at its right side. Her right hand at frame right wears the C-shaped steel striker like a knuckle-duster: her four fingers pass through the open inside of the C from behind, so the C's curved back lies flat across the front of her curled fingers, facing the flint, and its two spiral ends rest against the back of her hand on either side; the striker is small, no wider than her palm, raised a few centimetres above and to the right of the flint's exposed edge, ready to scrape down across it. Both hands are faintly rim-lit in deep blue, the only light in the frame.",
            ],
          },
        },
      });
      return (
        <Composition>
          <Panel src={first} blocking="右手の打ち金が振り下ろされて火打ち石の縁を打ち、散った火花が左手の炭布に移って赤く灯る。" camera="fixed" />
        </Composition>
      );
    })
      .nextShot("02", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.shore,
          image2: reference.settler,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the 1607 Virginia shore in <Picture 1>: the log palisade fort and the beach before dawn.",
              "<Subject 2> is the settler woman in a linen coif in <Picture 2>: a long face with a strong nose, freckled sun-browned cheeks, deep-set grey eyes, brown hair under an undyed linen coif, a soot-stained brown wool gown.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The settler woman's face lit from below by the tinder she has just lit.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the log palisade fort and pre-dawn sky carry over as a dark sliver behind her; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - her face, coif and gown; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A close-up of the settler woman in a linen coif at the height of the small fire, her face filling the centre of the frame, bowed slightly over her cupped hands at the bottom edge, where a newborn flame rises from the tinder and lights her freckled chin, cheeks and grey eyes from below in warm orange. Her lips are parted as she breathes on it, her gaze fixed on the flame. Behind her, out of focus, the dark points of the log palisade fort stand against a deep blue pre-dawn sky.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="女が掌の中の小さな炎に息を吹きかけ、炎が背を伸ばして顔をいっそう明るく照らす。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("03", ({ shot }) => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.shore,
          image2: shot("02").image("first"),
          image3: reference.settler,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the 1607 Virginia shore in <Picture 1>: the beach, the log palisade fort on the left and the three-masted sailing ship at anchor offshore on the right.",
              "<Picture 2> is the previous shot's frame: the settler woman's face lit from below by her new flame.",
              "<Subject 2> is the settler woman in a linen coif in <Picture 3>: an undyed linen coif, a soot-stained brown wool gown.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "A cut out from the settler woman's lit face to her small fire on the dawn beach.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 2]): fully_preserved - the beach, the log palisade fort and the three-masted sailing ship at anchor.",
              "<Picture 2> ([Shot 1] first frame): fully_preserved - the previous frame.",
              "<Subject 2> (appears in [Shot 1], [Shot 2]): partially_preserved - her coif and brown gown, seen small in [Shot 2].",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot holds <Picture 2>, the settler woman's face over her new flame.",
                "A cut out to a wide view from the water's edge before dawn: the log palisade fort on the left, the three-masted sailing ship at anchor offshore on the right, an amber glow just breaking along the sea horizon under a deep blue sky. On the sand in the lower middle, small in the frame, the settler woman in a linen coif kneels beside a little campfire, its orange light the brightest point in the picture, a thin thread of smoke rising from it. Her knees meet the sand about a fifth of the way up the frame.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="焚き火が揺れて細い煙が立ちのぼり、水平線の琥珀色の光が少しずつ広がる。" camera="焚き火に向かってゆっくり前進する。" />
          </Composition>
        );
      })
      .nextShot("04", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.handoffInsert.image,
          image2: reference.settler,
          image3: reference.minuteman,
          image4: reference.lantern,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.handoffInsert.prompt}.`,
              "<Subject 1> is the settler woman in a linen coif in <Picture 2>: freckled hands and rolled soot-stained brown wool sleeves.",
              "<Subject 2> is the young minuteman in a tricorn hat in <Picture 3>: hands coming out of cream linen shirt cuffs under a brown wool waistcoat.",
              "<Subject 3> is the punched-tin lantern in <Picture 4>, a candle burning inside it.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Two hands from two centuries meet around a lantern in the dark.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the black void and drifting embers.",
              "<Subject 1> (appears in [Shot 1]): partially_preserved - her hands and brown wool sleeves only.",
              "<Subject 2> (appears in [Shot 1]): partially_preserved - his hands and cream linen cuffs only.",
              "<Subject 3> (appears in [Shot 1]): fully_preserved - the punched-tin lantern and its flame.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. In the centre of the black void hangs the punched-tin lantern, its candle throwing star-shaped specks of light outward. From the left edge, the settler woman in a linen coif's freckled hand in a rolled brown wool sleeve holds the lantern's ring handle out toward the right; from the right edge, the young minuteman in a tricorn hat's hand in a cream linen cuff reaches in, his open hand at the right third of the frame, a band of black void between his fingertips and the ring handle. Both hands are lit warm by the lantern; golden embers drift around them.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="右から伸びた青年の手がランタンの取っ手を握り、左の女の手が離れて画面左へ引いていく。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("05", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.bostonNight,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is Boston at night in <Picture 1>: the colonial brick rooftops with chimneys and the tall white church steeple rising above them on the right.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The church steeple above the night rooftops, its belfry still dark.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the colonial brick rooftops, chimneys, white church steeple and midnight-blue sky.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A wide view across the rooftops at midnight, from above roof height: colonial brick rooftops and chimneys crowd the left and lower frame, and on the right the tall white church steeple rises above them into a moonlit midnight-blue sky. High in the steeple, the belfry window is a dark arch against the moonlit midnight-blue sky, the steeple lit only by moonlight. A few windows below glow dimly; the streets below are empty.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="尖塔の鐘楼に、小さな二つのランタンの灯が静かにともる。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("06", ({ shot }) => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.bostonNight,
          image2: shot("05").image("first"),
          image3: reference.minuteman,
          image4: reference.lantern,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is Boston at night in <Picture 1>: the white church steeple and the brick rooftops.",
              "<Picture 2> is the previous shot's frame: the steeple above the rooftops at night.",
              "<Subject 2> is the young minuteman in a tricorn hat in <Picture 3>: a lean earnest face, a black tricorn hat, a cream linen shirt under a brown wool waistcoat, a musket strap over his shoulder.",
              "<Subject 3> is the punched-tin lantern in <Picture 4>, a candle burning inside it.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "A cut across the river to the minuteman on the far shore, holding up his lantern with Boston and its steeple small behind him.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1], [Shot 2]): attribute_transfer - the white steeple, the brick town, the night light and colour carry over, seen across the river from far away in [Shot 2]; the framing is new.",
              "<Picture 2> ([Shot 1] first frame): fully_preserved - the previous frame.",
              "<Subject 2> (appears in [Shot 2]): fully_preserved - his face, hat and clothes; the expression is remade as written here.",
              "<Subject 3> (appears in [Shot 2]): fully_preserved - the punched-tin lantern and its flame.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot holds <Picture 2>, the steeple above the rooftops.",
                "A cut across the river to the far shore at Charlestown: a close-up of the young minuteman in a tricorn hat standing on the dark riverbank, his face and shoulders filling the left two thirds of the frame, seen from slightly below. His left hand lifts the punched-tin lantern to the height of his cheek at the right of the frame, its warm dappled light falling across his cheek and the underside of his hat brim. His eyes look past the lantern into the darkness at frame right, jaw set. Behind him at the upper right, across a wide band of black river water, the low skyline of Boston sits small and out of focus on the far shore, its tiny white church steeple glowing with two lights above the rooftops.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="青年がランタンをさらに高く掲げ、画面右の闇を見据えたまま顎を引く。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("07", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.assemblyHall,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Assembly Room in <Picture 1>: rows of desks under green baize, the tall arched windows along the left wall and the carved rising-sun chair at the far end.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The delegates seated in the candlelit Assembly Room, hands on their desks.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the desks, green baize, arched windows, rising-sun chair and candlelight.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A wide view from the back of the Assembly Room at first light: tall arched windows along the left wall pour golden morning light across rows of green-baize desks with burning candles, and the carved rising-sun chair stands at the far end. Some forty delegates in 1776 frock coats, waistcoats and white wigs sit at the desks, seen mostly from behind, all of them seated, hands flat on the desks, shoulders leaning forward over the green baize. Dust motes glitter in the window light.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="代表たちが一人また一人と、それぞれの間合いで机に手をつき、椅子から立ち上がっていく。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("08", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitClose.image,
          image2: reference.washington,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitClose.prompt}.`,
              "<Subject 1> is George Washington in <Picture 2>: white powdered hair rolled at the sides, a long nose, a firm closed mouth, a black velvet coat with a white lace jabot.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "George Washington against the gold rays, head bowed, eyes closed.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, hair and clothing; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. The figure sits within the middle of the image, open gold rays around him toward every edge with a clear margin of about a tenth of the image on each side. George Washington is framed head and shoulders in the centre, the white-gold glow directly behind his head like a halo, the gold rays spreading out from behind him. His head is bowed forward, chin near his white lace jabot, eyes closed, the glow rimming his powdered white hair and the shoulders of his black velvet coat in gold.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="ワシントンが伏せていた顔をゆっくり上げ、目を開いて正面を見据える。背後の白金の光が強まる。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("09", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.assemblyHall,
          image2: reference.jefferson,
          image3: reference.parchment,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Assembly Room in <Picture 1>: a green-baize desk and candlelight.",
              "<Subject 2> is Thomas Jefferson in <Picture 2>, seen only as his pale hand coming out of a dark coat sleeve with a white shirt cuff.",
              "<Subject 3> is the parchment in <Picture 3>: a large yellowed sheet with an ornate calligraphic title and dense handwritten columns.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "Thomas Jefferson's hand finishing the last line on the parchment.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): weak_reference - only the green baize and candlelight carry over.",
              "<Subject 2> (appears in [Shot 1]): partially_preserved - his hand, dark sleeve and white cuff only.",
              "<Subject 3> (appears in [Shot 1]): fully_preserved - the yellowed parchment and its handwriting.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "An insert looking down at the yellowed parchment filling the frame on a green-baize desk, dense handwritten lines covering it. Thomas Jefferson's pale hand enters from the right in a dark coat sleeve and white shirt cuff, holding a white goose-feather quill whose nib is pressed to the parchment partway along the last handwritten line in the lower right, the bare yellowed parchment to the right of the nib. Warm candlelight from the upper left lights the paper's grain and casts the quill's shadow across the words.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="羽ペンが最後の一行を書き終え、紙から持ち上がる。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("10", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitMedium.image,
          image2: reference.jefferson,
          image3: reference.parchment,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitMedium.prompt}.`,
              "<Subject 1> is Thomas Jefferson in <Picture 2>: reddish-grey hair, a long face with a strong chin, a dark coat with a white cravat.",
              "<Subject 2> is the parchment in <Picture 3>: a large yellowed sheet with an ornate calligraphic title, rolled loosely.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Thomas Jefferson against the gold rays in profile, the parchment held to his chest.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, hair and clothing; the expression is remade as written here.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - the yellowed parchment.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. The figure sits within the middle of the image, open gold rays around him toward every edge with a clear margin of about a tenth of the image on each side. Thomas Jefferson stands in the centre of the image, seen from the waist up, the white-gold glow behind his shoulders. His body faces frame left in profile, both arms folded over the rolled yellowed parchment held flat against his chest, his head in profile like his body, eyes calm and steady toward frame left. The gold rays rim his reddish-grey hair and the edges of his dark coat in light.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="ジェファーソンが左肩越しに画面手前へ振り向き、正面を見る。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("11", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.handoffInsert.image,
          image2: reference.minuteman,
          image3: reference.blacksmith,
          image4: reference.lantern,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.handoffInsert.prompt}.`,
              "<Subject 1> is the young minuteman in a tricorn hat in <Picture 2>: a hand coming out of a cream linen shirt cuff.",
              "<Subject 2> is the frontier blacksmith in a leather apron in <Picture 3>: a broad soot-smudged hand and thick forearm under a rolled grey work-shirt sleeve.",
              "<Subject 3> is the punched-tin lantern in <Picture 4>, a candle burning inside it.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "The minuteman's hand holds the lantern out toward the blacksmith's open hand in the dark.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the black void and drifting embers.",
              "<Subject 1> (appears in [Shot 1]): partially_preserved - his hand and cream linen cuff only.",
              "<Subject 2> (appears in [Shot 1]): partially_preserved - his hand, forearm and rolled grey sleeve only.",
              "<Subject 3> (appears in [Shot 1]): fully_preserved - the punched-tin lantern and its flame.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. In the centre of the black void hangs the punched-tin lantern, its candle throwing star-shaped specks of light outward. From the left edge, the young minuteman in a tricorn hat's hand in a cream linen cuff holds the lantern's ring handle out toward the right; from the right edge, the frontier blacksmith in a leather apron's broad soot-smudged hand under a rolled grey sleeve reaches in, his open hand at the right third of the frame, a band of black void between his fingertips and the ring handle. Both hands are lit warm by the lantern; golden embers drift around them.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="右から伸びた鍛冶屋の手がランタンの取っ手を握り、左の青年の手が開いて画面左へ引いていく。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("12", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.forge,
          image2: reference.blacksmith,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the frontier forge in <Picture 1>: the black iron anvil and the red glow of the brick forge hearth.",
              "<Subject 2> is the frontier blacksmith in a leather apron in <Picture 2>: a soot-smudged fist and thick forearm under a rolled grey sleeve.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "Close on the anvil, the blacksmith's hammer raised over a red-hot bar.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the black iron anvil, the forge's red glow and the smoky air carry over; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): partially_preserved - his fist, forearm and rolled grey sleeve only.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "An insert at anvil height: the face of the black iron anvil fills the lower half of the frame, a bar of orange-red glowing iron lying across it, held by long black tongs in the blacksmith's other soot-smudged fist at the left edge. From the upper right, the frontier blacksmith in a leather apron's soot-smudged fist grips a heavy hammer raised high above the glowing bar, the hammer head near the top edge of the frame. Red light from the hearth off-frame right glows on the anvil's edge and the underside of the hammer; faint smoke curls in the dark above the glowing bar.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="槌が振り下ろされて赤熱の鉄を打ち、火花が四方に弾ける。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("13", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.forge,
          image2: reference.blacksmith,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the frontier forge in <Picture 1>: the brick forge hearth glowing with red-hot coals.",
              "<Subject 2> is the frontier blacksmith in a leather apron in <Picture 2>: a muscular middle-aged man with a short beard and soot-smudged face, a heavy brown leather apron over a collarless grey work shirt with sleeves rolled to the elbow.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The blacksmith by the forge, his forearm across his brow.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the brick forge hearth and its red glow carry over as a sliver behind him; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - his face, beard, apron and shirt; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A close-up of the frontier blacksmith in a leather apron, his head and shoulders filling the centre of the frame, lit hard from frame right by the red glow of the brick forge hearth, which burns out of focus behind his left shoulder, at frame right. His head is bowed, his right forearm drawn across his brow wiping the sweat, eyes lowered, his soot-smudged cheek and short beard glistening in the red light, the leather apron strap over his shoulder.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="鍛冶屋が額を拭った腕を下ろし、顔を上げて前を見据える。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("14", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.prairie,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Great Plains in <Picture 1>: the golden grass, the railroad track and the lone cottonwood tree on the left.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "A steam locomotive entering the golden plain on the railroad track.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the golden grass, the railroad track, the lone cottonwood tree and the sunlit clouds.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A wide view from a low rise at golden hour: the lone cottonwood tree stands in the left third, the railroad track crosses the middle of the frame from the left edge to the right edge, and an endless sea of golden grass fills the foreground under towering sunlit clouds. At the left end of the track a black steam locomotive of 1869 with a tall funnel smokestack and brass fittings is just pulling into the frame, heading right, a thick plume of white smoke trailing back from its stack and glowing gold in the low sun.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="蒸気機関車が煙を吐きながら線路を画面右へ進んでいく。" camera="機関車に合わせてゆっくり右へパンする。" />
          </Composition>
        );
      })
      .nextShot("15", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.prairie,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Great Plains in <Picture 1>, its golden light.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The open firebox door of the locomotive, low coals glowing inside.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): weak_reference - only the warm golden light carries over; the framing is new.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "An insert into a locomotive cab: the round iron firebox door swung open fills the frame, its riveted black rim and hinge in the foreground, and inside a bed of coals glows a low dull orange, heat shimmer above them.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="火室の熾火から炎がごうっと燃え上がり、扉の縁まで明るく照らす。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("16", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.prairie,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Great Plains in <Picture 1>: the lone cottonwood tree and the circle of white-topped covered wagons camped beneath it.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The wagon circle under the cottonwood at dusk, its first campfire lit.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the cottonwood tree, the white-topped covered wagons and the golden grass carry over; the framing is new.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A medium view from inside the wagon circle at dusk, at standing eye height: the far white-topped covered wagons curve across the background, their canvas covers tinted pink and violet by the fading sky, the lone cottonwood's trunk rising at frame left, its dark branches spreading across the top of the frame. On the trampled grass in front of them, a single small campfire burns at the left with its smoke rising, and several more stacked piles of dry grey firewood stand dark in a row toward the right, the nearest about a third of the frame's width from the lens. The far wagon wheels meet the ground just below the middle of the frame.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="焚き火の炎が揺れ、煙が夕空へ立ちのぼる。" camera="ごくわずかに、ゆっくり前進する。" />
          </Composition>
        );
      })
      .nextShot("17", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.riverWide.image,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.riverWide.prompt}.`,
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "The paddle steamer on the Mississippi under the darkening evening sky.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the river, the paddle steamer, the bluffs and the evening sky.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. The white paddle steamer with its two tall smokestacks glides on the wide river at the left, its decks lit with warm lamps, the low river bluffs dark along the far bank at the right. The sunset has faded to deep crimson at the horizon and the sky above an unbroken gradient from violet to deep blue, the river reflecting the last light. Just right of the steamer's smokestacks, a single thin glowing trail of a firework rocket climbs from its deck up into the open sky, a single bright spark at its tip.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="外輪船の上の夜空に花火が次々と開き、川面に色が映る。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("18", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitClose.image,
          image2: reference.jackson,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitClose.prompt}.`,
              "<Subject 1> is Andrew Jackson in <Picture 2>: swept-back upright white hair, sharp piercing eyes, a lean lined face, a black coat with a red-lined cloak.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Andrew Jackson against the gold rays, facing the viewer.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, hair and clothing; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. The figure sits within the middle of the image, open gold rays around him toward every edge with a clear margin of about a tenth of the image on each side. Andrew Jackson is framed head and shoulders in the centre, the white-gold glow directly behind his head, the gold rays spreading out from behind him. He faces straight toward the viewer, chin level, his piercing eyes steady and hard, his upright white hair rimmed in gold light, the red lining of his cloak over his black coat catching the glow at his shoulders.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="ジャクソンが正面から画面左（西）へ顔を向け、遠くを見据える。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("19", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.riverWide.image,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.riverWide.prompt}.`,
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "The paddle steamer on the river under a grey overcast sky, a first drift of black smoke over the water.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the river, the paddle steamer, the bluffs.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. The sky is a heavy overcast of grey and dull ochre, and the white paddle steamer at the left glides on the river with its deck lamps glowing warm. From the left edge, a first low bank of black smoke drifts in across the water toward the steamer, its edge just touching the stern, the river surface turned a dark slate grey and the bluffs at the right dim and colourless.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="左から黒煙が川面を覆っていき、外輪船の灯が煙の中に霞んでいく。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("20", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.plantation,
          image2: reference.freedomSeeker,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the cotton field at night in <Picture 1>: rows of white cotton bolls under a cold moon.",
              "<Subject 2> is the freedom seeker in a homespun shirt in <Picture 2>: dark brown skin and a frayed off-white homespun shirt sleeve.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "Close on the freedom seeker's chained wrist among the cotton rows in the dark.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the white cotton bolls and the cold night carry over; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): partially_preserved - his wrist, hand and frayed homespun sleeve only.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "An insert at the height of the cotton plants at night: the freedom seeker in a homespun shirt's dark-skinned wrist and hand rest among the white cotton bolls in the centre of the frame, coming out of a frayed off-white homespun sleeve from the right, a heavy iron shackle closed around the wrist and a length of iron chain running from it out of the frame at the bottom edge. The wrist, the shackle and the chain lie in deep blue shadow; a pale band of cold moonlight falls on the cotton bolls just to their left.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="綿花の上を月明かりの帯がゆっくり横へ滑り、鎖をかけられた手首を照らし出す。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("21", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.trail,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the frozen forest road in <Picture 1>: the rutted trail between dense snow-laden pines under falling snow.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "A long line of Cherokee people walking along the snowy forest road.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the snow-laden pines, the rutted trail, the falling snow and the pale cold sky.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A wide view of the frozen road in the winter of 1838, seen from the side at eye height: the rutted trail runs across the frame from right to left between the snow-laden pines, grey snow falling. Along it walks a long silent line of Cherokee people of every age, small in the frame, wrapped in blankets and trade-cloth shawls, heads bowed, some leading a horse, the line entering from the right edge and stretching toward the left, the nearest figures' feet meeting the snow just below the middle of the frame. The light is cold, grey and blue.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="チェロキーの人々の列が雪の道を画面左へ黙って歩き続ける。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("22", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.trail,
          image2: reference.cherokeeElder,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the frozen forest road in <Picture 1>, its snow and cold grey light.",
              "<Subject 2> is the Cherokee elder woman in a trade-cloth shawl in <Picture 2>: weathered brown hands and the indigo trade-cloth shawl.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "Close on the Cherokee elder's hands cupping a small clay pot with a dim ember inside.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): weak_reference - only the falling snow and the cold grey light carry over.",
              "<Subject 2> (appears in [Shot 1]): partially_preserved - her weathered hands and the edge of the indigo shawl only.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "An insert at chest height: the Cherokee elder woman in a trade-cloth shawl's two weathered brown hands, framed by the folds of her indigo shawl, cup a small round unglazed clay pot in the centre of the frame. Inside it lies a single small ember, dull and ashy grey with only a faint thread of red at its core. Grey snowflakes drift past in the cold blue air.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="器の中の残り火が赤く息づき、明るさを増す。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("23", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.riverCamps,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Civil War night camps in <Picture 1>: the white Union army tents with blue flags on the near left bank, the dark river through the middle and the grey Confederate army tents on the far right bank.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The two camps facing each other across the dark river at night.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the Union army tents, the dark river, the Confederate army tents, the campfires and the starry sky.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A wide view from a hill at night: on the near left bank the rows of white Union army tents with blue flags, the dark river running through the middle of the frame, and on the far right bank the rows of grey Confederate army tents. A few campfires burn low and small on each bank, facing one another across the black water, thin smoke drifting up under a starry sky. The camps are silent.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="両岸の焚き火が揺れ、煙が星空へ立ちのぼる。" camera="ゆっくり前進する。" />
          </Composition>
        );
      })
      .nextShot("24", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.riverCamps,
          image2: reference.unionSoldier,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Civil War night camps in <Picture 1>: the white Union army tents and the dark river.",
              "<Subject 2> is the Union soldier in a blue kepi in <Picture 2>: a boyish freckled face, sandy hair, pale blue eyes, a navy-blue kepi and a navy-blue wool sack coat with brass buttons.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The Union soldier on the riverbank at night, gazing across the river.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the white Union army tents and the night carry over as a sliver behind him; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - his face, kepi and coat; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A close-up of the Union soldier in a blue kepi, his face and shoulders in the left half of the frame, his body turned toward frame right where the river lies. Behind him, out of focus, the white Union army tents glow faintly with a campfire. His eyes are lifted across the river toward a distant campfire off frame right, level with his own eyeline, his young freckled face lit warm on the side toward frame right by a distant fire across the river, the rest of him in cold blue night.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="北軍の兵士が川向こうの焚き火を見つめたまま、顎を引き、唇を結ぶ。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("25", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.riverCamps,
          image2: reference.confederateSoldier,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Civil War night camps in <Picture 1>: the grey Confederate army tents and the dark river.",
              "<Subject 2> is the Confederate soldier in a grey kepi in <Picture 2>: a boyish freckled face, sandy hair, pale blue eyes, a light slate-grey kepi and a light slate-grey wool shell jacket with brass buttons.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The Confederate soldier on the opposite riverbank at night, gazing back across the river.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the grey Confederate army tents and the night carry over as a sliver behind him; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - his face, kepi and jacket; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A close-up of the Confederate soldier in a grey kepi, his face and shoulders in the right half of the frame, his body turned toward frame left where the river lies. Behind him, out of focus, the grey Confederate army tents glow faintly with a campfire. His eyes are lifted across the river toward a distant campfire off frame left, level with his own eyeline, his young freckled face lit warm on the side toward frame left by a distant fire across the river, the rest of him in cold blue night.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="南軍の兵士が同じ目で川向こうを見つめ返し、唇を結ぶ。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("26", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitMedium.image,
          image2: reference.lincoln,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitMedium.prompt}.`,
              "<Subject 1> is Abraham Lincoln in <Picture 2>: a lean lined face with a chin beard, deep-set eyes, dark hair, a black frock coat and a black bow tie.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Abraham Lincoln standing against the gold rays, his stovepipe hat at his side.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, beard and clothing; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. Abraham Lincoln fills the centre of the image from the chest up, his face large and close, about a third of the image's height, the white-gold glow behind his head and the gold rays spreading out around him. The hand at frame left holds the brim of a black stovepipe hat just at the bottom edge of the frame, and his deep-set eyes look down and a little forward, weary and grave, the gold rays rimming his dark hair and beard.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="リンカーンが帽子を胸元へ上げて当て、静かに目を閉じる。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("27", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitClose.image,
          image2: reference.tRoosevelt,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitClose.prompt}.`,
              "<Subject 1> is Theodore Roosevelt in <Picture 2>: pince-nez spectacles, a thick moustache, a square jaw, a dark suit with a patterned tie.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Theodore Roosevelt against the gold rays, glancing aside.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, moustache, pince-nez and clothing; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. The figure sits within the middle of the image, open gold rays around him toward every edge with a clear margin of about a tenth of the image on each side. Theodore Roosevelt is framed head and shoulders in the centre, the white-gold glow behind his head. His face is turned a little toward frame right, eyes glancing off to that side behind his pince-nez, his jaw set under the thick moustache, the gold light glinting on the lenses.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="ルーズベルトが画面右から正面へ視線を移し、鼻眼鏡の奥から前を見据える。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("28", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitClose.image,
          image2: reference.wilson,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitClose.prompt}.`,
              "<Subject 1> is Woodrow Wilson in <Picture 2>: a long narrow face, rimless spectacles, thinning grey hair, a dark suit.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Woodrow Wilson against the gold rays, looking straight ahead.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, spectacles and clothing; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. The figure sits within the middle of the image, open gold rays around him toward every edge with a clear margin of about a tenth of the image on each side. Woodrow Wilson is framed head and shoulders in the centre, the white-gold glow behind his head, the gold rays muted a little toward amber. He looks straight at the viewer through his rimless spectacles, his long face composed and heavy with thought.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="ウィルソンが正面を見たまま、ゆっくり目を伏せる。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("29", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.warfront,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the World War I front at night in <Picture 1>: churned mud, tangled barbed wire and the smoky night sky.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The barbed wire across the night front, a single searchlight beam in the sky.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the mud, the barbed wire, the smoky sky and the orange horizon glow.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A wide view from the edge of a trench at night: churned mud and tangled barbed wire stretch across the lower half of the frame, the wire's dark coils sharp against the sky. Above, the smoky night sky is lit by a single white searchlight beam rising from the left edge, a dull orange glow along the far horizon.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="サーチライトの光束が次々と増え、夜空で交差しながら振れる。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("30", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.warfront,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the World War I front in <Picture 1>, its churned grey mud.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "A single red poppy standing still in the grey mud.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): weak_reference - only the churned grey mud and the cold light carry over.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "An insert at ground level: a single red poppy stands upright in the centre of the frame, its four bright scarlet petals and black centre the only colour in a field of churned grey mud, a coil of barbed wire blurred in the background. The stem is straight and the petals still, grey dawn light on them.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="ひなげしが風に揺れる。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("31", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.dustFarm,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Dust Bowl farm in <Picture 1>: the metal farm windmill on the left, the weathered farmhouse and the brown dust storm on the horizon to the right.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The farm under a sepia sky, the dust storm a wall on the far horizon.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the windmill, the farmhouse, the dust storm and the sepia sky carry over; the dust storm sits further away.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A wide view of the Oklahoma farm in the 1930s: the sand-scoured metal farm windmill stands on the left, the weathered farmhouse in the centre, the bare cracked field in front. On the far horizon at the right, small and still distant, a towering brown dust storm rises like a wall, under a hazy sepia sky.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="砂嵐が地平線から壁のように迫り、空が茶色に暗くなっていく。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("32", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.dustFarm,
          image2: reference.dustMother,
          image3: reference.kerosene,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Dust Bowl farm in <Picture 1>: the bare kitchen table and the dusty sepia light.",
              "<Subject 2> is the Dust Bowl mother in a faded print dress in <Picture 2>: a gaunt square face with hollow cheeks, lines at the eyes, hazel eyes, brown hair in a low bun, a faded blue small-flower print dress.",
              "<Subject 3> is the brass kerosene lamp in <Picture 3>, its glass chimney and flame.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The Dust Bowl mother at the bare table, her hand on the kerosene lamp's wick knob.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the bare wooden kitchen table and the dusty sepia light carry over; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - her face, hair and dress; the expression is remade as written here.",
              "<Subject 3> (appears in [Shot 1]): fully_preserved - the brass kerosene lamp.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A medium close-up from the chest up across the bare wooden kitchen table at night, the tabletop along the bottom of the frame: the Dust Bowl mother in a faded print dress sits behind it in the centre, an empty tin plate before her. The brass kerosene lamp stands on the table at frame left, its flame burning bright and full inside the sooty glass chimney, lighting her gaunt face warm from the left. Her right hand reaches in front of the lamp, her thumb and forefinger clearly visible pinching the lamp's small brass wick knob at the lamp's base in the lower left of the frame, her tired hazel eyes on the flame.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="母がランプのつまみを回し、炎が細く小さくなる。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("33", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.handoffInsert.image,
          image2: reference.dustMother,
          image3: reference.factoryWoman,
          image4: reference.kerosene,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.handoffInsert.prompt}.`,
              "<Subject 1> is the Dust Bowl mother in a faded print dress in <Picture 2>: a thin hand at a faded blue small-flower print cuff.",
              "<Subject 2> is the factory woman in a red polka-dot bandana in <Picture 3>: a hand in a tan leather work glove at a rolled navy-blue coverall sleeve.",
              "<Subject 3> is the brass kerosene lamp in <Picture 4>, a small flame inside its glass chimney.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Two hands from two decades meet around a lit kerosene lamp in the dark.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the black void and drifting embers.",
              "<Subject 1> (appears in [Shot 1]): partially_preserved - her hand and faded print cuff only.",
              "<Subject 2> (appears in [Shot 1]): partially_preserved - her gloved hand and navy coverall sleeve only.",
              "<Subject 3> (appears in [Shot 1]): fully_preserved - the brass kerosene lamp and its flame.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. In the centre of the black void hangs the brass kerosene lamp, its small flame glowing inside the glass chimney. From the left edge, the Dust Bowl mother in a faded print dress's thin hand in a faded blue print cuff holds the lamp out toward the right by its wire bail handle; from the right edge, the factory woman in a red polka-dot bandana's hand in a tan leather glove reaches in, her open gloved hand at the right third of the frame, a band of black void between her fingertips and the bail handle. Both hands are lit warm by the lamp; golden embers drift around them.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="右から伸びた工場の女の手がランプの取っ手を握り、左の母の手が離れて画面左へ引いていく。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("34", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitClose.image,
          image2: reference.fRoosevelt,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitClose.prompt}.`,
              "<Subject 1> is Franklin D. Roosevelt in <Picture 2>: a broad face, swept-back grey hair, a dark pinstripe suit.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Franklin D. Roosevelt against the gold rays, his head slightly lowered.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, hair and clothing; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. Franklin D. Roosevelt fills the centre of the image in a close-up from the chest up, his face large, about two fifths of the image's height, the white-gold glow behind his head. His head is tilted slightly down, eyes lowered in thought, his mouth firm, the gold light rimming his swept-back grey hair and the shoulders of his dark pinstripe suit.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="ルーズベルトが顎を上げ、目を開いて正面を見据える。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("35", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.factory,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the vast 1940s aircraft factory in <Picture 1>: the rows of silver bomber fuselages and the overhead factory lamps under the steel-truss ceiling.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The vast aircraft factory floor, the first welding sparks starting along the fuselages.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the rows of bomber fuselages, the overhead factory lamps, the steel-truss ceiling and the steel-blue light.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A wide view from a high catwalk: rows of silver bomber fuselages recede into the distance under hundreds of overhead factory lamps, steel-blue light filling the hall. Small workers in coveralls stand at scaffolds along the fuselages, and from five welding points along the nearest row, showers of bright white and orange sparks fall down the silver fuselage sides, glittering against the steel-blue light.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="胴体の列に溶接の火花が雨のように降り注ぐ。" camera="ゆっくり前進する。" />
          </Composition>
        );
      })
      .nextShot("36", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.factory,
          image2: reference.factoryWoman,
          image3: reference.weldingTorch,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the aircraft factory in <Picture 1>: a silver fuselage panel and steel-blue light.",
              "<Subject 2> is the factory woman in a red polka-dot bandana in <Picture 2>: a hand in a tan leather work glove and a rolled navy-blue coverall sleeve.",
              "<Subject 3> is the welding torch in <Picture 3>.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "Close on the welding torch in the factory woman's gloved hand, a small blue flame at its tip.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): weak_reference - only the silver metal and steel-blue light carry over.",
              "<Subject 2> (appears in [Shot 1]): partially_preserved - her gloved hand and coverall sleeve only.",
              "<Subject 3> (appears in [Shot 1]): fully_preserved - the welding torch.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "An insert: the factory woman in a red polka-dot bandana's tan leather glove grips the welding torch from the right, the same welding torch as in <Picture 3>: a squat brass canister body with a bent steel nozzle and black hoses, its nozzle pointing toward the riveted silver fuselage panel that fills the left half of the frame. A small soft blue flame flickers at the nozzle tip, a hand's width from the metal, casting a faint blue light on the rivets.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="溶接トーチの炎が青白く鋭く燃え上がる。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("37", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.factory,
          image2: reference.factoryWoman,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the aircraft factory in <Picture 1>: the silver bomber fuselages and the steel-blue light.",
              "<Subject 2> is the factory woman in a red polka-dot bandana in <Picture 2>: a broad round face, heavy dark eyebrows, a few freckles and a grease smudge on one cheek, dark curly hair under a red bandana with white polka dots, navy-blue coveralls, welding goggles.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The factory woman with her welding goggles down over her eyes.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the silver bomber fuselages and steel-blue light carry over behind her; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - her face, bandana and coveralls; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A close-up of the factory woman in a red polka-dot bandana, her face and shoulders filling the centre of the frame, a silver bomber fuselage out of focus behind her in steel-blue light. Her welding goggles are pulled down over her eyes, their round dark lenses reflecting a spark of blue flame from below frame, her gloved right hand raised to the goggle strap at her temple, her mouth set in concentration.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="工場の女がゴーグルを額に押し上げ、炎を見つめて微笑む。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("38", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.atlantic,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the North Atlantic at night in <Picture 1>: the convoy of darkened cargo ships, the heavy swells and the red burning horizon.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The darkened convoy on the night sea under the red horizon.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the convoy of cargo ships, the steel-blue swells and the horizon burning red under black smoke.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A wide view from just above the waves at night: a convoy of darkened cargo ships crosses the frame in a long line toward frame left over heavy steel-blue swells, the horizon behind them burning a deep red under black smoke clouds. Spray rises at the bows; the nearest ship's dark hull fills the right third of the frame.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="輸送船団がうねりを越えて画面左へ進み、舳先に飛沫が上がる。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("39", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.handoffInsert.image,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.handoffInsert.prompt}.`,
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "A single flame burning steadily in the black void.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the black void and drifting embers.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. In the centre of the black void burns a single slender tongue of flame, narrow and pale gold, leaning slightly to one side as if in a draught, its glow faint, a few sparse embers drifting near it. The rest of the frame is darkness.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="炎が揺らぎながら細く小さくなり、消えかける。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("40", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.safehouse,
          image2: reference.candle,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Underground Railroad safe house in <Picture 1>: the four-pane farmhouse window and the dark night.",
              "<Subject 2> is the white candle in a brass candlestick in <Picture 2>.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The dark four-pane farmhouse window with a white candle standing on the sill.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the four-pane farmhouse window, its weathered frame and the night carry over; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - the white candle and its brass candlestick.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "An insert of the four-pane farmhouse window seen from outside at night, its weathered wooden frame filling the frame. Behind the glass, the white candle in its brass candlestick stands on the inside sill, centred below the two lower panes, only a tiny bluish bead of flame just catching at the tip of its wick, barely lighting the wax, the window around it still dark, the panes reflecting the faint blue of the night sky.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="芯の小さな火が育ち、蝋燭が窓辺で温かく灯る。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("41", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.safehouse,
          image2: reference.freedomSeeker,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Underground Railroad safe house in <Picture 1>: the split-rail fence across the dark field and the night sky.",
              "<Subject 2> is the freedom seeker in a homespun shirt in <Picture 2>: a lean young Black man with close-cropped hair and intense eyes, a frayed off-white homespun shirt.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The freedom seeker at the fence in the dark field, his hand on the rail, head lowered.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the split-rail fence and the dark night field carry over; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - his face, hair and shirt; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A close-up in the dark field at night: the freedom seeker in a homespun shirt stands behind the split-rail fence, his head and shoulders in the left half of the frame, body turned toward frame right, his face starting to lift. His dark-skinned left hand grips the top rail in the lower right, an iron shackle still on that wrist with its broken chain hanging short. His chin is still low with exhaustion but his eyes are open and raised toward the upper right of the frame, where a warm window light off-frame catches his cheekbone and the whites of his eyes; breath mists from his lips, the rest of him in deep blue night.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="男がゆっくり顔を上げ、画面右の窓の灯を見上げる。顔に温かい光が差す。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("42", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.homefront,
          image2: reference.dustMother,
          image3: reference.candle,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the 1944 living room in <Picture 1>: the window with lace curtains and the blue-star service banner hanging in it.",
              "<Subject 2> is the Dust Bowl mother in a faded print dress in <Picture 2>, ten years older in 1944: a gaunt square face, lines at the eyes, hazel eyes, brown hair streaked with grey in a low bun, a faded blue small-flower print dress.",
              "<Subject 3> is the white candle in a brass candlestick in <Picture 3>.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The mother seated at the window beside the burning candle, looking at it.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the window, the lace curtains and the blue-star service banner.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - her face, hair and dress, aged ten years; the expression is remade as written here.",
              "<Subject 3> (appears in [Shot 1]): fully_preserved - the white candle and its brass candlestick.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A medium view inside the dim living room at night: the window with lace curtains fills the right half of the frame, the small blue-star service banner hanging in its centre pane. On the wooden sill burns the white candle in its brass candlestick, its flame low and small. The Dust Bowl mother in a faded print dress sits in a chair to the left of the window, seen from the waist up in three-quarter view facing frame right, her hands clasped loosely together in her lap, her head bowed toward the candle and her hazel eyes lowered and half closed, its faint light on her lined face.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="母が両手を胸の前で合わせ、静かに目を閉じて祈る。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("43", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.homefront,
          image2: reference.candle,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the 1944 living room in <Picture 1>: the wooden window sill and the lace curtains.",
              "<Subject 2> is the white candle in a brass candlestick in <Picture 2>.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "Close on the candle on the sill, its flame almost out.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): weak_reference - only the wooden sill, the lace and the night light carry over.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - the white candle and its brass candlestick.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "An insert of the white candle, short and burned halfway down, in its low brass candlestick with a wide round drip dish, standing on the wooden window sill, lace curtain edges blurred at both sides of the frame, the dark night window behind. Its flame has shrunk to a tiny bluish bead clinging to the blackened wick, barely lighting the wax, the room around it almost black.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="消えかけていた炎が、ふっと高く立ち上がり、窓辺を明るく照らす。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("44", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.handoffInsert.image,
          image2: reference.dustMother,
          image3: reference.astronaut,
          image4: reference.candle,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.handoffInsert.prompt}.`,
              "<Subject 1> is the Dust Bowl mother in a faded print dress in <Picture 2>: a thin lined hand at a faded blue small-flower print cuff.",
              "<Subject 2> is the astronaut in a white Apollo spacesuit in <Picture 3>: two hands in thick white spacesuit gloves with metal wrist rings.",
              "<Subject 3> is the white candle in a brass candlestick in <Picture 4>: short and burned halfway down, in a low brass candlestick with a wide round drip dish.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "The mother's hand holds the burning candle out toward the astronaut's open gloved hands in the dark.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the black void and drifting embers.",
              "<Subject 1> (appears in [Shot 1]): partially_preserved - her hand and faded print cuff only.",
              "<Subject 2> (appears in [Shot 1]): partially_preserved - his two gloved hands and the metal wrist rings only.",
              "<Subject 3> (appears in [Shot 1]): fully_preserved - the white candle and its low brass candlestick.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. In the centre of the black void stands the white candle in its low brass candlestick, burning bright and steady. From the left edge, the Dust Bowl mother in a faded print dress's thin lined hand in a faded blue print cuff holds the candlestick by its drip dish, offering it toward the right. From the right edge, the astronaut in a white Apollo spacesuit's two thick white gloves reach in side by side, palms up and open, cupped below and to the right of the dish with a band of black void between them. The candle flame lights both hands warm; golden embers drift around them.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="宇宙飛行士の手袋の両手が燭台の皿を下から受け取り、左の母の手が離れて画面左へ引いていく。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("45", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitClose.image,
          image2: reference.truman,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitClose.prompt}.`,
              "<Subject 1> is Harry Truman in <Picture 2>: round spectacles, neatly parted white hair, a double-breasted grey suit, a grey fedora hat.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Harry Truman against the gold rays lifting his fedora.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, hair and clothing; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. The figure sits within the middle of the image, open gold rays around him toward every edge with a clear margin of about a tenth of the image on each side. Harry Truman is framed head and shoulders in the centre, the white-gold glow behind his head. The hand at frame left lifts a grey fedora hat by its brim up to the height of his shoulder, a broad confident smile behind his round spectacles, his eyes looking straight at the viewer.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="トルーマンが胸元の帽子を高く掲げ、にこやかに笑う。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("46", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitClose.image,
          image2: reference.eisenhower,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitClose.prompt}.`,
              "<Subject 1> is Dwight Eisenhower in <Picture 2>: a broad bald head with a fringe of light hair, a wide open face, a grey suit with a blue tie.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Dwight Eisenhower against the gold rays with a wide grin.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, hair and clothing; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. The figure sits within the middle of the image, open gold rays around him toward every edge with a clear margin of about a tenth of the image on each side. Dwight Eisenhower is framed head and shoulders in the centre, the white-gold glow behind his bald head. He grins widely at the viewer, his mouth open in a broad warm smile showing his teeth, crinkles deep at his eyes.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="アイゼンハワーが顔をほころばせ、歯を見せて大きく笑う。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("47", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.launchPad,
          image2: reference.saturnV,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is Launch Complex 39A in <Picture 1>: the red steel launch umbilical tower, the launch platform and the Atlantic horizon behind.",
              "<Subject 2> is the Saturn V rocket in <Picture 2>: white with black roll-pattern bands and the vertical letters \"USA\" running down its side.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The Saturn V standing on the launch pad at dawn.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the red launch umbilical tower, the platform and the Atlantic horizon carry over; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - the Saturn V's shape, colours and markings.",
            ],
            detailedDescription: {
              style: STYLE_DRAWN,
              shots: [
                "A wide low-angle view from the ground at dawn: the red steel launch umbilical tower rises on the left, and beside it at the right of centre the white Saturn V rocket stands on the launch platform, towering to the top of the frame, its black roll-pattern bands and the vertical letters \"USA\" running down its side. Behind them the Atlantic horizon glows white-gold under a pale sky, thin wisps of white vapour venting from the rocket's side.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="夜明けの光が強まり、ロケットの側面から白い蒸気が流れる。" camera="ゆっくり上へティルトする。" />
          </Composition>
        );
      })
      .nextShot("48", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitMedium.image,
          image2: reference.kennedy,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitMedium.prompt}.`,
              "<Subject 1> is John F. Kennedy in <Picture 2>: thick chestnut hair, a youthful face, a slim navy suit with a white shirt and dark tie.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "John F. Kennedy against the gold rays pointing up toward the sky.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, hair and suit; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. The figure sits within the middle of the image, open gold rays around him toward every edge with a clear margin of about a tenth of the image on each side. John F. Kennedy stands in the centre of the image, seen from the waist up, the white-gold glow behind his shoulders. The arm at frame right is raised with the elbow bent, its index finger pointing up toward the upper corner of the frame at frame right, his face turned up toward it, his eyes bright and determined following his finger.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="ケネディがコートの前の手を上げ、人差し指で空を指さす。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("49", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.launchPad,
          image2: reference.saturnV,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is Launch Complex 39A in <Picture 1>, its steel and dawn light.",
              "<Subject 2> is the Saturn V rocket in <Picture 2>: its five engine bells at the base.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "Looking up into the Saturn V's five dark engine bells.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): weak_reference - only the steel structure and dawn light carry over.",
              "<Subject 2> (appears in [Shot 1]): partially_preserved - the five engine bells only.",
            ],
            detailedDescription: {
              style: STYLE_DRAWN,
              shots: [
                "An insert looking straight up from the flame trench into the base of the Saturn V: its five huge dark engine bells fill the frame, four in a ring around one in the centre, their ribbed metal lit grey-blue by the dawn. Inside the centre bell its throat is dark and cold, a thin ring of vapour curling around the bells' rims.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="中央のノズルの奥に点火の炎が走り、全てのノズルに炎が広がる。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("50", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.launchPad,
          image2: reference.saturnV,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is Launch Complex 39A in <Picture 1>: the red steel launch umbilical tower and the Atlantic horizon.",
              "<Subject 2> is the Saturn V rocket in <Picture 2>: white with black roll-pattern bands and the vertical letters \"USA\" running down its side.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The Saturn V on the pad at full thrust, flames and exhaust pouring out beneath it.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the red launch umbilical tower and the Atlantic horizon carry over; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - the Saturn V's shape, colours and markings.",
            ],
            detailedDescription: {
              style: STYLE_DRAWN,
              shots: [
                "A wide view from a distance outside the pad: the red launch umbilical tower stands on the left, and at the right of centre the white Saturn V sits on the launch platform, its base exactly at the platform's top. Beneath it a column of blinding white-orange flame blasts down into the flame trench and huge white exhaust clouds billow out sideways along the ground, glowing from within. The swing arms of the tower are pulling away from the rocket.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="炎の柱に押し上げられ、サターン V がゆっくり発射台を離れて上昇する。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("51", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.beach,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Florida beach near Cape Canaveral in <Picture 1>: sand dunes with sea oats and the bright morning sky.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The crowd on the beach looking out toward the launch.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the sand dunes, the sea oats and the morning light carry over; the framing is new.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "Drawn in a realistic, mature anime rendering like a high-budget historical drama, with crisp thin lineart and hard dramatic cel shading under strong rim light: every face has realistic adult anatomy, defined cheekbones, jaw and nose bridge, small realistic eyes, visible age lines, stubble and skin texture, each person's features distinctly individual, the women with long, slender adult faces and natural lips. A medium view at eye level of a racially mixed crowd of 1969 spectators on the beach, seen from the waist up, filling the frame from edge to edge, white, Black, Latino and Asian American families standing shoulder to shoulder: a Black father with his small daughter on his shoulders in the centre, a white woman in a sun hat, an older Black man in a short-sleeved shirt shading his eyes, a Latino teenager with a camera, a white man in sunglasses, an Asian American couple, the sea oats on the dune behind them. They all look straight ahead at eye level toward the camera side, faces tense and expectant, a hand shading some eyes, bright morning light on their faces.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="群衆が一人、また一人と顔を上げ、空を見上げていく。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("52", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitClose.image,
          image2: reference.johnson,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitClose.prompt}.`,
              "<Subject 1> is Lyndon Johnson in <Picture 2>: a long face with large ears, combed-back dark hair, a dark suit.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Lyndon Johnson against the gold rays, looking ahead.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, hair and clothing; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. Lyndon Johnson fills the centre of the image in a close-up from the chest up, his face large, about two fifths of the image's height, the white-gold glow behind his head. He looks straight ahead at eye level, his heavy-lidded eyes steady, his mouth set firm.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="ジョンソンが視線を上げ、空を見上げる。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("53", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.upperSky,
          image2: reference.saturnV,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the stratosphere in <Picture 1>: the white sea of clouds below and the sky shading from blue to black above.",
              "<Subject 2> is the Saturn V rocket in <Picture 2>: white with black roll-pattern bands.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The Saturn V's nose just breaking through the top of the sea of clouds.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the sea of clouds and the blue-to-black sky.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - the Saturn V's shape and colours.",
            ],
            detailedDescription: {
              style: STYLE_DRAWN,
              shots: [
                "A wide view from just above the brilliant white sea of clouds, the sky above shading from deep blue to black, the curve of the horizon glowing. In the lower centre, the white nose and upper stages of the Saturn V are just breaking up through the cloud tops, the clouds parting and swirling around it, a glow of flame lighting the clouds beneath.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="サターン V が雲海を突き抜けて、黒い空へ昇っていく。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("54", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.capsule,
          image2: reference.astronaut,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Apollo command module interior in <Picture 1>: the curved instrument panel of switches and glowing indicator lights.",
              "<Subject 2> is the astronaut in a white Apollo spacesuit in <Picture 2>: a calm focused face inside a white helmet with the gold visor raised.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The astronaut in the capsule, his face in the dim light of the instruments.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the instrument panel and its glowing lights carry over behind him; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - his face, helmet and suit; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A close-up inside the command module: the astronaut in a white Apollo spacesuit lies back in his couch, his face inside the white helmet in the centre of the frame, the gold visor raised, the instrument panel's switches and small green and amber indicator lights out of focus behind him. His face is in dim instrument light, his calm eyes turned toward frame right where a small window lies just off the frame, its edge of hard white light just reaching the rim of his helmet.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="窓から差す白い光が宇宙飛行士の頬を横切り、顔を照らし出す。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("55", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.space,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is deep space in <Picture 1>: the round blue Earth with swirling white clouds and a thin glowing atmosphere rim against pitch black.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The blue Earth floating in black space.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the blue Earth, its clouds, its atmosphere rim and the black space.",
            ],
            detailedDescription: {
              style: STYLE_DRAWN,
              shots: [
                "A wide view of pitch-black space: the round blue Earth floats a little left of centre, its oceans deep blue, white cloud spirals over its face, a thin glowing blue rim of atmosphere around its edge, half of it in sunlight and the other half fading into shadow on the right. A few faint stars are scattered across the black.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="地球がゆっくり回り、大気の縁が輝く。" camera="ゆっくり前進する。" />
          </Composition>
        );
      })
      .nextShot("56", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.moon,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Sea of Tranquility in <Picture 1>: the grey powdery lunar plain, the gold-foil-wrapped four-legged lunar module and the blue Earth above the horizon.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The lunar module hanging a metre above the lunar surface, its footpads clear of the ground.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): fully_preserved - the lunar plain, the lunar module's shape and gold foil, and the Earth in the black sky.",
            ],
            detailedDescription: {
              style: STYLE_DRAWN,
              shots: [
                "A wide low view across the grey powdery lunar plain: on the left the gold-foil-wrapped four-legged lunar module hangs about a metre above the surface, its round footpads just above the ground, a thin plume from its descent engine blowing a fan of fine grey dust outward across the plain. The blue Earth hangs above the horizon in the pitch-black sky on the right. Hard white sunlight from the left casts the module's shadow onto the dust below it.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="着陸船が砂を吹き散らしながら降り、脚を月面に下ろして静かに止まる。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("57", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.moon,
          image2: reference.astronaut,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Sea of Tranquility in <Picture 1>: the lunar module's gold footpad and ladder and the grey powdery soil.",
              "<Subject 2> is the astronaut in a white Apollo spacesuit in <Picture 2>: a white moon boot with a ribbed grey sole.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The astronaut's boot on the last rung of the ladder above the lunar soil.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the lunar module's gold-foil footpad and ladder and the grey soil carry over; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): partially_preserved - his white moon boot and the lower leg of his suit only.",
            ],
            detailedDescription: {
              style: STYLE_DRAWN,
              shots: [
                "An insert at ground level: the astronaut in a white Apollo spacesuit's bulky white moon boot rests on the lowest rung of the lunar module's ladder in the upper centre of the frame, the round gold footpad beside it, his white suit leg rising out of the top edge. Below the boot, about a hand's width under its ribbed grey sole, lies smooth untouched grey powdery soil in hard white sunlight, sharp black shadows beside the footpad.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="ブーツが梯子から月の砂へ下りていく。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("58", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.footprintInsert.image,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.footprintInsert.prompt}.`,
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "The first bootprint pressed into the still lunar soil.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the grey powdery lunar soil and its hard light and shadow.",
            ],
            detailedDescription: {
              style: STYLE_DRAWN,
              shots: [
                "The shot begins from <Picture 1>. In the sunlit soil in the lower centre, just below the black band of shadow, lies a single fresh bootprint, its ribbed tread pattern pressed crisp and deep, hard white sunlight from the left casting black shadows into each ridge. The airless black-and-grey surface around it lies perfectly still and crisp, every grain and pebble sharp-edged right up to the black shadow band.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="静まり返った月面に、足跡がくっきりと刻まれたまま、塵ひとつ動かない。" camera="足跡へゆっくり寄っていく。" />
          </Composition>
        );
      })
      .nextShot("59", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: plates.portraitClose.image,
          image2: reference.nixon,
          prompt: {
            subjectDefinitions: [
              `<Picture 1> is the empty frame: ${plates.portraitClose.prompt}.`,
              "<Subject 1> is Richard Nixon in <Picture 2>: heavy dark eyebrows, receding dark hair, a dark navy suit.",
            ],
            summary: {
              tasks: ["keyframe completion"],
              text: "Richard Nixon against the gold rays, holding a telephone receiver at his chest.",
            },
            retentionAnalysis: [
              "<Picture 1> ([Shot 1] first frame): fully_preserved - the gold rays and the white-gold glow.",
              "<Subject 1> (appears in [Shot 1]): fully_preserved - his face, hair and clothing; the expression is remade as written here.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "The shot begins from <Picture 1>. The figure sits within the middle of the image, open gold rays around him toward every edge with a clear margin of about a tenth of the image on each side. Richard Nixon is framed head and shoulders in the centre, the white-gold glow behind his head. He holds a black 1960s telephone receiver at chest height in the hand at frame left, its coiled cord falling out of the bottom of the frame, his eyes on it, his mouth closed.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="ニクソンが受話器を耳に当て、月からの声に聞き入る。" camera="fixed" />
          <Image src={reference.frameOverlay} fill />
          </Composition>
        );
      })
      .nextShot("60", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.moon,
          image2: reference.astronaut,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Sea of Tranquility in <Picture 1>: the grey lunar plain and the blue Earth hanging above the lunar horizon in the black sky.",
              "<Subject 2> is the astronaut in a white Apollo spacesuit in <Picture 2>: a white spacesuit with an American flag patch on the shoulder and a white helmet with a gold visor.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The astronaut standing on the Moon facing the viewer, the Earth above the horizon behind him.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the grey lunar plain, the horizon and the blue Earth in the black sky carry over; the framing is new.",
              "<Subject 2> (appears in [Shot 1]): fully_preserved - his spacesuit, flag patch and helmet.",
            ],
            detailedDescription: {
              style: STYLE,
              shots: [
                "A medium view on the lunar surface: the astronaut in a white Apollo spacesuit stands in the centre, seen from the waist up, facing the viewer, his gold visor down and reflecting the grey plain and a tiny glint of sunlight. Behind him over his shoulder at the upper right, the blue Earth hangs above the curved grey lunar horizon in the pitch-black sky. Hard white sunlight from the left lights his suit.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="宇宙飛行士が振り返り、地平の上の地球を見上げる。" camera="fixed" />
          </Composition>
        );
      })
      .nextShot("61", () => {
        const first = asset("first", imageMinimaxH3R2i, {
          image1: reference.moon,
          prompt: {
            subjectDefinitions: [
              "<Subject 1> is the Sea of Tranquility in <Picture 1>: the grey lunar plain and the blue Earth hanging above the lunar horizon in the black sky.",
            ],
            summary: {
              tasks: ["reference generation"],
              text: "The blue Earth above the lunar horizon, seen from the astronaut's eye height.",
            },
            retentionAnalysis: [
              "<Subject 1> (appears in [Shot 1]): attribute_transfer - the grey lunar plain, the horizon and the blue Earth carry over; the framing is new.",
            ],
            detailedDescription: {
              style: STYLE_DRAWN,
              shots: [
                "A wide view from a standing astronaut's eye height across the grey lunar plain: the curved grey horizon runs across the lower third of the frame, and above it in the pitch-black sky the round blue Earth hangs a little right of centre, about a fifth of the frame's height across, half lit by the sun with white clouds over blue oceans, a thin glowing blue rim of atmosphere around it. The lunar plain in the foreground is quiet and empty, lit by hard white sunlight from the left.",
              ],
            },
          },
        });
        return (
          <Composition>
            <Panel src={first} blocking="地球が静かに浮かび、大気の縁がかすかに輝く。" camera="fixed" />
          </Composition>
        );
      }),


  }),
});
