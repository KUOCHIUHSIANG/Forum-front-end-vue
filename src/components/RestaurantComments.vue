<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          type="button"
          class="btn btn-danger float-right"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user', params: { id : comment.User.id }}">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '../utils/mixins'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'


export default {
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  mixins: [fromNowFilter],
  methods: {
    async handleDeleteButtonClick(commentId) {
      const checkDelete = confirm('確定要刪除此評論嗎？')

      if(!checkDelete) {
        return
      } else {
        try {
          const { data } = await restaurantsAPI.deleteComment({ commentId })

          if(data.status !== 'success') {
            throw new Error(data.message)
          }
          // 觸發父層事件 - $emit('事件名稱', 傳遞的資料)
          this.$emit('after-delete-comment', commentId)
        } catch (error) {
          console.log('error', error);
          Toast.fire({
            icon: 'error',
            title: '無法刪除評論，請稍後再試'
          })
        }
      }
    }
  },
  computed: {
    ...mapState(['currentUser','isAuthenticated'])
  }
}
</script>