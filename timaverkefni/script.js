function checkCharacter() {
  console.log("Check character");
  // 1. Ná í name, age og score
  // 2. Breyta age og score í Number
  let name = document.getElementById("name").value;
  let age = Number(document.getElementById("age").value);
  let score = Number(document.getElementById("score").value);

  // 3. Ef eitthvað vantar → sýna villu

  if (isNaN(age) || age === 0) {
    document.getElementById("output").innerText = "Sláðu inn aldur";
    return;
  }

  if (name === "") {
    document.getElementById("output").innerText = "Vantar nafn!";
    return;
  }

  // 4. Nota if / else:
  // ef age < 18 skila þá "Of ung/ur til að spila"
  // ef score > 80 og age >= 18 "Pro"
  // ef score > 50 en < 80 "Normal"
  // annars skila "Beginner"

  let message = "";
  if (age < 18) {
    message = "Of ungur til að spila";
  } else if (score > 80 && age >= 18) {
    message = "Pro Player";
  } else if (score > 50 && score < 80) {
    message = "Normal Player";
  } else {
    message = "Beginner Noob";
  }
  // 5. Sýna niðurstöðu í output

  document.getElementById("output").innerText = message;
}
