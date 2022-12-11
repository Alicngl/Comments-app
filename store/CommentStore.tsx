import { makeAutoObservable, runInAction, values } from "mobx";
import axios from "axios";

class CommentStore {
  data: any;
  constructor() {
    makeAutoObservable(this);
  }

  setComment(value: any) {
    console.log(value, "value");
    axios.post("http://localhost:8000/CommentList", value).then((res) => {
      console.log(res.data, "res");
    });
  }
  getComment() {
    axios.get("http://localhost:8000/CommentList").then((res) => {
      this.data = res.data;

      console.log(res.data, "ahdsfaljhsdfl");
    });
  }
}
export default new CommentStore();
