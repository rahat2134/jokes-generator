# Introduction Card React Component With Conditional Rendering

This React component, named `IntroCard`, is designed to display information about individuals based on a provided name input. It utilizes a predefined dataset of notable figures and searches for a match based on the input name. If a match is found, it generates an introduction card with details such as profile image, name, age, phone number, and profession.

## Component Structure

The `IntroCard` component consists of the following structure:

```jsx
import React from "react";
import "./IntroCard.css";

export default function IntroCard(input) {
  // Data array containing information about notable figures
  let data = [
    // List of individuals with profile, name, age, phone, and profession
    // ...
  ];
```
Loop through the data array to find a match based on the input name
```jsx
  for (let i = 0; i < data.length; i++) {
    // Check if the lowercase name includes the lowercase input name
    let s = data[i].name.toLowerCase();
    if (s.includes(input.Name.toLowerCase())) {
      // Extract information for the matching individual
      var name = data[i].name;
      var profile = data[i].Profile;
      var age = data[i].Age;
      var number = data[i].Phone;
      var profession = data[i].Profession;
      break; // Break the loop once a match is found
    }
  }
```
Render the introduction card with extracted information
  ```jsx
return (
    <div className="Parent">
      <div className="card">
        <img src={profile} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title">
            <b>{name}</b>
          </h1>
          <h2>Age: {age}</h2>
          <h2>Phone: {number}</h2>
          <h2>Profession: {profession}</h2>
        </div>
      </div>
    </div>
  );
}
```

## Styling

The styling for the component is defined in a separate CSS file named `IntroCard.css`. Here are the key styles:

```css
.Parent {
  margin-top: 10px;
}

.card {
  height: 750px;
  width: 600px;
  margin: auto;
  box-shadow: 10px 10px 10px black;
  border-color: #213555;
}

.card-img-top {
  height: 500px;
  width: 600px;
}

.card-body {
  text-align: center;
  background-color: #213555;
}

.card-title {
  text-shadow: 0px 0px 20px black, 0px 0px 20px gold;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: aliceblue;
}

h2 {
  color: #d8c4b6;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
```

## Usage in App Component

The `IntroCard` component is utilized in the `App` component as follows:

```jsx
import React from "react";
import "./App.css";
import IntroCard from "./Components/IntroCard";

function App() {
  return (
    <div className="App">
      <IntroCard Name="Modi" />
    </div>
  );
}

export default App;
```

The `App` component renders the `IntroCard` component and passes the name "Modi" as input.

