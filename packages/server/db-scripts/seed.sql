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