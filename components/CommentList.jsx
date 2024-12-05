export default function CommentList({ foundObject }) {
  return (
    <ul>
      {foundObject.comment.map((comment) => {
        return (
          <li key={foundObject.slug}>
            <p>{comment}</p>
          </li>
        );
      })}
    </ul>
  );
}
