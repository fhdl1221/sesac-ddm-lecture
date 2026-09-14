const cart = ["키보드", "마우스"];

const updatedCart = [...cart, "모니터"];

const order = {
    id: 1,
    status: "결제 대기",
};

const completedOrder = {
    ...order,
    status: "결제 완료",
};

function getTotal(...price) {
    let total = 0;
    for (const num of price) {
        total += num;
    }
    return total;
}
console.log(updatedCart);
console.log(order);
console.log(completedOrder);
console.log(getTotal(50000, 30000, 200000));
