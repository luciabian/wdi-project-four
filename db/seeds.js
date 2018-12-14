const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Project = require('../models/project');
const User = require('../models/user');
const Message = require('../models/message');

const userIds = [
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3',
  '5be9860fcb16d525543ceda4'
];

const projectsIds = [
  '5be9860fcb16d525543ceda5',
  '5be9860fcb16d525543ceda6',
  '5be9860fcb16d525543ceda7',
  '5be9860fcb16d525543ceda8',
  '5be9860fcb16d525543ceda9',
  '5be9860fcb16d525543ceda0',
  '5be9860fcb16d525543cede1',
  '5be9860fcb16d525543cece2',
  '5be9860fcb16d525543cebe3',
  '5be9860fcb16d525543ceae4'
];

const userData = [
  {
    _id: userIds[0],
    username: 'Lucia',
    email: 'lu@lu',
    password: 'pass',
    passwordConfirmation: 'pass',
    projectsCreated: projectsIds[0],
    image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/40164261_1904745992916528_4940792100846305280_n.jpg?_nc_cat=111&_nc_ht=scontent-lhr3-1.xx&oh=f562e938a6225940703b21b806d7e26d&oe=5CB1FE84'
  },
  {
    _id: userIds[1],
    username: 'Catalina',
    email: 'c@c',
    password: 'pass',
    passwordConfirmation: 'pass',
    projectsCreated: projectsIds[1],
    image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/29694977_10215944909325317_6490684051628602204_n.jpg?_nc_cat=111&_nc_ht=scontent-lhr3-1.xx&oh=61572c33a8834a71f6ffcaf39dc2d893&oe=5CB01E67'
  }
];

const messageData = [
  {
    from: userIds[0],
    to: userIds[1],
    content: 'Hello!'
  }, {
    from: userIds[1],
    to: userIds[0],
    content: 'Hi!'
  }
];

const projectData = [
  {
    _id: projectsIds[0],
    name: 'Teaching',
    country: 'Tanzania',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-tanzania/childcare-volunteer-with-ivhq-in-tanzania.jpg?w=1200&q=85',
    lat: -6.369028,
    lng: 34.888821,
    countryInfo: 'Tanzania is hot throughout the year and is humid on the coast and dry on the central plateau. The heavy rains last from March to June and can make unsealed road travel difficult. The hot, dry weather in January and February attracts the most tourists. The best time to visit the Serengeti is from January to March, when the grazers are calving and there are plenty of lion around, or to witness the wildebeest migration to and from Kenya, which occurs at the onset of the dry season and again with the first rains, usually around the beginning of June and mid-November. Zanzibar has a warm climate year-round and its coastal resorts are tempered by sea breezes. The island is best avoided during the rain season in April and May. Official languages are Swahili and English',
    description: 'As a volunteer on the Teaching project in Tanzania, you will work in English-medium schools or government schools, where the presence of volunteers is beneficial in opening the minds and broadening the horizons of the students, along with exposing them to native English speakers. Children in Tanzania love to attend school, often starting as young as 3 years old, and wherever possible, children hope to stay in school until at least 14 years old, as education is highly valued in Tanzanian society.',
    createdBy: userIds[0]
  },
  {
    _id: projectsIds[1],
    name: 'Kindergarten Teacher',
    country: 'Philippines',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-philippines/ivhq-philippines-kindergarten-volunteer-teaching.jpg?w=1200&q=85',
    lat: 12.879721,
    lng: 121.774017,
    countryInfo: 'The Philippines has a hot and humid climate all year round, with average temperatures between 25°C and 28°C (77°F to 83°F). The coolest months are in November through to January where average temperatures fall below 30°C (86°F). The hottest months are April through to May, where the average temperature sits above 30°C (86°F). The dry season runs from January through to June. The wet season runs from July through to December. Official languages are Filipino and English',
    description: 'Volunteers on the Kindergarten project are leading lessons within a local kindergarten usually with the assistance of a local teacher. You will be teaching pre-school English, Maths, Science and Arts and Crafts to children aged between 3 and 5 years old. While you will follow the government stipulated curriculum, the lessons are conducted in an exciting and practical way through basic drawing, painting and playing – with an essential focus on having a lot of fun! This project is a great option for aspiring teachers or volunteers with no experience in curriculum planning or teaching. You can expect to work approximately 4 to 5 hours per day, Monday to Friday. You will teach and arrange activities at the school in the morning and afternoon for approximately 2 hours each time, followed by preparing lessons/activities for the next day in the evening. During the holiday periods, volunteers will have the opportunity to conduct special classes in the community which are organized by our local team. These classes are an opportunity for volunteers to teach outside of the government curriculum and they are very successful and appreciated by the local community.​',
    createdBy: userIds[1]
  },
  {
    _id: projectsIds[2],
    name: 'Teaching/Education',
    country: 'Argentina',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-argentina-buenos-aires/volunteer-teacher-in-argentina-with-ivhq.jpg?w=1200&q=85',
    lat: -38.416096,
    lng: -63.616673,
    countryInfo: 'Like its topography, Argentina’s climate varies greatly. The climate ranges from subtropical in the north, to humid in the central regions, to sub-Antarctic in the south. Winter is the driest period of the year (June to August). The coldest months are June and July and the warmest month is January. Average annual temperatures in Buenos Aires range from 51°F to 83°F (11°C to 28°C). The official language is Spanish',
    description: 'The purpose of the Teaching/Education project is to assist in the implementation of an integrative educational project, aimed at addressing issues of poverty and illiteracy in low-income communities. In the shanty town areas of southern Buenos Aires, local schools promote social inclusion through education to families and by combining different social groups within the school. As part of this initiative, volunteers work alongside a local teacher to carry out English lessons to primary and secondary school-aged children. Typical activities on this project include assisting with pronunciation and providing additional guidance and support to the children in the class. Volunteers may also have the opportunity to assist with music and art lessons.',
    createdBy: userIds[0]
  },
  {
    _id: projectsIds[3],
    name: 'Marine Conservation',
    country: 'Australia',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-australia/ivhq-australia-marine-conservation-turtle.jpg?w=1200&q=85',
    lat: -25.274399,
    lng: 133.775131,
    countryInfo: 'Cairns is considered to have a tropical climate and is warm year round. The hot season lasts 4-5 months from November to March. During this time, the daily high is often around 86°F (30°C). The cooler season runs from June to August and the daily high is around 79°F (26°C). Being a monsoonal climate, most rainfalls occurs between January and March. The official language is English',
    description: 'Volunteers on the Marine Conservation project in Australia have the opportunity to join a variety of important conservation efforts focused on the protection of Great Barrier Reef ecosystem. When volunteering in Australia, you will work in collaboration with a number of oceanographic organizations to gather vital raw data and support the protection of the Great Barrier Reef through a range of initiatives, including: Reef Monitoring - This portion of the Marine Conservation project involves snorkeling within an assigned area to collect data on the species living in the Great Barrier Reef. You do not require any previous reef surveying experience to participate, as you will be trained in the methodology of in-water surveying during your program orientation. A full-length lycra suit will be supplied and volunteers are just required to bring their own snorkel and waterproof watch. Marine Debris Collection and Research - Marine debris represents a significant threat to the Great Barrier Reef ecosystem and is having a devastating impact on marine life. As a volunteer, you will be assisting with marine debris data collection and mapping. This data will then be categorized and shared with university and conservation groups to assist with their research objectives. Training is provided for all volunteers regarding the importance of this work and you will be shown how to undertake marine debris data collection using the equipment provided to you. Sea Turtle Rehabilitation (For volunteers staying for 2-4 weeks) - To support sea turtle conservation efforts, you will be trained to assist with the care of sick and injured sea turtles during the rehabilitation process. You will also have the opportunity to gain an in-depth understanding of each turtle’s specific case and rehabilitation requirements. Your tasks may include cleaning filters and tanks, preparing food and feeding turtles. Other activities may include assisting with the upkeep of the center’s facilities.',
    createdBy: userIds[0]
  },
  {
    _id: projectsIds[4],
    name: 'Eco-Agriculture Conservation',
    country: 'Costa Rica',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-costa-rica/ivhq-costa-rica-manuel-antonio-renovation-project.jpg?w=1200&q=85',
    lat: 9.748917,
    lng: -83.753426,
    countryInfo: 'Costa Rica is unequivocally a tropical country, situated between 8° and 11° north latitude, fairly close to the equator. Although you get much cooler temperatures in the mountains above 2000 meters, the average annual temperature for most of the country lies between 71°F (21.7°C) and 81°F (27°C). The coolest months are from November through to January, and the warmest months are from March through to May. San Jose stands at approximately 1170 meters altitude and has a mean annual temperature of 69°F (20.6°C). The official language is Spanish',
    description: 'As a volunteer on our Eco-Agriculture Conservation project, you will be based in the Central Highlands of Costa Rica, approximately 4 hours from San Jose.If you’re passionate about conservation, enjoy hands-on tasks and seeing the physical results of your hard work, this project will be perfect for you. This is a unique eco-volunteering opportunity where the focus is not only on agriculture but also supporting the local community. Coffee lovers will find this project both interesting and rewarding. After seeing all the hard work that goes into coffee production, you’ll never look at a cup of coffee in the same way! You will be working alongside a local family in rural Costa Rica to support their coffee production. Your tasks on the Eco-Agriculture Conservation project will vary based on the time of year you take part, so it’s important to have enthusiasm for helping out where there is the most need. You may be involved in the harvesting, roasting and packaging of the coffee beans, composting, replanting and clearing the grounds to plant the next harvest.',
    createdBy: userIds[0]
  },
  {
    _id: projectsIds[5],
    name: 'Surf, Skate & Swim',
    country: 'South Africa',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-south-africa-table-mountain/ivhq-surf-volunteers-south-africa.jpg?w=1200&q=85',
    lat: -30.559483,
    lng: 22.937506,
    countryInfo: 'The subtropical location, moderated by the Atlantic and Indian Oceans on three sides of the country and the altitude of the central plateau, are responsible for the warm temperatures typical of South Africa. Across much of the country, summer (December to February) is characterized by hot, sunny weather with temperatures averaging around 25°C (77°F). Winter (May to September) is cooler and drier with evening temperatures averaging around 10 °C (50°F). In Cape Town, sporadic showers and chilly winds are common during the winter months, but with daytime temperatures can average around 15°C (59°F). Official languages are Afrikaans, English, Zulu, Xhosa, Swati, and Tswana.',
    description: 'The Surf, Swim and Skate project is run as an after-school activity for youth from one of the local schools we work with and caters to students from low-income communities, and operates Tuesday through Thursday afternoon. The children range in age from 10 to 16 years and the main aim of the project is to keep the children occupied and off the streets after school while providing them with confidence building activities. For many of the children this is the highlight of their day and the project is an incentive for them to do well in school as only those who attend school every day, behave in class and study diligently will be able to attend the project.As a volunteer on the Surf, Swim and Skate project you will help teach valuable life lessons and teamwork through adventure activities including skateboarding, swimming and surfing. You can expect to teach swimming to any children who cannot yet swim, assist with water safety and teaching surfing to children who are competent swimmers as well as teaching children how to skateboard. Volunteers who cannot yet surf will be provided a minimum of 1 lesson per week by our local instructor. As the Surf, Swim and Skate project is run in the afternoons you can expect to spend mornings assisting in the Kindergarten project or taking part in your designated surf lesson. Extra surf lessons can also be arranged through our local team at an additional cost.',
    createdBy: userIds[0]
  },
  {
    _id: projectsIds[6],
    name: 'Teaching French',
    country: 'Morocco',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-morocco/childcare-volunteer-in-morocco.jpg?w=1200&q=85',
    lat: 31.791702,
    lng: -7.092620,
    countryInfo: 'Morocco has a Mediterranean climate that is generally hot and dry for most of the year, with cooler, yet still mild, temperatures and rainfall during the winter months between November and March. Morocco has widely varying terrain and the climate varies greatly throughout the country. Temperatures can be incredibly high in the southern and south eastern desert areas whereas, the temperature drops considerably in the higher lying mountainous areas, even dropping to freezing point at night. In Rabat, temperatures reach an average high of 27°C (80.6°F) in the summer months and an average high of 17°C (62.6°F) in the winter months. Temperatures can drop to an average of 7°C (44.6°F) in the winter and it is generally always cold in the evenings throughout the year. Official languages are Arabic and Berber.',
    description: 'French serves as a second language in many educated echelons within Morocco and while it is considered an unofficial third language after Modern Standard Arabic and Berber, it is the primary language of commerce and economics in Morocco. In order for young Moroccans to acquire marketable skills and integrate well into the job market, they need to have a strong grasp of the French language. Volunteers work with underprivileged children and teenagers, providing training in French and information technology. Volunteer tasks include running small workshops, assisting local teachers and organizing educational games and activities. Volunteers who wish to join the Teaching French project must be fluent in French. When applying to volunteer in Morocco, volunteers need to choose either Teaching English or Teaching French and if you can teach both languages, please outline this on your application form. Please note, volunteers do not need to be qualified or experienced teachers to participate on the Teaching French project in Morocco but we do encourage you to conduct independent training to prepare you for your teaching project.',
    createdBy: userIds[0]
  },
  {
    _id: projectsIds[7],
    name: 'Animal Care/Animal Rights',
    country: 'Mexico',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-mexico/maya-agriculture-farming-ivhq.jpg?w=1200&q=85',
    lat: 23.634501,
    lng: -102.552788,
    countryInfo: 'The Tropic of Cancer effectively divides the country into temperate and tropical zones. Mérida lies on the Caribbean coast in the State of Yucatán and is one of the warmer regions of Mexico. The warm season lasts from April through June, with an average daily high temperature above 35°C (94°F). The hottest day of the year is May 7, with an average high of 36°C (97°F) and low of 23°C (74°F). Being prepared for the intense heat during this time frame is essential. The “cold” season lasts from November to February with an average daily high temperature below 31°C (88°F). The coldest month of the year is in January, with an average low of 18°C (65°F) and high of 29°C (85°F). The official language is Spanish.',
    description: 'Although the attitude towards providing proper care to domestic animals is slowly changing in Mexico, there is still a major problem with cats and dogs being abandoned on the streets. The city of Mérida does not have the resources needed to take care of these animals and they are often euthanized as a result. In response, a number of non-profit organizations have taken over the responsibility and care for these animals with the ultimate goal of finding people to adopt them. Volunteers work alongside the limited staff to bathe, brush, train, walk, and play with the cats and dogs to prepare them for adoption. Cleaning cages and providing maintenance to their facilities is also important work. A vital part of the work of these organizations is public education and fundraising. These organizations provide free or low-cost mass spay/neuter clinics periodically throughout the year. Many helpers are needed when these clinics are offered, as well as for large-scale fund raising events. While basic Spanish language skills are helpful on this project, volunteers with minimal language experience should feel confident to participate.',
    createdBy: userIds[0]
  },
  {
    _id: projectsIds[8],
    name: 'Medical Elective',
    country: 'Nepal',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-nepal/ivhq-medical-elective-volunteers-in-nepal.jpg?w=1200&q=85',
    lat: 28.394857,
    lng: 84.124008,
    countryInfo: 'The climate in Nepal varies largely due to the variations in typography across the country. Spring and autumn are the most pleasant seasons with dry weather and moderate temperatures. The Kathmandu Valley and other areas of high altitude experience summer temperatures of up to 28°C (82.4°F) and in winter, temperatures range between 2°C (35.6°F) and 20°C (68°F). The summer temperatures in Chitwan can reach up to 35°C (95°F) and in winter they range between 7°C (44.6°F) and a mild 23°C (73.4°F). The climate in Pokhara is similar to that of the Kathmandu Valley, with slightly warmer temperatures. The official language is Nepali.',
    description: 'As a volunteer on the Medical Elective project you will have the opportunity to experience first-hand the stark contrast between medical practice in the Western world and the realities of medicine in developing countries. This project is well suited to medical and nursing students who are looking to expand their knowledge of healthcare systems. When volunteering on this project you can expect to be placed in a hospital in either Kathmandu, Chitwan or Pokhara where you will shadow fully qualified physicians and nurses. Whilst hospitals in Nepal are under resourced and equipment is basic, these institutions are bound by government regulations and cannot allow international volunteers to perform tasks independently. Typical tasks that you can expect to assist with as a short term volunteer include; observing the operating room to become familiar with procedures in the surgery ward; working with children to move and exercise their limbs in the physical therapy department; examining burn wounds and changing patients’ dressings in the burns unit; participating in emergency room rounds; following the main emergency room physician; learning about family planning and immunizations; and helping mothers of newborn babies.',
    createdBy: userIds[0]
  }
];

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Project.create(projectData)
    .then(projects => {
      console.log(`${projects.length} project created`);
      return User.create(userData);
    })
    .then(users => {
      console.log(`${users.length} users created`);
      return Message.create(messageData);
    })
    .then(messages => {
      console.log(`${messages.length} messages created`);
      mongoose.connection.close();
    });
});
