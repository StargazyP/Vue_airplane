<template>
  <div class="container mx-auto p-4">
    <!-- <div>
      <h2 class="text-xl font-bold">Received Query Parameters</h2>
      <ul>
        <li>schLineType: {{ schLineType }}</li>
        <li>schIOType: {{ schIOType }}</li>
        <li>schAirCode: {{ schAirCode }}</li>
        <li>schStTime: {{ schStTime }}</li>
        <li>schEdTime: {{ schEdTime }}</li>
      </ul>
    </div> -->
    <div id="searchResult" class="overflow-x-auto mt-4">
      <table v-if="items.length" class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th v-for="key in tableHeaders" :key="key" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {{ key }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="item in items" :key="item.AIRFLN">
            <td v-for="key in tableHeaders" :key="key" class="px-6 py-4 whitespace-nowrap">
              {{ item[key] }}
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else-if="!isLoading" class="text-gray-500">No results found.</p>
      <p v-else class="text-gray-500">Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    schLineType: {
      type: String,
      required: true
    },
    schIOType: {
      type: String,
      required: true
    },
    schAirCode: {
      type: String,
      required: true
    },
    schStTime: {
      type: String,
      required: true
    },
    schEdTime: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      items: [],
      tableHeaders: [],
      isLoading: true
    };
  },
  methods: {
    async fetchFlightSchedule() {
      try {
        const endpoint = `http://localhost:8080/realtime?schLineType=${this.schLineType}&schIOType=${this.schIOType}&schAirCode=${this.schAirCode}&schStTime=${this.schStTime}&schEdTime=${this.schEdTime}`;
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Error occurred while fetching data");
        }

        const jsonData = await response.json();
        this.createTable(jsonData);
      } catch (error) {
        console.error('API call error:', error);
        alert(`Error occurred: ${error.message}`);
      } finally {
        this.isLoading = false;
      }
    },
    createTable(data) {
      this.items = Array.isArray(data) ? data : [data];
      if (this.items.length) {
        this.tableHeaders = Object.keys(this.items[0]);
      }
    }
  },
  mounted() {
    this.fetchFlightSchedule();
  }
};
</script>

<style scoped>
/* Tailwind CSS는 이미 클래스 이름에 따라 스타일이 적용되므로 추가 스타일이 필요하지 않을 수 있습니다. */
</style>
