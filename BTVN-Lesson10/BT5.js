// Bài tập 5 – Tính tích các phần tử (2 điểm)
// Viết hàm multiplyArray nhận vào một mảng số và trả về tích của tất cả các phần tử trong mảng. Nếu mảng rỗng, trả về 1.

// // Sample usage print(multiplyArray([2, 3, 4])); // 24 print(multiplyArray([5, 2, 3])); // 30 print(multiplyArray([])); // 1

function multiplyArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

console.log(multiplyArray([2, 3, 4])); // 24
console.log(multiplyArray([5, 2, 3])); // 30
console.log(multiplyArray([])); // 1
