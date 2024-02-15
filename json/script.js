console.log("Hello");
// console.log(fetch("https://jsonplaceholder.typicode.com/posts"));
// fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
//   console.log(response)
// );

//fetching from remote file
const button = document.getElementById("butt");
button.addEventListener("click", async () => {
  const request = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(request);
    if (!response == 200) {
      throw new Error("Something is wrong");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
//fetching from local json file
const locatButton = document.getElementById("local");
locatButton.addEventListener("click", async () => {
  const filePath = "./user.json";
  try {
    const res = await fetch(filePath);
    if (!res == 200) {
      throw new Error("Something went wrong");
    }
    const localData = res.json();
    console.log(localData);
  } catch (error) {
    console.log(error);
  }
});
