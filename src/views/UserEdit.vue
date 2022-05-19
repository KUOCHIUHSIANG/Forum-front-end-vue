<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="profile.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
        v-if="profile.image"
        :src="profile.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">{{ isProcessing ? 'processing...' : 'Submit' }}</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Toast } from './../utils/helpers'
import usersAPI from './../apis/users'

export default {
  created() {
    const { id: userId } = this.$route.params
    if(userId.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
    this.setUserProfile()
  },
  data() {
    return {
      profile : {
        id: 0,
        name: '',
        image: ''
      },
      isProcessing: false
    }
  },
  methods: {
    setUserProfile() {
      const { id, name, image } = this.currentUser
      
      this.profile = {
        ...this.profile,
        id,
        name,
        image
      }
    },
    handleFileChange(e) {
      const { files } = e.target
      if (files.length === 0) {
        return
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.profile.image = imageURL
      }
    },
    async handleSubmit(e) {
      if(!this.profile.name) {
        Toast.fire({
          icon: 'warning',
          title: '請輸入名稱'
        })
        return
      }

      const form = e.target // <form>...</form>
      const formData = new FormData(form)

      try {
        this.isProcessing = true
        const { data } = await usersAPI.update({
          userId: this.profile.id,
          formData
        })

        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        
        this.$router.push({ name: 'user', params: { id: this.profile.id }})
      } catch (error) {
        this.isProcessing = false
        console.log('error', error);
        Toast.fire({
          icon: 'error',
          title: '無法修改資料，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser() {
      this.setUserProfile()
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params
    if(userId.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
    this.setUserProfile()
    next()
  }
};
</script>