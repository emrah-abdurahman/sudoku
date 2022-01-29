export function hello(name) {
  // console.log(`Hello ${name}`);
}

export function toggleTheme() {
  const themeTogglerLabel = document.querySelector("#theme-toggler__label");
  themeTogglerLabel.addEventListener("click", () => {
    if (themeTogglerLabel.checked) {
      // console.log("Nighttime");
    } else {
      // console.log("Daytime");
    }
  });
}
