<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>


<script>
const dummyData = {
  restaurant: {
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
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Saepe earum neque voluptatem tempore eligendi aperiam eveniet.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-10T08:18:00.000Z",
        updatedAt: "2021-11-10T08:18:00.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$F/51ajI/72crcWFNCTLdleAlm51gnrBmTYkxsRhDmh2AVw7TaiXxK",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-10T08:18:00.000Z",
          updatedAt: "2021-11-10T08:18:00.000Z",
        },
      },
      {
        id: 51,
        text: "Natus dolorem sequi enim similique ea laboriosam.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-10T08:18:00.000Z",
        updatedAt: "2021-11-10T08:18:00.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$F/51ajI/72crcWFNCTLdleAlm51gnrBmTYkxsRhDmh2AVw7TaiXxK",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-10T08:18:00.000Z",
          updatedAt: "2021-11-10T08:18:00.000Z",
        },
      },
      {
        id: 101,
        text: "Deleniti eaque ut dolorum et quae soluta maxime voluptas vel.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-11-10T08:18:00.000Z",
        updatedAt: "2021-11-10T08:18:00.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$vEMn/13hstMM3LFiHVlHrelX0iYsn1/IBX8nDgftLcvoocj9h7rfq",
          isAdmin: true,
          image: null,
          createdAt: "2021-11-10T08:18:00.000Z",
          updatedAt: "2021-11-10T08:18:00.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        viewCounts: -1,
        commentsLength: -1
      }
    }
  },
  methods: {
    fetchDashboard() {
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        viewCounts: dummyData.restaurant.viewCounts,
        commentsLength: dummyData.restaurant.Comments.length
      }
    }
  },
  created() {
    this.fetchDashboard()
  }
};
</script>