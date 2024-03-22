import axios from "axios";

const instance = axios.create({
  baseURL: 'https://test-task-413207-default-rtdb.europe-west1.firebasedatabase.app/',
  timeout: 500,
})

const request = {
    getRecords() {
      return instance.get('records.json');
    },

    getRecord(name) {
      return instance.get(`records/${name}.json`)
    },

    addRecord (record) {
      return instance.post('records.json', record)
    },

    updateRecord(record) {
      const [name, carInfo] = record;
      return instance.patch(`records/${name}.json`, carInfo)
    },

    deleteRecord(name) {
      return instance.delete(`records/${name}.json`)
    }
}

export const { getRecord, getRecords, updateRecord, deleteRecord, addRecord } = request;
