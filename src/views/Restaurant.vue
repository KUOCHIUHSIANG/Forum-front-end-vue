<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments" @after-delete-comment="afterDeleteComment" />
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'

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
    updatedAt: "2021-11-13T06:35:44.885Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
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
    ],
  },
  isFavorited: false,
  isLiked: false,
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: []
    }
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }

      this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment (payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
      console.log(this.restaurantComments)
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  }
};
</script>