<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'

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
            "viewCounts": 0,
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T08:18:00.000Z",
                "updatedAt": "2021-11-10T08:18:00.000Z"
            },
            "isFavorited": false,
            "isLiked": false
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
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Ms. Dion Rau",
            "tel": "702.648.0946 x9065",
            "address": "473 Cormier Centers",
            "opening_hours": "08:00",
            "description": "Accusantium cupiditate eveniet dolorum.\nTemporibus",
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
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Patrick Tillman",
            "tel": "(093) 872-8210 x03467",
            "address": "9854 Raegan Ville",
            "opening_hours": "08:00",
            "description": "Eligendi excepturi consequatur ut id non dolores. ",
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
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Richard Sauer",
            "tel": "(508) 630-4696",
            "address": "665 Bernhard Falls",
            "opening_hours": "08:00",
            "description": "Neque impedit rerum rem libero. Corporis unde iure",
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
            },
            "isFavorited": false,
            "isLiked": false
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
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Dr. Wiley Medhurst",
            "tel": "441-162-0953",
            "address": "5039 Vidal Lodge",
            "opening_hours": "08:00",
            "description": "Maxime aspernatur nihil fugiat molestias rerum ips",
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
            },
            "isFavorited": false,
            "isLiked": false
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
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Ethyl Bins",
            "tel": "145.370.8878 x955",
            "address": "29802 Sanford Green",
            "opening_hours": "08:00",
            "description": "Officiis qui optio eos consequatur qui et similiqu",
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
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Dr. Gerald McClure",
            "tel": "(267) 489-2234",
            "address": "5914 Carrie Crescent",
            "opening_hours": "08:00",
            "description": "Dolore quos necessitatibus excepturi eius adipisci",
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
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2021-11-10T08:18:00.000Z",
            "updatedAt": "2021-11-10T08:18:00.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  components: {
    NavTabs,
    RestaurantCard
  },
  data() {
    return{
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  methods: {
    fetchRestaurants() {
      const { restaurants, categories, categoryId, page, totalPage, prev, next} = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  },
  created() {
    this.fetchRestaurants()
  }
}
</script>