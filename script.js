function sendCoin() {
  const recipient = document.getElementById("recipient").value;
  const amount = document.getElementById("amount").value;

  if (recipient && amount) {
    alert(`✅ تم إرسال ${amount} ONE إلى:\n${recipient}\n\n(ملاحظة: هذا عرض تجريبي فقط. لا يتم تنفيذ معاملة حقيقية)`);
  } else {
    alert("⚠️ الرجاء ملء كل الحقول قبل الإرسال.");
  }
}

function receiveCoin() {
  const myAddress = document.getElementById("walletAddress").value;
  alert(`استخدم هذا العنوان لاستلام عملاتك:\n${myAddress}`);
}
