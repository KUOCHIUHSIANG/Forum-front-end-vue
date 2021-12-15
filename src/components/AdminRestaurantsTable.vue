<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id}}"
            class="btn btn-link"
          >Show</router-link>

          <router-link
            :to="{name: 'admin-restaurant-edit', params: { id: restaurant.id}}"
            class="btn btn-link"
          >Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Bulah Schumm",
            "tel": "(436) 018-0374 x61925",
            "address": "6586 Abernathy Curve",
            "opening_hours": "08:00",
            "description": "ut ex rerum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.390253654065248",
            "viewCounts": 1,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-13T06:35:44.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 2,
            "name": "Ava Wolff",
            "tel": "480.228.8118 x13684",
            "address": "24649 Bechtelar Port",
            "opening_hours": "08:00",
            "description": "assumenda",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.19424041627135",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 3,
            "name": "Ms. Dion Rau",
            "tel": "702.648.0946 x9065",
            "address": "473 Cormier Centers",
            "opening_hours": "08:00",
            "description": "Accusantium cupiditate eveniet dolorum.\nTemporibus aliquid tempore esse.\nItaque nihil sunt et.\nNostrum itaque alias.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.53750060940585",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 4,
            "name": "Patrick Tillman",
            "tel": "(093) 872-8210 x03467",
            "address": "9854 Raegan Ville",
            "opening_hours": "08:00",
            "description": "Eligendi excepturi consequatur ut id non dolores. Labore voluptatem aut vero dolores et. Ratione iste temporibus illo sapiente. Expedita ipsum iure beatae ex facilis est.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.611054139710927",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 5,
            "name": "Richard Sauer",
            "tel": "(508) 630-4696",
            "address": "665 Bernhard Falls",
            "opening_hours": "08:00",
            "description": "Neque impedit rerum rem libero. Corporis unde iure eos. Et non ea tenetur sed repudiandae assumenda earum in. Nulla animi in. Beatae corporis beatae et ipsa nesciunt quia officia porro sit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.45583219517502",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 6,
            "name": "Warren West Sr.",
            "tel": "943-228-7399 x441",
            "address": "36322 Schulist Row",
            "opening_hours": "08:00",
            "description": "qui reiciendis est",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.65432153101798",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 7,
            "name": "Dr. Wiley Medhurst",
            "tel": "441-162-0953",
            "address": "5039 Vidal Lodge",
            "opening_hours": "08:00",
            "description": "Maxime aspernatur nihil fugiat molestias rerum ipsum sit ut dolorem.\nDeserunt laborum dignissimos voluptatem quia nisi enim.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.55435821144951",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 8,
            "name": "Bernita Huels",
            "tel": "(645) 677-2503 x04781",
            "address": "098 Annabelle Branch",
            "opening_hours": "08:00",
            "description": "unde",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.983790539676132",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 9,
            "name": "Ethyl Bins",
            "tel": "145.370.8878 x955",
            "address": "29802 Sanford Green",
            "opening_hours": "08:00",
            "description": "Officiis qui optio eos consequatur qui et similique minima.\nSequi eos eius.\nVelit corporis quidem aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.70634409143598",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 10,
            "name": "Dr. Gerald McClure",
            "tel": "(267) 489-2234",
            "address": "5914 Carrie Crescent",
            "opening_hours": "08:00",
            "description": "Dolore quos necessitatibus excepturi eius adipisci omnis rerum.\nIpsam beatae molestiae sunt excepturi numquam sapiente in.\nIllo qui tenetur accusamus ea voluptatibus nostrum labore.\nQuos ex corporis natus architecto.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.90141990727011",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 11,
            "name": "Emmett Koepp",
            "tel": "1-991-890-3717",
            "address": "98981 Darrin Port",
            "opening_hours": "08:00",
            "description": "illo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.03190179244308",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 12,
            "name": "Nat Hettinger V",
            "tel": "906-051-7322 x70931",
            "address": "4981 Loma Islands",
            "opening_hours": "08:00",
            "description": "Dolore accusantium eos. Non quae quas delectus vero nesciunt enim in commodi. Nostrum neque nihil ut maiores quo a sed libero.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.1632378075969",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 13,
            "name": "Alvera Connelly",
            "tel": "414-734-8086 x6146",
            "address": "28832 Johns Brooks",
            "opening_hours": "08:00",
            "description": "hic",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.1775751142632",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 14,
            "name": "Arvel White",
            "tel": "995.065.5703",
            "address": "0410 Rhianna Union",
            "opening_hours": "08:00",
            "description": "Modi neque consequatur tempore qui praesentium. Possimus sunt sit tempora molestiae id quos. Vero quis molestiae sit dolor.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.466636720779896",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 15,
            "name": "Declan Terry",
            "tel": "069.216.9981 x0152",
            "address": "6394 Bogisich Villages",
            "opening_hours": "08:00",
            "description": "Labore ut pariatur ut sit nemo.\nQui sint et et soluta nobis qui cum eligendi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.91523350179318",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 16,
            "name": "Matteo Klocko",
            "tel": "314.576.5177",
            "address": "04081 Meaghan Orchard",
            "opening_hours": "08:00",
            "description": "praesentium",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.43099043271276",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 17,
            "name": "Izabella Ullrich I",
            "tel": "356-047-9679 x8020",
            "address": "876 Mraz Center",
            "opening_hours": "08:00",
            "description": "Commodi officiis molestias ex. Iusto sit maiores.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.8796130948721",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 18,
            "name": "Fanny O'Keefe",
            "tel": "439.626.2328",
            "address": "4891 Barbara Court",
            "opening_hours": "08:00",
            "description": "ut cumque modi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.98996183988882",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 19,
            "name": "Simeon Kilback",
            "tel": "1-829-334-5970",
            "address": "990 Treutel Vista",
            "opening_hours": "08:00",
            "description": "Voluptatem laboriosam modi voluptatem. Excepturi qui est et et qui adipisci non. Et qui aut maxime expedita quia.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.9932046382431281",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 20,
            "name": "Kaitlin Parker",
            "tel": "(678) 190-4320 x8380",
            "address": "31614 Von Villages",
            "opening_hours": "08:00",
            "description": "Dolore ut quia recusandae accusantium nisi ullam.\nOfficiis est ducimus consectetur dolores nemo.\nMagni quis alias.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.327790495373062",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 21,
            "name": "Abraham Ward",
            "tel": "495.664.8662",
            "address": "7954 Jakubowski Land",
            "opening_hours": "08:00",
            "description": "Est excepturi aut aut amet praesentium. Fugiat assumenda quis consequatur doloribus autem non tenetur. Voluptates et quibusdam magni doloremque ea recusandae voluptatem id in. Quae autem nobis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.30221362659534",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 22,
            "name": "Celia Hansen",
            "tel": "284.863.9099",
            "address": "99864 Carolyne Lodge",
            "opening_hours": "08:00",
            "description": "Quasi voluptatem omnis vero dolore aut assumenda. Provident et officiis neque. Occaecati quisquam sequi nesciunt. Quaerat praesentium et sed ad in excepturi autem itaque. Omnis laudantium aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.137093670227248",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 23,
            "name": "Conrad Buckridge",
            "tel": "302-674-0331",
            "address": "3408 Murphy Underpass",
            "opening_hours": "08:00",
            "description": "Iure dolorum quam magnam architecto est nostrum quam sed ut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.84688162487338",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 24,
            "name": "Elwyn Zemlak",
            "tel": "1-710-763-7621",
            "address": "097 Korbin Estate",
            "opening_hours": "08:00",
            "description": "temporibus iste amet",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.59667720662827",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 25,
            "name": "Danika Stamm",
            "tel": "1-703-401-4426",
            "address": "009 Kuphal Meadow",
            "opening_hours": "08:00",
            "description": "commodi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.792912002465656",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 26,
            "name": "Johnson Greenfelder",
            "tel": "(228) 883-6870",
            "address": "8070 Morissette Springs",
            "opening_hours": "08:00",
            "description": "Et sunt perspiciatis rerum doloremque sed facere.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.22580320966249",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 27,
            "name": "Agustina Abernathy",
            "tel": "945-617-3036 x5969",
            "address": "1572 Lue Coves",
            "opening_hours": "08:00",
            "description": "Et incidunt quo necessitatibus molestias cupiditate.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.2777837888069632",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 28,
            "name": "Reva Lebsack",
            "tel": "188.667.6402",
            "address": "59247 Ransom Mountain",
            "opening_hours": "08:00",
            "description": "Odit similique assumenda nihil eos voluptatem adipisci.\nVoluptates aut est enim.\nConsequatur possimus velit voluptatum eos beatae.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.33069811039342",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 29,
            "name": "Grant Lind",
            "tel": "1-620-031-6142 x72954",
            "address": "7327 Hirthe River",
            "opening_hours": "08:00",
            "description": "Deserunt quod sint inventore voluptas animi eos eaque quae sit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.29604365812763",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 30,
            "name": "Miss Willard Jacobson",
            "tel": "574.815.7668 x5880",
            "address": "87256 Lillian Expressway",
            "opening_hours": "08:00",
            "description": "Perferendis aut nobis asperiores voluptate autem pariatur. Repellendus earum et reprehenderit cupiditate in enim eaque tenetur facilis. Natus recusandae ullam officiis explicabo. Minus eligendi a dicta. Nulla et sunt id consequatur sit nostrum ipsa. Aut et quasi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.63283150884172",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 31,
            "name": "Michele Altenwerth",
            "tel": "(572) 457-5756 x8041",
            "address": "358 Willms Radial",
            "opening_hours": "08:00",
            "description": "Sint qui nisi voluptatibus id animi omnis et. Voluptatem molestias ducimus repellendus magnam veniam dolor provident quia dolore. Animi saepe assumenda repellendus dignissimos voluptatibus nemo ut iure magni. Non odio voluptas accusamus accusantium id magni et dicta voluptates.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.514587561001857",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 32,
            "name": "Presley Friesen",
            "tel": "(453) 870-4196 x38761",
            "address": "1386 Delia Station",
            "opening_hours": "08:00",
            "description": "Rerum illum aut eligendi et aut ut aspernatur et. Rerum ipsum alias reiciendis quam culpa rerum quod. Quam quis ut qui enim enim deleniti consectetur dolorum natus. Consequatur a harum at id.\n \rAmet omnis ipsam praesentium quibusdam unde. Temporibus omnis ut quia officiis aspernatur eos aut non optio. Sed numquam repudiandae. Et aut laudantium perspiciatis omnis. Nostrum cumque id quis iste et et consequatur. Velit non ratione et a.\n \rUt aliquid recusandae. Ducimus nisi qui natus. Dignissimos quos delectus eos asperiores corporis voluptatem. Laboriosam quo neque eum et sed. Deleniti debitis commodi cumque expedita qui vitae ipsam sint assumenda.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.89127555073343",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 33,
            "name": "Quincy Pfannerstill",
            "tel": "1-194-142-7596",
            "address": "505 Laurie Row",
            "opening_hours": "08:00",
            "description": "Veritatis sit velit error reiciendis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.393702686819134",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 34,
            "name": "Beverly Hintz",
            "tel": "245-254-5139 x39280",
            "address": "00256 Lowe Walk",
            "opening_hours": "08:00",
            "description": "et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.182958195495516",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 35,
            "name": "Walter Rau V",
            "tel": "821.470.2446 x5311",
            "address": "7371 Amiya Mountains",
            "opening_hours": "08:00",
            "description": "Corporis nihil laudantium ab veritatis nulla voluptatibus. Repellendus exercitationem aut tempore sapiente id accusantium vel provident quisquam. Qui eos assumenda in rem. Odit enim ab illo et dolor. Natus laboriosam adipisci similique fugit aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.160819159247662",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 36,
            "name": "Lea Jacobson",
            "tel": "1-781-934-2541 x5830",
            "address": "77047 David Junction",
            "opening_hours": "08:00",
            "description": "Delectus rerum voluptatem. Quia sit provident optio debitis. Repellendus sint voluptate voluptatem aut nostrum eveniet autem illum qui.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.71439677931228",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 37,
            "name": "Rudy Mosciski",
            "tel": "(339) 449-1462 x11633",
            "address": "46242 Ondricka Mountain",
            "opening_hours": "08:00",
            "description": "illo veniam praesentium",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.32934431465471",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 38,
            "name": "Faustino Jacobi",
            "tel": "(702) 772-6206 x701",
            "address": "1030 Antone Knolls",
            "opening_hours": "08:00",
            "description": "Vero unde modi quia assumenda ullam. Maxime illum ex qui. Facere quasi placeat. Quas ullam dolor minima quo omnis illum rerum explicabo sunt. Sunt quo quos rem iure.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.15527861876467",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 39,
            "name": "Leif Oberbrunner",
            "tel": "752-611-9711",
            "address": "19895 Ondricka Wells",
            "opening_hours": "08:00",
            "description": "praesentium",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.895043835439264",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 40,
            "name": "Ambrose Fahey",
            "tel": "1-117-128-0067 x18699",
            "address": "72686 Emmerich Pines",
            "opening_hours": "08:00",
            "description": "Quas ea vel qui reprehenderit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.90728372635316",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 41,
            "name": "Marlen Bernier PhD",
            "tel": "102-064-3734",
            "address": "9234 Arturo Island",
            "opening_hours": "08:00",
            "description": "illo expedita distinctio",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.06416208335585",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 42,
            "name": "Fannie Heller",
            "tel": "082-377-7820",
            "address": "059 Botsford Ridge",
            "opening_hours": "08:00",
            "description": "eos voluptatum eum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.23212789942758",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 43,
            "name": "Eda Murphy",
            "tel": "055.966.4857",
            "address": "3928 Willow Drive",
            "opening_hours": "08:00",
            "description": "Omnis molestiae tempore. Non voluptate placeat error ipsa ut debitis. Consequuntur facilis qui beatae pariatur occaecati alias necessitatibus. Eos aperiam minus aut. Voluptatem aut esse praesentium ut doloribus dicta asperiores ullam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.041573163842024",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 44,
            "name": "Mr. Elmo Morar",
            "tel": "(687) 937-6535",
            "address": "236 Wiegand Fall",
            "opening_hours": "08:00",
            "description": "Sint beatae impedit corrupti nobis est sint quod et quam. Nisi numquam consectetur. Earum qui qui animi quaerat non nemo ducimus. Mollitia animi impedit quisquam quia ut et rem voluptatem rem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.60783168631218",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 45,
            "name": "Zelda Tillman",
            "tel": "(557) 107-0011 x721",
            "address": "125 Koss Spring",
            "opening_hours": "08:00",
            "description": "hic vero est",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=64.8800881968878",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 46,
            "name": "Ignacio Gorczany II",
            "tel": "(192) 614-6826",
            "address": "4910 Harvey Lakes",
            "opening_hours": "08:00",
            "description": "error",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.49110328934632",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 47,
            "name": "Arthur Eichmann",
            "tel": "1-944-926-2531",
            "address": "8310 Stephon Trail",
            "opening_hours": "08:00",
            "description": "Quia quo delectus omnis tempore nostrum perferendis qui quos. Minima quam iusto. Voluptates dolorem saepe. Consequatur fuga asperiores eum nihil harum quibusdam dolores.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.66745717810271",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 48,
            "name": "Destany Schumm",
            "tel": "1-788-911-4961 x953",
            "address": "968 Rempel Neck",
            "opening_hours": "08:00",
            "description": "officiis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.88709653099859",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 49,
            "name": "Allison Hills",
            "tel": "511-457-2763",
            "address": "377 Runolfsdottir Pike",
            "opening_hours": "08:00",
            "description": "Alias fuga delectus soluta. Beatae eveniet sequi deserunt consequatur eveniet.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.04604491110311",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        },
        {
            "id": 50,
            "name": "Pamela Lockman",
            "tel": "1-428-640-4188 x864",
            "address": "1434 Rosenbaum Cliffs",
            "opening_hours": "08:00",
            "description": "Quos optio et quos et cum perspiciatis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.0977985718303",
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            }
        }
    ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter( restaurant => restaurant.id !== restaurantId)
    }
  }
}
</script>