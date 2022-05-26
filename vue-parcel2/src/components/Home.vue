<template>
  <div class="p-3 vue-app">
    <h1 class="h1-vue">Some other app parcel</h1>
    <h1 class="h1-vue">GxP ☑</h1>

    <div>
      <table>
    <thead>
      <tr>
        <th>Error ID</th>
        <th>Impacted items</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in filteredRows" :key="`employee-${index}`">
        <td v-html="highlightMatches(row.department)"></td>
        <td v-html="highlightMatches([...row.employees].sort().join(', '))"></td>
      </tr>
    </tbody>
  </table>

  <input type="text" placeholder="Filter by item or error description" v-model="filter" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props:['domElement','fart'],
  data() {
    return {
      filter: "",
    rows: [
      { department: "D-1234", employees: ["B1234", "B1232", "B123x"] },
      {
        department: "D-1235",
        employees: ["B1237", "B1232", "B123y"]
      },
      {
        department: "D-1236",
        employees: ["B1237", "B1222", "B1222"]
      },
      {
        department: "D-1237",
        employees: ["B1236", "B123w", "B12375"]
      }
    ]
    }
  },
  mounted() {
          console.log(this.fart)

  },
  methods: {
     highlightMatches(text) {
      const matchExists = text
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, "ig");
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
    }
  },
    computed: {
    filteredRows() {
      return this.rows.filter(row => {
        const employees = row.employees.toString().toLowerCase();
        const department = row.department.toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return (
          department.includes(searchTerm) || employees.includes(searchTerm)
        );
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .vue-app {
    border-style: solid;
    border-width: 3px;
    border-color: green;
    display: inline-block;
  }
  
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #dddddd;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 25px;
}

</style>