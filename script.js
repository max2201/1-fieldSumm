const addition=()=>{
    const a = +document.getElementById('first-number').value;
    const b = +document.getElementById('second-number').value;
    const c = a + b;
    alert(`Результат:\n${+c.toFixed(10)}`);
}
