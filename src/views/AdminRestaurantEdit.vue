<template>
  <div class="container py-5">
    <AdminRestaurantForm :initial-restaurant="restaurant" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";

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
  },
};

export default {
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
    };
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)
      const { restaurant } = dummyData
      this.restaurant = {
        ...this.restaurant,
        id: restaurant.id,
        name: restaurant.name,
        categoryId: restaurant.CategoryId,
        tel: restaurant.tel,
        address: restaurant.address,
        description: restaurant.description,
        image: restaurant.image,
        openingHours: restaurant.opening_hours
      }
    },
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>
