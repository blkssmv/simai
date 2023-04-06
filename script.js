class Component {
  generateElement(template, displayParams, modifiers, textValues, events) {
    // Создание элемента
    const element = document.createElement("button");

    // Применение параметров отображения
    for (const [key, value] of Object.entries(displayParams)) {
      element.style[key] = value;
    }

    // Применение модификаторов
    for (const [key, value] of Object.entries(modifiers)) {
      element.classList.add(`${template}-${key}-${value}`);
    }

    // Добавление текстовых значений
    element.innerText = textValues;

    // Применение событий
    for (const [key, value] of Object.entries(events)) {
      element.addEventListener(key, value);
    }

    return element;
  }
}

// Использования
const component = new Component();
const button = component.generateElement(
  "button",
  {
    color: "#fff",
    backgroundColor: "teal",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  { size: "small", rounded: true },
  "Generated button",
  { click: () => alert('SIMAI button clicked!') }
);
document.body.appendChild(button);
