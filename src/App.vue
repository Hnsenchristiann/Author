<template>
  <div id="nav" v-if="$route.name !== 'Login'">
    <Disclosure as="nav" class="bg-green-500" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <MenuAlt2Icon v-if="!open" class="text-gray-300 block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="text-gray-300 block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex-1 flex items-center justify-evenly sm:items-stretch sm:justify-start px-16">
            <div class="flex-none items-center text-gray-300">
              <button class='w-auto bg-green-600 hover:bg-green-500 rounded-lg shadow-xl font-medium text-white px-2 py-1' @click="$router.go(-1)">Back</button>
            </div>
            <div class="flex-shrink-0 flex items-center text-gray-300">
              {{$route.name}}
            </div>
            <div class="flex-none items-center text-gray-300" style="width: 54px">
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <router-link v-for="item in navigation" :key="item.name" :to="item.href" active-class="bg-gray-900 text-white" class="px-3 py-2 rounded-md text-sm font-medium" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton class="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <DotsVerticalIcon v-if="!open" class="text-gray-300 block h-6 w-6" aria-hidden="true" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" @click.prevent="logout">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
  <div class="bg-gray-700 text-gray-300">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { mapGetters } from 'vuex'
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuAlt2Icon, XIcon, DotsVerticalIcon, ChevronLeftIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Comic Details', href: '/details', current: false },
  { name: 'View Comic', href: '/view', current: false },
]
</script>

<script>
import User from "./apis/user";

export default{
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuAlt2Icon,
    XIcon,
  },
  props: ['test'],
  setup() {
    const open = ref(false)
    return {
      navigation,
      open,
    }
  },
  computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      })
    },
  data(){
      return {
          isLoggedIn: false
      };
  },
        mounted() {
            this.isLoggedIn = !!localStorage.getItem("token");
        },

  methods: {
      logout() {
          User.logout().then(() => {
              localStorage.removeItem("token");

              this.$router.push('signin')
          })
      }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav{
  position: relative;
  z-index: 98;
}
</style>
