const form = document.getElementById('transaction-form');
const list = document.getElementById('transaction-list');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const description = document.getElementById('description').value.trim();
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;

  if (!description || !amount) {
    return;
  }

  const item = document.createElement('li');
  item.innerHTML = `<strong>${description}</strong> — ${category} • $${Number(amount).toFixed(2)}`;
  list.prepend(item);

  form.reset();
  document.getElementById('description').focus();
});
