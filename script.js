const byteSize = (str) => {
  // write your code here
	retrun new Blob([str]).size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
