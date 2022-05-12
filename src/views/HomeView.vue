<template>
  <div>
    <form @submit.prevent="newOrgSubmit" v-if="showForm">
      <div>
        <label for="name">Organisation Name</label>
        <div>
          <input class="text-black" type="text" placeholder="Organisation Name" v-model="newOrg.orgName" />
        </div>
      </div>
      <div class="mt-2">
        <button class="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400" type="submit">Save Org</button>
        <button class="ml-2 bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400" @click="showForm=false;showOrgList=true">Cancel</button>
      </div>
    </form>
    <div v-if="showOrgList">
      <p class="text-xl">Org List</p>
      <div class="mt-2">
        <button class="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400" @click="newOrg.parentOrgId=null;showForm=true;showOrgList=false">New High Level Org</button>
      </div>
      <div v-for="org in orgs" :key="org.name">
        {{ org.orgName }} <button class="text-xl bg-gray-300 p-1 hover:bg-gray-400 text-gray-700" @click="newOrg.parentOrgId = org._id;showForm=true;showOrgList=false">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      newOrg: {
        orgName: "",
        parentOrgId: null
      },
      orgs: [],
      showForm: false,
      showOrgList: true
    };
  },
  methods: {
    newOrgSubmit() {
      fetch('http://localhost:3333/api/v1/org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.newOrg)
      }).then().then(() => {
       
        this.showForm = false;
        this.showOrgList = true;
        
        fetch('http://localhost:3333/api/v1/org')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.orgs = data;
        })
      });
    }
  }
};
</script>
