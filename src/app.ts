const columnCounts = [5, 3, 0, 3];

function renderColumns(columnCounts: Array<number>) {
  const container = document.getElementById("container");

  if (!container) {
    return;
  }

  columnCounts.forEach((count, index) => {
    console.log("count", count);
    const column = document.createElement("div");
    column.className = "flex-1 bg-gray-100 p-2 overflow-y-auto";
    column.id = `column-${index}`;

    for (let i = 0; i < count; i++) {
      const div = document.createElement("div");
      div.className = "bg-blue-200 boder border-blue-500 p-4 mb-2 cursor move";
      div.textContent = `Column ${index + 1} - Div ${i + 1}`;
      column.appendChild(div);
    }

    container.appendChild(column);
  });
}

renderColumns(columnCounts);
