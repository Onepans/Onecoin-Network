function sendCoin() {
  const recipient = prompt("أدخل عنوان المستلم:");
  const amount = prompt("أدخل كمية ONE لإرسالها:");

  if (recipient && amount) {
    alert(`جاري إرسال ${amount} ONE إلى العنوان:\n${recipient}\n\n(تنبيه: هذا نموذج وهمي للعرض فقط)`);
  } else {
    alert("يجب إدخال كل من العنوان والكمية.");
  }
}

function receiveCoin() {
  const myAddress = document.getElementById("walletAddress").value;
  alert(`استخدم العنوان التالي لاستلام العملة:\n${myAddress}`);
}
