// Bài tập 2 – Tìm vị trí phần tử (2 điểm)
// Viết hàm findIndex nhận vào một mảng và một giá trị target, trả về vị trí đầu tiên của target trong mảng. Nếu không tìm thấy, trả về -1.

// // Sample usage print(findIndex([10, 20, 30, 40], 30)); // 2 print(findIndex(["apple", "banana", "orange"], "banana")); // 1 print(findIndex([5, 8, 2, 9], 7)); // -1

function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex([10, 20, 30, 40], 30)); // 2
console.log(findIndex(["apple", "banana", "orange"], "banana")); // 1
console.log(findIndex([5, 8, 2, 9], 7)); // -1
