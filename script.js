//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('output');

 
  const loadingRow = document.createElement('tr');
  loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
  tableBody.appendChild(loadingRow);

  const createPromise = (name) => {
    const time = (Math.random() * 2 + 1).toFixed(3); 
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name, time }), time * 1000); 
    });
  };

  const promises = [
    createPromise('Promise 1'),
    createPromise('Promise 2'),
    createPromise('Promise 3')
  ];

  const startTime = performance.now(); 
 
  Promise.all(promises).then((results) => {
    const totalTime = ((performance.now() - startTime) / 1000).toFixed(3); // Total time taken

   
    tableBody.innerHTML = '';

    
    results.forEach((result, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
      tableBody.appendChild(row);
    });

    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    tableBody.appendChild(totalRow);
  });
});
