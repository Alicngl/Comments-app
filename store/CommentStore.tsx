import { makeAutoObservable, runInAction, values } from "mobx";
import axios from "axios";

class CommentStore {
  constructor() {
    makeAutoObservable(this);
  }

  setComment(value: any) {
    axios.post("http://localhost:8000/CommentList", value).then((res) => {});
  }
  setAnswers(value: any) {
    axios.post("http://localhost:8000/answers", value).then((res) => {});
  }
  putLike(value: any, id: any, x: any) {
    console.log(value, "LIKE");
    console.log(x, id, "XXXXXXXX");

    axios
      .put(`http://localhost:8000/CommentList/${id}`, {
        name: x.name,
        surname: x.surname,
        comment: x.comment,
        like: value,
        date: x.date,
      })
      .then((res) => {
        console.log(res.data, "PUT");
      });
  }
}
export default new CommentStore();
