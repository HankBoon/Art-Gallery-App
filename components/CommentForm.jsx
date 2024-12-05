export default function CommentForm({ artistArray }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // console.log(data);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="comment">Comment:</label>
      <input type="text" id="comment" name="comment"></input>
      <button type="submit">Add Comment</button>
    </form>
  );
}
