const targetElement = document.querySelector("#issueListTitle")
const newItem = document.createElement("div")
const itemsAmount = document.getElementsByTagName("table")[0].nextElementSibling

let selectComponent = null
var index;

newItem.id = "select-filter-script-issues-slot"
newItem.style.padding = "1em"
newItem.style.outline = "rgb(6, 107, 177) 1px solid"

var selectHTML = '<select id="select-component"><option disabled>Select a component</option>';
var opciones = ["Today", "Yesterday", "2 days ago", "3 days ago", "4 days ago", "5 days ago", "6 days ago", "Last week"];
for (let component of opciones) {
  selectHTML += `<option value="${component}">${component}</option>`;
}
selectHTML += '</select><button id="clear-button">Clear</button>';

newItem.innerHTML = selectHTML;
console.log(newItem.innerHTML);
targetElement.insertAdjacentElement("afterend", newItem);

// Obtener todos los elementos <span> que cumplen las condiciones mencionadas
const spans = document.querySelectorAll('span.time-ago, span.original-date');

// Iterar sobre cada elemento <span> y comprobar si cumple las condiciones de tiempo
spans.forEach(span => {
  const text = span.textContent;

  // Obtener la fecha del texto utilizando una expresión regular
  const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{4})/;
  const dateMatch = text.match(dateRegex);
  let date = null;
  if (dateMatch) {
    date = new Date(dateMatch[1]);
  }
  span.dataset.date = date;
});

// Escuchar los cambios en el select y filtrar los elementos correspondientes
const select = document.querySelector('#select-component');
select.addEventListener('change', () => {
  const today = new Date();
  const selectedOption = select.options[select.selectedIndex].value;
  const spans = document.querySelectorAll('span.time-ago, span.original-date');
  let filteredSpans = [];
  if (selectedOption === 'Today') {
    filteredSpans = Array.from(spans).filter(span => {
      const text = span.textContent;
      if (text.includes('in a few seconds') || text.includes('in 14 minutes')) {
        return true;
      } else {
        const hours = getHoursFromText(text);
        return hours !== null && hours < 24;
        itemsAmount.innerHTML = `Showing ${filteredSpans.length} issues${selectedOption !== 'Select a component' ? ` for <b>component ${selectedOption}</b>` : ''}`;
      }
    });
  } else if (selectedOption === 'Yesterday') {
    filteredSpans = Array.from(spans).filter(span => {
      const text = span.textContent;
      const hours = getHoursFromText(text);
      return hours !== null && hours >= 24 && hours < 48;
      itemsAmount.innerHTML = `Showing ${filteredSpans.length} issues${selectedOption !== 'Select a component' ? ` for <b>component ${selectedOption}</b>` : ''}`;
    });
  } else if (selectedOption === '2 days ago') {
    filteredSpans = Array.from(spans).filter(span => {
      const text = span.textContent;
      return text.includes('2 days ago');
      itemsAmount.innerHTML = `Showing ${filteredSpans.length} issues${selectedOption !== 'Select a component' ? ` for <b>component ${selectedOption}</b>` : ''}`;
    });
  } else if (selectedOption === '3 days ago') {
    filteredSpans = Array.from(spans).filter(span => {
      const text = span.textContent;
      return text.includes('3 days ago');
      itemsAmount.innerHTML = `Showing ${filteredSpans.length} issues${selectedOption !== 'Select a component' ? ` for <b>component ${selectedOption}</b>` : ''}`;
    });
  } else if (selectedOption === '4 days ago') {
    filteredSpans = Array.from(spans).filter(span => {
      const text = span.textContent;
      return text.includes('4 days ago');
      itemsAmount.innerHTML = `Showing ${filteredSpans.length} issues${selectedOption !== 'Select a component' ? ` for <b>component ${selectedOption}</b>` : ''}`;
    });
  } else if (selectedOption === '5 days ago') {
    filteredSpans = Array.from(spans).filter(span => {
      const text = span.textContent;
      return text.includes('5 days ago');
      itemsAmount.innerHTML = `Showing ${filteredSpans.length} issues${selectedOption !== 'Select a component' ? ` for <b>component ${selectedOption}</b>` : ''}`;
    });
  } else if (selectedOption === '6 days ago') {
    filteredSpans = Array.from(spans).filter(span => {
      const text = span.textContent;
      return text.includes('6 days ago');
      itemsAmount.innerHTML = `Showing ${filteredSpans.length} issues${selectedOption !== 'Select a component' ? ` for <b>component ${selectedOption}</b>` : ''}`;
    });
  } else if (selectedOption === 'Last week') {
  filteredSpans = Array.from(spans).filter(span => {
    const text = span.textContent;
    const dateRegex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
    const dateMatch = text.match(dateRegex);
    if (dateMatch) {
      const month = dateMatch[1];
      const day = dateMatch[2];
      const year = dateMatch[3];
      const today = new Date();
      const weekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
      const spanDate = new Date(year, month - 1, day);
      return spanDate > weekAgo && spanDate <= today;
    } else {
      return false;
    }
    });

  }
  // Ocultar elementos no coincidentes
  Array.from(spans).forEach(span => {
    if (selectedOption !== 'Last week'){
    span.closest("tr").style.display = filteredSpans.includes(span) ? 'table-row' : 'none';
    itemsAmount.innerHTML = `Showing ${filteredSpans.length} issues${selectedOption !== 'Select a component' ? ` for <b>component ${selectedOption}</b>` : ''}`;
    }else {
    const text = span.textContent;
    const dateRegex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
    const dateMatch = text.match(dateRegex);
    if (dateMatch) {
      const month = dateMatch[1];
      const day = dateMatch[2];
      const year = dateMatch[3];
      const today = new Date();
      const weekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
      const spanDate = new Date(year, month - 1, day);
      if (spanDate > weekAgo && spanDate <= today) {
        span.parentElement.parentElement.style.display = 'block';
      } else {
        span.parentElement.parentElement.style.display = 'none';
      }
    } else {
      span.parentElement.parentElement.style.display = 'none';
    }
  }
  });
  const tableRows = document.querySelectorAll('#myTable tr');
  const selectComponent = document.getElementById('selectComponent');
  const itemsAmount = document.getElementById('itemsAmount');
  const clearButton = document.querySelector('#clear-button');
  clearButton.addEventListener('click', () => {
    Array.from(spans).forEach(span => {
      span.closest("tr").style.display = 'table-row';
    });
    itemsAmount.innerHTML = `Showing all ${spans.length} issues`;
  });

});

function getHoursFromText(text) {
  const regex = /(\d+) hours ago/;
  const match = text.match(regex);
  return match ? parseInt(match[1]) : null;
}
