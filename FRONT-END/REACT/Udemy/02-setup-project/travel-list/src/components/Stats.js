export default function Stats({ items }) {
  if (!items || items.length === 0)
    return (
      <footer className="stats">
        <p>Start adding some items to your packing list 🚀</p>
      </footer>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <p>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `  💼 You Have ${numItem} items on your list. and you already packed ${"  "}
        ${numPacked}(${percentage}%)`}
      </p>
    </footer>
  );
}
