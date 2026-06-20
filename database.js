const artDatabase = [
  // --- 3-Lobed Family ---
  {
    id: 1,
    name: "Three Hares Interlocking Ear Motif",
    creator: "Mogao Grottoes Cave 407",
    targetRatio: 3.0, // 3:1
    minDrRatio: 0.0,  // Range 3:1:0 —— 3:1:1
    maxDrRatio: 1.0,
    lineStyleStyle: "Endless interlocking loop of rabbit ears.",
    imgUrl: "./images/3.1.jpg",
    description: "The ears of each rabbit interconnect to form a flawless endless loop, with the rabbits perpetually running within the design. The earliest surviving Three Hares interlocking ear motif was discovered in Cave 407 of the Mogao Grottoes in Dunhuang, China. It appears frequently in murals dating back to the Sui and Tang dynasties (581–907 AD). Within the Mogao Grottoes, this pattern is typically painted on coffered ceilings. It carries the symbolic meaning of 'water subduing fire'. Architecturally, coffered ceilings often represent the vault of heaven. Depicting the rabbits on these ceilings serves as a protective emblem, a prayer for peace and safety, embodying the belief that water can counteract fire and ward off misfortune."
  },
  {
    id: 2,
    name: "Sicily Trinacria (Medusa)",
    creator: "Sicilian Cultural Emblem",
    targetRatio: 3.0, // 3:1
    minDrRatio: 1.5,  // Range 3:1:1.5 —— 3:1:2
    maxDrRatio: 2.0,
    lineStyleStyle: "Triangular three-legged dynamic symmetry.",
    imgUrl: "./images/3.2.jpg",
    description: "The three-legged Medusa is an important symbol of Sicily, derived from Medusa, the Gorgon with serpent hair in Greek mythology. Locally, this emblem is known as Trinacria, a term meaning 'triangle' and also an alternative name for Sicily. As Sicily is a triangular island, its three legs point to the three corners of the landmass respectively, symbolizing the guardianship of the island."
  },
  {
    id: 3,
    name: "Borromean Link",
    creator: "Molecular Topology Study",
    targetRatio: 3.0, // 3:1
    minDrRatio: 2.0,  // Range 3:1:2 --- 3:1:3
    maxDrRatio: 3.0,
    lineStyleStyle: "Mutually separate yet interwoven rings.",
    imgUrl: "./images/3.3.jpg",
    description: "The Borromean link is a topological structure made up of three mutually separate yet interwoven rings. Its defining feature is that cutting any single ring will completely separate the other two. This structure boasts not only aesthetic appeal but also profound research significance in molecular topology and supramolecular chemistry. Conventional Borromean links generally consist of three identical macroscopic rings, while Borromean links built from trimeric metallocages remain quite rare."
  },
  {
    id: 4,
    name: "Rosicrucian Cross Petals",
    creator: "Esoteric Elemental Geometry",
    targetRatio: 3.0, // 3:1
    minDrRatio: 3.0,  // Range 3:1:3 --- 3:1:n
    maxDrRatio: Infinity, 
    lineStyleStyle: "Primary colored elemental petals.",
    imgUrl: "./images/3.4.jpg",
    description: "The three innermost petals of the Rosicrucian cross symbolize three Tarot cards: the Fool, the Hanged Man, and the Aeon. They also stand for the powers and properties of the three elements: Air, Water and Fire. Rendered in the three primary colors of yellow, blue and red respectively, these petals represent the fundamental substances that make up the world."
  },

  // --- 4-Lobed Family ---
  {
    id: 5,
    name: "Four-Leaf Lucky Clover",
    creator: "Celtic Folklore Profile",
    targetRatio: 4.0, // 4:1
    minDrRatio: 2.5,  // Range 4:1:2.5 ---- 4:1:3
    maxDrRatio: 3.0,
    lineStyleStyle: "Soft, organic, rounded lucky leaflets.",
    imgUrl: "./images/4.1.jpg",
    description: "It refers to a clover plant with four leaflets, also known as the four-leaf lucky clover. In Celtic culture, the four-leaf clover is a symbol of good fortune and believed to possess special powers for blessings. According to legend, each leaf stands for a noble virtue: hope, faith, love and luck. Traditionally, finding a four-leaf clover is considered exceptionally lucky, as such specimens are rare among common three-leaf clovers. People hold the belief that owning a four-leaf clover brings good fortune, protection and happiness."
  },
  {
    id: 6,
    name: "Celtic Knot Starburst",
    creator: "Elemental Sacred Geometry",
    targetRatio: 4.0, // 4:1
    minDrRatio: 1.0,  // Range 4:1:1 ---- 4:1:1.5
    maxDrRatio: 1.5,
    lineStyleStyle: "Interwoven lines with central spiritual core.",
    imgUrl: "./images/4.2.jpg",
    description: "A fusion of the Celtic four-fold knot and four-pointed star. The central circle symbolizes the primordial source of the universe and the core of spirit, while the endlessly interwoven lines embody the interconnectedness of all things and eternal cycles. The four-pointed star corresponds to the four classical elements—earth, water, fire and air—as well as the four seasonal quarters. Inheriting the protective connotation of the Celtic shield knot from ancient Celtic culture, the motif also stands for balance, spiritual guidance and the wholeness of life in modern interpretations."
  },
  {
    id: 7,
    name: "Archetypal Individuation Mandala",
    creator: "Clinical Psychological Case Log",
    targetRatio: 4.0, // 4:1
    minDrRatio: 1.5,  // Range 4:1:1.5 ----- 4:1:2.5
    maxDrRatio: 2.5,
    lineStyleStyle: "Structured poles representing split opposites.",
    imgUrl: "./images/4.3.jpg",
    description: "A well-educated middle-aged male patient drew this mandala to restore emotional stability after being disturbed by surging unconscious contents.Centered on a glowing star, the circular mandala features four archetypal figures at its four poles: a wise old man above, a fiery underworld trickster below, and dual light-dark feminine anima figures on the sides. Its layered rings carry alchemical symbols of circulating energy, conscious perception and inward-outward flowing forces representing the integration of split opposites in individuation."
  },
  {
    id: 8,
    name: "Vesica Piscis",
    creator: "Renaissance Canonical Form",
    targetRatio: 4.0, // 4:1
    minDrRatio: 3.0,  // Range 4:1:3 ---- 4:1:n
    maxDrRatio: Infinity, 
    lineStyleStyle: "Lens-shaped overlapping circles.",
    imgUrl: "./images/4.4.jpg",
    description: "Vesica piscis, meaning “fish bladder” in Latin, is the lens-shaped overlap from two identical circles where each circle’s center sits on the other’s edge. This shape fits two equilateral triangles inside. Mathematicians calculated its fixed area and perimeter based on the circle’s radius. Renaissance painters commonly framed portraits of Jesus with this classic overlapping oval form."
  },
  {
    id: 9,
    name: "The Red Book Prototype",
    creator: "C.G. Jung Manuscript Archive (1917)",
    targetRatio: 4.0, // 4:1
    minDrRatio: 0.0,  // Range 4:1:0 ------ 4:1:1
    maxDrRatio: 1.0,
    lineStyleStyle: "Geometric partitioning for self-integration.",
    imgUrl: "./images/4.5.jpg",
    description: "Marked with symbolic inscriptions referencing Phanes, the Greek creator deity standing for cosmic origin and primal light at the top and personal life cycles plus inner psychological transformation at the bottom, this August 2, 1917 draft ranks among Jung’s earliest mandala sketches from The Red Book; built around centered geometric partitioning to reflect his early exploration of self-integration, it also serves as the foundational prototype for the later, more intricate mandala labelled Image 80."
  },

  // --- 5-Lobed Family ---
  {
    id: 10,
    name: "Five Rabbits Encircling a Star",
    creator: "Sino-Esoteric Fusion",
    targetRatio: 5.0, // 5:1
    minDrRatio: 1.0,  // Range 5:1:1 ---- 5:1:2.5
    maxDrRatio: 2.5,
    lineStyleStyle: "Cyclic harmony of fertility and elements.",
    imgUrl: "./images/5.1.jpg",
    description: "Also known as Five Rabbits Sharing One Frame, connecting the Tarot five-pointed star of life with the Chinese symbol of fertility.I came across this symbol and named it Five Rabbits Encircling a Star, also known as One Star with Five Rabbits or Five Rabbits Sharing One Frame. Rabbits and five-pointed stars have close cultural and artistic connections: in Tarot, the five-pointed star represents life and elemental control while the rabbit stands for fertility, making them closely related to the Queen of Pentacles. The two patterns also frequently appear together in Chinese culture, such as in the animation Those Years, Those Rabbits, Xiaomi’s mascot and traditional festival lanterns, and their bond mainly comes from their symbolic meanings and combined use in different scenarios."
  },
  {
    id: 11,
    name: "Cherry Blossom Patterns",
    creator: "Traditional Japanese Aesthetic",
    targetRatio: 5.0, // 5:1
    minDrRatio: 2.5,  // Range 5:1:2.5 ------ 5:1:n
    maxDrRatio: Infinity, 
    lineStyleStyle: "Fleeting, delicate floral symmetry.",
    imgUrl: "./images/5.2.jpg",
    description: "Cherry blossom patterns are classic traditional Japanese decorative motifs, deeply tied to the aesthetic concept of mono no aware. Celebrated for their brief, delicate bloom, cherry blossoms symbolize transient beauty and the poignancy of fleeting moments. Mono no aware embodies a gentle melancholy and profound appreciation for life’s impermanence. These floral designs carry this core spirit, reminding people to cherish fleeting beauty and embrace the natural cycle of growth and decline, a timeless reflection of traditional Japanese values."
  },
  {
    id: 12,
    name: "Inverted Pentagram",
    creator: "Mystical Symbolic Circle",
    targetRatio: 5.0, // 5:1
    minDrRatio: 0.0,  // Range 5:1:0 - 5:1:1
    maxDrRatio: 1.0,
    lineStyleStyle: "Continuous circular connection of five points.",
    imgUrl: "./images/5.3.jpg",
    description: "The inverted pentagram, a well-known symbol in mysticism, is the reversed version of the regular pentagram. Made of five equal lines enclosed in a continuous circle, it stands for circulation and connection. Its symbolism has evolved over time: it once served as a symbol for protection and blessings, later representing reversed spiritual values and the balance between matter and spirit. Geometrically, its symmetrical design makes it a striking element in art and totem creation. Ultimately, this ancient symbol carries no inherent good or evil; its meaning depends on cultural contexts, reflecting humanity’s exploration of the universe, spirit and matter."
  },

  // --- 6-Lobed Family ---
  {
    id: 13,
    name: "Hexagonal Honeycombs",
    creator: "Natural Biological Engineering",
    targetRatio: 6.0, // 6:1
    minDrRatio: 0.0,  // Range 6:1:0 ----- 6:1:0.5
    maxDrRatio: 0.5,
    lineStyleStyle: "Precise, magnetic-aligned hexagonal tiling.",
    imgUrl: "./images/6.1.jpg",
    description: "People are amazed by the perfectly arranged hexagonal honeycombs, a marvelous feat of engineering. The wax walls are precisely thickened, and each cell tilts slightly to keep honey from flowing out. The whole structure also aligns with Earth's magnetic field. Without any blueprints, bees cooperate skillfully to build neat and well-fitted combs. Pappus, an ancient Greek philosopher in the Alexandrian period, believed bees possess an innate talent for geometric planning."
  },
  {
    id: 14,
    name: "Snowflake Geometry",
    creator: "Atmospheric Fractal Form",
    targetRatio: 6.0, // 6:1
    minDrRatio: 4.0,  // Range 6:1:4 ----- 6:1:n
    maxDrRatio: Infinity, 
    lineStyleStyle: "Hexagonal lattice hydrogen bond symmetry.",
    imgUrl: "./images/6.2.jpg",
    description: "This paper explores the geometry of snowflakes, focusing on the mathematics behind their hexagonal symmetry, fractal patterns and the role of chaos theory. It also examines how snowflakes inspire geometric art, the presence of the golden ratio in their forms, and the natural balance between symmetry and imperfections. Snowflakes gain their hexagonal symmetry directly from the structure of water molecules. When water freezes, hydrogen bonds form a hexagonal lattice that expands outward to create six-fold symmetry. The fixed 120-degree angles within this structure shape the six-sided ice crystals."
  },
  {
    id: 15,
    name: "Islamic Geometric Patterns",
    creator: "Sacred Architectural Ornament",
    targetRatio: 6.0, // 6:1
    minDrRatio: 1.5,  // Range 6:1:1.5 ------ 6:1:4
    maxDrRatio: 4.0,
    lineStyleStyle: "Complex mosaic and calligraphic structures.",
    imgUrl: "./images/6.3.jpg",
    description: "Islamic geometric patterns draw from designs of ancient Greek, Roman and Sasanian cultures. Alongside arabesques and Islamic calligraphy, they form the three major Islamic decorative styles, often combined to adorn religious buildings and artifacts via mosaics, plaster, brickwork and ceramics. Scholars like Keith Critchlow argue these patterns are meant to reveal underlying realities, rather than serving merely as ornamentation."
  },
  {
    id: 16,
    name: "Star of David",
    creator: "Judaic Identity Shield",
    targetRatio: 6.0, // 6:1
    minDrRatio: 0.5,  // Range 6:1:0.5 ---- 6:1:1.5
    maxDrRatio: 1.5,
    lineStyleStyle: "Two overlapping equilateral triangles.",
    imgUrl: "./images/6.4.png",
    description: "The Star of David, also known as the Shield of David, is a six-pointed star formed by two overlapping equilateral triangles. It is the most prominent symbol of Judaism and Jewish identity. For centuries, it has stood for unity, faith and protection, and is widely used on Jewish religious buildings, artifacts and the national flag of Israel."
  },

  // --- 8-Lobed Family ---
  {
    id: 17,
    name: "The Red Book Image 80 (Phanes)",
    creator: "C.G. Jung Individuation Alchemical Art",
    targetRatio: 8.0, // 8:1
    minDrRatio: 1.0,  // Range 8:1:1 ----- 8:1:4
    maxDrRatio: 4.0,
    lineStyleStyle: "Archetypal cycles of death and rebirth.",
    imgUrl: "./images/8.1.jpg",
    description: "Image 80 in Jung’s The Red Book is a key symbol from his self-exploration. It depicts Phanes, the primordial Greek god, emerging from a golden egg. Marked with 'Phanes' and 'metabolism of the individual', this alchemical artwork illustrates his idea of individuation: we grow psychologically through cycles of death and rebirth. Integrating archetypes like the shadow and anima leads to inner wholeness and spiritual awakening."
  },
  {
    id: 18,
    name: "Victorian Decorative Tiles",
    creator: "19th Century Industrial Craft",
    targetRatio: 8.0, // 8:1
    minDrRatio: 0.0,  // Range 8:1:0 ----- 8:1:1
    maxDrRatio: 1.0,
    lineStyleStyle: "Two-way and four-way floral repeat motifs.",
    imgUrl: "./images/8.2.jpg",
    description: "Exquisite patterns often rely on two-way repeats and four-way repeats, which also work wonderfully for color matching. Tiles from the 1880s reflect the industry’s trends back then. Mostly handmade from ceramic or stone, they served both practical and decorative purposes. Featuring elaborate floral and intricate geometric Victorian-style motifs, ceramic tiles were easy to clean while stone ones were highly durable. Widely used in homes and public buildings, these decorative tiles created a luxurious ambiance and showcased the owners’ taste and status."
  },
  {
    id: 19,
    name: "The Red Book Image 8 (Phanes)",
    creator: "C.G. Jung Manuscript Archive",
    targetRatio: 8.0, // 8:1
    minDrRatio: 4.0,  // Range 8:1:4 ---- 8:1:n
    maxDrRatio: Infinity, 
    lineStyleStyle: "Golden egg alchemical emergence.",
    imgUrl: "./images/8.3.jpg",
    description: "Image 8 in Jung’s The Red Book is a key symbol from his self-exploration. It depicts Phanes, the primordial Greek god, emerging from a golden egg. Marked with 'Phanes' and 'metabolism of the individual', this alchemical artwork illustrates his idea of individuation: we grow psychologically through cycles of death and rebirth. Integrating archetypes like the shadow and anima leads to inner wholeness and spiritual awakening."
  },
  
  // --- Other Families ---
  {
    id: 20,
    name: "Totem of the Sun-Headed God",
    creator: "Ancient Kazakh Ancestors",
    targetRatio: 2.0,
    minDrRatio: 0.0,
    maxDrRatio: 0.7,
    lineStyleStyle: "Stone carving with smooth, rounded lines.",
    imgUrl: "./images/2.png",
    description: "The word totem is a transliteration from Native American languages, meaning 'his kin' or 'his clan'. It serves as the emblem of an entire tribe. (A comment points out that the first image is an ancient petroglyph created by the early Kazakh people of Central Asia.) In primitive times, people regarded certain animals, plants or inanimate objects as their kin, ancestors or patron deities. They believed these beings possessed supernatural powers that could safeguard them and their tribes, and grant them strength and abilities."
  },
  {
    id: 21,
    name: "Heptagram",
    creator: "Ancient Civilization",
    targetRatio: 7.0,
    minDrRatio: 0.65,
    maxDrRatio: 1.25,
    lineStyleStyle: "Normal",
    imgUrl: "./images/7.png",
    description: `At its core lies a heptagram enclosed within a circle. Along the seven points of the heptagram and the circumference of the circle are symbols and inscriptions representing distinct elements. Starting from the top and proceeding clockwise, they are listed as follows:
    Leaf pattern: Wood
    Wave pattern: Water
    Lightning bolt pattern: Electricity
    Gear pattern: Mechanical
    Flame pattern: Fire
    Stone pattern: Metal
    Vortex pattern: Earth`
  }
];


const randomArtifactPool = [
  {
    name: "Girih Geometric Interlace",
    creator: "Ancient Islamic Architectural Manuscript",
    lineStyleStyle: "Interlaced slanted lines with polygonal grids.",
    imgUrl: "./images/n.1.jpg", 
    description: "Girih, meaning 'knot' in Persian, is an Islamic decorative geometric art for architecture and crafts. Inspired by 2nd-century Syrian-Roman knotwork, this art emerged around 1000 AD and prevailed until the 15th century. Patterns are created with polygonal grids, and design techniques were documented in ancient manuscripts like the Topkapı Scroll from Turkey. Five basic shapes form all Girih patterns: decagon, elongated hexagon, bowtie, rhombus and regular pentagon. These simple shapes combine to create stunning intricate artworks."
  },
  {
    name: "Swirling Pigment Kaleidoscope",
    creator: "Mary Judge (Italian Technique Profile)",
    lineStyleStyle: "Swirling, layered, radiant patterns with soft blended textures.",
    imgUrl: "./images/n.2.jpg", 
    description: "Drawing on her knowledge of Italian artistic techniques, Mary Judge develops her unique artistic language through paints and dry pigments, fully leveraging the properties of materials. Her works feature swirling, layered, dreamlike and radiant patterns with precise symmetry and rhythmic beauty. The soft blended textures lend them an elegant antique charm. Like kaleidoscopes, these pieces brim with mystery and allure, as if opening a gateway to another world."
  },
  {
    name: "The Blue Dome Harmony",
    creator: "Nik Mohamed Mahmood (Islamic Modernism)",
    lineStyleStyle: "Modern structural symmetry blended with traditional Central Asian domes.",
    imgUrl: "./images/n.3.jpg", 
    description: "This architectural masterpiece covers 30,000 square meters with 12 themed exhibition halls housing over 7,000 cultural relics from the 9th century to modern times. Designed by renowned architect Nik Mohamed Mahmood, it features a modern style blended with Islamic elements. Its iconic blue domes draw on Central Asian traditions, while the iwan-style entrance is decorated with ceramic tapestries by Iranian tile workers. Inside, sleek modern structures contrast with five elegantly rounded domes crafted by Uzbek artisans, creating a bright and harmonious space."
  },
  {
    name: "The Multi-Dimensional Mandala Wheel",
    creator: "Cross-Disciplinary Analytical Archetype",
    lineStyleStyle: "Balanced circular symbols representing the psyche core.",
    imgUrl: "./images/n.4.jpg", 
    description: "In Buddhism, a mandala is a sacred circular and symmetrical diagram representing the miniature universe, Buddha’s enlightenment and cosmic perfection for spiritual practice. In Human Design, the mandala wheel illustrates people’s inner energy and mental structure to assist self-exploration and personal growth. Psychologist Carl Jung adopted mandalas in psychology. He regarded this balanced circular symbol as the psyche’s core—the Self. Mandala painting therapy helps people release repressed emotions, integrate fragmented minds, reconcile inner chaos and gain mental peace."
  }
];

