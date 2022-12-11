import { makeAutoObservable, runInAction, values } from "mobx";

class CommentStore {
  constructor() {
    makeAutoObservable(this);
  }

  setComment(value: any) {
    console.log(value, "value");
  }
}
export default new CommentStore();
