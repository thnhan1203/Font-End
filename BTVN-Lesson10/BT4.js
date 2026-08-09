// Bài tập 4 – Thay thế phần tử (2 điểm)
// Viết hàm replaceValue nhận vào một mảng, một giá trị oldValue và một giá trị newValue. Hàm trả về mảng mới trong đó tất cả các phần tử có giá trị oldValue được thay thế bằng newValue.

// // Sample usage print(replaceValue([1, 2, 3, 2, 4], 2, 99)); // [1, 99, 3, 99, 4] print(replaceValue(["cat", "dog", "cat"], "cat", "bird")); // ["bird", "dog", "bird"]

function replaceValue(arr, oldValue, newValue) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === oldValue) {
            newArr.push(newValue);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(replaceValue([1, 2, 3, 2, 4], 2, 99)); // [1, 99, 3, 99, 4]
console.log(replaceValue(["cat", "dog", "cat"], "cat", "bird")); // ["bird", "dog", "bird"]
