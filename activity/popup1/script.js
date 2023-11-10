// script.js
document.getElementById('increase').addEventListener('click', () => {
    let quantity = document.getElementById('quantity');
    quantity.textContent = parseInt(quantity.textContent) + 1;
  });
  
  document.getElementById('decrease').addEventListener('click', () => {
    let quantity = document.getElementById('quantity');
    let newQuantity = parseInt(quantity.textContent) - 1;
    quantity.textContent = newQuantity > 0 ? newQuantity : 1;
  });
  
  document.getElementById('confirm-btn').addEventListener('click', () => {
    // 在这里处理确认兑换的逻辑
    alert('确认兑换');
  });
  
  document.getElementById('cancel-btn').addEventListener('click', () => {
    // 在这里处理取消操作的逻辑
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
  });
  