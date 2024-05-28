<template>
  <div class="container mx-auto p-4">
    <form @submit.prevent="fetchFlightSchedule" class="mb-4">
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">항공편종류 (Line Type):</label>
        <div class="mt-1">
          <label class="inline-flex items-center">
            <input type="radio" v-model="schLineType" value="D" class="form-radio text-indigo-600">
            <span class="ml-2">국내</span>
          </label>
          <label class="inline-flex items-center ml-4">
            <input type="radio" v-model="schLineType" value="I" class="form-radio text-indigo-600">
            <span class="ml-2">국제</span>
          </label>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">운행타입 (IO Type):</label>
        <div class="mt-1">
          <label class="inline-flex items-center">
            <input type="radio" v-model="schIOType" value="I" class="form-radio text-indigo-600">
            <span class="ml-2">도착</span>
          </label>
          <label class="inline-flex items-center ml-4">
            <input type="radio" v-model="schIOType" value="O" class="form-radio text-indigo-600">
            <span class="ml-2">출발</span>
          </label>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">공항코드 (Air Code):</label>
        <div class="mt-1">
          <label class="inline-flex items-center">
            <input type="radio" v-model="schAirCode" value="GMP" class="form-radio text-indigo-600">
            <span class="ml-2">GMP</span>
          </label>
          <label class="inline-flex items-center ml-4">
            <input type="radio" v-model="schAirCode" value="ICN" class="form-radio text-indigo-600">
            <span class="ml-2">ICN</span>
          </label>
          <label class="inline-flex items-center ml-4">
            <input type="radio" v-model="schAirCode" value="PUS" class="form-radio text-indigo-600">
            <span class="ml-2">PUS</span>
          </label>
        </div>
      </div>

      <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :disabled="!isFormValid">
        Search
      </button>
    </form>

    <div id="searchResult" class="overflow-x-auto">
      <table v-if="items.length" class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th v-for="key in tableHeaders" :key="key" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {{ key }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="item in items" :key="item.id">
            <td v-for="key in tableHeaders" :key="key" class="px-6 py-4 whitespace-nowrap">
              {{ item[key][0] }}
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else class="text-gray-500">No results found.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schLineType: '',
      schIOType: '',
      schAirCode: '',
      items: [],
      tableHeaders: []
    };
  },
  computed: {
    isFormValid() {
      return this.schLineType && this.schIOType && this.schAirCode;
    }
  },
  methods: {
    async fetchFlightSchedule() {
      const schStTime = "0000";
      const schEdTime = "2359";

      try {
        const endpoint = `http://localhost:8080/realtime?schLineType=${this.schLineType}&schIOType=${this.schIOType}&schAirCode=${this.schAirCode}&schStTime=${schStTime}&schEdTime=${schEdTime}`;
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("에러 발생");
        }

        const jsonData = await response.json();
        this.createTable(jsonData);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
        alert(`API 호출 중 오류 발생: ${error.message}`);
      }
    },
    createTable(data) {
      this.items = data.response.body[0].items[0].item;
      if (this.items.length) {
        this.tableHeaders = Object.keys(this.items[0]);
      }
    }
  },
  watch: {
    schLineType: 'checkFormValidity',
    schIOType: 'checkFormValidity',
    schAirCode: 'checkFormValidity'
  }
};
</script>

<style scoped>
/* Tailwind CSS는 이미 클래스 이름에 따라 스타일이 적용되므로 추가 스타일이 필요하지 않을 수 있습니다. */
</style>
