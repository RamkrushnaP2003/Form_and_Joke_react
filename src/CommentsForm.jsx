import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5,
  });

  function handleFormData(event) {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remark: "",
      rating: 5,
    });
  }

  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleFormData}
          type="text"
        />
        <br />
        <textarea
          placeholder="Add new Remark"
          name="remark"
          value={formData.remark}
          onChange={handleFormData}></textarea>
        <br />
        <input
          type="number"
          value={formData.rating}
          onChange={handleFormData}
          name="rating"
          placeholder="rating"
          min={1}
          max={5}
        />
        <br />
        <button>Add comment</button>
      </form>
    </div>
  );
}
