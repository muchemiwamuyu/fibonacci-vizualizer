
/**
 * Input field for user to enter number.
 * @type {HTMLInputElement}
 */
const fibNumberInput = document.getElementById('fibInput');

/**
 * Button to trigger Fibonacci generation.
 * @type {HTMLButtonElement}
 */
const generateSequenceBtn = document.getElementById('generateBtn');

/**
 * Output container for visualized Fibonacci numbers.
 * @type {HTMLElement}
 */
const fibResult = document.getElementById('output');

/**
 * Generate a Fibonacci sequence up to n terms.
 *
 * @param {number} n - Number of Fibonacci terms to generate.
 * @returns {number[]} Array containing the Fibonacci sequence.
 */
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
  fibResult.innerHTML = sequence
    .map(num => `<span class="inline-block bg-indigo-500 text-white px-3 py-1 rounded-full m-1">${num}</span>`)
    .join('');
});
