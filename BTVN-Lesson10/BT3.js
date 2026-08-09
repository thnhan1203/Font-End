// Bài tập 3 – Tách số chẵn và lẻ (2 điểm)
// Viết hàm separateEvenOdd nhận vào một mảng số nguyên và trả về một mảng gồm hai mảng con: mảng thứ nhất chứa các số chẵn và mảng thứ hai chứa các số lẻ.

// // Sample usage print(separateEvenOdd([1, 2, 3, 4, 5, 6])); // [[2, 4, 6], [1, 3, 5]] print(separateEvenOdd([10, 15, 22, 7])); // [[10, 22], [15, 7]]

function separateEvenOdd(arr) {
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return [even, odd];
}

console.log(separateEvenOdd([1, 2, 3, 4, 5, 6])); // [[2, 4, 6], [1, 3, 5]]
console.log(separateEvenOdd([10, 15, 22, 7])); // [[10, 22], [15, 7]]