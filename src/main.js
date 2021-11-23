import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Clamp from '@sparing-software/v-clamp'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import _ from "lodash"

Vue.config.productionTip = false;

// eslint-disable-next-line no-unused-vars
function randomSubArray(array) {
    if (array.length > 1) {
        let start = _.random(array.length - 1);
        return _.slice(_.shuffle(array), start, _.random(start, array.length - 1));
    }
    return array;
}

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

// eslint-disable-next-line no-unused-vars
export function randomDateRange(days) {
    if (days < 1) {
        return null;
    }
    let start = new Date().addDays(_.random(10, 100));
    return {
        startDate: start,
        endDate: start.addDays(days)
    };
}

const locations = [
    "Cusco, Peru",
    "Mexico City, Mexico",
    "Ciudad de México, Mexico",
    "Havana, Cuba",
    "Tijuana, Mexico",
    "Lucca, Italy",
    "Pokhara, Nepal",
    "Carcavelos, Portugal",
    "Ho Chi Minh, Vietnam",
    "Chiang Mai, Thailand"
];

const prices = [
    400,
    254,
    421,
    325,
    279,
    336,
    126,
    190,
    335,
    75
];

const tags = [
    "Nature", "Historic", "Culture", "Hiking", "Surfing", "Tour Guide", "Sea", "Food", "Desert"
];

const users = [
    {
        id: 1,
        name: "John",
        password: "John",
        email: "john1776@something.lol"
    },
    {
        id: 2,
        name: "Tim",
        password: "Tim",
        email: "user2@something.lol"
    },
    {
        id: 3,
        name: "Bob",
        password: "Bob",
        email: "bobby76@something.lol"
    },
    {
        id: 4,
        name: "Jonas",
        password: "Jonas",
        email: "ji0poooo776@something.lol"
    },
];

export const DATA = {
    itemTypes: ["Bus", "Plane", "Car", "Train", "Bicycle", "Off-Road"],
    locations: locations,
    prices: prices,
    tags: tags,
    items: [
        {
            id: 1,
            title: "Lagoons, glacial lakes and eco-domes",
            transportation: [
                "Car", "Bus"
            ],
            capacity: "<10",
            duration: 3,
            price: prices[0],
            locations: [locations[0]],
            pictures: [
                "https://a0.muscache.com/im/pictures/7905797c-d410-432e-a2bc-507517cdb1df.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/b4700ee1-6125-4ec8-954d-f4a051c47f8c.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/b54be40f-9106-4e86-b6d7-bc5008182c79.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/85efd2aa-4ca8-4e93-b171-cf1ada629846.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/3d575f25-bdcf-4461-9724-2989e4f3cb33.jpg?aki_policy=exp_md"
            ],
            thumbnail: "https://a0.muscache.com/im/pictures/7905797c-d410-432e-a2bc-507517cdb1df.jpg?aki_policy=exp_md",
            description: "Explore an alternative trekking route in the Peruvian Andes to go deep into nature and the pristine mountains. Awe at the towering Humantay and Salkantay peaks reaching more than 6,000 meters in elevation. Enjoy a challenging yet beautiful and unspoiled hike that immerses you in stunning Andean landscapes surrounded by snow-covered peaks and glacier lakes. Sleep overnight in a unique Eco-dome at a sustainable camp. \n" +
                "HIGHLIGHTS\n" +
                "Sleep overnight in unique sustainable Eco-domes \n" +
                "Hike into the Peruvian Andes unparalleled landscapes\n" +
                "Awe at the towering Salkantay peak\n" +
                "Enjoy the beautiful colors of Humantay Lagoon",
            tags: [
                "Hiking", "Tour Guide", "Nature"
            ],
            reviews: [
                {
                    user: users[0],
                    rating: 5,
                    text: "I still feel overwhelmed by the experience in the last 3 days with Jana&Michael. There's something special and unique about their home. And beyond that they are such good people; good couple and a good team. Their home is spotless, but very warm at the same time. Super comfortable bed. Warm bathroom. The toilet smells like a spa. The living room is like a fairytale. Food is great. Magical surroundings. Michael has such deep knowledge and passion with nature and snowshoeing. I had the best hiking (snowshoeing) with him. He's also such a handy man when he built a beautiful BBQ house by his own and most furniture inside their house. I came to Tromso for northern lights at first, but I turned out to be something beyond the northern lights. Words can't describe. I hope for a soon return in the summer. If you have a chance to stay in their home, you should know that you are lucky!"
                },
                {
                    user: users[2],
                    rating: 4,
                    text: "What an amazing experience we had at Jana’s cabin in the mountains. If you are looking for something off the beaten track then make sure you book this experience for yourself. We were picked up from the centre of town and then taken to the location and made our way by foot to the secluded cabin. We were fed traditional Norwegian food throughout our stay which all tasted amazing. The snowshoe hike is an experience we would never forget. The views were to die for with 360 degree views when you reach the top. The cabin itself was everything we had hoped it would be. With a cosy living area and a fireplace that kept us toasty warm. We loved sitting by the fireplace and relaxing. If you are after a true taste of Norway do yourself a favour and book this experience!!"
                },
                {
                    user: users[3],
                    rating: 4,
                    text: "We spent an incredible 48 hours in the Polar Cabin with Jana and Mikael. We were not sure what to expect when we booked this experience, and it was truly spectacular - from the snowshoe hike to the cabin, the fireplace in the sitting room, the local and yummy food, the amazing views of the northern lights from the cabin, the three-hour hike in the snow and the incredible polar views around - it all made for an amazing adventure. Our hosts were warm and outgoing and did everything to make our stay in the Polar Cabin special and memorable. It is clear that Jana and Mikael have a real passion for what they do and are constantly looking for ways to make their cabin even more special and unique, so future visitors are sure to enjoy. Highly recommended for anyone seeking a unique experience, unlike most other vacations."
                }
            ]
        },
        {
            id: 2,
            title: "Queretaro & San Miguel Explorer",
            transportation: [
                "Car"
            ],
            capacity: "<10",
            price: prices[1],
            duration: 4,
            locations: [locations[1]],
            pictures: [
                "https://a0.muscache.com/im/pictures/e87b64e2-b998-43b2-91e6-1e39c0096e0f.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/a103fcf5-f6be-480a-b3b5-0f17532d86bb.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/c36c2276-d398-4dd5-b939-a07e76b83ac5.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/16563cb8-287f-4f8c-bd4d-071f92db55ec.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/354583ae-b453-40f1-8a8c-ff8e20be5747.jpg?aki_policy=exp_md"
            ],
            thumbnail: "https://a0.muscache.com/im/pictures/e87b64e2-b998-43b2-91e6-1e39c0096e0f.jpg?aki_policy=exp_md",
            description: "Spend three days immersed in three of Mexico's most dazzling and vibrant towns. You'll start by visiting the Peña de Bernal, the world's 3rd tallest monolith, and then exploring the nearby colonial town. After that, we'll show you a winery in the area where you'll get a chance to taste some local brew before we settle down in Queretaro for the night. The next day, we're off to the breathtaking San Miguel de Allende to explore its winding streets and iconic pink church. Then it's time to roll your sleeves up for a guided 3-hour food and city walking tour featuring six food tasting locations carefully chosen to highlight the best regional flavours San Miguel has to offer. The next day, it's back on a bus to Mexico City, where you will be transferred to your accommodation.",
            tags: [
                "Tour Guide", "Historic", tags[0]
            ],
            reviews: [
                {
                    user: users[0],
                    rating: 5,
                    text: "I still feel overwhelmed by the experience in the last 3 days with Jana&Michael. There's something special and unique about their home. And beyond that they are such good people; good couple and a good team. Their home is spotless, but very warm at the same time. Super comfortable bed. Warm bathroom. The toilet smells like a spa. The living room is like a fairytale. Food is great. Magical surroundings. Michael has such deep knowledge and passion with nature and snowshoeing. I had the best hiking (snowshoeing) with him. He's also such a handy man when he built a beautiful BBQ house by his own and most furniture inside their house. I came to Tromso for northern lights at first, but I turned out to be something beyond the northern lights. Words can't describe. I hope for a soon return in the summer. If you have a chance to stay in their home, you should know that you are lucky!"
                },
                {
                    user: users[2],
                    rating: 4,
                    text: "What an amazing experience we had at Jana’s cabin in the mountains. If you are looking for something off the beaten track then make sure you book this experience for yourself. We were picked up from the centre of town and then taken to the location and made our way by foot to the secluded cabin. We were fed traditional Norwegian food throughout our stay which all tasted amazing. The snowshoe hike is an experience we would never forget. The views were to die for with 360 degree views when you reach the top. The cabin itself was everything we had hoped it would be. With a cosy living area and a fireplace that kept us toasty warm. We loved sitting by the fireplace and relaxing. If you are after a true taste of Norway do yourself a favour and book this experience!!"
                },
                {
                    user: users[3],
                    rating: 4,
                    text: "We spent an incredible 48 hours in the Polar Cabin with Jana and Mikael. We were not sure what to expect when we booked this experience, and it was truly spectacular - from the snowshoe hike to the cabin, the fireplace in the sitting room, the local and yummy food, the amazing views of the northern lights from the cabin, the three-hour hike in the snow and the incredible polar views around - it all made for an amazing adventure. Our hosts were warm and outgoing and did everything to make our stay in the Polar Cabin special and memorable. It is clear that Jana and Mikael have a real passion for what they do and are constantly looking for ways to make their cabin even more special and unique, so future visitors are sure to enjoy. Highly recommended for anyone seeking a unique experience, unlike most other vacations."
                }
            ]
        },
        {
            id: 3,
            title: "Go glamping, hiking and river floating",
            transportation: [
                "Car", "Bus"
            ],
            capacity: "<10",
            price: prices[2],
            duration: 2,
            locations: [locations[2]],
            pictures: [
                "https://a0.muscache.com/im/pictures/c14d5760-1e39-45d6-898a-b5e6ef7bf910.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/4d52fc5b-267e-4ef0-b9da-2d1dda65c623.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/ac419a0f-ab12-47b5-8087-d8a60f73d0dc.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/93a2d1ca-3dac-41e9-b148-29222fa3a1b2.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/d06833dc-b5cd-440e-9603-ac889756ce4d.jpg?aki_policy=exp_md"
            ],
            thumbnail: "https://a0.muscache.com/im/pictures/c14d5760-1e39-45d6-898a-b5e6ef7bf910.jpg?aki_policy=exp_md",
            description: "Immerse yourself in the mystical and magical sights of Mexico on this 2-day trip. We'll go from the bustling capital to the 'magic town' of Tepoztlan, where you'll have a chance to hike to the famous Tepozteco pyramid on the top of a cliff. We'll then have lunch at the market, and transfer to the breathtaking Las Estacas grounds where you'll spend the night in style, glamping. The next day will get your heart pumping as you embark on a zip-line adventure through incredible natural beauty, before a transfer back to Cuernavaca, then Mexico City.",
            tags: [
                "Nature", "Hiking"
            ],
            reviews: [
                {
                    user: users[0],
                    rating: 5,
                    text: "I still feel overwhelmed by the experience in the last 3 days with Jana&Michael. There's something special and unique about their home. And beyond that they are such good people; good couple and a good team. Their home is spotless, but very warm at the same time. Super comfortable bed. Warm bathroom. The toilet smells like a spa. The living room is like a fairytale. Food is great. Magical surroundings. Michael has such deep knowledge and passion with nature and snowshoeing. I had the best hiking (snowshoeing) with him. He's also such a handy man when he built a beautiful BBQ house by his own and most furniture inside their house. I came to Tromso for northern lights at first, but I turned out to be something beyond the northern lights. Words can't describe. I hope for a soon return in the summer. If you have a chance to stay in their home, you should know that you are lucky!"
                },
                {
                    user: users[2],
                    rating: 4,
                    text: "What an amazing experience we had at Jana’s cabin in the mountains. If you are looking for something off the beaten track then make sure you book this experience for yourself. We were picked up from the centre of town and then taken to the location and made our way by foot to the secluded cabin. We were fed traditional Norwegian food throughout our stay which all tasted amazing. The snowshoe hike is an experience we would never forget. The views were to die for with 360 degree views when you reach the top. The cabin itself was everything we had hoped it would be. With a cosy living area and a fireplace that kept us toasty warm. We loved sitting by the fireplace and relaxing. If you are after a true taste of Norway do yourself a favour and book this experience!!"
                },
                {
                    user: users[3],
                    rating: 4,
                    text: "We spent an incredible 48 hours in the Polar Cabin with Jana and Mikael. We were not sure what to expect when we booked this experience, and it was truly spectacular - from the snowshoe hike to the cabin, the fireplace in the sitting room, the local and yummy food, the amazing views of the northern lights from the cabin, the three-hour hike in the snow and the incredible polar views around - it all made for an amazing adventure. Our hosts were warm and outgoing and did everything to make our stay in the Polar Cabin special and memorable. It is clear that Jana and Mikael have a real passion for what they do and are constantly looking for ways to make their cabin even more special and unique, so future visitors are sure to enjoy. Highly recommended for anyone seeking a unique experience, unlike most other vacations."
                }
            ]
        },
        {
            id: 4,
            title: "Go glamping, hiking and river floating",
            transportation: [
                "Train", "Bus", "Bicycle"
            ],
            capacity: "<10",
            price: prices[3],
            duration: 4,
            locations: [locations[3]],
            pictures: [
                "https://a0.muscache.com/im/pictures/8223757b-d345-4a55-8fdd-b1d766166ecd.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/c3644014-d7c8-41d2-bdf6-26f48fd11273.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/baae18f6-3c4f-48c3-8d1e-f6dd9b60b758.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/77962201-8813-4cdc-942b-e8d3380ffb99.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/71b7ee4f-4463-4a3b-b610-a82fb979832a.jpg?aki_policy=exp_md"
            ],
            thumbnail: "https://a0.muscache.com/im/pictures/71b7ee4f-4463-4a3b-b610-a82fb979832a.jpg?aki_policy=exp_md",
            description: "We'll catch a bus from Havana to Trinidad, discover the city and learn some moves during a Salsa Dance Class before taking part in the city's nightlife. On Day 2, depart your Casa Particular to explore the more of the ancient streets of Trinidad and into the rolling countryside, arriving at Cubanito Natural Park. The next day enjoy Playa Ancon before another night out to test your new dancing skills and on Day 4 we bus back to Havana.",
            tags: [
                "Culture", "Tour Guide", "Hiking"
            ],
            reviews: [
                {
                    user: users[0],
                    rating: 5,
                    text: "I still feel overwhelmed by the experience in the last 3 days with Jana&Michael. There's something special and unique about their home. And beyond that they are such good people; good couple and a good team. Their home is spotless, but very warm at the same time. Super comfortable bed. Warm bathroom. The toilet smells like a spa. The living room is like a fairytale. Food is great. Magical surroundings. Michael has such deep knowledge and passion with nature and snowshoeing. I had the best hiking (snowshoeing) with him. He's also such a handy man when he built a beautiful BBQ house by his own and most furniture inside their house. I came to Tromso for northern lights at first, but I turned out to be something beyond the northern lights. Words can't describe. I hope for a soon return in the summer. If you have a chance to stay in their home, you should know that you are lucky!"
                },
                {
                    user: users[2],
                    rating: 4,
                    text: "What an amazing experience we had at Jana’s cabin in the mountains. If you are looking for something off the beaten track then make sure you book this experience for yourself. We were picked up from the centre of town and then taken to the location and made our way by foot to the secluded cabin. We were fed traditional Norwegian food throughout our stay which all tasted amazing. The snowshoe hike is an experience we would never forget. The views were to die for with 360 degree views when you reach the top. The cabin itself was everything we had hoped it would be. With a cosy living area and a fireplace that kept us toasty warm. We loved sitting by the fireplace and relaxing. If you are after a true taste of Norway do yourself a favour and book this experience!!"
                },
                {
                    user: users[3],
                    rating: 4,
                    text: "We spent an incredible 48 hours in the Polar Cabin with Jana and Mikael. We were not sure what to expect when we booked this experience, and it was truly spectacular - from the snowshoe hike to the cabin, the fireplace in the sitting room, the local and yummy food, the amazing views of the northern lights from the cabin, the three-hour hike in the snow and the incredible polar views around - it all made for an amazing adventure. Our hosts were warm and outgoing and did everything to make our stay in the Polar Cabin special and memorable. It is clear that Jana and Mikael have a real passion for what they do and are constantly looking for ways to make their cabin even more special and unique, so future visitors are sure to enjoy. Highly recommended for anyone seeking a unique experience, unlike most other vacations."
                }
            ]
        },
        {
            id: 5,
            title: "Surf & Turf Street Taco Tour in Baja!",
            transportation: [
                "Bus"
            ],
            capacity: "<10",
            price: prices[4],
            duration: 2,
            locations: [locations[4]],
            pictures: [
                "https://a0.muscache.com/im/pictures/be3d9f72-92e8-4eaa-8325-e23052c1d2a3.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/ec7ac162-3b89-4ed3-9c6d-ea7cc0e71a60.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/d6d0ad75-ec22-4e4b-bf1b-21b614da8c2f.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/2e2ac0ca-fa5e-4b00-bbcf-00c94880db2e.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/7d70d6b3-be4f-439b-972e-704cbe3a78af.jpg?aki_policy=exp_md"
            ],
            thumbnail: "https://a0.muscache.com/im/pictures/ec7ac162-3b89-4ed3-9c6d-ea7cc0e71a60.jpg?aki_policy=exp_md",
            description: "We don't know if anyone has ever curated a \"Surf and Turf Taco Tour\" but you are about to experience it!  Starting with a famous taqueria in Tijuana guests will explore the unique and delicious flavors of wood-fired steak that is carved into a corn tortilla  and then pilled high with fresh toppings.\n" +
                "\n" +
                "From there we will make the beautiful coastal drive to Rosarito (about 30min) which is a lively beach beach town with great shopping opportunities.  Rosarito is home to two very important things:  1) the iconic Rosarito Beach Hotel  (where you will stay) and 2) our favorite taco steak (called \"carne asada\") shops in Baja!  You will visit a local taco institution before having some free time to go shopping, relax on the beach, go horseback riding on the sand or do your own taco-exploring!\n" +
                "\n" +
                "After checking into the hotel we will drive up the main road to a taqueria that serves the most seriously massive burrito you will ever see.  This mouth watering wonder of the world is definitely worth the short drive for dinner!\n" +
                "\n" +
                "The next morning we will drive further south to the historic La Fonda Hotel for an ocean front brunch and brief glimpse of a haunted, gothic castle that was constructed on the ocean bluffs next door.\n" +
                "\n" +
                "Finally, we will make our way to Ensenada for the world famous Baja-style fried fish taco and a visit to an open-air fish market as well as the legendary Ceviche Lady!",
            tags: [
                "Sea", "Food", "Tour Guide"
            ],
            reviews: []
        },
        {
            id: 6,
            title: "Pedaling Tuscan Gems - Lucca and Pisa",
            transportation: [
                "Bus", "Bicycle"
            ],
            capacity: "<5",
            price: prices[5],
            duration: 2,
            locations: [locations[5]],
            pictures: [
                "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1213170-media_library/original/b63c359d-ca5f-46a5-b6ad-c595f3f98bc3.jpeg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1213170-media_library/original/6c8d0800-dc13-4a21-a5e0-118aa7d3295c.jpeg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/741136c5-e43d-4926-ba88-b1aa1410a395.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1213170-media_library/original/61945079-df1c-4a2b-8257-157f88328a36.jpeg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1213170-media_library/original/00fbc566-3489-48f9-9a15-6f62314b5690.jpeg?aki_policy=exp_md"
            ],
            thumbnail: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1213170-media_library/original/b63c359d-ca5f-46a5-b6ad-c595f3f98bc3.jpeg?aki_policy=exp_md",
            description: "Tuscany evokes art and romance, history and culture, quintessential cuisine and scenery. On this overnight trip we'll explore art cities, medieval villages, scenic vineyards and olive groves while pedaling the Tuscan countryside. On the way, we'll visit UNESCO Sites, Renaissance Lucca and Pisa, and a few hidden gems (hilltop castles, quaint piazzas and Italian cafe life included). Our local tour leaders will show you the way - skilled interpreters that will help you make a deeper connection with this amazing part of the world.\n" +
                "\n" +
                "You'll arrive in Lucca where our guide will fit your bikes,  before departing on a ride through lovely Tuscan countryside, visiting a hilltop medieval town on the way. After exploring Pisa's backstreets, far from the crowds, you'll bike to the iconic leaning tower before heading back to Lucca (you can also hop on the train with your bike on the return). Back in Lucca, we’ll dine together in a cozy local trattoria, where you'll be introduced to Tuscan fare and wine.\n" +
                "\n" +
                "The next day (late hotel check-out included), ride the best-preserved medieval walls in Europe, cycling among the locals on their morning \"passeggiata\". Visit the Guinigi Tower (with a tree growing on top!), and explore marvelous Lucca (with our suggestions). Plus an optional countryside cooking experience!\n" +
                "\n" +
                "Come explore charming cities and the postcard landscapes of Tuscany with us!",
            tags: [
                "Sea", "Food", "Tour Guide"
            ],
            reviews: []
        },
        {
            id: 7,
            title: "Mohare Danda climb in Nepal",
            transportation: [
                "Bus"
            ],
            capacity: "<6",
            price: prices[6],
            duration: 5,
            locations: [locations[6]],
            pictures: [
                "https://a0.muscache.com/im/pictures/b6185e00-df9e-4052-b55f-bda8dc308202.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/a996f5f3-fa09-4051-b8d8-4ab8c88f4b97.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/9a39eb15-fb53-4529-a049-38e10dca4ff6.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/e75b70df-8faf-4500-890c-fc0c84c0315c.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/106531e7-16a2-49d2-bef8-f45cee6d737c.jpg?aki_policy=exp_md"
            ],
            thumbnail: "https://a0.muscache.com/im/pictures/b6185e00-df9e-4052-b55f-bda8dc308202.jpg?aki_policy=exp_md",
            description: "Starting in the city of Pokhara, we'll trek five to six hours per day through the mountains to the top of Mohare Danda, situated 3313 meters (10,869 feet) above sea level.\n" +
                "\n" +
                "We'll stop to take in stunning vistas of Himalayan peaks and pass through rhododendron forests. We’ll visit Nangi, the first remote village of Nepal to have wireless Internet and stay in villages inhabited by the Magar people, an indigenous ethnic group of Nepal. Meals will take place at community lodges and teahouses and we'll spend our nights at community homestays run by villagers. \n" +
                "We will also see the unique culture and lifestyle of Nepali villagers along with beautiful stone thatched villages & some Yak herding places on the lap of Nepali Mountain.",
            tags: [
                "Nature", "Hiking", "Tour Guide"
            ],
            reviews: []
        },
        {
            id: 8,
            title: "Surfari Portugal | Epic Road Trip",
            transportation: [
                "Car"
            ],
            capacity: "<3",
            price: prices[7],
            duration: 3,
            locations: [locations[7]],
            pictures: [
                "https://a0.muscache.com/im/pictures/eb323f75-a858-47fb-9c8b-1c00fd2f5760.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/c6ff29c2-395c-437b-8444-ab3952892f59.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/8448017c-c129-4207-a919-94606ad5713f.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/a370d293-4fc6-4fe2-b487-ef59f2aa34a0.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/a08446ea-8ddd-4ee6-8348-878341b551cc.jpg?aki_policy=exp_md"
            ],
            thumbnail: "https://a0.muscache.com/im/pictures/eb323f75-a858-47fb-9c8b-1c00fd2f5760.jpg?aki_policy=exp_md",
            description: "We will go on a campervan chasing the best conditions for surf around the Portuguese coast. We will try to camp in front of the spots to wake up and go to the water whenever we feel like. \n" +
                "\n" +
                "If conditions are not good, we will explore the area and have fun in a different way. \n" +
                "\n" +
                "The goal of the trip is to have a great time while exploring and surfing the best conditions for the group (We will adapt to the group's level).\n" +
                "\n" +
                "If you like camping, nature, surf and sharing with friendly people, this experience is for you.",
            tags: [
                "Surfing", "Tour Guide"
            ],
            reviews: []
        },
        {
            id: 9,
            title: "2-Day Mui Ne Beach Luxury Vacation",
            transportation: [
                "Car"
            ],
            capacity: "<10",
            price: prices[8],
            duration: 2,
            locations: [locations[8]],
            pictures: [
                "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1285335-media_library/original/24d0b9cf-bb84-4e73-8153-1c1d55c1c47e.jpeg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/39d06038-4992-4768-b841-b7a792e418e0.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1285335-media_library/original/3b8cf231-3b0e-4695-981d-3d25a9664a82.jpeg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/2acc2056-bd8b-481d-916f-941b81319e3f.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1285335-media_library/original/0a9a5438-91d4-4711-be83-aa4df532f5b1.jpeg?aki_policy=exp_md"
            ],
            thumbnail: "https://a0.muscache.com/im/pictures/39d06038-4992-4768-b841-b7a792e418e0.jpg?aki_policy=exp_md",
            description: "Joining a Mui Ne beach holiday from Ho Chi Minh City, you will have a great opportunity to visit one of the most beautiful leisure paradises in Vietnam. Endowed with long white sandcoast, crystalline water, fresh seafood and warm weather all year around. Designed to capture the real essence of Vietnam, this journey is a fascinating introduction to one of the most captivating beaches in Vietnam where promisingly bring you a perfect vacation. In Mui Ne, you can try the local delicious seafood and varied choices of resorts and luxury hotels. Together with shady roads along palm trees, the big dunes near coastal city with moving sand and wind make typical scenery for this paradise of relaxation.",
            tags: [
                "Desert", "Tour Guide"
            ],
            reviews: []
        },
        {
            id: 10,
            title: "Tuk Tuks, Hill Tribes and Mountains",
            transportation: [
                "Car", "Off-Road"
            ],
            capacity: "<10",
            price: prices[9],
            duration: 3,
            locations: [locations[9]],
            pictures: [
                "https://a0.muscache.com/im/pictures/ccea313b-ff05-4c10-bc97-593980367ff1.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/d329aee5-2cfe-4719-ad7d-f4673ad89423.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/b5edf977-777e-49aa-92b1-d1ccf232c2db.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/355396e7-3167-48a4-89c7-89e2b7aa8566.jpg?aki_policy=exp_md",
                "https://a0.muscache.com/im/pictures/2ebbc0ee-44dd-470a-8baa-0a99f79a2dee.jpg?aki_policy=exp_md"
            ],
            thumbnail: "https://a0.muscache.com/im/pictures/ccea313b-ff05-4c10-bc97-593980367ff1.jpg?aki_policy=exp_md",
            description: "A stunning Tuk Tuk Adventure taking you deep into the heart of the mountains and hill tribe communities around Chiang Mai – and what better way to travel than in your very own Tuk Tuk relaxing in the back seat exposed to the sights and sounds of this wonderful part of the world.\n" +
                "\n" +
                " An incredible adventure awaits as you travel in your very own Tuk Tuk (with driver and guide) and explore the mountains and remote communities of Northern Thailand. Take in the stunning views from your comfy back seat, experience real Hill Tribe life as you camp in a remote Karen  village, learn to cook a ‘jungle’ feast with the community, hike in the foothills of Thailand’s highest mountain and travel the best way there is – by Thailand’s most iconic vehicle, the Tuk Tuk\n" +
                "\n" +
                "This experience takes you into the heard of the very best of Thailand. Off the beaten track and miles away from the regular tourist trail. The perfect adventure for anyone with a real desire to understand and experience this wonderful country.",
            tags: [
                "Desert", "Tour Guide"
            ],
            reviews: []
        }
    ],
    roles: [
        "Associate", "User"
    ],
    users: users,
    reservations: [
        {
            id: 1,
            date: "01.01.2018",
            userid: 1,
            offerid: 5
        },
        {
            id: 2,
            date: "08.11.2019",
            userid: 1,
            offerid: 1
        },
        {
            id: 3,
            date: "01.13.2020",
            userid: 3,
            offerid: 2
        },
        {
            id: 4,
            date: "01.01.2016",
            userid: 2,
            offerid: 5
        },
        {
            id: 5,
            date: "11.11.2018",
            userid: 2,
            offerid: 4
        },
    ]
};

Vue.use(Clamp);

let user = localStorage.getItem("user");
if (user) {
    Vue.prototype.$user = JSON.parse(user);
}

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');
