const products = [
    {
        id: 13,
        title: "Adventure Time Cat Pattern",
        image: "https://public-files.gumroad.com/pgwd8tvcixltb2a12q97iivqfbqg",
        description: "Crochet a Adventure Time-inspired cat with iconic hat and features. Intermediate pattern with detailed instructions for facial expressions. Great for fans!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/adventure-time-cat-pattern?wanted=true"
    },
    {
        id: 14,
        title: "Alpino Doll Pattern",
        image: "https://public-files.gumroad.com/jn0pasdnaq0x9kvprl7x7i1htcso",
        description: "Craft an Alpino doll with colorful outfit and hat. Beginner-friendly pattern with customizable clothing instructions. Perfect for gifting or display!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/alpino-doll-pattern?wanted=true"
    },
    {
        id: 15,
        title: "Baby Giraffe Pattern",
        image: "https://public-files.gumroad.com/v4sl196p6t9jok06z5c3wdzozb3g",
        description: "Crochet a baby giraffe with long legs and spots. Beginner-friendly pattern with step-by-step instructions and photo tutorials for neck shaping.",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/baby-giraffe-pattern?wanted=true"
    },
    {
        id: 16,
        title: "Baby Yoda Among Us Pattern",
        image: "https://public-files.gumroad.com/htanj3e225qdbh8q9ymysq54yl48",
        description: "Crochet a Baby Yoda in an Among Us spacesuit. Intermediate pattern with instructions for helmet and tiny arms. Perfect for fans of both franchises!",
        originalPrice: 16.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/baby-yoda-among-us-pattern?wanted=true"
    },
    {
        id: 17,
        title: "Bubbles the Bird Pattern",
        image: "https://public-files.gumroad.com/p9mw857toyjaqcy73pb2w6pbjzn4",
        description: "Crochet a Bubbles the Bird with bright feathers. Beginner-friendly pattern with instructions for color combinations and wing styles. Great for decor!",
        originalPrice: 12.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/bubbles-the-bird-pattern?wanted=true"
    },
    {
        id: 18,
        title: "Bunny Pumpkin Pattern",
        image: "https://public-files.gumroad.com/usisfsq7iq35pchpa95zwdi1al1j",
        description: "Crochet a bunny in a pumpkin costume for Halloween. Intermediate pattern with removable hat and pants. Perfect for seasonal decor or gifts!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/bunny-pumpkin-pattern?wanted=true"
    },
    {
        id: 19,
        title: "Kenny McCormick Pattern",
        image: "https://public-files.gumroad.com/iybhhmj50odvjwbyeico6c30541h",
        description: "Crochet an Kenny from South Park with iconic parka. Intermediate pattern with instructions for muffled face and detachable hood. Fun for fans!",
        originalPrice: 16.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/kenny-mccormick-pattern?wanted=true"
    },
    {
        id: 20,
        title: "Marsupilami Pattern",
        image: "https://public-files.gumroad.com/4lahlhkmhbe040q1hn9e4wrvukne",
        description: "Crochet a Marsupilami with a long, curly tail. Advanced pattern with instructions for poseable limbs and spots. Ideal for adventurous crafters!",
        originalPrice: 16.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/marsupilami-pattern?wanted=true"
    },
    {
        id: 21,
        title: "Mini Totoro Pattern",
        image: "https://public-files.gumroad.com/gio3bilxycjgozb6n4i8ui5dut64",
        description: "Crochet a Mini Totoro with a leaf accessory. Beginner-friendly pattern with instructions for iconic grin and whiskers. Perfect for Totoro fans!",
        originalPrice: 13.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/mini-totoro-pattern?wanted=true"
    },
    {
        id: 22,
        title: "Poliwag Pokémon Pattern",
        image: "https://public-files.gumroad.com/grlkp39q28d2vrpca5eysx1pho16",
        description: "Crochet a Poliwag with spiral belly. Intermediate pattern with instructions for tail and glossy finish. Great for Pokémon collectors!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/poliwag-pattern?wanted=true"
    },
    {
        id: 23,
        title: "SpongeBob Pattern",
        image: "https://public-files.gumroad.com/z1h4bj4b8hyn2ii2gjfaglmnm74g",
        description: "Crochet an SpongeBob with tie and socks. Intermediate pattern with instructions for square shaping and facial details. Perfect for fans!",
        originalPrice: 16.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/spongebob-pattern?wanted=true"
    },
    {
        id: 24,
        title: "Turtle Pattern",
        image: "https://public-files.gumroad.com/0jqfjp3l1vsa9n8ytq5wzi3lnfuq",
        description: "Crochet a turtle with a removable shell. Beginner-friendly pattern with instructions for textured shell stitching. Great for gifts!",
        originalPrice: 12.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/turtle-pattern?wanted=true"
    },
    {
        id: 25,
        title: "Monkey Pattern",
        image: "https://public-files.gumroad.com/m8pzv89ubwmhl6x8zwvr8t6veuy6",
        description: "Crochet an monkey with a curly tail. Intermediate pattern with instructions for poseable arms and expressive face. Fun for all ages!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/monkey-pattern?wanted=true"
    },
    {
        id: 26,
        title: "Penguin Pattern",
        image: "https://public-files.gumroad.com/opk35gdnsnlxoe6n929qze752iep",
        description: "Crochet a penguin with tiny wings. Beginner-friendly pattern with instructions for color changes and beak shaping. Perfect for decor!",
        originalPrice: 12.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/penguin-pattern?wanted=true"
    },
    {
        id: 27,
        title: "Avocado Keychain Pattern",
        image: "https://public-files.gumroad.com/r0xk47rvzenr9i1wnwu80rgva9bp",
        description: "Crochet a avocado keychain with a pit. Beginner-friendly pattern with instructions for keychain loop. Perfect for gifting or personal use!",
        originalPrice: 10.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/avocado-keychain-pattern?wanted=true"
    },
    {
        id: 28,
        title: "Axolotl Pattern",
        image: "https://public-files.gumroad.com/3kt53dkugcn4is9fwe86j5f4jm55",
        description: "Crochet a axolotl with external gills. Intermediate pattern with instructions for gill shaping and color variations. Cute and unique!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/axolotl-pattern?wanted=true"
    },
    {
        id: 29,
        title: "Baby Dragon Pattern",
        image: "https://public-files.gumroad.com/fcbi6t8di7wtwxt85ffc1ipl3qv0",
        description: "Crochet a baby dragon with tiny wings. Intermediate pattern with metallic yarn scales and optional fire effect. Great for fantasy fans!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/baby-dragon-pattern?wanted=true"
    },
    {
        id: 30,
        title: "Baby Hulk Pattern",
        image: "https://public-files.gumroad.com/b3hupfvb6wdg6hdmwi42gbggwoj2",
        description: "Crochet a Baby Hulk with green skin and shorts. Intermediate pattern with instructions for muscular shaping and facial expression. Fun for superhero fans!",
        originalPrice: 16.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/baby-hulk-pattern?wanted=true"
    },
    {
        id: 31,
        title: "Baby Seal Pattern",
        image: "https://public-files.gumroad.com/3lo4jqhzv8i54ckpscqyic00uefl",
        description: "Crochet a baby seal with flippers. Beginner-friendly pattern with instructions for shiny eyes and smooth texture. Perfect for cuddly gifts!",
        originalPrice: 12.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/baby-seal-pattern?wanted=true"
    },
    {
        id: 32,
        title: "Baby Spider Pattern",
        image: "https://public-files.gumroad.com/srkohk8o29627b4kzdy5f4xzocbg",
        description: "Crochet a baby spider with big eyes. Beginner-friendly pattern with instructions for fuzzy texture and leg positioning. Cute and quirky!",
        originalPrice: 10.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/baby-spider-pattern?wanted=true"
    },
    {
        id: 33,
        title: "Bat Pattern",
        image: "https://public-files.gumroad.com/e5qkp094ho43ow7ez4nkseltq81p",
        description: "Crochet a Halloween bat with spreadable wings. Intermediate pattern with instructions for wing shaping and hanging loop. Spooky fun!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/bat-pattern?wanted=true"
    },
    {
        id: 34,
        title: "Bear Couple Keychain Pattern",
        image: "https://public-files.gumroad.com/x4fhqcvtlx06j79f62quz17t5vmb",
        description: "Crochet two bears with heart accessories. Beginner-friendly pattern with keychain loops. Perfect for Valentine’s Day or couple gifts!",
        originalPrice: 12.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/bear-couple-keychain-pattern?wanted=true"
    },
    {
        id: 35,
        title: "Bear with Fish Pattern",
        image: "https://public-files.gumroad.com/3ecp8usw9o5um8beq7tkf9kjvpzo",
        description: "Crochet an bear holding a fish. Intermediate pattern with instructions for removable fish accessory and fishing pose. Fun and unique!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/bear-with-fish-pattern?wanted=true"
    },
    {
        id: 36,
        title: "Brown Bear Pattern",
        image: "https://public-files.gumroad.com/8a228ybieuibxco6sduc2shzn6fr",
        description: "Crochet an brown bear with a fluffy texture. Beginner-friendly pattern with instructions for ear shaping and color variations. Cuddly and classic!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/brown-bear-pattern?wanted=true"
    },
    {
        id: 37,
        title: "Cute Bear Pattern",
        image: "https://public-files.gumroad.com/gtb2juwdiqqw7b49lrvdlaw10621",
        description: "Crochet a cute bear with a bowtie. Beginner-friendly pattern with instructions for round face and tiny paws. Perfect for gifting!",
        originalPrice: 12.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/cute-bear-pattern?wanted=true"
    },
    {
        id: 38,
        title: "Fluffy Bear Pattern",
        image: "https://public-files.gumroad.com/ae7a709qu5j4wg19jrv18viu4ytu",
        description: "Crochet an fluffy bear with fuzzy yarn. Intermediate pattern with instructions for shaping and scarf accessory. Super cuddly!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/fluffy-bear-pattern?wanted=true"
    },
    {
        id: 39,
        title: "Bear Keychain Pattern",
        image: "https://public-files.gumroad.com/6zz4asvprn9r064m10l4i2q342g2",
        description: "Crochet a bear keychain. Beginner-friendly pattern with instructions for keychain loop. Perfect for gifting or personal use!",
        originalPrice: 10.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/bear-keychain-pattern?wanted=true"
    },
    {
        id: 40,
        title: "Bee Pattern",
        image: "https://public-files.gumroad.com/seizj1b6u41p3kl6c3im7fay35am",
        description: "Crochet a bee with stripes and wings. Beginner-friendly pattern with instructions for antenna shaping and color changes. Buzzing fun!",
        originalPrice: 12.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/bee-pattern?wanted=true"
    },
    {
        id: 41,
        title: "Big Floppy Ears Bunny Pattern",
        image: "https://public-files.gumroad.com/6f1ag5m6rif7m3p3yyiiwyrh435g",
        description: "Crochet an bunny with oversized ears. Intermediate pattern with instructions for ear shaping and poseable limbs. Adorable and cuddly!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/big-floppy-ears-bunny-pattern?wanted=true"
    },
    {
        id: 42,
        title: "Bird Keychain Pattern",
        image: "https://public-files.gumroad.com/ktlx44r7g380fs7hp0pn9kfw5qh4",
        description: "Crochet a bird keychain with a beak. Beginner-friendly pattern with instructions for keychain loop. Perfect for gifting or personal use!",
        originalPrice: 10.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/bird-keychain-pattern?wanted=true"
    },
    {
        id: 43,
        title: "Bunny in Carrot Pants Pattern",
        image: "https://public-files.gumroad.com/jv3fula1pvcreyr8vfp3gak2rzq5",
        description: "Crochet a bunny in carrot pants. Intermediate pattern with removable pants instructions. Perfect for Easter or whimsical decor!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/bunny-in-carrot-pants-pattern?wanted=true"
    },
    {
        id: 44,
        title: "Candy Candy Doll Pattern",
        image: "https://public-files.gumroad.com/qn4hd0dmcqcxaoqmd72ph4q7chdh",
        description: "Crochet an Candy Candy-inspired doll with pigtails. Intermediate pattern with instructions for dress and hair styling. Sweet and charming!",
        originalPrice: 16.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/candy-candy-doll-pattern?wanted=true"
    },
    {
        id: 45,
        title: "Capybara Pattern",
        image: "https://public-files.gumroad.com/9ban0ulqadm5x7fmumr24br4p3ds",
        description: "Crochet an capybara with small ears. Beginner-friendly pattern with instructions for texture and facial details. Cute and cuddly!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/capybara-pattern?wanted=true"
    },
    {
        id: 46,
        title: "Aurora Cat Pattern",
        image: "https://public-files.gumroad.com/ej7me8hrs611hcbjgf2nmajw13sh",
        description: "Crochet an Aurora Cat with sparkly coat. Intermediate pattern with instructions for glittery yarn and star appliques. Magical and fun!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/aurora-cat-pattern?wanted=true"
    },
    {
        id: 47,
        title: "Christmas Penguin Pattern",
        image: "https://public-files.gumroad.com/jez03t9ta5hak4dimg8d3nv20o7m",
        description: "Crochet a penguin with Santa hat and scarf. Beginner-friendly pattern for holiday decor or gifting. Festive and adorable!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/christmas-penguin-pattern?wanted=true"
    },
    {
        id: 48,
        title: "Cow Pattern",
        image: "https://public-files.gumroad.com/xa1h5av7sci02atohgbay65zqmyq",
        description: "Crochet an cow with spots and a bell. Beginner-friendly pattern with instructions for spot placement and bell accessory. Moo-velous fun!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/cow-pattern?wanted=true"
    },
    {
        id: 49,
        title: "Hairy Owl Pattern",
        image: "https://public-files.gumroad.com/j37752ho9hgjlaxsyyrxpriukba5",
        description: "Crochet a owl with feathered texture. Intermediate pattern with instructions for feather stitching and beak shaping. Wise and cuddly!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/hairy-owl-pattern?wanted=true"
    },
    {
        id: 50,
        title: "Winnie the Pooh Keychain Pattern",
        image: "https://public-files.gumroad.com/vgomf38msog7linz3jmmvvob2n72",
        description: "Crochet a Winnie the Pooh keychain with honey pot. Beginner-friendly pattern for fans. Perfect for gifting or personal use!",
        originalPrice: 10.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/winnie-the-pooh-keychain-pattern?wanted=true"
    },
    {
        id: 51,
        title: "Cute Pig Pattern",
        image: "https://public-files.gumroad.com/6xy8v7gd1uc9zk8n0xa0pzf3ena6",
        description: "Crochet a pig with curly tail and floppy ears. Beginner-friendly pattern with instructions for tail shaping and color variations. Adorable!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/cute-pig-pattern?wanted=true"
    },
    {
        id: 52,
        title: "Emma the Elephant Pattern",
        image: "https://public-files.gumroad.com/gkl5suttd4o8ynhhowm1ui8msjz1",
        description: "Crochet an Emma the Elephant in UK terms. Beginner-friendly pattern with instructions for long trunk and floppy ears. Perfect for gifts!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/emma-the-elephant-pattern?wanted=true"
    },
    {
        id: 53,
        title: "Glow in the Dark Ghost Pattern",
        image: "https://public-files.gumroad.com/1lk5shu68orhjye2rwrtul6zsv63",
        description: "Crochet a glow-in-the-dark ghost for Halloween. Beginner-friendly pattern with instructions for eyes and floaty shape. Spooky fun!",
        originalPrice: 12.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/glow-in-the-dark-ghost-pattern?wanted=true"
    },
    {
        id: 54,
        title: "Christmas Gnome Pattern",
        image: "https://public-files.gumroad.com/so9v4hij7hnbnf7pmzg6ry29umpn",
        description: "Crochet a gnome with Santa hat and beard. Intermediate pattern for holiday decor or gifting. Festive and whimsical!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/christmas-gnome-pattern?wanted=true"
    },
    {
        id: 55,
        title: "Gray Cat Pattern",
        image: "https://public-files.gumroad.com/5bnjczh9aovk0hp111lj3norjssl",
        description: "Crochet an gray cat with long tail. Beginner-friendly pattern with instructions for ear shaping and whiskers. Perfect for cat lovers!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/gray-cat-pattern?wanted=true"
    },
    {
        id: 56,
        title: "Halloween Pumpkin Pattern",
        image: "https://public-files.gumroad.com/igu5lneo8rz1oveg4itce4jsenlh",
        description: "Crochet a pumpkin with carved face. Beginner-friendly pattern for Halloween decor. Includes instructions for stem and face details!",
        originalPrice: 12.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/halloween-pumpkin-pattern?wanted=true"
    },
    {
        id: 57,
        title: "Baby Matinee Coat Pattern",
        image: "https://public-files.gumroad.com/s0zqiic3qz7fh2oz6ysqzpemax31",
        description: "Crochet a cozy baby matinee coat with Hayfield 1400 yarn. Intermediate pattern with instructions for buttons and sizing. Perfect for babies!",
        originalPrice: 16.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/baby-matinee-coat-pattern?wanted=true"
    },
    {
        id: 58,
        title: "Ice Cream Keychain Pattern",
        image: "https://public-files.gumroad.com/yzhfmuwsvalr6u9n7lib7xvztocw",
        description: "Crochet a ice cream keychain. Beginner-friendly pattern with instructions for cone and keychain loop. Sweet for gifting or personal use!",
        originalPrice: 10.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/ice-cream-keychain-pattern?wanted=true"
    },
    {
        id: 59,
        title: "In the Hood Cardigan Pattern",
        image: "https://public-files.gumroad.com/vnry8ae3cwqi8zax6ikqgt8br6oz",
        description: "Crochet a cozy cardigan in US terms with a hood. Intermediate pattern with instructions for buttons and sizing. Stylish and warm!",
        originalPrice: 18.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/in-the-hood-cardigan-pattern?wanted=true"
    },
    {
        id: 39,
        title: "Bear Keychain Pattern",
        image: "https://public-files.gumroad.com/6zz4asvprn9r064m10l4i2q342g2",
        description: "Crochet a bear keychain. Beginner-friendly pattern with instructions for keychain loop. Perfect for gifting or personal use!",
        originalPrice: 10.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/bear-keychain-pattern?wanted=true"
    },
    {
        id: 60,
        title: "Mini Unicorn Keychain Pattern",
        image: "https://public-files.gumroad.com/n0diqjgszjm2j8pd66feyay8jnai",
        description: "Crochet a unicorn keychain with tiny horn. Beginner-friendly pattern with instructions for keychain loop. Magical for gifting!",
        originalPrice: 10.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/mini-unicorn-keychain-pattern?wanted=true"
    },
    {
        id: 61,
        title: "Purple Zombie Bunny Pattern",
        image: "https://public-files.gumroad.com/c4ltkdpsotraecmu02tkogdhws0x",
        description: "Crochet a purple zombie bunny for Halloween. Intermediate pattern with instructions for spooky stitching and eerie eyes. Perfect for creepy decor!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/purple-zombie-bunny-pattern?wanted=true"
    },
    {
        id: 62,
        title: "Red Snake Pattern",
        image: "https://public-files.gumroad.com/1g4z7920qit5dbxn3ikzcdrielz9",
        description: "Crochet an red snake with a coiled body. Intermediate pattern with instructions for scales and forked tongue. Slithery and fun!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/red-snake-pattern?wanted=true"
    },
    {
        id: 63,
        title: "Sandy Cheeks Squirrel Pattern",
        image: "https://public-files.gumroad.com/m45szqkeipgglsjrzmeklolltmnf",
        description: "Crochet an Sandy Cheeks from SpongeBob. Intermediate pattern with instructions for diving suit and acorn accessory. Perfect for fans!",
        originalPrice: 16.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/sandy-cheeks-squirrel-pattern?wanted=true"
    },
    {
        id: 64,
        title: "Spiderman Pattern",
        image: "https://public-files.gumroad.com/pj1u400tov3vp884pxcmacg0t16g",
        description: "Crochet an Spiderman with web details. Intermediate pattern with instructions for suit stitching and mask. Great for superhero enthusiasts!",
        originalPrice: 16.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/spiderman-pattern?wanted=true"
    },
    {
        id: 65,
        title: "Mini Witch Pattern",
        image: "https://public-files.gumroad.com/cdhfk0hpjbb7fq0681lzkc8trm4u",
        description: "Crochet a mini witch for Halloween. Beginner-friendly pattern with instructions for hat and broom. Perfect for spooky season decor!",
        originalPrice: 12.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/mini-witch-pattern?wanted=true"
    },
    {
        id: 66,
        title: "Tiger Pattern",
        image: "https://public-files.gumroad.com/s48gxs6czey07hwzcrobp6qayajp",
        description: "Crochet an tiger with stripes. Intermediate pattern with instructions for color changes and tail shaping. Fierce and cuddly!",
        originalPrice: 15.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/tiger-pattern?wanted=true"
    },
    {
        id: 67,
        title: "Valentine Keychain Pattern",
        image: "https://public-files.gumroad.com/m4yuqbu70qx3ziqrzao0yi92qy83",
        description: "Crochet a heart-themed keychain. Beginner-friendly pattern with instructions for keychain loop. Perfect for Valentine’s Day gifts!",
        originalPrice: 10.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/valentine-keychain-pattern?wanted=true"
    },
    {
        id: 68,
        title: "Valentine Bear Pattern",
        image: "https://public-files.gumroad.com/ptj697ul8as0karymjwo0u1lmrtj",
        description: "Crochet a bear with heart accessories. Beginner-friendly pattern with instructions for heart appliques. Perfect for Valentine’s Day!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/valentine-bear-pattern?wanted=true"
    },
    {
        id: 69,
        title: "Winnie the Pooh Velvet Bear Pattern",
        image: "https://public-files.gumroad.com/q2p9il0z5ucgwqjlhqu858i8g67k",
        description: "Crochet an velvet Winnie the Pooh. Beginner-friendly pattern with instructions for honey pot and plush texture. Great for fans!",
        originalPrice: 14.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/winnie-the-pooh-velvet-bear-pattern?wanted=true"
    },
    {
        id: 70,
        title: "Vintage Dress Pattern",
        image: "https://public-files.gumroad.com/x87rl7mr19nlmjn36tu47m5o35sw",
        description: "Crochet a vintage-style dress for dolls. Intermediate pattern with instructions for lace details and sizing. Elegant and timeless!",
        originalPrice: 16.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/vintage-dress-pattern?wanted=true"
    },
    {
        id: 71,
        title: "Vintage Knitting Pattern",
        image: "https://public-files.gumroad.com/8w12y7zfuz150w4pxosllb9sqz64",
        description: "Crochet a vintage knitting-inspired piece. Intermediate pattern with instructions for textured stitches and classic design. Perfect for cozy projects!",
        originalPrice: 16.99,
        salePrice: 4.99,
        purchaseLink: "https://maken8n.gumroad.com/l/vintage-knitting-pattern?wanted=true"
    },
    {
  id: 72,
  title: "3 Cats and Flowers",
  image: "https://public-files.gumroad.com/ekc30dq6kstg786fc42brigmk3ym",
  description: "3 cats and flowers amigurumi crochet pattern. Cute decorative design provided as a PDF download.",
  originalPrice: 16.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/3-cats-and-flowers?wanted=true"
},
{
  id: 73,
  title: "11 Dolls Pattern Bundle",
  image: "https://public-files.gumroad.com/mydb7u1ti1xn2naelf4baedo99t2",
  description: "11 dolls amigurumi crochet pattern bundle. Great value PDF download for makers and sellers.",
  originalPrice: 24.99,
  salePrice: 6.99,
  purchaseLink: "https://maken8n.gumroad.com/l/11-dolls-pattern-bundle?wanted=true"
},
{
  id: 74,
  title: "Alfie the Duckling",
  image: "https://public-files.gumroad.com/n49cvi87quo4l5sidnk3m4hb3azu",
  description: "Alfie the Duckling amigurumi crochet pattern. Beginner-friendly PDF instructions.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/alfie-the-duckling?wanted=true"
},
{
  id: 75,
  title: "Ava the Butterfly",
  image: "https://public-files.gumroad.com/3o7j4fkcz1pch8098b7ygkku7pd5",
  description: "Ava the Butterfly amigurumi crochet pattern. Elegant butterfly design in PDF format.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/ava-the-butterfly?wanted=true"
},
{
  id: 76,
  title: "Axolotl Strawberry",
  image: "https://public-files.gumroad.com/ksghsfnehm0l7voji9wqjdzy2111",
  description: "Axolotl strawberry-themed amigurumi crochet pattern. Cute kawaii PDF download.",
  originalPrice: 15.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/axolotl-strawberry-crochet?wanted=true"
},
{
  id: 77,
  title: "Baby Animals",
  image: "https://public-files.gumroad.com/ug5sb0fowbxqp3s1gnderl2p52hm",
  description: "Baby animals amigurumi crochet pattern collection. Multiple cute designs in one PDF.",
  originalPrice: 19.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/baby-animals?wanted=true"
},
{
  id: 78,
  title: "Baby Yoda The Child",
  image: "https://public-files.gumroad.com/8boji5mog5ls4k5r0amnz8j1tz25",
  description: "Baby Yoda (The Child) amigurumi crochet pattern. Fan-favorite PDF download.",
  originalPrice: 17.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/baby-yoda-the-child?wanted=true"
},
{
  id: 79,
  title: "Baby Chameleon",
  image: "https://public-files.gumroad.com/ly0ug9iueq6ye70ls71cheq0sz68",
  description: "Baby chameleon amigurumi crochet pattern. Cute reptile design with PDF instructions.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/baby-chameleon?wanted=true"
},
{
  id: 80,
  title: "Baiana Doll",
  image: "https://public-files.gumroad.com/z795cjpxpc32umwkpt1kwcqo63wm",
  description: "Baiana doll amigurumi crochet pattern inspired by traditional style. PDF download.",
  originalPrice: 16.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/baiana-doll?wanted=true"
},
{
  id: 81,
  title: "Ball Joined Doll",
  image: "https://public-files.gumroad.com/rbtqlxz8l6gn94bjl63hphawinfr",
  description: "Ball joined doll amigurumi crochet pattern with articulated look. PDF format.",
  originalPrice: 17.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/ball-joined-doll?wanted=true"
},
{
  id: 82,
  title: "Batman",
  image: "https://public-files.gumroad.com/k82drbxiqu090tewcl9bzhiczrsk",
  description: "Batman amigurumi crochet pattern. Superhero-inspired PDF download.",
  originalPrice: 18.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/batman-amigurumi?wanted=true"
},
{
  id: 83,
  title: "Bernard the Dinosaur",
  image: "https://public-files.gumroad.com/a0jb9svfdvl1nj50jfnr6f8hmz1o",
  description: "Bernard the Dinosaur amigurumi crochet pattern. Cute and kid-friendly design.",
  originalPrice: 15.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/bernard-the-dinosaur?wanted=true"
},
{
  id: 84,
  title: "Brown Owl",
  image: "https://public-files.gumroad.com/njc93phcmucp4nt6f536ak5rdq7d",
  description: "Brown owl amigurumi crochet pattern. Classic and cozy PDF design.",
  originalPrice: 13.99,
  salePrice: 3.99,
  purchaseLink: "https://maken8n.gumroad.com/l/brown-owl?wanted=true"
},
{
  id: 85,
  title: "Butterfly",
  image: "https://public-files.gumroad.com/a5gqumvr5yiil96dvrm7b70vuek9",
  description: "Butterfly amigurumi crochet pattern. Elegant and colorful PDF.",
  originalPrice: 13.99,
  salePrice: 3.99,
  purchaseLink: "https://maken8n.gumroad.com/l/butterfly-amigurumi?wanted=true"
},
{
  id: 86,
  title: "Butterfly Slim",
  image: "https://public-files.gumroad.com/278sqnkif4jjrq062jl7zqehc5el",
  description: "Slim butterfly amigurumi crochet pattern with a modern look.",
  originalPrice: 13.99,
  salePrice: 3.99,
  purchaseLink: "https://maken8n.gumroad.com/l/butterfly-slim?wanted=true"
},
{
  id: 87,
  title: "Charmander Pokemon",
  image: "https://public-files.gumroad.com/o83uty2gxie7b7rw4gx5dizpya7j",
  description: "Charmander Pokémon amigurumi crochet pattern. Fan-favorite character.",
  originalPrice: 18.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/charmander-pokemon?wanted=true"
},
{
  id: 88,
  title: "Cockatiel",
  image: "https://public-files.gumroad.com/apynsv3dc1j108avj8q09t0kvvuh",
  description: "Cockatiel bird amigurumi crochet pattern. Realistic and adorable design.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/cockatiel?wanted=true"
},
{
  id: 89,
  title: "Cozy Patchwork Pumpkin for Halloween",
  image: "https://public-files.gumroad.com/cmg97lmvuo9k3mm0ihyb2j8chiyj",
  description: "Cozy patchwork pumpkin amigurumi crochet pattern. Perfect for Halloween decor.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/patchwork-pumpkin?wanted=true"
},
{
  id: 90,
  title: "Cute Plush Valentine Heart",
  image: "https://public-files.gumroad.com/8tpur90hz3l8llxshztwl119jguu",
  description: "Cute plush Valentine heart amigurumi crochet pattern. Perfect gift idea.",
  originalPrice: 12.99,
  salePrice: 3.99,
  purchaseLink: "https://maken8n.gumroad.com/l/cute-valentine-heart?wanted=true"
},
{
  id: 91,
  title: "Evil Minion",
  image: "https://public-files.gumroad.com/y68im1uoi8x1qx61vppdakm02akg",
  description: "Evil minion amigurumi crochet pattern. Fun villain-style character.",
  originalPrice: 17.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/evil-minion?wanted=true"
},
{
  id: 92,
  title: "Fun Crochet Bundles",
  image: "https://public-files.gumroad.com/yyjed1a1s3k97cijiayu3eg8bxx3",
  description: "Fun crochet bundles amigurumi pattern collection. Great value PDF download.",
  originalPrice: 24.99,
  salePrice: 6.99,
  purchaseLink: "https://maken8n.gumroad.com/l/fun-crochet-bundles?wanted=true"
},
{
  id: 93,
  title: "Halloween Puppy",
  image: "https://public-files.gumroad.com/354oqp61clhel0e0jkt7unrdna1f",
  description: "Cute Halloween puppy amigurumi crochet pattern. Perfect seasonal project.",
  originalPrice: 15.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/halloween-puppy?wanted=true"
},
{
  id: 94,
  title: "Hoot Hoot Owl",
  image: "https://public-files.gumroad.com/vmomm3e1jcdn08gydz3x53yxccj1",
  description: "Hoot Hoot owl amigurumi crochet pattern. Fun and expressive design.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/hoot-hoot-owl?wanted=true"
},
{
  id: 95,
  title: "Jack Skellington Halloween",
  image: "https://public-files.gumroad.com/acv7ipotc76j0yp2yrq2lppyp8nx",
  description: "Jack Skellington Halloween amigurumi crochet pattern. Iconic spooky character.",
  originalPrice: 18.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/jack-skellington?wanted=true"
},
{
  id: 96,
  title: "Jellyfish Babies",
  image: "https://public-files.gumroad.com/5sttjju1t1m31z4und7wuv8zv6bl",
  description: "Adorable jellyfish babies amigurumi crochet pattern. Soft and cute design.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/jellyfish-babies?wanted=true"
},
{
  id: 97,
  title: "Jerry Mouse",
  image: "https://public-files.gumroad.com/5c6v7qxrtc9xij6lhysjdj93oy7z",
  description: "Jerry Mouse amigurumi crochet pattern. Classic cartoon-inspired design.",
  originalPrice: 17.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/jerry-mouse?wanted=true"
},
{
  id: 98,
  title: "Jokser",
  image: "https://public-files.gumroad.com/2cvdwsi30u8w4lox0yqxq10y2lfd",
  description: "Jokser amigurumi crochet pattern. Unique character design in PDF format.",
  originalPrice: 17.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/jokser?wanted=true"
},
{
  id: 99,
  title: "Little Mummy Doll",
  image: "https://public-files.gumroad.com/ix49zxr3ikl4x1ccfd69s1to3xip",
  description: "Little mummy doll amigurumi crochet pattern. Perfect for Halloween gifts.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/little-mummy-doll?wanted=true"
},
{
  id: 100,
  title: "Little Blue Octopus",
  image: "https://public-files.gumroad.com/i4dn3ubyix9siuqp6vw8za842wu6",
  description: "Little blue octopus amigurumi crochet pattern. Cute ocean-themed design.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/little-blue-octopus?wanted=true"
},
{
  id: 101,
  title: "Mario Super Mario Bros",
  image: "https://public-files.gumroad.com/5gwpkcr29a4zzpvpx16qgkanpgch",
  description: "Mario Super Mario Bros amigurumi crochet pattern. Iconic game character.",
  originalPrice: 18.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/mario-super-mario?wanted=true"
},
{
  id: 102,
  title: "Mel the Snowman",
  image: "https://public-files.gumroad.com/a22sraoccztoovhd10qb9ezr81m8",
  description: "Mel the Snowman amigurumi crochet pattern. Cozy winter-themed PDF design.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/mel-the-snowman?wanted=true"
},
{
  id: 103,
  title: "Mini Turtle",
  image: "https://public-files.gumroad.com/soevl3q6f3u3ckyo25ibptkwwwqn",
  description: "Mini turtle amigurumi crochet pattern. Small, cute, and beginner-friendly.",
  originalPrice: 12.99,
  salePrice: 3.99,
  purchaseLink: "https://maken8n.gumroad.com/l/mini-turtle?wanted=true"
},
{
  id: 104,
  title: "Minion Bob and Bear Tim",
  image: "https://public-files.gumroad.com/8cjwcx0vwiwkwmokx447uwf6m9sk",
  description: "Minion Bob and Bear Tim amigurumi crochet pattern duo. Fun character design.",
  originalPrice: 19.99,
  salePrice: 6.99,
  purchaseLink: "https://maken8n.gumroad.com/l/minion-bob-bear-tim?wanted=true"
},
{
  id: 105,
  title: "Mummy Market Minis",
  image: "https://public-files.gumroad.com/diq3qvai8ikbbv5oa12fvchwjgfe",
  description: "Mummy market minis amigurumi crochet pattern set. Perfect for Halloween themes.",
  originalPrice: 16.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/mummy-market-minis?wanted=true"
},
{
  id: 106,
  title: "Oddish Pokemon",
  image: "https://public-files.gumroad.com/lq29qjlx1flii99x5rrkhiig7sws",
  description: "Oddish Pokémon amigurumi crochet pattern. Cute plant-style character.",
  originalPrice: 17.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/oddish-pokemon?wanted=true"
},
{
  id: 107,
  title: "Oscar the Little Bat",
  image: "https://public-files.gumroad.com/sp2jucsvzktlwolexv51h8mbdmw9",
  description: "Oscar the Little Bat amigurumi crochet pattern. Adorable spooky design.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/oscar-the-little-bat?wanted=true"
},
{
  id: 108,
  title: "Emotional Support Pickle",
  image: "https://public-files.gumroad.com/0f7ynnzlldgdvz39by8dsgnbngvr",
  description: "Emotional support pickle amigurumi crochet pattern. Fun and quirky PDF.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/emotional-support-pickle?wanted=true"
},
{
  id: 109,
  title: "Seal Big",
  image: "https://public-files.gumroad.com/mnx91tu7fxfqqqrq9yvqzeb88ryq",
  description: "Big seal amigurumi crochet pattern. Soft, cuddly ocean-themed design.",
  originalPrice: 15.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/seal-big?wanted=true"
},
{
  id: 110,
  title: "Shrimp",
  image: "https://public-files.gumroad.com/94bgpgafc5kddk1l7ea0rortifmb",
  description: "Shrimp amigurumi crochet pattern. Unique and playful sea creature design.",
  originalPrice: 13.99,
  salePrice: 3.99,
  purchaseLink: "https://maken8n.gumroad.com/l/shrimp?wanted=true"
},
{
  id: 111,
  title: "Snuggle Bunny",
  image: "https://public-files.gumroad.com/zp5xd641qw9qx3m10r8tnuzpx5gy",
  description: "Snuggle bunny amigurumi crochet pattern. Soft, cuddly, and perfect for gifts.",
  originalPrice: 15.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/snuggle-bunny?wanted=true"
},
{
  id: 112,
  title: "South Park Stan",
  image: "https://public-files.gumroad.com/3luvrm2hckrsddhadh56xyp6abf9",
  description: "South Park Stan amigurumi crochet pattern. Fun cartoon-inspired PDF design.",
  originalPrice: 17.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/south-park-stan?wanted=true"
},
{
  id: 113,
  title: "Squirtle Pokemon",
  image: "https://public-files.gumroad.com/espit1ul8dmdhqiwp7q42ophbhv3",
  description: "Squirtle Pokémon amigurumi crochet pattern. Popular water-type character.",
  originalPrice: 18.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/squirtle-pokemon?wanted=true"
},
{
  id: 114,
  title: "Steve Minecraft",
  image: "https://public-files.gumroad.com/wkv0urt8050p9e4eo05hgyta95fx",
  description: "Steve from Minecraft amigurumi crochet pattern. Pixel-style character design.",
  originalPrice: 18.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/steve-minecraft?wanted=true"
},
{
  id: 115,
  title: "Stitch with Ange",
  image: "https://public-files.gumroad.com/30x3hqegiwgvla6trkq6sb7i0v6w",
  description: "Stitch with Ange amigurumi crochet pattern. Cute duo character design.",
  originalPrice: 19.99,
  salePrice: 6.99,
  purchaseLink: "https://maken8n.gumroad.com/l/stitch-with-ange?wanted=true"
},
{
  id: 116,
  title: "Themike",
  image: "https://public-files.gumroad.com/1633dcqozldclbrqnlj1k2dk5d2i",
  description: "Themike amigurumi crochet pattern. Character-style PDF crochet design.",
  originalPrice: 16.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/themike?wanted=true"
},
{
  id: 117,
  title: "Bulbasaur Pokemon",
  image: "https://public-files.gumroad.com/x3yq4r5vsad2tbjzwwmxklmjyb12",
  description: "Bulbasaur Pokémon amigurumi crochet pattern. Cute dinosaur-style character.",
  originalPrice: 18.99,
  salePrice: 5.99,
  purchaseLink: "https://maken8n.gumroad.com/l/bulbasaur?wanted=true"
},
{
  id: 118,
  title: "Up Mushroom Super Mario World",
  image: "https://public-files.gumroad.com/azfcpknrvm0g661de8cklgu8y7mn",
  description: "1-Up mushroom from Super Mario World amigurumi crochet pattern.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/up-mushroom-super-mario?wanted=true"
},
{
  id: 119,
  title: "Valentines Day Bouquet",
  image: "https://public-files.gumroad.com/llhp9khlf8j23uzdcncxg9fqjj0g",
  description: "Valentine’s Day bouquet amigurumi crochet pattern. Romantic gift idea.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/valentines-day-bouquet?wanted=true"
},
{
  id: 120,
  title: "Valentine Tree",
  image: "https://public-files.gumroad.com/54zge9srawmizgg3s9k33szx9g0g",
  description: "Valentine tree amigurumi crochet pattern. Decorative love-themed design.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/valentine-tree?wanted=true"
},
{
  id: 121,
  title: "Woobles Penguin",
  image: "https://public-files.gumroad.com/jmn6v2mgmkb2z8nywk9snirjmfbq",
  description: "Woobles-style penguin amigurumi crochet pattern. Cute and beginner-friendly.",
  originalPrice: 13.99,
  salePrice: 3.99,
  purchaseLink: "https://maken8n.gumroad.com/l/woobles-penguin?wanted=true"
},
{
  id: 122,
  title: "Woolly Doodly",
  image: "https://public-files.gumroad.com/xn5iqzxtwrm4ntr707m2hsffw3ni",
  description: "Woolly doodly amigurumi crochet pattern. Fun and whimsical design.",
  originalPrice: 13.99,
  salePrice: 3.99,
  purchaseLink: "https://maken8n.gumroad.com/l/woolly-doodly?wanted=true"
},
{
  id: 123,
  title: "Wootteo Super Tuna",
  image: "https://public-files.gumroad.com/0knnt55jzqpezswg650iaspfm8n3",
  description: "Wootteo Super Tuna amigurumi crochet pattern. Funny and creative character.",
  originalPrice: 14.99,
  salePrice: 4.99,
  purchaseLink: "https://maken8n.gumroad.com/l/wootteo-super-tuna?wanted=true"
}


];



