export default function LightSwitch() {
  const handleClick = () => {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  };

  return <button onClick={handleClick}>Işıkları değiştir</button>;
}
