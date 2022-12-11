import { makeAutoObservable, runInAction, values } from "mobx";
import axios from "axios";

class CommentStore {
  constructor() {
    makeAutoObservable(this);
  }

  setComment(value: any) {
    console.log(value, "value");
    axios.post("http://localhost:8000/CommentList", value).then((res) => {
      console.log(res.data, "res");
    });
  }
}
export default new CommentStore();
