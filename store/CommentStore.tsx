import { makeAutoObservable, runInAction, values } from "mobx";
import axios from "axios";

class CommentStore {
  constructor() {
    makeAutoObservable(this);
  }

  setComment(value: any) {

    axios.post("http://localhost:8000/CommentList", value).then((res) => {

    });
  }
  setAnswers(value: any) {


    axios.post("http://localhost:8000/answers", value).then((res) => {

    });
  }
}
export default new CommentStore();
