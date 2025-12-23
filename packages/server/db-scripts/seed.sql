INSERT INTO products (id, name, description, price)
VALUES (
    1,
    'Wireless Noise-Cancelling Headphones',
    'Over-ear wireless headphones with active noise cancellation and long battery life.',
    199.99
  ),
  (
    2,
    'Mechanical Gaming Keyboard',
    'RGB backlit mechanical keyboard with customizable switches.',
    129.50
  ),
  (
    3,
    '4K UHD Smart TV 55\"',
    '55-inch 4K Ultra HD Smart TV with HDR and streaming apps.',
    649.00
  ),
  (
    4,
    'Espresso Coffee Machine',
    'Semi-automatic espresso machine for home baristas.',
    349.95
  ),
  (
    5,
    'Smart Fitness Watch',
    'Fitness watch with heart rate, sleep tracking, and GPS.',
    179.99
  ),
  (
    6,
    'Bluetooth Portable Speaker',
    'Compact portable speaker with deep bass and waterproof design.',
    89.99
  ),
  (
    7,
    'Ergonomic Office Chair',
    'Adjustable ergonomic chair designed for long working hours.',
    279.00
  ),
  (
    8,
    'Gaming Mouse',
    'High-precision gaming mouse with adjustable DPI.',
    59.99
  ),
  (
    9,
    'Laptop Backpack',
    'Durable backpack with padded laptop compartment and USB charging port.',
    69.95
  ),
  (
    10,
    'Smartphone Gimbal Stabilizer',
    '3-axis gimbal stabilizer for smooth smartphone video recording.',
    119.99
  ),
  (
    11,
    'Electric Toothbrush',
    'Rechargeable electric toothbrush with multiple cleaning modes.',
    79.99
  ),
  (
    12,
    'Air Fryer',
    'Large-capacity air fryer for healthier cooking.',
    149.00
  ),
  (
    13,
    'Noise-Isolating Earbuds',
    'In-ear wired earbuds with excellent noise isolation.',
    39.99
  ),
  (
    14,
    'External SSD 1TB',
    'High-speed portable 1TB external solid-state drive.',
    159.99
  ),
  (
    15,
    'Smart Home Security Camera',
    'Wi-Fi security camera with night vision and motion detection.',
    99.99
  ),
  (
    16,
    'Standing Desk Converter',
    'Desk converter allowing easy switch between sitting and standing.',
    229.00
  ),
  (
    17,
    'Electric Kettle',
    'Fast-boil electric kettle with temperature control.',
    59.00
  ),
  (
    18,
    'Gaming Monitor 27\"',
    '27-inch QHD gaming monitor with high refresh rate.',
    399.99
  ),
  (
    19,
    'Robot Vacuum Cleaner',
    'Smart robot vacuum with app control and scheduling.',
    329.00
  ),
  (
    20,
    'Wireless Charging Pad',
    'Fast wireless charging pad compatible with modern smartphones.',
    29.99
  );
INSERT INTO reviews (author, rating, content, productId)
VALUES -- PRODUCT 1
  (
    'Anna Larsen',
    5,
    'I use these headphones every day on public transport and they make a huge difference. The noise cancelling blocks most engine and conversation noise, and the sound is rich without being overwhelming. Battery life easily lasts a full work week for me.',
    1
  ),
  (
    'Michael Sørensen',
    4,
    'Very comfortable headphones with impressive sound quality. They feel solid and premium, although they can get a bit warm during long listening sessions.',
    1
  ),
  (
    'Sofie Møller',
    5,
    'Fantastic audio clarity and deep bass. I especially like how clear podcasts and calls sound. Pairing was instant and stable.',
    1
  ),
  (
    'Jonas Pedersen',
    5,
    'Perfect for travel and remote work. The noise cancelling lets me fully focus, and I barely notice I am wearing them after an hour.',
    1
  ),
  (
    'Camilla Nørgaard',
    4,
    'Sound quality is excellent and the battery life is strong. I wish the buttons were slightly larger, but overall very happy.',
    1
  ),
  (
    'Thomas Lind',
    5,
    'These headphones exceeded my expectations. Music feels immersive, and the build quality is outstanding.',
    1
  ),
  (
    'Maria Holm',
    5,
    'I have tried several brands, and these are by far the most balanced in sound. Great for both music and movies.',
    1
  ),
  (
    'Rasmus Iversen',
    4,
    'Very good noise reduction and clear sound. A bit pricey, but you get what you pay for.',
    1
  ),
  (
    'Line Kristoffersen',
    5,
    'Super comfortable and amazing sound. I use them daily for work calls and music.',
    1
  ),
  (
    'Peter Madsen',
    5,
    'Outstanding headphones. Long battery life, excellent noise cancelling, and very comfortable.',
    1
  ),
  -- PRODUCT 2
  (
    'Daniel Koch',
    5,
    'Typing on this keyboard feels incredibly satisfying. The keys are responsive and perfect for both coding and gaming sessions.',
    2
  ),
  (
    'Freja Lund',
    4,
    'Solid keyboard with great build quality. The RGB lighting is bright and customizable, although the software took some time to learn.',
    2
  ),
  (
    'Oliver Brandt',
    5,
    'As a gamer, I love the fast response and tactile feedback. It feels durable and premium.',
    2
  ),
  (
    'Camilla Ravn',
    4,
    'Great keyboard overall. Slightly noisy, but that is expected with mechanical switches.',
    2
  ),
  (
    'Sebastian Mohr',
    5,
    'Excellent value for the price. After months of daily use, it still feels brand new.',
    2
  ),
  (
    'Ida Kristensen',
    5,
    'The typing experience is fantastic. It makes long writing sessions much more enjoyable.',
    2
  ),
  (
    'Anders Villumsen',
    4,
    'Very sturdy and well designed. I wish it included a wrist rest.',
    2
  ),
  (
    'Julie Thomsen',
    5,
    'Best keyboard I have owned. Comfortable, responsive, and visually appealing.',
    2
  ),
  (
    'Rasmus Hviid',
    4,
    'Great feel and solid construction. Slightly heavy, but it stays firmly on the desk.',
    2
  ),
  (
    'Lene Bach',
    5,
    'Perfect balance between work and gaming. Highly recommended.',
    2
  ),
  -- PRODUCT 3
  (
    'Mads Jensen',
    5,
    'The picture quality on this TV is stunning. Colors are vibrant, blacks are deep, and 4K content looks incredible.',
    3
  ),
  (
    'Sarah Poulsen',
    4,
    'Great TV for movies and series. The smart features work smoothly, although the menu can feel a bit slow at times.',
    3
  ),
  (
    'Henrik Olesen',
    5,
    'Excellent value for a 55-inch 4K TV. HDR content really shines, especially during movies.',
    3
  ),
  (
    'Nina Sørensen',
    5,
    'The image clarity is impressive, and the sound is better than expected for a flat TV.',
    3
  ),
  (
    'Kasper Lund',
    4,
    'Very happy with the display quality. I ended up adding a soundbar for better audio.',
    3
  ),
  (
    'Louise Bach',
    5,
    'Streaming apps work flawlessly, and the screen size is perfect for our living room.',
    3
  ),
  (
    'Emil Kristiansen',
    5,
    'Gaming on this TV feels smooth and responsive. Low input lag and sharp visuals.',
    3
  ),
  (
    'Pernille Vester',
    4,
    'Picture quality is excellent, but initial setup took some time.',
    3
  ),
  (
    'Andreas Holm',
    5,
    'A fantastic TV for both movies and sports. Motion handling is very good.',
    3
  ),
  (
    'Helle Mortensen',
    5,
    'Beautiful display and modern design. It looks great even when turned off.',
    3
  ),
  -- PRODUCT 4
  (
    'Jakob Rasmussen',
    5,
    'This espresso machine makes café-quality coffee at home. The pressure and temperature control are excellent.',
    4
  ),
  (
    'Signe Poulsen',
    4,
    'Great machine for beginners and enthusiasts alike. It takes some practice, but results are worth it.',
    4
  ),
  (
    'Martin Dahl',
    5,
    'Solid build and consistent espresso shots. Steaming milk is quick and easy.',
    4
  ),
  (
    'Katrine Lund',
    4,
    'I love the flavor I get from this machine. Cleaning takes a bit of effort.',
    4
  ),
  (
    'Ole Thomsen',
    5,
    'Makes rich and flavorful espresso every morning. Highly recommended.',
    4
  ),
  (
    'Emma Jørgensen',
    5,
    'Perfect balance between control and ease of use. Looks great on the kitchen counter.',
    4
  ),
  (
    'Lars Nyholm',
    4,
    'Great value for money. Espresso quality is excellent.',
    4
  ),
  (
    'Mette Vang',
    5,
    'After using capsule machines, this is a huge upgrade in taste.',
    4
  ),
  (
    'Simon Eriksen',
    5,
    'Reliable machine that delivers consistent results every time.',
    4
  ),
  (
    'Anne Friis',
    5,
    'Coffee tastes amazing, and the machine feels very durable.',
    4
  );
INSERT INTO reviews (author, rating, content, productId)
VALUES -- PRODUCT 5 (Smart Fitness Watch)
  (
    'Laura Nielsen',
    5,
    'Accurate heart-rate tracking and the GPS locks on quickly. Battery lasts me about 5 days with workouts.',
    5
  ),
  (
    'Emil Hansen',
    4,
    'Great fitness features and clear screen. The companion app could be a bit smoother.',
    5
  ),
  (
    'Sofia Kristensen',
    5,
    'Sleep tracking is surprisingly useful and the workout summaries are easy to understand.',
    5
  ),
  (
    'Jonas Mikkelsen',
    3,
    'Good watch overall, but notifications sometimes arrive late on my phone.',
    5
  ),
  (
    'Camilla Holm',
    4,
    'Comfortable to wear all day and the step count seems consistent compared to my old tracker.',
    5
  ),
  -- PRODUCT 6 (Bluetooth Portable Speaker)
  (
    'Oliver Pedersen',
    5,
    'Loud for its size and the bass is punchy. Took it to the beach and it handled splashes fine.',
    6
  ),
  (
    'Freja Andersen',
    4,
    'Nice sound and easy pairing. I wish the battery indicator was more detailed.',
    6
  ),
  (
    'Mads Sørensen',
    4,
    'Solid build and good volume without distortion. Range is decent in my apartment.',
    6
  ),
  (
    'Nina Jensen',
    3,
    'Sound is fine but the max volume is a bit harsh for vocals.',
    6
  ),
  (
    'Kasper Larsen',
    5,
    'Perfect for outdoor use—simple controls and it connects instantly every time.',
    6
  ),
  -- PRODUCT 7 (Ergonomic Office Chair)
  (
    'Anne Poulsen',
    5,
    'Huge improvement for my back. Lumbar support is adjustable and actually helps during long days.',
    7
  ),
  (
    'Sebastian Lund',
    4,
    'Comfortable and sturdy. Assembly took a while but instructions were clear.',
    7
  ),
  (
    'Ida Thomsen',
    4,
    'Armrests and seat height adjust easily. Wheels roll smoothly on my floor.',
    7
  ),
  (
    'Rasmus Vang',
    3,
    'Good chair, but the headrest position does not fit me perfectly.',
    7
  ),
  (
    'Maria Dahl',
    5,
    'Worth it for remote work. I can sit for hours without the usual shoulder tension.',
    7
  ),
  -- PRODUCT 8 (Gaming Mouse)
  (
    'Andreas Bach',
    5,
    'Very precise sensor and the shape fits my hand well. DPI switch is convenient in games.',
    8
  ),
  (
    'Julie Nyholm',
    4,
    'Responsive clicks and smooth glide. Software is okay but not amazing.',
    8
  ),
  (
    'Thomas Olesen',
    4,
    'Good value and the buttons feel solid. Lighting is subtle and nice.',
    8
  ),
  (
    'Line Mortensen',
    3,
    'Works well but the side buttons are a bit small for my thumb.',
    8
  ),
  (
    'Peter Friis',
    5,
    'Great tracking and no noticeable latency. Perfect for FPS games.',
    8
  ),
  -- PRODUCT 9 (Laptop Backpack)
  (
    'Sarah Lind',
    5,
    'Plenty of space and the laptop sleeve is well padded. Comfortable straps for commuting.',
    9
  ),
  (
    'Henrik Kristiansen',
    4,
    'Good compartments and feels durable. The USB port is handy, but I rarely use it.',
    9
  ),
  (
    'Louise Mohr',
    4,
    'Looks professional and holds my 15-inch laptop safely. Zippers feel strong.',
    9
  ),
  (
    'Mette Rasmussen',
    3,
    'Nice backpack, but it could use one more small pocket for keys.',
    9
  ),
  (
    'Simon Koch',
    5,
    'Great daily bag—fits laptop, charger, and lunch with room to spare.',
    9
  ),
  -- PRODUCT 10 (Smartphone Gimbal Stabilizer)
  (
    'Daniel Brandt',
    5,
    'Stabilization is excellent and panning shots look smooth. Setup was straightforward.',
    10
  ),
  (
    'Pernille Lund',
    4,
    'Works well for travel videos. Battery life is solid, though the app is a little buggy.',
    10
  ),
  (
    'Jakob Eriksen',
    4,
    'Good build quality and easy balancing. Makes a big difference for walking shots.',
    10
  ),
  (
    'Emma Villumsen',
    3,
    'Stabilization is good but switching modes takes some practice.',
    10
  ),
  (
    'Lars Nørgaard',
    5,
    'Fantastic for content creation—smooth footage and responsive controls.',
    10
  ),
  -- PRODUCT 11 (Electric Toothbrush)
  (
    'Helle Madsen',
    5,
    'Teeth feel noticeably cleaner and the timer helps me brush properly.',
    11
  ),
  (
    'Signe Holm',
    4,
    'Quiet enough and easy to charge. Replacement heads are a bit expensive.',
    11
  ),
  (
    'Martin Vester',
    4,
    'Good cleaning modes and comfortable handle. Battery lasts over a week for me.',
    11
  ),
  (
    'Ole Jensen',
    3,
    'Cleans well, but the travel case feels a little flimsy.',
    11
  ),
  (
    'Katrine Poulsen',
    5,
    'Great upgrade from manual brushing. Gums feel healthier after a couple of weeks.',
    11
  ),
  -- PRODUCT 12 (Air Fryer)
  (
    'Mads Nyholm',
    5,
    'Crispy fries and chicken without much oil. Easy to clean basket.',
    12
  ),
  (
    'Freja Dahl',
    4,
    'Heats fast and cooks evenly. It is larger than I expected on the counter.',
    12
  ),
  (
    'Kasper Mohr',
    4,
    'Great results for frozen food and vegetables. The presets are useful.',
    12
  ),
  (
    'Nina Sørensen',
    3,
    'Food tastes good, but the fan is a bit loud.',
    12
  ),
  (
    'Andreas Larsen',
    5,
    'Best kitchen purchase this year—quick dinners and consistent crispiness.',
    12
  ),
  -- PRODUCT 13 (Noise-Isolating Earbuds)
  (
    'Julie Kristensen',
    4,
    'Blocks a lot of noise and vocals are clear. Cable feels decent quality.',
    13
  ),
  (
    'Thomas Hansen',
    5,
    'Excellent isolation for commuting. Fit is secure and comfortable.',
    13
  ),
  (
    'Line Pedersen',
    3,
    'Sound is okay but bass is a bit heavy for my taste.',
    13
  ),
  (
    'Peter Olesen',
    4,
    'Good for the price and works well for calls. Includes multiple tip sizes.',
    13
  ),
  (
    'Maria Lund',
    5,
    'Surprisingly good clarity and the isolation helps me focus at work.',
    13
  ),
  -- PRODUCT 14 (External SSD 1TB)
  (
    'Henrik Bach',
    5,
    'Very fast transfers and compact size. Works instantly on my laptop and desktop.',
    14
  ),
  (
    'Sarah Thomsen',
    4,
    'Speed is great and it stays cool. The included cable is a bit short.',
    14
  ),
  (
    'Emil Rasmussen',
    5,
    'Perfect for photo backups. Much faster than my old external HDD.',
    14
  ),
  (
    'Camilla Mohr',
    4,
    'Reliable so far and easy to carry. Would like a rubber cover for grip.',
    14
  ),
  (
    'Jonas Kristiansen',
    5,
    'Excellent performance for large video files. No issues after weeks of use.',
    14
  ),
  -- PRODUCT 15 (Smart Home Security Camera)
  (
    'Sofie Lind',
    4,
    'Night vision is clear and motion alerts are quick. Setup was easy.',
    15
  ),
  (
    'Daniel Jensen',
    5,
    'Great image quality and the app is intuitive. Detection zones work well.',
    15
  ),
  (
    'Emma Larsen',
    3,
    'Camera is good, but occasional false alerts from shadows.',
    15
  ),
  (
    'Lars Poulsen',
    4,
    'Solid for the price. Audio is acceptable and Wi-Fi connection is stable.',
    15
  ),
  (
    'Mette Villumsen',
    5,
    'Gives me peace of mind. Notifications and recordings work reliably.',
    15
  ),
  -- PRODUCT 16 (Standing Desk Converter)
  (
    'Oliver Vang',
    5,
    'Smooth lift and plenty of space for keyboard and monitor. My posture improved quickly.',
    16
  ),
  (
    'Freja Nørgaard',
    4,
    'Sturdy and easy to adjust. Takes up some desk depth, but manageable.',
    16
  ),
  (
    'Martin Koch',
    4,
    'Good build quality and stable at standing height. Assembly was minimal.',
    16
  ),
  (
    'Anne Kristiansen',
    3,
    'Works fine, but I wish it went a little higher for tall users.',
    16
  ),
  (
    'Jakob Holm',
    5,
    'Excellent converter—switching positions during the day is effortless.',
    16
  ),
  -- PRODUCT 17 (Electric Kettle)
  (
    'Nina Dahl',
    5,
    'Boils fast and the temperature presets are perfect for tea.',
    17
  ),
  (
    'Kasper Jensen',
    4,
    'Good kettle overall. The exterior gets a bit warm, but not too bad.',
    17
  ),
  (
    'Sarah Møller',
    4,
    'Accurate temperature control and easy pouring spout.',
    17
  ),
  (
    'Thomas Lind',
    3,
    'Works well but the beep is louder than I prefer.',
    17
  ),
  (
    'Helle Larsen',
    5,
    'Great for coffee and tea—quick, consistent, and looks nice on the counter.',
    17
  ),
  -- PRODUCT 18 (Gaming Monitor 27")
  (
    'Andreas Poulsen',
    5,
    'Sharp picture and smooth refresh rate. Great for competitive games.',
    18
  ),
  (
    'Julie Bach',
    4,
    'Colors look good after tweaking settings. Stand is stable and easy to adjust.',
    18
  ),
  (
    'Emil Mohr',
    4,
    'Low input lag and great motion clarity. Speakers are weak, as expected.',
    18
  ),
  (
    'Sebastian Vester',
    3,
    'Nice monitor, but the HDR is not very impressive.',
    18
  ),
  (
    'Maria Kristensen',
    5,
    'Perfect size for my desk and excellent performance for both work and gaming.',
    18
  ),
  -- PRODUCT 19 (Robot Vacuum Cleaner)
  (
    'Martin Nyholm',
    4,
    'Cleans well on hard floors and carpets. Scheduling in the app is convenient.',
    19
  ),
  (
    'Signe Larsen',
    5,
    'Huge time saver. It maps the apartment accurately and avoids most obstacles.',
    19
  ),
  (
    'Henrik Sørensen',
    3,
    'Good suction, but it sometimes gets stuck on thicker rugs.',
    19
  ),
  (
    'Camilla Rasmussen',
    4,
    'Quiet enough to run while I work. Dust bin is easy to empty.',
    19
  ),
  (
    'Peter Lund',
    5,
    'Great for daily maintenance—my floors stay consistently clean.',
    19
  ),
  -- PRODUCT 20 (Wireless Charging Pad)
  (
    'Laura Thomsen',
    4,
    'Charges reliably and looks clean on my desk. Phone alignment matters a bit.',
    20
  ),
  (
    'Jonas Hansen',
    5,
    'Fast charging works as advertised and it does not overheat.',
    20
  ),
  (
    'Emma Nørgaard',
    4,
    'Simple and effective. I like the non-slip surface.',
    20
  ),
  (
    'Oliver Jensen',
    3,
    'Works fine, but my thick phone case slows down charging.',
    20
  ),
  (
    'Freja Kristiansen',
    5,
    'Great value—drop the phone on it and it just works every time.',
    20
  );