<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin | renderAdmin('role') }}</td>
          <td>
            <button v-if=" currentUser.id !== user.id && currentUser.isAdmin " @click="toggleUserRole(user.id)" type="button" class="btn btn-link">{{ user.isAdmin | renderAdmin('action') }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'

const dummyUsers = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true,
  users: [
    {
      "id": 1,
      "name": "root",
      "email": "root@example.com",
      "password": "$2a$10$vEMn/13hstMM3LFiHVlHrelX0iYsn1/IBX8nDgftLcvoocj9h7rfq",
      "isAdmin": true,
      "image": null,
      "createdAt": "2021-11-10T08:18:00.000Z",
      "updatedAt": "2021-11-10T08:18:00.000Z"
    },
    {
      "id": 2,
      "name": "user1",
      "email": "user1@example.com",
      "password": "$2a$10$F/51ajI/72crcWFNCTLdleAlm51gnrBmTYkxsRhDmh2AVw7TaiXxK",
      "isAdmin": false,
      "image": null,
      "createdAt": "2021-11-10T08:18:00.000Z",
      "updatedAt": "2021-11-10T08:18:00.000Z"
    },
    {
      "id": 3,
      "name": "user2",
      "email": "user2@example.com",
      "password": "$2a$10$qFlU7osqmyJPIF0tMN9Dq.gLt3CoPYVJod71ch1EmSkzk4zSZI53i",
      "isAdmin": false,
      "image": null,
      "createdAt": "2021-11-10T08:18:00.000Z",
      "updatedAt": "2021-11-10T08:18:00.000Z"
    }
  ]
}
    
export default {
  created() {
    this.fetchUsers()
  },
  components: {
    AdminNav
  },
  data() {
    return {
      currentUser: dummyUsers.currentUser,
      users: []
    }
  },
  methods: {
    fetchUsers() {
      this.users = dummyUsers.users.map(user => {
        return {
          ...user
        }
      })
    },
    toggleUserRole(userId) {
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        } else {
          return user
        }
      })
    }
  },
  filters: {
    renderAdmin(bool, title) {
      if(title === 'role') {
        return bool ? "admin" : "user"
      } else if(title === 'action') {
        return bool ? "set as user" : "set as admin"
      }
    }
  }
}
</script>