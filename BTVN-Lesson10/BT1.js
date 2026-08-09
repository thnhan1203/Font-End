// Bài tập 1 – Đảo vị trí phần tử (2 điểm)
// Viết hàm swapFirstLast nhận vào một mảng và trả về mảng mới sau khi đổi chỗ phần tử đầu tiên và phần tử cuối cùng. Nếu mảng có ít hơn 2 phần tử, giữ nguyên mảng.

// // Sample usage
// console.log(swapFirstLast([1, 2, 3, 4, 5])); // [5, 2, 3, 4, 1]
// console.log(swapFirstLast(["a", "b", "c"])); // ["c", "b", "a"]
// console.log(swapFirstLast([10])); // [10]

function swapFirstLast(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let newArr = [...arr];
    let first = newArr[0];
    newArr[0] = newArr[newArr.length - 1];
    newArr[newArr.length - 1] = first;
    return newArr;
}

console.log(swapFirstLast([1, 2, 3, 4, 5])); // [5, 2, 3, 4, 1]
console.log(swapFirstLast(["a", "b", "c"])); // ["c", "b", "a"]
console.log(swapFirstLast([10])); // [10]