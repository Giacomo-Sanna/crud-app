import http from '../http-common';

class ActivityDataService {
  getAll() {
    return http.get('/activities');
  }

  get(id) {
    return http.get(`/activities/${id}`);
  }

  create(data) {
    return http.post('/activities', data);
  }

  update(id, data) {
    return http.put(`/activities/${id}`, data);
  }

  delete(id) {
    return http.delete(`/activities/${id}`);
  }

  getByCommissionName(commissionName) {
    if (parseInt(commissionName) === -1)
      return this.getAll();
    else
      return http.get(
          `/activities/byCommissionName?commissionName=${commissionName}`);
  }
}

export default new ActivityDataService();