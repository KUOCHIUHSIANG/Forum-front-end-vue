<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div v-for="restaurant in restaurants" :key="restaurant.id" class="card mb-3" style="max-width: 540px; margin: auto">
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image | emptyImage"
            />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> {{ restaurant.name }}</h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }" class="btn btn-primary mr-2">Show</router-link>

            <button v-if="restaurant.isFavorited" @click.stop.prevent="deleteFavorite(restaurant)" type="button" class="btn btn-danger mr-2">移除最愛</button>
            <button v-else @click.stop.prevent="addFavorite(restaurant)" type="button" class="btn btn-primary">加到最愛</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import { emptyImageFilter } from '../utils/mixins';

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Bulah Schumm",
      tel: "(436) 018-0374 x61925",
      address: "6586 Abernathy Curve",
      opening_hours: "08:00",
      description: "ut ex rerum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.390253654065248",
      viewCounts: 1,
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-13T06:35:44.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 22,
      name: "Celia Hansen",
      tel: "284.863.9099",
      address: "99864 Carolyne Lodge",
      opening_hours: "08:00",
      description: "Quasi voluptatem omnis vero dolore aut assumenda. ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=23.137093670227248",
      viewCounts: 0,
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 23,
      name: "Conrad Buckridge",
      tel: "302-674-0331",
      address: "3408 Murphy Underpass",
      opening_hours: "08:00",
      description: "Iure dolorum quam magnam architecto est nostrum qu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=87.84688162487338",
      viewCounts: 0,
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 24,
      name: "Elwyn Zemlak",
      tel: "1-710-763-7621",
      address: "097 Korbin Estate",
      opening_hours: "08:00",
      description: "temporibus iste amet",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.59667720662827",
      viewCounts: 0,
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 25,
      name: "Danika Stamm",
      tel: "1-703-401-4426",
      address: "009 Kuphal Meadow",
      opening_hours: "08:00",
      description: "commodi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.792912002465656",
      viewCounts: 0,
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 21,
      name: "Abraham Ward",
      tel: "495.664.8662",
      address: "7954 Jakubowski Land",
      opening_hours: "08:00",
      description: "Est excepturi aut aut amet praesentium. Fugiat ass",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.30221362659534",
      viewCounts: 0,
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 27,
      name: "Agustina Abernathy",
      tel: "945-617-3036 x5969",
      address: "1572 Lue Coves",
      opening_hours: "08:00",
      description: "Et incidunt quo necessitatibus molestias cupiditat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.2777837888069632",
      viewCounts: 0,
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 28,
      name: "Reva Lebsack",
      tel: "188.667.6402",
      address: "59247 Ransom Mountain",
      opening_hours: "08:00",
      description: "Odit similique assumenda nihil eos voluptatem adip",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.33069811039342",
      viewCounts: 0,
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 29,
      name: "Grant Lind",
      tel: "1-620-031-6142 x72954",
      address: "7327 Hirthe River",
      opening_hours: "08:00",
      description: "Deserunt quod sint inventore voluptas animi eos ea",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=73.29604365812763",
      viewCounts: 0,
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 30,
      name: "Miss Willard Jacobson",
      tel: "574.815.7668 x5880",
      address: "87256 Lillian Expressway",
      opening_hours: "08:00",
      description: "Perferendis aut nobis asperiores voluptate autem p",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.63283150884172",
      viewCounts: 0,
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: []
    }
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    addFavorite(restaurant) {
      restaurant.isFavorited = true
    },
    deleteFavorite(restaurant) {
      restaurant.isFavorited = false
    }
  },
  created() {
    this.fetchRestaurants()
  }
};
</script>