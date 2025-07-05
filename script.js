const fibNumberInput = document.getElementById('fibInput');
const generateSequenceBtn = document.getElementById('generateBtn');
const fibResult = document.getElementById('output');

function fibonacci_sequence(n) {
  const seq = [0, 1];

  if (n <= 0) return [];
  if (n === 1) return [0];

  for (let i = 2; i < n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }

  return seq;
}

/**
 * Event listener for the "Generate Sequence" button.
 * Gets input value, validates it, generates the sequence,
 * and renders it visually into the DOM.
 */
generateSequenceBtn.addEventListener('click', () => {
  const n = parseInt(fibNumberInput.value);
  if (isNaN(n) || n <= 0) {
    fibResult.innerHTML = `<p class="text-red-500 font-semibold">Enter a valid number greater than 0</p>`;
    return;
  }

  const sequence = fibonacci_sequence(n);
  fibResult.innerHTML = ''; // Clear previous

  const max = Math.max(...sequence); // For scaling height

  sequence.forEach((num, i) => {
    const bar = document.createElement('div');
    const label = document.createElement('div');

    // Bar container
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col items-center';

    // Bar element
    bar.className =
      `bg-indigo-500 w-6 rounded-t transition-all duration-300`;
    bar.style.height = `${(num / max) * 200}px`; // scaled height

    // Label element
    label.className = 'text-sm text-white mt-2';
    label.innerText = num;

    wrapper.appendChild(bar);
    wrapper.appendChild(label);

    fibResult.appendChild(wrapper);
  });
});

